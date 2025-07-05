function CalculadoraRoiCorporativo() {
  return (
    <section className="py-20 bg-gray-custom" id="calculadora-roi">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Calculadora de ROI Corporativo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra o potencial de economia e retorno do investimento em
            automação predial e projetos elétricos para seu negócio.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário de Entrada */}
            <div className="space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Dados do Seu Negócio
                </h3>
                <p className="text-gray-600">
                  Preencha as informações para calcular seu ROI personalizado
                </p>
              </div>

              {/* Tipo de Negócio */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-building text-primary mr-2"></i>
                  Tipo de Negócio *
                </label>
                <select
                  id="tipoNegocio"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                >
                  <option value="">Selecione o tipo de negócio</option>
                  <option value="condominio">Condomínio Residencial</option>
                  <option value="comercial">Edifício Comercial</option>
                  <option value="industria">Indústria</option>
                  <option value="hospital">Hospital/Clínica</option>
                  <option value="hotel">Hotel/Pousada</option>
                  <option value="shopping">Shopping/Varejo</option>
                </select>
                <div className="text-xs text-gray-500 mt-1">
                  Cada tipo possui características específicas de economia
                </div>
              </div>

              {/* Gasto Operacional */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-dollar-sign text-accent mr-2"></i>
                  Gasto Operacional Mensal (R$) *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="gastoOperacional"
                    placeholder="Ex: 25.000"
                    min="1000"
                    step="100"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-400 text-sm">R$</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Inclui energia elétrica, manutenção, segurança e outros custos
                  operacionais
                </div>
              </div>

              {/* Área Construída */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-ruler-combined text-secondary mr-2"></i>
                  Área Construída (m²) *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="areaConstruida"
                    placeholder="Ex: 2.500"
                    min="100"
                    step="10"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-400 text-sm">m²</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Área total que receberá as soluções de automação
                </div>
              </div>

              {/* Soluções de Interesse */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  <i className="fas fa-cogs text-purple-500 mr-2"></i>
                  Soluções de Interesse *
                </label>
                <div className="grid grid-cols-1 gap-4">
                  {/* Automação Predial */}
                  <label className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      id="automacao"
                      className="mt-1 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-microchip text-primary"></i>
                        <span className="font-semibold text-gray-900">
                          Automação Predial
                        </span>
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          Mais Popular
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Controle inteligente de iluminação, climatização e
                        elevadores
                      </div>
                      <div className="text-xs text-blue-600 mt-1 font-medium">
                        Economia típica: 30-45% dos custos operacionais
                      </div>
                    </div>
                  </label>

                  {/* Segurança Eletrônica */}
                  <label className="flex items-start space-x-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      id="seguranca"
                      className="mt-1 rounded border-gray-300 text-red-500 focus:ring-red-500 focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-shield-alt text-red-500"></i>
                        <span className="font-semibold text-gray-900">
                          Segurança Eletrônica
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        CFTV com IA, controle de acesso e monitoramento 24/7
                      </div>
                      <div className="text-xs text-red-600 mt-1 font-medium">
                        Redução de perdas: 8-20% dos custos de segurança
                      </div>
                    </div>
                  </label>

                  {/* Iluminação Inteligente */}
                  <label className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      id="iluminacao"
                      className="mt-1 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-lightbulb text-yellow-500"></i>
                        <span className="font-semibold text-gray-900">
                          Iluminação Inteligente
                        </span>
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                          ROI Rápido
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        LED inteligente com sensores e controle automático
                      </div>
                      <div className="text-xs text-yellow-600 mt-1 font-medium">
                        Economia energética: 40-80% na iluminação
                      </div>
                    </div>
                  </label>

                  {/* Eficiência Energética */}
                  <label className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      id="eficiencia"
                      className="mt-1 rounded border-gray-300 text-green-500 focus:ring-green-500 focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-leaf text-green-500"></i>
                        <span className="font-semibold text-gray-900">
                          Eficiência Energética
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Análise e otimização completa do consumo energético
                      </div>
                      <div className="text-xs text-green-600 mt-1 font-medium">
                        Redução geral: 25-50% do consumo total
                      </div>
                    </div>
                  </label>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  <i className="fas fa-info-circle mr-1"></i>
                  Selecione múltiplas soluções para obter desconto por pacote
                </div>
              </div>

              {/* Botão Calcular */}
              <div className="pt-4">
                <button
                  onClick={() => alert("calcularROICorporativo()")}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-calculator mr-2"></i>
                  Calcular ROI Personalizado
                </button>
                <div className="text-center text-xs text-gray-500 mt-2">
                  Cálculo gratuito • Sem compromisso • Resultados instantâneos
                </div>
              </div>
            </div>

            {/* Área de Resultados */}
            <div
              id="resultadosROI"
              className="bg-gray-50 rounded-2xl p-6 hidden"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Análise de ROI Personalizada
                </h3>
                <p className="text-gray-600">
                  Baseada nos dados do seu negócio
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {/* Economia Mensal */}
                <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">
                      Economia Mensal
                    </div>
                    <div
                      id="economiaMensalCorp"
                      className="text-2xl font-bold text-accent"
                    >
                      R$ 0
                    </div>
                    <div className="text-xs text-gray-500">
                      Redução nos custos operacionais
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-piggy-bank text-xl text-accent"></i>
                  </div>
                </div>

                {/* Economia Anual */}
                <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">
                      Economia Anual
                    </div>
                    <div
                      id="economiaAnualCorp"
                      className="text-2xl font-bold text-primary"
                    >
                      R$ 0
                    </div>
                    <div className="text-xs text-gray-500">
                      Total economizado por ano
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-chart-line text-xl text-primary"></i>
                  </div>
                </div>

                {/* Investimento */}
                <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">
                      Investimento Estimado
                    </div>
                    <div
                      id="investimentoCorp"
                      className="text-2xl font-bold text-secondary"
                    >
                      R$ 0
                    </div>
                    <div className="text-xs text-gray-500">
                      Valor total do projeto
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-coins text-xl text-secondary"></i>
                  </div>
                </div>

                {/* Payback */}
                <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">
                      Tempo de Retorno (Payback)
                    </div>
                    <div
                      id="paybackCorp"
                      className="text-2xl font-bold text-purple-600"
                    >
                      0 anos
                    </div>
                    <div className="text-xs text-gray-500">
                      Quando o investimento se paga
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-xl text-purple-600"></i>
                  </div>
                </div>

                {/* ROI 10 anos */}
                <div className="bg-gradient-to-r from-accent to-green-600 rounded-xl p-4 text-white text-center shadow-lg">
                  <div className="text-sm opacity-90 font-medium">
                    Retorno sobre Investimento (10 anos)
                  </div>
                  <div id="roi10anos" className="text-4xl font-bold mt-1">
                    0%
                  </div>
                  <div className="text-xs opacity-80 mt-1">
                    Ganho total sobre o investimento inicial
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="space-y-3">
                <button className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                  <i className="fas fa-file-alt"></i>
                  <span>Solicitar Proposta Detalhada</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                    <i className="fas fa-phone"></i>
                    <span>Ligar Agora</span>
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                    <i className="fab fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-2">
                  <i className="fas fa-info-circle text-blue-500 mt-0.5"></i>
                  <div className="text-xs text-blue-700">
                    <strong>Importante:</strong> Esta é uma estimativa baseada
                    em dados médios do mercado. Os valores reais podem variar
                    conforme as especificidades do seu projeto. Para uma análise
                    precisa, solicite uma consultoria técnica gratuita.
                  </div>
                </div>
              </div>
            </div>

            {/* Estado Inicial (quando não há resultados) */}
            <div
              id="estadoInicial"
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[500px]"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-calculator text-4xl text-primary"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Calcule seu ROI Personalizado
              </h3>
              <p className="text-gray-600 mb-6 max-w-sm">
                Preencha os dados ao lado para descobrir o potencial de economia
                e retorno do investimento para seu negócio.
              </p>

              {/* Benefícios */}
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-green-600 text-xs"></i>
                  </div>
                  <span>Análise técnica profissional</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-green-600 text-xs"></i>
                  </div>
                  <span>Cálculo baseado em dados reais</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-green-600 text-xs"></i>
                  </div>
                  <span>Resultados instantâneos</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-green-600 text-xs"></i>
                  </div>
                  <span>Sem compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-certificate text-2xl text-primary"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Metodologia Comprovada
            </h3>
            <p className="text-gray-600 text-sm">
              Cálculos baseados em mais de 150 cômodos executados e dados reais
              de economia obtidos pelos nossos clientes.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-2xl text-accent"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Garantia de Resultados
            </h3>
            <p className="text-gray-600 text-sm">
              Projetos com garantia técnica e acompanhamento de performance para
              assegurar os resultados calculados.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-headset text-2xl text-secondary"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Suporte Especializado
            </h3>
            <p className="text-gray-600 text-sm">
              Equipe técnica disponível para esclarecer dúvidas e personalizar a
              análise conforme suas necessidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalculadoraRoiCorporativo;
