"use client";

import { useState, useEffect } from "react";

export default function Conversas() {
  const [conversas, setConversas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConversas() {
      const res = await fetch("/api/conversas");
      if (res.ok) {
        const data = await res.json();
        setConversas(data);
      }
      setLoading(false);
    }
    fetchConversas();
  }, []);

  if (loading) return <div className="text-white p-8">Carregando...</div>;

  return (
    <div className="space-y-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Conversas</h1>
          <p className="text-gray-400 mt-2">Acompanhe o histórico de atendimentos do seu vendedor de IA.</p>
        </div>
      </div>

      {conversas.length === 0 ? (
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Nenhuma conversa ainda</h2>
          <p className="text-gray-400 mb-6 max-w-md">Conecte seu WhatsApp nas configurações para começar a receber conversas dos seus clientes.</p>
          <a href="/dashboard/configuracoes" className="text-emerald-400 font-medium hover:text-emerald-300">
            Ir para configurações
          </a>
        </div>
      ) : (
        <div className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0A0A0A] border-b border-white/10 text-gray-400">
              <tr>
                <th className="px-6 py-4 font-medium">Cliente</th>
                <th className="px-6 py-4 font-medium">Última mensagem</th>
                <th className="px-6 py-4 font-medium">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {conversas.map((c) => (
                <tr key={c.id} className="hover:bg-white/5 transition-colors cursor-pointer">
                  <td className="px-6 py-4 font-medium">{c.whatsappPhone}</td>
                  <td className="px-6 py-4 text-gray-400 truncate max-w-xs">{c.lastMessage || "—"}</td>
                  <td className="px-6 py-4 text-gray-500">{new Date(c.lastMessageAt).toLocaleDateString("pt-BR")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}