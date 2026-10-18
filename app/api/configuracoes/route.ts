import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "vendevo_secret_super_seguro_123");

async function getUserId() {
  const cookieStore = await cookies();
  const token = cookieStore.get("vendevo_session")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload.userId as string;
  } catch {
    return null;
  }
}

export async function GET() {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  let config = await prisma.agentConfig.findUnique({ where: { userId } });
  
  if (!config) {
    config = await prisma.agentConfig.create({
      data: {
        userId,
        agentName: "Vendedor Vendevo",
        companyName: "",
        segment: "",
        tone: "profissional e amigável",
        personality: "",
        isActive: false,
      },
    });
  }

  return NextResponse.json(config);
}

export async function POST(req: NextRequest) {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  const data = await req.json();

  const config = await prisma.agentConfig.upsert({
    where: { userId },
    create: {
      userId,
      agentName: data.agentName || "Vendedor Vendevo",
      companyName: data.companyName,
      segment: data.segment,
      tone: data.tone,
      personality: data.personality,
      isActive: data.isActive,
    },
    update: {
      agentName: data.agentName,
      companyName: data.companyName,
      segment: data.segment,
      tone: data.tone,
      personality: data.personality,
      isActive: data.isActive,
    },
  });

  return NextResponse.json(config);
}