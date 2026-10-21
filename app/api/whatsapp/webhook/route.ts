import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import OpenAI from "openai";
import crypto from "crypto";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function sendWhatsAppMessage(to: string, body: string) {
  const res = await fetch(
    `https://graph.facebook.com/v21.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: to,
        type: "text",
        text: { body: body },
      }),
    }
  );
  if (!res.ok) console.error("Erro ao enviar mensagem:", await res.text());
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === (process.env.WHATSAPP_VERIFY_TOKEN || "vendevo123")) {
    return new NextResponse(challenge, { status: 200 });
  }
  return new NextResponse("Forbidden", { status: 403 });
}

export async function POST(req: NextRequest) {
  try {
    // VALIDAÇÃO: verifica se a requisição é da Meta
    const signature = req.headers.get("x-hub-signature-256");
    const appSecret = process.env.WHATSAPP_APP_SECRET;

    if (signature && appSecret) {
      const body = await req.text();
      const expected = "sha256=" + crypto.createHmac("sha256", appSecret).update(body).digest("hex");

      if (signature !== expected) {
        return new NextResponse("Assinatura inválida", { status: 401 });
      }

      // Re-lê o body como JSON (já que o req.text() consumiu)
      const parsed = JSON.parse(body);
      if (parsed.object !== "whatsapp_business_account") {
        return new NextResponse("OK", { status: 200 });
      }

      const entry = parsed.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;
      const message = value?.messages?.[0];

      if (message && message.type === "text") {
        const fromPhone = message.from;
        const text = message.text.body;

        const user = await prisma.user.findFirst();
        if (user) {
          const config = await prisma.agentConfig.findUnique({ where: { userId: user.id } });
          if (config?.isActive) {
            const products = await prisma.product.findMany({ where: { userId: user.id } });
            const productContext = products.map(p => `- ${p.name}: R$ ${(p.priceCents/100).toFixed(2)}`).join("\n");

            const completion = await openai.chat.completions.create({
              model: "gpt-4o-mini",
              messages: [
                { role: "system", content: `Você é ${config.agentName}, da empresa ${config.companyName}. Tom de voz: ${config.tone}. Produtos disponíveis:\n${productContext}` },
                { role: "user", content: text }
              ]
            });

            const reply = completion.choices[0]?.message?.content || "Desculpe, não entendi.";
            await sendWhatsAppMessage(fromPhone, reply);
          }
        }
      }
    }

    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("OK", { status: 200 });
  }
}