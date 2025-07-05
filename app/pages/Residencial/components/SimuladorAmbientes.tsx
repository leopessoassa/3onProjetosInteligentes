import { useState } from "react";

const SimuladorAmbientes = () => {
  const [ambienteAtivo, setAmbienteAtivo] = useState<string>("sala");

  const isActive = (path: string) => {
    return ambienteAtivo === path
      ? "ambiente-btn active bg-primary text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
      : "ambiente-btn bg-gray-200 text-gray-700 hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300";
  };

  return (
    <section className="py-20 bg-white" id="simulador-ambientes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simule sua Casa Inteligente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha os ambientes e veja como nossa tecnologia pode transformar
            cada espaço da sua residência.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
          {/* Seletor de Ambientes*/}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setAmbienteAtivo("sala")}
              className={isActive("sala")}
            >
              <i className="fas fa-couch mr-2"></i>Sala de Estar
            </button>
            <button
              onClick={() => setAmbienteAtivo("quarto")}
              className={isActive("quarto")}
            >
              <i className="fas fa-bed mr-2"></i>Quarto
            </button>
            <button
              onClick={() => setAmbienteAtivo("cozinha")}
              className={isActive("cozinha")}
            >
              <i className="fas fa-utensils mr-2"></i>Cozinha
            </button>
            <button
              onClick={() => setAmbienteAtivo("area-externa")}
              className={isActive("area-externa")}
            >
              <i className="fas fa-tree mr-2"></i>Área Externa
            </button>
          </div>

          {/* Conteúdo dos Ambientes*/}

          <div
            id="sala"
            className={`ambiente-content ${
              ambienteAtivo === "sala" ? "block" : "hidden"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Sala de Estar Inteligente
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transforme sua sala no centro de entretenimento da casa com
                  controle inteligente de iluminação, som ambiente e
                  climatização.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-lightbulb text-yellow-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Iluminação ambiente com 16 milhões de cores
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-music text-purple-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Som surround integrado invisível
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-tv text-blue-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Controle universal de entretenimento
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-thermometer-half text-green-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Climatização automática por presença
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 text-center">
                <i className="fas fa-couch text-8xl text-primary/60 mb-6"></i>
                <div className="space-y-4">
                  <div className="bg-white/80 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      Cenário "Cinema"
                    </div>
                    <div className="text-sm text-gray-600">
                      Luzes dimmerizadas + Som surround
                    </div>
                  </div>
                  <div className="bg-white/80 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      Cenário "Festa"
                    </div>
                    <div className="text-sm text-gray-600">
                      Luzes coloridas + Música ambiente
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="quarto"
            className={`ambiente-content ${
              ambienteAtivo === "quarto" ? "block" : "hidden"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Quarto Inteligente
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Crie o ambiente perfeito para descanso com automação que se
                  adapta aos seus horários e preferências de sono.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-moon text-blue-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Simulação do pôr do sol para melhor sono
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-thermometer-half text-green-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Temperatura ideal automática
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-volume-down text-purple-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Sons relaxantes e ruído branco
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-shield-alt text-red-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Monitoramento de segurança discreto
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 text-center">
                <i className="fas fa-bed text-8xl text-blue-400 mb-6"></i>
                <div className="space-y-4">
                  <div className="bg-white/80 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      Cenário "Dormir"
                    </div>
                    <div className="text-sm text-gray-600">
                      Luzes off + Temperatura ideal
                    </div>
                  </div>
                  <div className="bg-white/80 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      Cenário "Acordar"
                    </div>
                    <div className="text-sm text-gray-600">
                      Luz gradual + Música suave
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="cozinha"
            className={`ambiente-content ${
              ambienteAtivo === "cozinha" ? "block" : "hidden"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Cozinha Inteligente
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Torne o coração da casa ainda mais funcional com automação que
                  facilita o dia a dia e cria momentos especiais.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-lightbulb text-yellow-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Iluminação focada para preparo de alimentos
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-music text-purple-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Som ambiente para momentos gastronômicos
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-fan text-green-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Exaustão automática por detecção de fumaça
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-fire-extinguisher text-red-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Detecção de vazamento de gás
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 text-center">
                <i className="fas fa-utensils text-8xl text-orange-400 mb-6"></i>
                <div className="space-y-4">
                  <div className="bg-white/80 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      Cenário "Cozinhar"
                    </div>
                    <div className="text-sm text-gray-600">
                      Luz intensa + Exaustão automática
                    </div>
                  </div>
                  <div className="bg-white/80 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      Cenário "Jantar"
                    </div>
                    <div className="text-sm text-gray-600">
                      Luz ambiente + Música suave
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="area-externa"
            className={`ambiente-content ${
              ambienteAtivo === "area-externa" ? "block" : "hidden"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Área Externa Inteligente
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Estenda o conforto e a segurança para toda área externa com
                  automação resistente e funcional para qualquer clima.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-sun text-yellow-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Iluminação paisagística automática
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-tint text-blue-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Irrigação inteligente por sensores
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-video text-red-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Câmeras de segurança perimetral
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-music text-purple-500"></i>
                    </div>
                    <span className="text-gray-700">
                      Som ambiente resistente à água
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 text-center">
                <i className="fas fa-tree text-8xl text-green-400 mb-6"></i>
                <div className="space-y-4">
                  <div className="bg-white/80 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      Cenário "Festa"
                    </div>
                    <div className="text-sm text-gray-600">
                      Luzes coloridas + Som potente
                    </div>
                  </div>
                  <div className="bg-white/80 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      Cenário "Segurança"
                    </div>
                    <div className="text-sm text-gray-600">
                      Iluminação + Câmeras ativas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimuladorAmbientes;
