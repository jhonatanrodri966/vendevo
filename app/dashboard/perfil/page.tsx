"use client";

import { useState, useEffect } from "react";

export default function Perfil() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    async function fetchUser() {
      // Puxa os dados do usuário logado
      const res = await fetch("/api/perfil");
      if (res.ok) {
        const data = await res.json();
        setFormData({ name: data.name, email: data.email, password: "" });
      }
      setLoading(false);
    }
    fetchUser();
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const res = await fetch("/api/perfil", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Dados atualizados com sucesso!");
      setFormData({ ...formData, password: "" }); // Limpa a senha após salvar
    } else {
      alert("Erro ao atualizar os dados.");
    }
    setSaving(false);
  }

  if (loading) return <div className="text-white p-8">Carregando...</div>;

  return (
    <div className="space-y-8 text-white max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold">Configurações da Conta</h1>
        <p className="text-gray-400 mt-2">Gerencie seus dados de acesso.</p>
      </div>

      <form onSubmit={handleSave} className="bg-[#111111] border border-white/10 p-8 rounded-2xl space-y-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Nome Completo</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">E-mail</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none"
            required
          />
        </div>

        <div className="pt-4 border-t border-white/10">
          <label className="block text-sm text-gray-400 mb-2">Nova Senha (deixe em branco para manter a atual)</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none"
            placeholder="••••••••"
            minLength={6}
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-emerald-500 text-black font-semibold py-3 rounded-lg hover:bg-emerald-400 transition disabled:opacity-50"
        >
          {saving ? "Salvando..." : "Salvar Alterações"}
        </button>
      </form>
    </div>
  );
}