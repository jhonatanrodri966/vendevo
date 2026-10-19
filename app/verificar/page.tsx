"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function VerifyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("E-mail verificado com sucesso! Faça login.");
      router.push("/login");
    } else {
      alert(data.error || "Código inválido.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <img src="/logo.png" alt="Vendevo" className="w-8 h-8 rounded-lg object-cover" />
          <span className="text-xl font-semibold">Vendevo</span>
        </Link>
        <h1 className="text-2xl font-bold mb-2">Verifique seu e-mail</h1>
        <p className="text-gray-400 mb-8">
          Enviamos um código de 6 dígitos para <strong>{email}</strong>.
        </p>

        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            maxLength={6}
            required
            placeholder="000000"
            className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-4 text-center text-2xl tracking-[0.5em] text-white focus:outline-none focus:border-emerald-500 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 text-black font-semibold py-3 rounded-lg hover:bg-emerald-400 transition disabled:opacity-50"
          >
            {loading ? "Verificando..." : "Verificar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Verificar() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white">Carregando...</div>}>
      <VerifyForm />
    </Suspense>
  );
}