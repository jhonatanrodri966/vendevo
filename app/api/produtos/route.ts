import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "vendevo_secret_super_seguro_123");

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("vendevo_session")?.value;
    
    if (!token) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    
    const { payload } = await jwtVerify(token, JWT_SECRET);
    const userId = payload.userId as string;

    const { name, description, priceCents, stock, imageUrl } = await req.json();

    if (!name || !priceCents) {
      return NextResponse.json({ error: "Nome e preço são obrigatórios." }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        userId,
        name,
        description,
        priceCents,
        stock: stock || 0,
        imageUrl: imageUrl || null,
      },
    });

    // RETORNA O PRODUTO CRIADO (com id)
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("vendevo_session")?.value;
    if (!token) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    
    const { payload } = await jwtVerify(token, JWT_SECRET);
    const userId = payload.userId as string;

    const produtos = await prisma.product.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(produtos);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}