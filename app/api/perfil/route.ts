import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

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

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });

  return NextResponse.json({ name: user.name, email: user.email });
}

export async function PUT(req: NextRequest) {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  const { name, email, password } = await req.json();

  // Objeto de atualização tipado corretamente
  const dataToUpdate: { name: string; email: string; passwordHash?: string } = { name, email };
  if (password && password.trim() !== "") {
    const passwordHash = await bcrypt.hash(password, 10);
    dataToUpdate.passwordHash = passwordHash;
  }

  try {
    await prisma.user.update({
      where: { id: userId },
      data: dataToUpdate,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Este e-mail já está em uso." }, { status: 400 });
  }
}