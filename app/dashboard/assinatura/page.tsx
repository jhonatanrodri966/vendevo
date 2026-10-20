"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function AssinaturaContent() {
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<any>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const success = searchParams.get("success");

  // Se voltou do Stripe com sucesso, avisa o servidor pra ativar a assinatura
  useEffect(() => {
    async function checkSuccess() {
      if (success === "true") {
        await fetch("/api/assinatura/confirmar", { method: "POST" });
        router.replace("/dashboard/assinatura"); // Limpa a URL
      }
      
      const res = await fetch("/api/assinatura");
      if (res.ok) {
        const data = await res.json();
        setSubscription(data);
      }
      setLoading(false);
    }
    checkSuccess();
  }, [success, router]);

  async function handleSubscribe() {
    setLoading(true);
    try {
      const res = await fetch("/api/assinatura/checkout", { method: "POST" });
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(`Erro do servidor: ${JSON.stringify(data)}`);
        setLoading(false);
      }
    } catch (error: any) {
      alert(`Erro na requisição: ${error.message}`);
      setLoading(false);
    }
  }

  if (loading) return <div className="text-white p-8">Carregando...</div>;

  return (
    <div className="space-y-8 text-white max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold">Assinatura</h1>
        <p className="text-gray-400 mt-2">Gerencie seu plano e pagamentos.</p>
      </div>

      <div className="bg-[#111111] border border-white/10 p-8 rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-400">Plano Atual</p>
            <p className="text-2xl font-bold mt-1">
              {subscription?.status === "ACTIVE" ? "Vendevo Pro" : "Nenhum plano ativo"}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            subscription?.status === "ACTIVE" ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-500"
          }`}>
            {subscription?.status === "ACTIVE" ? "Ativo" : "Inativo"}
          </span>
        </div>

        {subscription?.status === "ACTIVE" ? (
          <div className="space-y-4">
            <div className="flex justify-between text-sm border-t border-white/10 pt-4">
              <span className="text-gray-400">Valor mensal</span>
              <span className="font-medium">R$ 39,90</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Próxima cobrança</span>
              <span className="font-medium">
                {subscription.currentPeriodEnd ? new Date(subscription.currentPeriodEnd).toLocaleDateString("pt-BR") : "Em 30 dias"}
              </span>
            </div>
            <button className="w-full mt-4 bg-white/5 text-gray-300 font-medium py-3 rounded-lg hover:bg-white/10 transition">
              Gerenciar assinatura
            </button>
          </div>
        ) : (
          <div className="mt-6">
            <p className="text-gray-400 mb-6">Ative seu plano para começar a usar o vendedor de IA.</p>
            <button 
              onClick={handleSubscribe}
              className="w-full bg-emerald-500 text-black font-semibold py-3 rounded-lg hover:bg-emerald-400 transition"
            >
              Assinar por R$ 39,90/mês
            </button>
          </div>
        )}
      </div>

      <div className="bg-[#111111] border border-white/10 p-8 rounded-2xl text-center">
        <p className="text-sm text-gray-500">
          Pagamento processado com segurança pelo Stripe.
        </p>
      </div>
    </div>
  );
}

export default function Assinatura() {
  return (
    <Suspense fallback={<div className="text-white p-8">Carregando...</div>}>
      <AssinaturaContent />
    </Suspense>
  );
}