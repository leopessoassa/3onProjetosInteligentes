export default function ParaArquitetosSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary-900">
            Cansado de perder projetos por falta de{" "}
            <span className="text-primary-600">expertise elétrica</span>?
          </h2>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Sei como é frustrante quando o cliente quer automação mas você não tem o parceiro técnico certo. 
            <strong className="text-secondary-800"> Vamos resolver isso juntos.</strong>
          </p>
        </div>
        
        {/* Dores + Soluções */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Dores */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              🤔 Situações que você já viveu:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <span className="text-red-500 text-xl">😤</span>
                <p className="text-secondary-700">"Cliente quer automação, mas não sei por onde começar"</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <span className="text-red-500 text-xl">💸</span>
                <p className="text-secondary-700">"Orçamento estourou porque não calculei a parte elétrica direito"</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <span className="text-red-500 text-xl">⏰</span>
                <p className="text-secondary-700">"Obra atrasou por problemas na instalação elétrica"</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <span className="text-red-500 text-xl">🙄</span>
                <p className="text-secondary-700">"Cliente acha automação 'fútil' e corta do orçamento"</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <span className="text-red-500 text-xl">😴</span>
                <p className="text-secondary-700">"Projetos genéricos podem estagnar minha carreira"</p>
              </div>
            </div>
          </div>
          
          {/* Soluções */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              ✅ Como eu resolvo para você:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-success-50 rounded-lg border-l-4 border-success-400">
                <span className="text-success-600 text-xl">💰</span>
                <div>
                  <h4 className="font-semibold text-secondary-800">Orçamentos Realistas</h4>
                  <p className="text-secondary-600">Automação que cabe no bolso do cliente</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg border-l-4 border-primary-400">
                <span className="text-primary-600 text-xl">💬</span>
                <div>
                  <h4 className="font-semibold text-secondary-800">Linguagem Simples</h4>
                  <p className="text-secondary-600">Explicações que vendem o projeto</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-accent-50 rounded-lg border-l-4 border-accent-400">
                <span className="text-accent-600 text-xl">🤝</span>
                <div>
                  <h4 className="font-semibold text-secondary-800">Suporte Comercial</h4>
                  <p className="text-secondary-600">Te ajudo a convencer o cliente</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg border-l-4 border-primary-400">
                <span className="text-primary-600 text-xl">📊</span>
                <div>
                  <h4 className="font-semibold text-secondary-800">ROI Demonstrável</h4>
                  <p className="text-secondary-600">Mostro valorização real do imóvel</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-success-50 rounded-lg border-l-4 border-success-400">
                <span className="text-success-600 text-xl">🎆</span>
                <div>
                  <h4 className="font-semibold text-secondary-800">Projetos que Impressionam</h4>
                  <p className="text-secondary-600">Diferencial que eleva sua carreira</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diferencial Técnico */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-elegant">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
              🔧 Diferencial Técnico que Importa
            </h3>
            <p className="text-lg text-secondary-600">
              Não é só mais um eletricista. É integração total com seu workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📐</span>
              </div>
              <h4 className="font-bold text-secondary-800 mb-2">BIM & AutoCAD</h4>
              <p className="text-secondary-600">Seus arquivos, nossa expertise</p>
            </div>
            
            <div className="text-center">
              <div className="bg-success-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h4 className="font-bold text-secondary-800 mb-2">ROI Comprovado</h4>
              <p className="text-secondary-600">Valorização patrimonial mensurável</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="font-bold text-secondary-800 mb-2">Automação Smart</h4>
              <p className="text-secondary-600">Tecnologia que impressiona</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}