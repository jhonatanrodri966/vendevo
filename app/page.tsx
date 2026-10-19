import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30 overflow-hidden relative">
      
      {/* Luzes de Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[800px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Vendevo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="text-2xl font-bold tracking-tight text-white">Vendevo</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="text-white border-b-2 border-emerald-500 pb-1">Início</a>
            <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#precos" className="hover:text-white transition-colors">Preços</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
            <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2">
              Entrar
            </Link>
            <Link href="/cadastro" className="text-sm font-medium bg-emerald-500 text-black px-5 py-2.5 rounded-lg hover:bg-emerald-400 transition-colors flex items-center gap-2">
              Criar minha conta
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-40 pb-32 px-6 relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Texto à Esquerda */}
        <div className="flex-1 text-center lg:text-left z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Vendedor de IA para WhatsApp
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Venda mais com <br />
            o poder da IA no <br />
            <span className="text-emerald-500">
              WhatsApp!
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
            O Vendevo é um vendedor de inteligência artificial que atende seus clientes, tira dúvidas, apresenta seus produtos e fecha vendas — tudo isso, 24 horas por dia.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <Link href="/cadastro" className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
              Começar agora
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <a href="#como-funciona" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              Ver como funciona
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <p className="text-white font-medium">Atendimento rápido</p>
                <p className="text-gray-500 text-[10px]">Responde em segundos</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <p className="text-white font-medium">Seguro e confiável</p>
                <p className="text-gray-500 text-[10px]">Seus dados protegidos</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-white font-medium">24h por dia</p>
                <p className="text-gray-500 text-[10px]">Nunca para de vender</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito (Mockup) */}
        <div className="flex-1 relative w-full max-w-lg flex justify-center">
          {/* Brilho verde atrás do celular */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-[600px] bg-emerald-500/20 blur-[100px] rounded-full"></div>

          {/* Celular */}
          <div className="relative w-80 h-[650px] bg-[#0A0A0A] border-[8px] border-[#222] rounded-[3rem] p-2 shadow-[0_0_50px_rgba(16,185,129,0.15)] z-10 hidden md:block">
            {/* Câmera do celular */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-xl z-20"></div>
            
            {/* Tela do celular */}
            <div className="w-full h-full bg-[#0b141a] rounded-[2.5rem] overflow-hidden flex flex-col relative border border-white/5">
              
              {/* Header do WhatsApp */}
              <div className="bg-[#202c33] px-4 py-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-black text-sm">V</div>
                <div>
                  <p className="text-sm font-semibold text-white">Vendevo</p>
                  <p className="text-xs text-emerald-400">Online</p>
                </div>
              </div>

              {/* Chat */}
              <div className="bg-[#0b141a] flex-1 p-3 space-y-4 text-[13px] relative">
                <div className="bg-[#202c33] text-gray-200 p-2.5 rounded-lg rounded-tl-none w-max max-w-[85%] relative">
                  Olá! 👋<br/>Seja bem-vindo(a)!<br/>Temos ofertas especiais hoje. Qual produto você se interessa?
                  <span className="text-[9px] text-gray-400 absolute bottom-1 right-2">09:41</span>
                </div>
                <div className="bg-[#005c4b] text-gray-100 p-2.5 rounded-lg rounded-tr-none w-max max-w-[85%] ml-auto relative">
                  Quero ver os produtos
                  <span className="text-[9px] text-emerald-200 absolute bottom-1 right-2">09:42 ✓✓</span>
                </div>
                <div className="bg-[#202c33] text-gray-200 p-2.5 rounded-lg rounded-tl-none w-max max-w-[85%] relative">
                  Ótima escolha! Temos alguns dos nossos produtos mais vendidos:
                  <div className="bg-[#111] p-2 mt-2 rounded border border-white/10 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-[10px]">👟</div>
                    <div>
                      <p className="text-white text-xs">Tênis Vortex</p>
                      <p className="text-emerald-400 text-xs">R$ 159,90</p>
                    </div>
                  </div>
                  <span className="text-[9px] text-gray-400 absolute bottom-1 right-2">09:42</span>
                </div>
                
                {/* Input do WhatsApp */}
                <div className="absolute bottom-2 left-2 right-2 bg-[#202c33] rounded-full px-4 py-2 flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Digite uma mensagem...</span>
                  <div className="flex items-center gap-2 text-emerald-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Texto "Mais conversas" */}
          <div className="absolute -bottom-10 right-0 text-emerald-500 font-bold italic text-2xl transform rotate-[-10deg] z-20 opacity-90 pointer-events-none hidden lg:block" style={{ fontFamily: "cursive" }}>
            Mais conversas.<br/>Mais vendas.
            <svg className="w-12 h-12 absolute -top-6 -right-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8m0 0v6m0-6h-6" /></svg>
          </div>
        </div>
      </main>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-24 bg-[#0F0F0F] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
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
      <section id="como-funciona" className="py-24 bg-[#050505] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
            <p className="text-gray-400">Em poucos passos, seu vendedor de IA já está atendendo.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Passo 1 */}
            <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl w-full lg:w-64 relative group hover:border-emerald-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="font-semibold text-white mb-2">1. Cadastre sua empresa</h3>
              <p className="text-xs text-gray-400">Configure seus dados básicos.</p>
            </div>
            <svg className="w-6 h-6 text-gray-700 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            
            {/* Passo 2 */}
            <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl w-full lg:w-64 relative group hover:border-emerald-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <h3 className="font-semibold text-white mb-2">2. Adicione seus produtos</h3>
              <p className="text-xs text-gray-400">Informe o que você vende.</p>
            </div>
            <svg className="w-6 h-6 text-gray-700 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

            {/* Passo 3 */}
            <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl w-full lg:w-64 relative group hover:border-emerald-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-semibold text-white mb-2">3. Configure seu vendedor</h3>
              <p className="text-xs text-gray-400">Personalize o atendimento.</p>
            </div>
            <svg className="w-6 h-6 text-gray-700 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

            {/* Passo 4 */}
            <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl w-full lg:w-64 relative group hover:border-emerald-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <h3 className="font-semibold text-white mb-2">4. Conecte o WhatsApp</h3>
              <p className="text-xs text-gray-400">Integre seu número comercial.</p>
            </div>
            <svg className="w-6 h-6 text-gray-700 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

            {/* Passo 5 */}
            <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl w-full lg:w-64 relative group hover:border-emerald-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold text-white mb-2">5. Comece a vender</h3>
              <p className="text-xs text-gray-400">Seu vendedor de IA já está online!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preços */}
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
      <section id="faq" className="py-24 bg-[#0F0F0F] border-t border-white/5 relative z-10">
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
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Vendevo" className="w-6 h-6 rounded object-cover" />
            <span className="font-semibold text-sm">Vendevo</span>
          </div>
          <p className="text-sm text-gray-500">© 2026 Vendevo. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/suporte" className="hover:text-white">Suporte</Link>
            <Link href="/termos" className="hover:text-white">Termos de uso</Link>
            <Link href="/privacidade" className="hover:text-white">Privacidade</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}