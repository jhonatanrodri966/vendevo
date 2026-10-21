import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { createHash } from "crypto";
import { sendVerificationEmail } from "@/app/lib/email/send-verification";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const MAX_REGISTERS_PER_IP = 3;
const WINDOW_MINUTES = 10;

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Preencha todos os campos." }, { status: 400 });
    }

    const windowStart = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000);
    const recentAttempts = await prisma.registerAttempt.count({
      where: {
        ip,
        createdAt: { gte: windowStart },
      },
    });

    if (recentAttempts >= MAX_REGISTERS_PER_IP) {
      return NextResponse.json(
        { error: "Muitas tentativas de cadastro. Tente novamente em 10 minutos." },
        { status: 429 }
      );
    }

    await prisma.registerAttempt.create({ data: { ip } });

    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return NextResponse.json({ error: "Este e-mail já está em uso." }, { status: 400 });
    }

    const pending = await prisma.pendingUser.findUnique({ where: { email } });
    if (pending) {
      return NextResponse.json({ error: "Já enviamos um código para este e-mail. Verifique sua caixa de entrada." }, { status: 429 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const codeHash = createHash("sha256").update(code).digest("hex");

    await prisma.pendingUser.create({
      data: {
        name,
        email,
        passwordHash,
        codeHash,
        expiresAt: new Date(Date.now() + 10 * 60000),
      },
    });

    const emailSent = await sendVerificationEmail(email, code);
    if (!emailSent) {
      return NextResponse.json({ error: "Erro ao enviar e-mail. Verifique o endereço." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}