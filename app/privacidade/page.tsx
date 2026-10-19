import Link from "next/link";

export default function Privacidade() {
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
            <a href="#coleta" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">1. Informações que Coletamos</a>
            <a href="#uso" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">2. Como Usamos seus Dados</a>
            <a href="#compartilhamento" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">3. Compartilhamento de Dados</a>
            <a href="#seguranca" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">4. Segurança</a>
            <a href="#direitos" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">5. Seus Direitos (LGPD)</a>
            <a href="#cookies" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">6. Cookies</a>
            <a href="#contato" className="block text-sm text-gray-400 hover:text-emerald-400 py-1 transition-colors">7. Contato</a>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 max-w-3xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
            <div className="flex items-center gap-2 text-sm text-gray-400 bg-[#111111] border border-white/10 rounded-lg px-4 py-2 inline-flex">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Última atualização: 19 de Outubro de 2026
            </div>
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section id="coleta">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">01</span>
                Informações que Coletamos
              </h2>
              <p>Coletamos informações fornecidas por você no cadastro (nome, e-mail) e dados de uso da plataforma (conversas, produtos cadastrados).</p>
            </section>

            <section id="uso">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">02</span>
                Como Usamos suas Informações
              </h2>
              <p>Usamos seus dados para operar a plataforma, processar pagamentos, enviar notificações e melhorar o serviço.</p>
            </section>

            <section id="compartilhamento">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">03</span>
                Compartilhamento de Dados
              </h2>
              <p>Não vendemos seus dados. Compartilhamos apenas com parceiros essenciais (gateway de pagamento, API do WhatsApp, provedor de IA) para operar o serviço.</p>
            </section>

            <section id="seguranca">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">04</span>
                Segurança
              </h2>
              <p>Utilizamos criptografia para senhas e conexões seguras. No entanto, nenhum sistema é 100% invulnerável.</p>
            </section>

            <section id="direitos">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">05</span>
                Seus Direitos (LGPD)
              </h2>
              <p>Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail de contato.</p>
            </section>

            <section id="cookies">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">06</span>
                Cookies
              </h2>
              <p>Usamos cookies para manter sua sessão ativa. Você pode desabilitá-los no navegador, mas isso pode afetar a funcionalidade do site.</p>
            </section>

            <section id="contato" className="bg-[#111111] border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-sm">07</span>
                Contato
              </h2>
              <p>Para questões de privacidade: <a href="mailto:contato@vendevo.com.br" className="text-emerald-400 hover:text-emerald-300">contato@vendevo.com.br</a></p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}