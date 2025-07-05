function InformacoesAdicionais() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Informações Importantes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa saber antes de entrar em contato conosco
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Área de Atendimento */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-map-marked-alt text-3xl text-primary"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Área de Atendimento
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-green-500"></i>
                <span className="text-gray-700">João Pessoa e Grande JP</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-green-500"></i>
                <span className="text-gray-700">Campina Grande</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-green-500"></i>
                <span className="text-gray-700">Litoral Paraibano</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-blue-500"></i>
                <span className="text-gray-700">Demais cidades da PB</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-blue-500"></i>
                <span className="text-gray-700">Estados vizinhos</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600">
                <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                Visitas técnicas gratuitas na Grande João Pessoa. Para outras
                regiões, consulte condições especiais.
              </p>
            </div>
          </div>

          {/* Tipos de Projeto */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-cogs text-3xl text-accent"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Tipos de Projeto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-microchip text-primary"></i>
                <span className="text-gray-700">Automação Residencial e Predial</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-bolt text-secondary"></i>
                <span className="text-gray-700">Projetos Elétricos</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-shield-alt text-red-500"></i>
                <span className="text-gray-700">Segurança Eletrônica</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-lightbulb text-yellow-500"></i>
                <span className="text-gray-700">Iluminação Inteligente</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-umbrella text-purple-500"></i>
                <span className="text-gray-700">SPDA</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-leaf text-green-500"></i>
                <span className="text-gray-700">Eficiência Energética</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
              <p className="text-sm text-gray-600">
                <i className="fas fa-star text-green-500 mr-2"></i>
                Projetos personalizados para residências, empresas, condomínios
                e indústrias.
              </p>
            </div>
          </div>

          {/* Processo de Atendimento */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-clipboard-list text-3xl text-secondary"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Como Funciona
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Primeiro contato e briefing inicial
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Agendamento de visita técnica
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Análise técnica e levantamento
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Proposta técnica e comercial
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">5</span>
                </div>
                <span className="text-gray-700 text-sm">
                  Aprovação e início do projeto
                </span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border border-orange-200">
              <p className="text-sm text-gray-600">
                <i className="fas fa-clock text-secondary mr-2"></i>
                Processo completo desde o primeiro contato até a entrega do
                projeto finalizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformacoesAdicionais;
