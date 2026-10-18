"use client";

import { useState, useEffect } from "react";

export default function Configuracoes() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [config, setConfig] = useState({
    agentName: "",
    companyName: "",
    segment: "",
    tone: "profissional e amigável",
    personality: "",
    isActive: false,
  });

  useEffect(() => {
    async function fetchConfig() {
      const res = await fetch("/api/configuracoes");
      if (res.ok) {
        const data = await res.json();
        setConfig(data);
      }
      setLoading(false);
    }
    fetchConfig();
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const res = await fetch("/api/configuracoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });

    if (res.ok) {
      alert("Configurações salvas com sucesso!");
    } else {
      alert("Erro ao salvar.");
    }
    setSaving(false);
  }

  if (loading) return <div className="text-white p-8">Carregando...</div>;

  return (
    <div className="space-y-8 text-white max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold">Configuração do Vendedor de IA</h1>
        <p className="text-gray-400 mt-2">Defina como sua IA vai se comportar no atendimento.</p>
      </div>

      <form onSubmit={handleSave} className="bg-[#111111] border border-white/10 p-8 rounded-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Nome do Vendedor</label>
            <input
              type="text"
              value={config.agentName}
              onChange={(e) => setConfig({ ...config, agentName: e.target.value })}
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none"
              placeholder="Ex: Lucas"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Nome da Empresa</label>
            <input
              type="text"
              value={config.companyName}
              onChange={(e) => setConfig({ ...config, companyName: e.target.value })}
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none"
              placeholder="Ex: Loja do Lucas"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Segmento</label>
          <input
            type="text"
            value={config.segment}
            onChange={(e) => setConfig({ ...config, segment: e.target.value })}
            className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none"
            placeholder="Ex: Moda, Eletrônicos, Cosméticos..."
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Tom de Voz</label>
          <select
            value={config.tone}
            onChange={(e) => setConfig({ ...config, tone: e.target.value })}
            className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none"
          >
            <option value="profissional e amigável">Profissional e Amigável</option>
            <option value="descontraído e divertido">Descontraído e Divertido</option>
            <option value="direto e objetivo">Direto e Objetivo</option>
            <option value="formal e corporativo">Formal e Corporativo</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Personalidade e Instruções</label>
          <textarea
            value={config.personality}
            onChange={(e) => setConfig({ ...config, personality: e.target.value })}
            rows={4}
            className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none"
            placeholder="Ex: Você é um vendedor simpático que adora ajudar. Sempre ofereça produtos complementares e nunca invente preços."
          />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <input
            type="checkbox"
            id="isActive"
            checked={config.isActive}
            onChange={(e) => setConfig({ ...config, isActive: e.target.checked })}
            className="w-5 h-5 accent-emerald-500"
          />
          <label htmlFor="isActive" className="text-sm text-gray-300">
            Ativar o vendedor de IA (ele só responde se estiver ativo)
          </label>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-emerald-500 text-black font-semibold py-3 rounded-lg hover:bg-emerald-400 transition disabled:opacity-50"
        >
          {saving ? "Salvando..." : "Salvar Configurações"}
        </button>
      </form>
    </div>
  );
}