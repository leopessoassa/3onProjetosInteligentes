function DepoimentosParceiros() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            O que Nossos Parceiros Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de profissionais que já fazem parte da nossa rede
            de parceiros
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Depoimento Arquiteto */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-drafting-compass text-2xl text-primary"></i>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Arq. Marina Santos
                </h4>
                <p className="text-gray-600 text-sm">Arquiteta - João Pessoa</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex text-yellow-400 mb-3">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                "A parceria com a 3on revolucionou meus projetos. O suporte
                técnico é excepcional e a integração da automação com o design
                arquitetônico é perfeita. Meus clientes ficam impressionados!"
              </blockquote>
            </div>
            <div className="bg-white rounded-xl p-4 border border-blue-200">
              <div className="grid grid-cols-2 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-primary">+25%</div>
                  <div className="text-gray-600">Valor projetos</div>
                </div>
                <div>
                  <div className="font-bold text-accent">3 anos</div>
                  <div className="text-gray-600">Parceria</div>
                </div>
              </div>
            </div>
          </div>

          {/* Depoimento Engenheiro */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-hard-hat text-2xl text-secondary"></i>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Eng. Carlos Oliveira
                </h4>
                <p className="text-gray-600 text-sm">
                  Engenheiro Elétrico - Campina Grande
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex text-yellow-400 mb-3">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                "Trabalhar com a 3on me permitiu expandir para automação predial
                sem perder o foco nos projetos elétricos. O conhecimento técnico
                da equipe é impressionante e o suporte é sempre pontual."
              </blockquote>
            </div>
            <div className="bg-white rounded-xl p-4 border border-orange-200">
              <div className="grid grid-cols-2 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-secondary">40%</div>
                  <div className="text-gray-600">Mais projetos</div>
                </div>
                <div>
                  <div className="font-bold text-accent">2 anos</div>
                  <div className="text-gray-600">Parceria</div>
                </div>
              </div>
            </div>
          </div>

          {/* Depoimento Designer */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-paint-brush text-2xl text-accent"></i>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Ana Paula Lima
                </h4>
                <p className="text-gray-600 text-sm">
                  Designer de Interiores - João Pessoa
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex text-yellow-400 mb-3">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                "A automação da 3on é completamente invisível e valoriza cada
                detalhe do design. Meus clientes adoram a praticidade e eu amo
                como a tecnologia se integra perfeitamente aos ambientes."
              </blockquote>
            </div>
            <div className="bg-white rounded-xl p-4 border border-green-200">
              <div className="grid grid-cols-2 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-accent">+50%</div>
                  <div className="text-gray-600">Satisfação</div>
                </div>
                <div>
                  <div className="font-bold text-primary">1 ano</div>
                  <div className="text-gray-600">Parceria</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DepoimentosParceiros;
