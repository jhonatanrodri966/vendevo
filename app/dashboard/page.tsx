export default function DashboardHome() {
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
          <p className="text-3xl font-bold">0</p>
          <p className="text-xs text-gray-500 mt-2">Nenhuma conversa ainda</p>
        </div>

        <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-gray-400">Produtos cadastrados</p>
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
          </div>
          <p className="text-3xl font-bold">0</p>
          <p className="text-xs text-gray-500 mt-2">Adicione seu primeiro produto</p>
        </div>

        <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-gray-400">Status do WhatsApp</p>
            <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
          </div>
          <p className="text-xl font-bold text-yellow-500 mt-2">Desconectado</p>
          <p className="text-xs text-gray-500 mt-1">Vá em configurações para conectar</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] border border-white/10 p-8 rounded-2xl text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <h2 className="text-xl font-semibold mb-2">Seu vendedor ainda não está ativo</h2>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">Siga o passo a passo para conectar seu WhatsApp, cadastrar produtos e ativar sua inteligência artificial.</p>
        <a href="/dashboard/configuracoes" className="inline-block bg-emerald-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-emerald-400 transition-colors">
          Configurar agora
        </a>
      </div>
    </div>
  );
}