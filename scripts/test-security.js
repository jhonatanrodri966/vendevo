const BASE_URL = "https://vendevo.vercel.app";

async function login(email, password) {
  const res = await fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(`Login falhou para ${email}`);
  const setCookie = res.headers.get("set-cookie");
  if (!setCookie) throw new Error("Cookie de sessão não retornado");
  return setCookie.split(";")[0];
}

async function criarProduto(cookie, name) {
  const res = await fetch(`${BASE_URL}/api/produtos`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Cookie: cookie },
    body: JSON.stringify({ name, priceCents: 1000 }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Criar produto falhou: ${JSON.stringify(data)}`);
  console.log(`Produto "${name}" criado com ID: ${data.id || "(ID não retornado!)"}`);
  return data;
}

async function testar() {
  console.log("=== Teste de IDOR: Produtos ===\n");

  const userA = { email: "teste-a@vendevo.com", password: "123456" };
  const userB = { email: "teste-b@vendevo.com", password: "123456" };

  try {
    const cookieA = await login(userA.email, userA.password);
    const cookieB = await login(userB.email, userB.password);

    console.log("Cookie A:", cookieA.substring(0, 40) + "...");
    console.log("Cookie B:", cookieB.substring(0, 40) + "...\n");

    const prodA = await criarProduto(cookieA, "Produto do A");
    const prodB = await criarProduto(cookieB, "Produto do B");

    console.log("\nID Produto A:", prodA.id);
    console.log("ID Produto B:", prodB.id, "\n");

    // 1. Visitante sem login tenta deletar produto do A
    let res = await fetch(`${BASE_URL}/api/produtos/${prodA.id}`, { method: "DELETE" });
    console.log(`[1] Visitante deletar produto A: ${res.status} ${res.status === 401 ? "✅ BLOQUEADO" : "❌ VULNERÁVEL"}`);

    // 2. Usuário B tenta deletar produto do A
    res = await fetch(`${BASE_URL}/api/produtos/${prodA.id}`, {
      method: "DELETE",
      headers: { Cookie: cookieB },
    });
    console.log(`[2] Usuário B deletar produto A: ${res.status} ${res.status === 404 ? "✅ BLOQUEADO" : "❌ VULNERÁVEL"}`);

    // 3. Usuário B tenta atualizar produto do A
    res = await fetch(`${BASE_URL}/api/produtos/${prodA.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Cookie: cookieB },
      body: JSON.stringify({ name: "Hackeado", priceCents: 1 }),
    });
    console.log(`[3] Usuário B atualizar produto A: ${res.status} ${res.status === 404 ? "✅ BLOQUEADO" : "❌ VULNERÁVEL"}`);

    // 4. Dono legítimo (A) deleta seu próprio produto
    res = await fetch(`${BASE_URL}/api/produtos/${prodA.id}`, {
      method: "DELETE",
      headers: { Cookie: cookieA },
    });
    console.log(`[4] Usuário A deletar seu próprio produto: ${res.status} ${res.ok ? "✅ PERMITIDO" : "❌ BLOQUEADO"}`);

    // 5. Dono legítimo (B) atualiza seu próprio produto
    res = await fetch(`${BASE_URL}/api/produtos/${prodB.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Cookie: cookieB },
      body: JSON.stringify({ name: "Produto do B atualizado", priceCents: 2000 }),
    });
    console.log(`[5] Usuário B atualizar seu próprio produto: ${res.status} ${res.ok ? "✅ PERMITIDO" : "❌ BLOQUEADO"}`);

    console.log("\n=== Fim dos testes ===");
  } catch (error) {
    console.error("Erro no teste:", error.message);
    process.exit(1);
  }
}

testar();