import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "vendevo_secret_super_seguro_123");

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("vendevo_session")?.value;
    if (!token) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

    const { payload } = await jwtVerify(token, JWT_SECRET);
    const userId = payload.userId as string;

    const [conversations, products, agentConfig] = await Promise.all([
      prisma.conversation.count({ where: { userId } }),
      prisma.product.count({ where: { userId } }),
      prisma.agentConfig.findUnique({ where: { userId } }),
    ]);

    const whatsappStatus = agentConfig?.isActive ? "Conectado" : "Desconectado";

    return NextResponse.json({
      conversations,
      products,
      whatsappStatus,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}