function PrincipaisSolucoes() {
  return (
    <section className="py-20 bg-gray-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nossas Especialidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em engenharia elétrica e automação predial para
            empresas, condomínios e indústrias.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Automação Predial */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-microchip text-8xl text-white/80"></i>
              </div>
              <div className="absolute top-6 left-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold">
                  Mais Procurado
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Automação Predial
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sistemas inteligentes de controle predial com protocolos KNX,
                BACnet e Modbus. Automação de iluminação, climatização,
                elevadores e sistemas de segurança integrados.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Protocolos KNX, BACnet e Modbus
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Controle centralizado via supervisório
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Integração com sistemas existentes
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Monitoramento remoto 24/7
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">45%</div>
                    <div className="text-sm text-gray-600">
                      Economia operacional
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">
                      2.8 anos
                    </div>
                    <div className="text-sm text-gray-600">Payback médio</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300">
                  Solicitar Projeto
                </button>
                <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300">
                  Ver Portfólio
                </button>
              </div>
            </div>
          </div>

          {/* Projetos Elétricos */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-secondary to-orange-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-drafting-compass text-8xl text-white/80"></i>
              </div>
              <div className="absolute top-6 left-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold">
                  AutoCAD/BIM
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Projetos Elétricos
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Projetos elétricos completos em AutoCAD e BIM, seguindo normas
                NBR 5410 e NBR 14039. Baixa, média tensão, SPDA e eficiência
                energética com ART inclusa.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-secondary text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Projetos em AutoCAD e Revit (BIM)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-secondary text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Conformidade NBR 5410 e NBR 14039
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-secondary text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    ART e aprovação nos órgãos competentes
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-secondary text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Memorial descritivo e especificações
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-secondary">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">
                      Aprovação órgãos
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">
                      15 dias
                    </div>
                    <div className="text-sm text-gray-600">Prazo médio</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300">
                  Solicitar Orçamento
                </button>
                <button className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300">
                  Ver Projetos
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Soluções Complementares */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Segurança Corporativa */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                <i className="fas fa-shield-alt text-2xl text-red-500"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Segurança Corporativa
                </h3>
                <p className="text-gray-600">CFTV e controle de acesso</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Sistemas integrados de CFTV com IA, controle de acesso biométrico,
              alarmes e monitoramento 24/7 para máxima segurança corporativa.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-video text-red-500 mr-3"></i>
                Câmeras 4K com inteligência artificial
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-fingerprint text-red-500 mr-3"></i>
                Controle de acesso biométrico
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-mobile-alt text-red-500 mr-3"></i>
                Monitoramento remoto via app
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-database text-red-500 mr-3"></i>
                Armazenamento em nuvem segura
              </div>
            </div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
              Solicitar Projeto
            </button>
          </div>

          {/* Iluminação Corporativa */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mr-4">
                <i className="fas fa-lightbulb text-2xl text-yellow-500"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Iluminação Corporativa
                </h3>
                <p className="text-gray-600">LED inteligente</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Projetos de iluminação LED corporativa com controle inteligente,
              sensores de presença e sistemas de automação para máxima
              eficiência.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-led text-yellow-500 mr-3"></i>
                Tecnologia LED de alta eficiência
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-sliders-h text-yellow-500 mr-3"></i>
                Controle de intensidade e cor
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-eye text-yellow-500 mr-3"></i>
                Sensores de presença e luminosidade
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-leaf text-yellow-500 mr-3"></i>
                Até 80% de economia energética
              </div>
            </div>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
              Calcular Economia
            </button>
          </div>

          {/* SPDA */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mr-4">
                <i className="fas fa-bolt text-2xl text-purple-500"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">SPDA</h3>
                <p className="text-gray-600">Proteção contra descargas</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Sistemas de Proteção contra Descargas Atmosféricas (SPDA) conforme
              NBR 5419, com projeto, instalação e laudos técnicos.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-umbrella text-purple-500 mr-3"></i>
                Conformidade NBR 5419
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-calculator text-purple-500 mr-3"></i>
                Análise de risco detalhada
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-certificate text-purple-500 mr-3"></i>
                Laudos técnicos e ART
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-tools text-purple-500 mr-3"></i>
                Instalação e manutenção
              </div>
            </div>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
              Solicitar Análise
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrincipaisSolucoes;
