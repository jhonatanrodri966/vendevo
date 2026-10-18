const TOKEN = "APP_USR-7210318895944259-101815-25070206121d0e6d86df39ac425b572-3775863814";

async function testar() {
  // 1. Criar um usuário de teste (comprador)
  const userRes = await fetch("https://api.mercadopago.com/users/test_user", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ site_id: "MLB" }),
  });
  
  const userData = await userRes.json();
  console.log("Usuário criado:", userData);
  
  if (!userData.email) {
    console.log("Erro ao criar usuário de teste.");
    return;
  }

  // 2. Tentar criar a assinatura com o e-mail do usuário de teste
  const response = await fetch("https://api.mercadopago.com/preapproval", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      reason: "Assinatura Vendevo",
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 39.90,
        currency_id: "BRL",
      },
      back_url: "https://vendevo.vercel.app/dashboard/assinatura",
      payer_email: userData.email,
      status: "pending",
    }),
  });

  const data = await response.json();
  console.log("STATUS ASSINATURA:", response.status);
  console.log("RESPOSTA ASSINATURA:", JSON.stringify(data, null, 2));
}

testar();