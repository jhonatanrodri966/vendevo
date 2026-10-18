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

    const subscription = await prisma.subscription.findUnique({
      where: { userId },
    });

    if (!subscription) {
      return NextResponse.json({ status: "NONE" });
    }

    return NextResponse.json(subscription);
  } catch (error) {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}