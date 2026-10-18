import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "vendevo_secret_super_seguro_123");

export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("vendevo_session")?.value;
    if (!token) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

    const { payload } = await jwtVerify(token, JWT_SECRET);
    const userId = payload.userId as string;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });

    // Se não tiver chave do Pagar.me, retorna aviso
    if (!process.env.PAGARME_SECRET_KEY) {
      return NextResponse.json({ 
        error: "Pagamentos ainda não configurados. Configure PAGARME_SECRET_KEY no servidor." 
      }, { status: 500 });
    }

    // Aqui seria a chamada real pro Pagar.me
    // Por enquanto, retorna um aviso
    return NextResponse.json({ 
      error: "Integração com Pagar.me em configuração. Em breve disponível." 
    }, { status: 500 });

  } catch (error) {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}