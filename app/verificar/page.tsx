import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      {/* Grid de fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Vendevo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="text-xl font-semibold tracking-tight">Vendevo</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
            <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#precos" className="hover:text-white transition-colors">Preços</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Entrar
            </Link>
            <Link href="/cadastro" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              Criar conta
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Seu vendedor de IA, 24 horas por dia.
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] animate-fade-in-up delay-100">
            Venda pelo WhatsApp <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              no automático.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            A Vendevo configura um vendedor de inteligência artificial para o seu negócio. Ele atende seus clientes, apresenta seus produtos e fecha vendas enquanto você dorme.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link 
              href="/cadastro" 
              className="relative w-full sm:w-auto px-8 py-4 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-all duration-300 text-lg overflow-hidden group"
            >
              <span className="relative z-10">Começar agora</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-4">R$ 39,90/mês. Cancele quando quiser.</p>
          </div>
        </div>

        {/* Fake Chat Demo */}
        <div className="max-w-md mx-auto mt-20 relative animate-fade-in-up delay-300">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-[#111111] border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
              <img src="/logo.png" alt="Vendevo" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-medium text-sm">Vendedor Vendevo</p>
                <p className="text-xs text-emerald-400">Online agora</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <img 
                  src="/cliente.png" 
                  alt="Cliente" 
                  className="w-8 h-8 rounded-full flex-shrink-0 object-cover"
                />
                <div className="bg-[#1A1A1A] p-3 rounded-2xl rounded-tl-sm text-sm text-gray-300 max-w-[80%]">
                  Oi, vocês têm a camiseta preta no tamanho M?
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-2xl rounded-tr-sm text-sm text-gray-200 max-w-[80%]">
                  Olá! Temos sim. A camiseta básica preta custa R$ 59,90 e temos 3 unidades no tamanho M. Quer que eu reserve para você?
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section id="funcionalidades" className="py-24 bg-[#0F0F0F] border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo o que seu negócio precisa</h2>
            <p className="text-gray-400">Configuração em minutos. Sem precisar programar.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5 hover:border-white/10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Atendimento Humanizado</h3>
              <p className="text-sm text-gray-400">A IA conversa de forma natural, entende o contexto e responde dúvidas frequentes sem parecer um robô engessado.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5 hover:border-white/10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Vendas Automáticas</h3>
              <p className="text-sm text-gray-400">A IA conhece seus produtos, estoques e preços. Ela apresenta as opções e conduz o cliente até o fechamento da compra.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5 hover:border-white/10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Disponível 24/7</h3>
              <p className="text-sm text-gray-400">Sua loja nunca dorme. O vendedor de IA atende de madrugada, nos finais de semana e feriados, sem custo extra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
            <p className="text-gray-400">Em 3 passos simples, seu vendedor de IA está pronto.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2">Crie sua conta</h3>
              <p className="text-sm text-gray-400">Cadastre-se em menos de 1 minuto. Sem cartão de crédito.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2">Configure a IA</h3>
              <p className="text-sm text-gray-400">Diga o nome do vendedor, o tom de voz e cadastre seus produtos.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2">Ative e venda</h3>
              <p className="text-sm text-gray-400">Conecte seu WhatsApp e deixe a IA atender 24 horas por dia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precos" className="py-24 bg-[#0A0A0A] relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Um plano simples e justo</h2>
            <p className="text-gray-400">Sem taxas escondidas. Sem fidelidade.</p>
          </div>
          
          <div className="relative p-8 rounded-3xl bg-[#111111] border border-white/10 max-w-lg mx-auto text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
            <h3 className="text-xl font-semibold mb-2">Plano Único Vendevo</h3>
            <div className="flex items-baseline justify-center gap-1 mb-6">
              <span className="text-5xl font-bold">R$ 39,90</span>
              <span className="text-gray-400">/mês</span>
            </div>
            
            <ul className="text-left space-y-4 mb-8 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Até 1.000 conversas com IA por mês
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                1 número de WhatsApp conectado
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Produtos ilimitados cadastrados
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Configuração do tom de voz da IA
              </li>
            </ul>
            
            <Link href="/cadastro" className="block w-full py-4 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors">
              Criar minha conta
            </Link>
            <p className="text-xs text-gray-500 mt-4">Excedente: R$ 0,08 por conversa extra.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0F0F0F] border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas frequentes</h2>
            <p className="text-gray-400">Tire suas dúvidas antes de começar.</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-[#141414] border border-white/5 p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">A IA realmente vende?</h3>
              <p className="text-sm text-gray-400">Sim. Ela apresenta seus produtos, tira dúvidas e conduz o cliente até o fechamento. Você só precisa aprovar a venda no final.</p>
            </div>
            <div className="bg-[#141414] border border-white/5 p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">Preciso saber programar?</h3>
              <p className="text-sm text-gray-400">Não. A configuração é toda visual. Você só digita as informações da sua empresa e cadastra os produtos.</p>
            </div>
            <div className="bg-[#141414] border border-white/5 p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">E se a IA não souber responder?</h3>
              <p className="text-sm text-gray-400">Ela avisa que vai encaminhar para um atendente humano. Você recebe a notificação e assume a conversa.</p>
            </div>
            <div className="bg-[#141414] border border-white/5 p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">Posso cancelar quando quiser?</h3>
              <p className="text-sm text-gray-400">Sim. Não tem fidelidade. Você cancela em 1 clique e o serviço continua até o fim do mês pago.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-[#0A0A0A] relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Vendevo" className="w-6 h-6 rounded object-cover" />
            <span className="font-semibold text-sm">Vendevo</span>
          </div>
          <p className="text-sm text-gray-500">© 2026 Vendevo. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Termos de uso</a>
            <a href="#" className="hover:text-white">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}