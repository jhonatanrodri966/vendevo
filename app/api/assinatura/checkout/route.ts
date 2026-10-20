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

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json({ error: "Pagamentos não configurados." }, { status: 500 });
    }

    // 1. Cria um plano de assinatura (sem payer_email)
    const planResponse = await fetch("https://api.mercadopago.com/preapproval_plan", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reason: "Plano Vendevo",
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: 39.90,
          currency_id: "BRL",
        },
        back_url: "https://vendevo.vercel.app/dashboard/assinatura",
      }),
    });

    const planData = await planResponse.json();

    if (!planResponse.ok) {
      return NextResponse.json({ error: `Erro MP Plano: ${JSON.stringify(planData)}` }, { status: 500 });
    }

    // 2. Salva o ID do plano no banco
    await prisma.subscription.upsert({
      where: { userId },
      create: {
        userId,
        status: "PENDING",
        pagarmeSubscriptionId: planData.id,
      },
      update: {
        status: "PENDING",
        pagarmeSubscriptionId: planData.id,
      },
    });

    // 3. Retorna o link do checkout para o cliente
    return NextResponse.json({ url: planData.init_point });
  } catch (error: any) {
    return NextResponse.json({ error: `Erro interno: ${error.message}` }, { status: 500 });
  }
}