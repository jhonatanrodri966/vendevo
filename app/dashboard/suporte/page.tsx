"use client";

import Link from "next/link";

export default function SuporteDashboard() {
  return (
    <div className="space-y-8 text-white">
      <div>
        <h1 className="text-3xl font-bold">Suporte</h1>
        <p className="text-gray-400 mt-2">Estamos aqui para ajudar você a vender mais com o Vendevo.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <a href="mailto:contato@vendevo.com.br" className="bg-[#111111] border border-white/10 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors group">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">E-mail</h2>
          <p className="text-sm text-gray-400 mb-4">Resposta em até 24 horas úteis.</p>
          <p className="text-emerald-400 font-medium">contato@vendevo.com.br</p>
        </a>

        <a href="#" className="bg-[#111111] border border-white/10 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors group">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">WhatsApp</h2>
          <p className="text-sm text-gray-400 mb-4">Atendimento em horário comercial.</p>
          <p className="text-emerald-400 font-medium">Em breve</p>
        </a>
      </div>

      <div className="bg-[#111111] border border-white/10 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Perguntas frequentes</h2>
        <div className="space-y-4">
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-medium mb-1">Como conectar meu WhatsApp?</h3>
            <p className="text-sm text-gray-400">Vá em Configurações no painel e siga o passo a passo para conectar seu número comercial.</p>
          </div>
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-medium mb-1">Posso cancelar quando quiser?</h3>
            <p className="text-sm text-gray-400">Sim. Não tem fidelidade. Você cancela em 1 clique e o serviço continua até o fim do mês pago.</p>
          </div>
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-medium mb-1">A IA realmente vende?</h3>
            <p className="text-sm text-gray-400">Sim. Ela apresenta seus produtos, tira dúvidas e conduz o cliente até o fechamento. Você só precisa aprovar a venda no final.</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">Meus dados estão seguros?</h3>
            <p className="text-sm text-gray-400">Sim. Usamos criptografia para senhas e conexões seguras. Seus dados não são vendidos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}