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

    const pending = await prisma.pendingUser.findUnique({ where: { email } });
    if (!pending) {
      return NextResponse.json({ error: "Nenhum cadastro pendente para este e-mail." }, { status: 404 });
    }

    if (pending.attempts >= 5) {
      return NextResponse.json({ error: "Muitas tentativas. Solicite um novo código." }, { status: 429 });
    }

    const inputHash = createHash("sha256").update(code).digest("hex");
    const valid = pending.codeHash === inputHash;

    await prisma.pendingUser.update({
      where: { id: pending.id },
      data: { attempts: pending.attempts + 1 },
    });

    if (!valid) {
      return NextResponse.json({ error: "Código inválido." }, { status: 401 });
    }

    await prisma.user.create({
      data: {
        name: pending.name,
        email: pending.email,
        passwordHash: pending.passwordHash,
        emailVerified: true,
      },
    });

    await prisma.pendingUser.delete({ where: { id: pending.id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}