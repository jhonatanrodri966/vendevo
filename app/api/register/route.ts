import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { randomBytes, createHash } from "crypto";
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

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        emailVerified: false,
      },
    });

    const code = randomBytes(3).toString("hex").toUpperCase();
    const codeHash = createHash("sha256").update(code).digest("hex");

    await prisma.emailVerificationCode.create({
      data: {
        userId: user.id,
        email,
        codeHash,
        expiresAt: new Date(Date.now() + 10 * 60000),
      },
    });

    const emailSent = await sendVerificationEmail(email, code);

    if (!emailSent) {
      return NextResponse.json({ error: "Erro ao enviar e-mail de verificação." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}