"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Toast from "../Toast";

export default function Cadastro() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setToast({ message: "Conta criada! Verifique seu e-mail para ativar.", type: "success" });
        setTimeout(() => {
          router.push(`/verificar?email=${encodeURIComponent(email)}`);
        }, 2000);
      } else {
        setToast({ message: data.error || "Erro ao criar conta.", type: "error" });
      }
    } catch (error) {
      setToast({ message: "Erro ao conectar com o servidor.", type: "error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center p-6">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="Vendevo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="text-xl font-semibold tracking-tight">Vendevo</span>
          </Link>
          <h1 className="text-2xl font-bold">Crie sua conta</h1>
          <p className="text-gray-400 mt-2">Comece a vender no automático hoje mesmo.</p>
        </div>

        <form onSubmit={handleRegister} className="bg-[#111111] border border-white/10 p-6 rounded-2xl space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Seu nome</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="João Silva"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
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
              minLength={6}
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="Mínimo 6 caracteres"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-emerald-500 text-black font-semibold py-3 rounded-lg hover:bg-emerald-400 transition-colors disabled:opacity-50"
          >
            {loading ? "Criando conta..." : "Criar conta"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Já tem uma conta? <Link href="/login" className="text-emerald-400 hover:text-emerald-300">Fazer login</Link>
        </p>
      </div>
    </div>
  );
}