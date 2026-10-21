"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [blocked, setBlocked] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (blocked) return;
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        window.location.href = "/dashboard";
      } else {
        if (res.status === 429) {
          setBlocked(true);
        }
        alert(data.error);
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="Vendevo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="text-xl font-semibold tracking-tight">Vendevo</span>
          </Link>
          <h1 className="text-2xl font-bold">Bem-vindo de volta</h1>
          <p className="text-gray-400 mt-2">Acesse sua conta para gerenciar seu vendedor de IA.</p>
        </div>

        <form onSubmit={handleLogin} className="bg-[#111111] border border-white/10 p-6 rounded-2xl space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={blocked}
              className={`w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors ${blocked ? "opacity-50 cursor-not-allowed" : ""}`}
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={blocked}
              className={`w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors ${blocked ? "opacity-50 cursor-not-allowed" : ""}`}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading || blocked}
            className={`w-full font-semibold py-3 rounded-lg transition-colors ${blocked ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-emerald-500 text-black hover:bg-emerald-400 disabled:opacity-50"}`}
          >
            {blocked ? "Bloqueado por segurança" : loading ? "Entrando..." : "Entrar"}
          </button>

          {blocked && (
            <p className="text-red-400 text-sm text-center mt-2">
              Muitas tentativas. Aguarde 15 minutos para tentar novamente.
            </p>
          )}
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Não tem uma conta? <Link href="/cadastro" className="text-emerald-400 hover:text-emerald-300">Criar conta grátis</Link>
        </p>
      </div>
    </div>
  );
}