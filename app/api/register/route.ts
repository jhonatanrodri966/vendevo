import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { createHash } from "crypto";
import { sendVerificationEmail } from "@/app/lib/email/send-verification";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Preencha todos os campos." }, { status: 400 });
    }

    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return NextResponse.json({ error: "Este e-mail já está em uso." }, { status: 400 });
    }

    const pending = await prisma.pendingUser.findUnique({ where: { email } });
    if (pending) {
      return NextResponse.json({ error: "Já enviamos um código para este e-mail. Verifique sua caixa de entrada." }, { status: 429 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    // Código de 6 dígitos numéricos
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