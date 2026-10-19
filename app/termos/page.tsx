import Link from "next/link";

export default function Termos() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <img src="/logo.png" alt="Vendevo" className="w-8 h-8 rounded-lg object-cover" />
          <span className="text-xl font-semibold">Vendevo</span>
        </Link>
        
        <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
        <p className="text-sm text-gray-400 mb-8">Última atualização: 19 de Outubro de 2026</p>

        <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1. Aceitação dos Termos</h2>
            <p>Ao acessar e usar a plataforma Vendevo, você concorda com estes Termos de Uso. Se não concordar, por favor, não utilize o serviço.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2. Descrição do Serviço</h2>
            <p>A Vendevo é uma plataforma de software como serviço (SaaS) que fornece um vendedor de inteligência artificial para atendimento e vendas via WhatsApp.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3. Conta do Usuário</h2>
            <p>Para usar o serviço, você deve criar uma conta, fornecendo informações precisas e mantendo a segurança da sua senha. Você é responsável por todas as atividades realizadas em sua conta.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4. Assinatura e Pagamento</h2>
            <p>O Vendevo é oferecido no plano de R$ 39,90/mês. O pagamento é processado por gateways parceiros. O não pagamento pode resultar na suspensão do serviço.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">5. Uso Aceitável</h2>
            <p>Você concorda em não usar a plataforma para atividades ilegais, envio de spam, assédio ou qualquer violação das políticas do WhatsApp.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">6. Cancelamento</h2>
            <p>Você pode cancelar sua assinatura a qualquer momento. O serviço continuará ativo até o fim do período já pago.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">7. Limitação de Responsabilidade</h2>
            <p>A Vendevo não se responsabiliza por danos indiretos decorrentes do uso da plataforma, incluindo perdas de lucro ou dados.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">8. Contato</h2>
            <p>Para dúvidas sobre estes termos, entre em contato pelo e-mail: <a href="mailto:contato@vendevo.com.br" className="text-emerald-400">contato@vendevo.com.br</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}