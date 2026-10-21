import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "vendevo_secret_super_seguro_123");

const MAX_ATTEMPTS = 5;
const WINDOW_MINUTES = 15;

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

    if (!email || !password) {
      return NextResponse.json({ error: "Preencha todos os campos." }, { status: 400 });
    }

    const windowStart = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000);
    const attempts = await prisma.loginAttempt.count({
      where: { email, createdAt: { gte: windowStart } },
    });

    if (attempts >= MAX_ATTEMPTS) {
      const response = NextResponse.json(
        { error: "Muitas tentativas. Tente novamente em 15 minutos." },
        { status: 429 }
      );
      response.cookies.set("vendevo_login_blocked", "true", {
        httpOnly: true,
        maxAge: 60 * 15, // 15 minutos
        path: "/",
      });
      return response;
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      await prisma.loginAttempt.create({ data: { email, ip } });
      return NextResponse.json({ error: "E-mail ou senha incorretos." }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      await prisma.loginAttempt.create({ data: { email, ip } });
      return NextResponse.json({ error: "E-mail ou senha incorretos." }, { status: 401 });
    }

    if (!user.emailVerified) {
      return NextResponse.json({ error: "Por favor, verifique seu e-mail antes de entrar." }, { status: 403 });
    }

    await prisma.loginAttempt.deleteMany({ where: { email } });

    const token = await new SignJWT({ userId: user.id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(JWT_SECRET);

    const response = NextResponse.json({ success: true });
    response.cookies.set("vendevo_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    // Remove o cookie de bloqueio se o login der certo
    response.cookies.delete("vendevo_login_blocked");
    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}