const CasesResidenciais = () => {
  return (
    <section className="py-20 bg-gray-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cases de Sucesso Residenciais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos residenciais e os resultados
            alcançados pelos nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Case 1*/}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="h-48 bg-gradient-to-br from-primary to-primary-dark relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-home text-5xl text-white/80"></i>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                Casa 250m²
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Casa Inteligente Completa
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Automação total com 45 pontos de controle, segurança integrada e
                som ambiente.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Economia energia:</span>
                  <span className="font-bold text-accent">45%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Valorização:</span>
                  <span className="font-bold text-secondary">+28%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Satisfação:</span>
                  <span className="font-bold text-primary">100%</span>
                </div>
              </div>
              {/** 
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 text-sm">
                Ver Case Completo
              </button>
              */}
            </div>
          </div>

          {/* Case 2*/}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="h-48 bg-gradient-to-br from-red-500 to-red-700 relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-shield-alt text-5xl text-white/80"></i>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                Apartamento
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Segurança Inteligente Total
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Sistema completo com 12 câmeras 4K, controle de acesso e
                automação integrada.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Detecção IA:</span>
                  <span className="font-bold text-accent">99.8%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Falsos alarmes:</span>
                  <span className="font-bold text-secondary">-95%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tempo resposta:</span>
                  <span className="font-bold text-primary">{"<"} 30s</span>
                </div>
              </div>
              {/** 
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 text-sm">
                Ver Case Completo
              </button>
              */}
            </div>
          </div>

          {/* Case 3*/}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-music text-5xl text-white/80"></i>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                Sobrado
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Casa do Som Perfeito
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Sistema de áudio multi-zona com 18 ambientes e qualidade Hi-Fi
                profissional.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Zonas de áudio:</span>
                  <span className="font-bold text-accent">18</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Qualidade:</span>
                  <span className="font-bold text-secondary">Hi-Fi</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Controle:</span>
                  <span className="font-bold text-primary">Total</span>
                </div>
              </div>
              {/** 
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 text-sm">
                Ver Case Completo
              </button>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesResidenciais;
