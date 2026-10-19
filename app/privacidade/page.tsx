import Link from "next/link";

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <img src="/logo.png" alt="Vendevo" className="w-8 h-8 rounded-lg object-cover" />
          <span className="text-xl font-semibold">Vendevo</span>
        </Link>
        
        <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
        <p className="text-sm text-gray-400 mb-8">Última atualização: 19 de Outubro de 2026</p>

        <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1. Informações que Coletamos</h2>
            <p>Coletamos informações fornecidas por você no cadastro (nome, e-mail) e dados de uso da plataforma (conversas, produtos cadastrados).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2. Como Usamos suas Informações</h2>
            <p>Usamos seus dados para operar a plataforma, processar pagamentos, enviar notificações e melhorar o serviço.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3. Compartilhamento de Dados</h2>
            <p>Não vendemos seus dados. Compartilhamos apenas com parceiros essenciais (gateway de pagamento, API do WhatsApp, provedor de IA) para operar o serviço.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4. Segurança</h2>
            <p>Utilizamos criptografia para senhas e conexões seguras. No entanto, nenhum sistema é 100% invulnerável.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">5. Seus Direitos (LGPD)</h2>
            <p>Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail de contato.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">6. Cookies</h2>
            <p>Usamos cookies para manter sua sessão ativa. Você pode desabilitá-los no navegador, mas isso pode afetar a funcionalidade do site.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">7. Contato</h2>
            <p>Para questões de privacidade: <a href="mailto:contato@vendevo.com.br" className="text-emerald-400">contato@vendevo.com.br</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}