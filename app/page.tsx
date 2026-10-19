import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30 overflow-hidden relative">
      
      {/* Luzes de Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo vendevo simplificada para texto */}
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
      <main className="pt-40 pb-20 px-6 relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Texto à Esquerda */}
        <div className="flex-1 text-center md:text-left">
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
          
          <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            O Vendevo é um vendedor de inteligência artificial que atende seus clientes, tira dúvidas, apresenta seus produtos e fecha vendas — tudo isso, 24 horas por dia.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
            <Link href="/cadastro" className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
              Começar agora
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#111] border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              Ver como funciona
            </button>
          </div>

          {/* Micro Features */}
          <div className="flex items-center justify-center md:justify-start gap-6 text-xs text-gray-400">
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

        {/* Lado Direito (Mockup do Celular) */}
        <div className="flex-1 relative w-full max-w-sm mx-auto">
          {/* Fundo do celular */}
          <div className="relative bg-[#0A0A0A] border-4 border-[#1A1A1A] rounded-[2.5rem] p-2 shadow-2xl overflow-hidden h-[600px]">
            {/* Header do celular */}
            <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-400">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Chat WhatsApp */}
            <div className="bg-[#111] h-full rounded-[2rem] p-4 flex flex-col">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-black">V</div>
                <div>
                  <p className="text-sm font-semibold">Vendevo</p>
                  <p className="text-xs text-emerald-400">Online</p>
                </div>
              </div>

              <div className="space-y-4 text-sm flex-1 overflow-y-auto">
                <div className="bg-[#1A1A1A] text-gray-200 p-3 rounded-2xl rounded-tl-sm max-w-[85%]">
                  Olá! 👋<br/>Seja bem-vindo(a)!
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-gray-200 p-3 rounded-2xl rounded-tr-sm max-w-[85%] ml-auto">
                  Queria saber sobre o produto que tem em promoção.
                </div>
                <div className="bg-[#1A1A1A] text-gray-200 p-3 rounded-2xl rounded-tl-sm max-w-[85%]">
                  Ótima escolha! Temos uma promoção especial hoje. Tênis Vortex R$ 159,90.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}