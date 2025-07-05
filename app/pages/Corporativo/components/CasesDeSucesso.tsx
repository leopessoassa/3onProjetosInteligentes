function CasesDeSucesso() {
  return (
    <section className="py-20 bg-gray-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cases de Sucesso Corporativos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projetos executados com excelência técnica e resultados comprovados
            em diferentes segmentos corporativos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Case Condomínio */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="h-48 bg-gradient-to-br from-primary to-primary-dark relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-building text-6xl text-white/80"></i>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                Condomínio
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Condomínio Residencial Premium
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Automação predial completa com 120 unidades, CFTV perimetral e
                controle inteligente de áreas comuns.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Economia mensal:</span>
                  <span className="font-bold text-accent">R$ 8.500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Redução custos:</span>
                  <span className="font-bold text-secondary">52%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Payback:</span>
                  <span className="font-bold text-primary">2.8 anos</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tecnologias:</span>
                  <span className="font-bold text-purple-600">KNX + BIM</span>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 text-sm">
                Ver Case Completo
              </button>
            </div>
          </article>

          {/* Case Industrial */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="h-48 bg-gradient-to-br from-secondary to-orange-600 relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-industry text-6xl text-white/80"></i>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                Industrial
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Complexo Industrial Têxtil
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Projeto elétrico completo com média tensão, automação industrial
                e sistema SPDA conforme NBR 5419.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Potência instalada:</span>
                  <span className="font-bold text-accent">2.5 MVA</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Eficiência:</span>
                  <span className="font-bold text-secondary">+38%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Prazo entrega:</span>
                  <span className="font-bold text-primary">45 dias</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Conformidade:</span>
                  <span className="font-bold text-purple-600">100%</span>
                </div>
              </div>
              <button className="w-full bg-secondary hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 text-sm">
                Ver Case Completo
              </button>
            </div>
          </article>

          {/* Case Hospital */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="h-48 bg-gradient-to-br from-accent to-green-600 relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-hospital text-6xl text-white/80"></i>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                Hospitalar
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hospital Regional
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Automação hospitalar com sistemas críticos, backup de energia e
                monitoramento 24/7 para máxima segurança.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Área automatizada:</span>
                  <span className="font-bold text-accent">8.500m²</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Uptime:</span>
                  <span className="font-bold text-secondary">99.9%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sistemas críticos:</span>
                  <span className="font-bold text-primary">15</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Certificação:</span>
                  <span className="font-bold text-purple-600">ANVISA</span>
                </div>
              </div>
              <button className="w-full bg-accent hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 text-sm">
                Ver Case Completo
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CasesDeSucesso;
