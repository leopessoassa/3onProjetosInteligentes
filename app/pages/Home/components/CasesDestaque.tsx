function CasesDestaque() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cases de Sucesso em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos mais impactantes e os resultados
            extraordinários alcançados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Case 1 */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-building text-6xl text-white/80"></i>
              </div>
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Corporativo
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Condomínio Residencial Premium
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Automação completa de 120 apartamentos com sistema de energia
                solar centralizado e controle inteligente.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Economia Mensal:</span>
                  <span className="font-bold text-accent">R$ 18.500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Payback:</span>
                  <span className="font-bold text-primary">2.8 anos</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Redução CO₂:</span>
                  <span className="font-bold text-secondary">85%</span>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
                Ver Case Completo
              </button>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-secondary to-orange-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-home text-6xl text-white/80"></i>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                Residencial
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Residência Inteligente Luxo
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Casa de alto padrão com automação total, energia solar e sistema
                de segurança integrado com IA.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Economia Mensal:</span>
                  <span className="font-bold text-accent">R$ 2.400</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Valorização:</span>
                  <span className="font-bold text-primary">+22%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Eficiência:</span>
                  <span className="font-bold text-secondary">94%</span>
                </div>
              </div>
              <button className="w-full bg-secondary hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
                Ver Case Completo
              </button>
            </div>
          </div>

          {/* Case 3 */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-accent to-green-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-industry text-6xl text-white/80"></i>
              </div>
              <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                Industrial
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Complexo Industrial Sustentável
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Projeto de eficiência energética para indústria com automação de
                processos e energia solar em larga escala.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Economia Anual:</span>
                  <span className="font-bold text-accent">R$ 480K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">ROI:</span>
                  <span className="font-bold text-primary">340%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Sustentabilidade:</span>
                  <span className="font-bold text-secondary">92%</span>
                </div>
              </div>
              <button className="w-full bg-accent hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
                Ver Case Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CasesDestaque;
