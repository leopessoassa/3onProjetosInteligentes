function CertificacoesGarantias() {
  return (
    <section className="py-20 bg-gray-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certificações e Garantias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Segurança e qualidade garantidas em todos os nossos projetos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* CREA */}
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-certificate text-3xl text-primary"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">CREA-PB</h3>
            <p className="text-gray-600 text-sm mb-4">
              Registro ativo no Conselho Regional de Engenharia e Agronomia
            </p>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <div className="text-green-700 font-semibold text-sm">
                Registro Ativo
              </div>
              <div className="text-green-600 text-xs">Desde 2012</div>
            </div>
          </div>

          {/* ISO 9001 * /}
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-award text-3xl text-accent"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">ISO 9001</h3>
            <p className="text-gray-600 text-sm mb-4">
              Certificação de qualidade em gestão e processos
            </p>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <div className="text-blue-700 font-semibold text-sm">
                Certificado
              </div>
              <div className="text-blue-600 text-xs">Renovado 2024</div>
            </div>
          </div>

          {/* KNX Partner * /}
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-network-wired text-3xl text-secondary"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              KNX Partner
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Parceiro oficial KNX para automação predial
            </p>
            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
              <div className="text-orange-700 font-semibold text-sm">
                Parceiro Oficial
              </div>
              <div className="text-orange-600 text-xs">Desde 2018</div>
            </div>
          </div>

          {/* Garantia */}
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-3xl text-purple-500"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">3 Anos</h3>
            <p className="text-gray-600 text-sm mb-4">
              Garantia completa em todos os projetos executados
            </p>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <div className="text-purple-700 font-semibold text-sm">
                Garantia Total
              </div>
              <div className="text-purple-600 text-xs">
                Projeto + Instalação
              </div>
            </div>
          </div>
        </div>

        {/* Políticas */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nossas Políticas de Atendimento
            </h3>
            <p className="text-gray-600">
              Compromissos que assumimos com todos os nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Política 1 */}
            <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <i className="fas fa-handshake text-3xl text-primary mb-4"></i>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Transparência Total
              </h4>
              <p className="text-gray-600 text-sm">
                Orçamentos detalhados, cronogramas claros e comunicação
                constante sobre o andamento do projeto.
              </p>
            </div>

            {/* Política 2 */}
            <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
              <i className="fas fa-clock text-3xl text-accent mb-4"></i>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Pontualidade
              </h4>
              <p className="text-gray-600 text-sm">
                Cumprimento rigoroso de prazos estabelecidos. Atrasos
                justificados com antecedência e soluções.
              </p>
            </div>

            {/* Política 3 */}
            <div className="text-center p-6 bg-orange-50 rounded-2xl border border-orange-200">
              <i className="fas fa-tools text-3xl text-secondary mb-4"></i>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Pós-Venda
              </h4>
              <p className="text-gray-600 text-sm">
                Suporte técnico contínuo, manutenção preventiva e atendimento
                prioritário para clientes.
              </p>
            </div>

            {/* Política 4 */}
            <div className="text-center p-6 bg-purple-50 rounded-2xl border border-purple-200">
              <i className="fas fa-graduation-cap text-3xl text-purple-500 mb-4"></i>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Capacitação
              </h4>
              <p className="text-gray-600 text-sm">
                Treinamento completo da equipe do cliente para operação e
                manutenção básica dos sistemas.
              </p>
            </div>

            {/* Política 5 */}
            <div className="text-center p-6 bg-red-50 rounded-2xl border border-red-200">
              <i className="fas fa-shield text-3xl text-red-500 mb-4"></i>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Segurança
              </h4>
              <p className="text-gray-600 text-sm">
                Conformidade total com normas técnicas brasileiras e
                internacionais de segurança.
              </p>
            </div>

            {/* Política 6 */}
            <div className="text-center p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
              <i className="fas fa-recycle text-3xl text-yellow-500 mb-4"></i>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Sustentabilidade
              </h4>
              <p className="text-gray-600 text-sm">
                Soluções eco-friendly com foco em eficiência energética e
                redução de impacto ambiental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificacoesGarantias;
