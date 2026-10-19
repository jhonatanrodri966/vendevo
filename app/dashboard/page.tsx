"use client";

import { useState, useEffect } from "react";

export default function DashboardHome() {
  const [stats, setStats] = useState({ conversations: 0, products: 0, whatsappStatus: "Desconectado" });

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/dashboard");
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Erro ao buscar estatísticas:", error);
      }
    }
    fetchStats();
  }, []);

  // Dados falsos só pro gráfico ter o que desenhar (visual de painel)
  const chartData = [20, 45, 30, 80, 50, 90, 60]; 
  const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Visão Geral</h1>
        <p className="text-gray-400 mt-2">Acompanhe o desempenho do seu vendedor de IA.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-gray-400">Conversas atendidas</p>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </div>
          </div>
          <p className="text-3xl font-bold">{stats.conversations}</p>
          <p className="text-xs text-gray-500 mt-2">{stats.conversations === 0 ? "Nenhuma conversa ainda" : "Conversas ativas"}</p>
        </div>

        <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-gray-400">Produtos cadastrados</p>
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
          </div>
          <p className="text-3xl font-bold">{stats.products}</p>
          <p className="text-xs text-gray-500 mt-2">{stats.products === 0 ? "Adicione seu primeiro produto" : "Produtos no catálogo"}</p>
        </div>

        <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-gray-400">Status do WhatsApp</p>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stats.whatsappStatus === "Conectado" ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-500"}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
          </div>
          <p className={`text-xl font-bold mt-2 ${stats.whatsappStatus === "Conectado" ? "text-emerald-400" : "text-yellow-500"}`}>{stats.whatsappStatus}</p>
          <p className="text-xs text-gray-500 mt-1">{stats.whatsappStatus === "Conectado" ? "Tudo certo!" : "Vá em configurações para conectar"}</p>
        </div>
      </div>

      {/* NOVO GRÁFICO AQUI */}
      <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">Desempenho de Vendas</h2>
            <p className="text-sm text-gray-400">Visão dos últimos 7 dias</p>
          </div>
        </div>
        
        <div className="flex items-end justify-between h-48 gap-2 pt-4">
          {chartData.map((value, index) => (
            <div key={index} className="flex flex-col items-center flex-1 gap-2 group">
              <div className="w-full bg-[#0A0A0A] rounded-t-md relative flex items-end justify-center h-full">
                <div 
                  className="w-full bg-emerald-500/20 group-hover:bg-emerald-500/40 transition-colors rounded-t-md"
                  style={{ height: `${value}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {value}
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-500">{days[index]}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}