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
            <span className="text-2xl font-bold tracking-tight text-white">Vendevo</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="text-white border-b-2 border-emerald-500 pb-1">Início</a>
            <a href="#" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#" className="hover:text-white transition-colors">Preços</a>
            <a href="#" className="hover:text-white transition-colors">Como funciona</a>
            <a href="#" className="hover:text-white transition-colors">Dúvidas</a>
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
      <main className="pt-40 pb-32 px-6 relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Texto à Esquerda */}
        <div className="flex-1 text-center lg:text-left z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Vendedor de IA para WhatsApp
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Venda mais com <br />
            o poder da IA no <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
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
            <button className="w-full sm:w-auto px-8 py-4 bg-[#111] border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              Ver como funciona
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Ativação rápida
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Seguro e confiável
            </div>
          </div>
        </div>

        {/* Lado Direito (Mockup) */}
        <div className="flex-1 relative w-full max-w-lg flex justify-center">
          
          {/* Brilho verde atrás do celular */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] bg-emerald-500/20 blur-[80px] rounded-full"></div>

          {/* Celular */}
          <div className="relative w-72 h-[580px] bg-[#0A0A0A] border-[6px] border-[#222] rounded-[3rem] p-2 shadow-[0_0_50px_rgba(16,185,129,0.2)] z-10 hidden md:block">
            {/* Câmera do celular */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-xl z-20"></div>
            
            {/* Tela do celular */}
            <div className="w-full h-full bg-[#0b141a] rounded-[2.5rem] overflow-hidden flex flex-col relative border border-white/5">
              
              {/* Header do WhatsApp */}
              <div className="bg-[#202c33] px-4 py-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-black text-sm">V</div>
                <div>
                  <p className="text-sm font-semibold text-white">Vendevo</p>
                  <p className="text-xs text-emerald-400">online</p>
                </div>
              </div>

              {/* Chat */}
              <div className="bg-[#0b141a] flex-1 p-3 space-y-3 text-[13px]">
                <div className="bg-[#202c33] text-gray-200 p-2.5 rounded-lg rounded-tl-none w-max max-w-[85%]">
                  Olá! 👋<br/>Seja bem-vindo(a)!<br/>Sou o Vendevo, o vendedor de IA da sua loja.
                </div>
                <div className="bg-[#005c4b] text-gray-100 p-2.5 rounded-lg rounded-tr-none w-max max-w-[85%] ml-auto">
                  Queria saber sobre o produto que tem em promoção.
                </div>
                <div className="bg-[#202c33] text-gray-200 p-2.5 rounded-lg rounded-tl-none w-max max-w-[85%]">
                  Ótima escolha! Temos uma promoção especial hoje. Tênis Vortex R$ 159,90.
                </div>
              </div>
            </div>
          </div>

          {/* Cards Flutuantes (Lado Direito) */}
          <div className="hidden xl:flex flex-col gap-6 absolute -right-12 top-10 z-20">
            {/* Card 1 */}
            <div className="bg-[#0A0A0A] border border-white/10 p-4 rounded-xl w-64 shadow-xl relative">
              <div className="absolute -left-12 top-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent to-emerald-500/50"></div>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">Atendimento automático</h3>
              <p className="text-xs text-gray-400">Responde seus clientes no WhatsApp.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0A0A0A] border border-white/10 p-4 rounded-xl w-64 shadow-xl relative">
              <div className="absolute -left-12 top-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent to-emerald-500/50"></div>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">Inteligência Artificial</h3>
              <p className="text-xs text-gray-400">Entende, orienta e fecha vendas.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0A0A0A] border border-white/10 p-4 rounded-xl w-64 shadow-xl relative">
              <div className="absolute -left-12 top-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent to-emerald-500/50"></div>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">24 horas por dia</h3>
              <p className="text-xs text-gray-400">Seu negócio sempre atendendo.</p>
            </div>
          </div>
          
          {/* Texto "Mais conversas" */}
          <div className="absolute -bottom-10 right-0 text-emerald-500 font-bold italic text-2xl transform rotate-[-10deg] z-20 opacity-80 pointer-events-none hidden lg:block" style={{ fontFamily: "cursive" }}>
            Mais conversas.<br/>Mais vendas.
            <svg className="w-12 h-12 absolute -top-6 -right-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8m0 0v6m0-6h-6" /></svg>
          </div>
        </div>
      </main>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-24 bg-[#050505] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-500 font-bold text-sm tracking-widest uppercase mb-4">Como funciona</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Em poucos passos, seu vendedor de IA <br className="hidden md:block" />
              já está <span className="text-emerald-500">atendendo.</span>
            </h2>
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

    </div>
  );
}