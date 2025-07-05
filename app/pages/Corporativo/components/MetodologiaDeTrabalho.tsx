function MetodologiaDeTrabalho() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nossa Metodologia de Trabalho
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Processo estruturado e transparente para garantir o sucesso do seu
            projeto corporativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Etapa 1 */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-3xl text-white"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Diagnóstico
            </h3>
            <p className="text-gray-600 text-sm">
              Análise completa das necessidades operacionais e potencial de
              otimização do seu negócio.
            </p>
          </div>

          {/* Etapa 2 */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-drafting-compass text-3xl text-white"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Projeto</h3>
            <p className="text-gray-600 text-sm">
              Desenvolvimento de projeto técnico detalhado com especificações,
              cronograma e análise de ROI.
            </p>
          </div>

          {/* Etapa 3 */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-3xl text-white"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Implementação
            </h3>
            <p className="text-gray-600 text-sm">
              Execução do projeto com equipe especializada, seguindo
              rigorosamente cronograma e especificações.
            </p>
          </div>

          {/* Etapa 4 */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-3xl text-white"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Monitoramento
            </h3>
            <p className="text-gray-600 text-sm">
              Acompanhamento contínuo de performance, manutenção preventiva e
              otimizações adicionais.
            </p>
          </div>
        </div>

        {/* Garantias e Certificações */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Garantias e Certificações
            </h3>
            <p className="text-gray-600">
              Segurança e qualidade garantidas em todos os nossos projetos
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            <div className="p-4">
              <i className="fas fa-certificate text-3xl text-primary mb-3"></i>
              <div className="font-semibold text-gray-900">CREA-PB</div>
              <div className="text-sm text-gray-600">Registro ativo</div>
            </div>
            <div className="p-4">
              <i className="fas fa-shield-alt text-3xl text-accent mb-3"></i>
              <div className="font-semibold text-gray-900">5 anos</div>
              <div className="text-sm text-gray-600">Garantia projetos</div>
            </div>
            <div className="p-4">
              <i className="fas fa-award text-3xl text-secondary mb-3"></i>
              <div className="font-semibold text-gray-900">ISO 9001</div>
              <div className="text-sm text-gray-600">Qualidade</div>
            </div>
            <div className="p-4">
              <i className="fas fa-tools text-3xl text-purple-600 mb-3"></i>
              <div className="font-semibold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Suporte técnico</div>
            </div>
            <div className="p-4">
              <i className="fas fa-handshake text-3xl text-green-600 mb-3"></i>
              <div className="font-semibold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MetodologiaDeTrabalho;
