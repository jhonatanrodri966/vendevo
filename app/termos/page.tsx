import Link from "next/link";

export default function Termos() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Vendevo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="text-xl font-semibold">Vendevo</span>
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Voltar para o site
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12 flex gap-12">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Nesta página</p>
            <a href="#aceitacao" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">1. Aceitação dos Termos</a>
            <a href="#descricao" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">2. Descrição do Serviço</a>
            <a href="#conta" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">3. Conta do Usuário</a>
            <a href="#pagamento" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">4. Assinatura e Pagamento</a>
            <a href="#uso" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">5. Uso Aceitável</a>
            <a href="#cancelamento" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">6. Cancelamento</a>
            <a href="#responsabilidade" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">7. Limitação de Responsabilidade</a>
            <a href="#contato" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">8. Contato</a>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 max-w-3xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Termos de Uso</h1>
            <div className="flex items-center gap-2 text-sm text-gray-400 bg-[#111111] border border-white/10 rounded-lg px-4 py-2 inline-flex">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Última atualização: 19 de Outubro de 2026
            </div>
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section id="aceitacao">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">01</span>
                Aceitação dos Termos
              </h2>
              <p>Ao acessar e usar a plataforma Vendevo, você concorda com estes Termos de Uso. Se não concordar, por favor, não utilize o serviço.</p>
            </section>

            <section id="descricao">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">02</span>
                Descrição do Serviço
              </h2>
              <p>A Vendevo é uma plataforma de software como serviço (SaaS) que fornece um vendedor de inteligência artificial para atendimento e vendas via WhatsApp.</p>
            </section>

            <section id="conta">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">03</span>
                Conta do Usuário
              </h2>
              <p>Para usar o serviço, você deve criar uma conta, fornecendo informações precisas e mantendo a segurança da sua senha. Você é responsável por todas as atividades realizadas em sua conta.</p>
            </section>

            <section id="pagamento">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">04</span>
                Assinatura e Pagamento
              </h2>
              <p>O Vendevo é oferecido no plano de R$ 39,90/mês. O pagamento é processado por gateways parceiros. O não pagamento pode resultar na suspensão do serviço.</p>
            </section>

            <section id="uso">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">05</span>
                Uso Aceitável
              </h2>
              <p>Você concorda em não usar a plataforma para atividades ilegais, envio de spam, assédio ou qualquer violação das políticas do WhatsApp.</p>
            </section>

            <section id="cancelamento">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">06</span>
                Cancelamento
              </h2>
              <p>Você pode cancelar sua assinatura a qualquer momento. O serviço continuará ativo até o fim do período já pago.</p>
            </section>

            <section id="responsabilidade">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">07</span>
                Limitação de Responsabilidade
              </h2>
              <p>A Vendevo não se responsabiliza por danos indiretos decorrentes do uso da plataforma, incluindo perdas de lucro ou dados.</p>
            </section>

            <section id="contato" className="bg-[#111111] border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">08</span>
                Contato
              </h2>
              <p>Para dúvidas sobre estes termos, entre em contato pelo e-mail: <a href="mailto:contato@vendevo.com.br" className="text-emerald-400 hover:text-emerald-300">contato@vendevo.com.br</a></p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}