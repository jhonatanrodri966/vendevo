import OpenAI from "openai";
import { prisma } from "@/app/lib/prisma";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const PLAN = {
  includedMessages: 1000,
  overagePriceCents: 8,
};

export async function enqueueAIResponse(userId: string, toPhone: string, incomingText: string) {
  const [config, products, subscription] = await Promise.all([
    prisma.agentConfig.findUnique({ where: { userId } }),
    prisma.product.findMany({ where: { userId, isAvailable: true } }),
    prisma.subscription.findUnique({ where: { userId } }),
  ]);

  if (!config?.isActive || subscription?.status !== "ACTIVE") return;

  const productContext = products
    .map((p) => `- ${p.name}: R$ ${(p.priceCents / 100).toFixed(2)} — ${p.description ?? ""}`)
    .join("\n");

  const systemPrompt = `Você é ${config.agentName}, vendedor da ${config.companyName ?? "empresa"}.
Tom: ${config.tone}. Personalidade: ${config.personality ?? "profissional e acolhedor"}.
NUNCA invente preços, estoques ou políticas. Use APENAS os dados abaixo.
Produtos:
${productContext || "Nenhum produto cadastrado."}
Se não souber responder, diga que vai encaminhar para um humano.`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: incomingText },
    ],
    max_tokens: 500,
    temperature: 0.7,
  });

  const reply = completion.choices[0]?.message?.content ?? "Desculpe, não consegui processar.";
  const tokensUsed = completion.usage?.total_tokens ?? 0;

  await sendWhatsAppMessage(toPhone, reply);

  const month = new Date().toISOString().slice(0, 7);
  const current = await prisma.usageRecord.findUnique({
    where: { userId_month: { userId, month } },
  });
  const isOverage = (current?.messagesSent ?? 0) >= PLAN.includedMessages;

  await prisma.usageRecord.upsert({
    where: { userId_month: { userId, month } },
    create: {
      userId,
      month,
      messagesSent: 1,
      aiTokensUsed: tokensUsed,
      overageMessages: isOverage ? 1 : 0,
    },
    update: {
      messagesSent: { increment: 1 },
      aiTokensUsed: { increment: tokensUsed },
      ...(isOverage ? { overageMessages: { increment: 1 } } : {}),
    },
  });
}

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
        to,
        type: "text",
        text: { body },
      }),
    }
  );
  if (!res.ok) console.error("WhatsApp send failed", res.status, await res.text());
}

// fix