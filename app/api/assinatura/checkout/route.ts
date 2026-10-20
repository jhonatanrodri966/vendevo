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

    // Cria uma PREFERÊNCIA DE PAGAMENTO (Checkout Pro) avulsa, sem plano
    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            title: "Assinatura Vendevo - Teste",
            quantity: 1,
            currency_id: "BRL",
            unit_price: 1.00,
          },
        ],
        payer: {
          email: user.email,
        },
        back_urls: {
          success: "https://vendevo.vercel.app/dashboard/assinatura",
          failure: "https://vendevo.vercel.app/dashboard/assinatura",
          pending: "https://vendevo.vercel.app/dashboard/assinatura",
        },
        auto_return: "approved",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: `Erro MP: ${JSON.stringify(data)}` }, { status: 500 });
    }

    // Salva o ID da preferência no banco
    await prisma.subscription.upsert({
      where: { userId },
      create: {
        userId,
        status: "PENDING",
        pagarmeSubscriptionId: data.id,
      },
      update: {
        status: "PENDING",
        pagarmeSubscriptionId: data.id,
      },
    });

    // Retorna o link do checkout avulso
    return NextResponse.json({ url: data.init_point });
  } catch (error: any) {
    return NextResponse.json({ error: `Erro interno: ${error.message}` }, { status: 500 });
  }
}