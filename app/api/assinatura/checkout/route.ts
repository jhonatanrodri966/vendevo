import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import Stripe from "stripe";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "vendevo_secret_super_seguro_123");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia" as any,
});

export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("vendevo_session")?.value;
    if (!token) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

    const { payload } = await jwtVerify(token, JWT_SECRET);
    const userId = payload.userId as string;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // SÓ CARTÃO POR ENQUANTO
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: "Assinatura Vendevo",
            },
            unit_amount: 100, // R$ 1,00 para teste
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: user.email,
      success_url: "https://vendevo.vercel.app/dashboard/assinatura?success=true",
      cancel_url: "https://vendevo.vercel.app/dashboard/assinatura?canceled=true",
    });

    await prisma.subscription.upsert({
      where: { userId },
      create: {
        userId,
        status: "PENDING",
        pagarmeSubscriptionId: session.id,
      },
      update: {
        status: "PENDING",
        pagarmeSubscriptionId: session.id,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: `Erro Stripe: ${error.message}` }, { status: 500 });
  }
}