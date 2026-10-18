import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { createHash } from "crypto";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export async function POST(req: NextRequest) {
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json({ error: "Dados incompletos." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return NextResponse.json({ error: "Usuário não encontrado." }, { status: 404 });

    const record = await prisma.emailVerificationCode.findFirst({
      where: { userId: user.id, usedAt: null, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: "desc" },
    });

    if (!record) {
      return NextResponse.json({ error: "Código expirado. Solicite um novo." }, { status: 400 });
    }

    if (record.attempts >= 5) {
      return NextResponse.json({ error: "Muitas tentativas. Solicite um novo código." }, { status: 429 });
    }

    const inputHash = createHash("sha256").update(code).digest("hex");
    const valid = record.codeHash === inputHash;

    await prisma.emailVerificationCode.update({
      where: { id: record.id },
      data: { attempts: record.attempts + 1, ...(valid ? { usedAt: new Date() } : {}) },
    });

    if (!valid) {
      return NextResponse.json({ error: "Código inválido." }, { status: 401 });
    }

    await prisma.user.update({ where: { id: user.id }, data: { emailVerified: true } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}