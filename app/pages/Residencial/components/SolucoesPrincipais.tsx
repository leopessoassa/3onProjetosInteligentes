import { Link, useNavigate } from "react-router";

const SolucoesPrincipais = () => {
  const navigate = useNavigate();
  function handleNavigate(url: string): void {
    navigate(url);
  }

  return (
    <section className="py-20 bg-gray-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nossas Soluções Residenciais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia de ponta para transformar sua residência em um ambiente
            inteligente, confortável e seguro.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Automação Residencial*/}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-home-alt text-8xl text-white/80"></i>
              </div>
              <div className="absolute top-6 left-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold">
                  Mais Popular
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Automação Residencial
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Controle inteligente de todos os sistemas da sua casa.
                Iluminação, climatização, persianas e muito mais na palma da
                mão.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Controle via smartphone e comandos de voz
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Cenários personalizados e automações
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Integração com Alexa, Google e Siri
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Expansão modular conforme necessidade
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">20%</div>
                    <div className="text-sm text-gray-600">
                      Economia de material
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">+25%</div>
                    <div className="text-sm text-gray-600">Valorização</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <button onClick={() => handleNavigate("/contato#formulario-de-contato")} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300">
                  Solicitar Orçamento
                </button>
                {/*
                <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300">
                  Solicitar Orçamento
                </button>
                */ }
              </div>
            </div>
          </div>

          {/* Segurança Eletrônica*/}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-red-500 to-red-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-shield-alt text-8xl text-white/80"></i>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Segurança Eletrônica
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Proteção completa com câmeras inteligentes, alarmes e controle
                de acesso. Monitoramento 24h com tecnologia de IA.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-red-500 text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Câmeras 4K com visão noturna avançada
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-red-500 text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Detecção inteligente de movimento e faces
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-red-500 text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Alertas instantâneos no smartphone
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-red-500 text-sm"></i>
                  </div>
                  <span className="text-gray-700">
                    Integração com automação residencial
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-500">99.9%</div>
                    <div className="text-sm text-gray-600">Confiabilidade</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">24/7</div>
                    <div className="text-sm text-gray-600">Monitoramento</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button onClick={() => handleNavigate("/contato#formulario-de-contato")} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300">
                  Solicitar Orçamento
                </button>
                {/** 
                <button className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300">
                  Saiba Mais
                </button>
                */}
              </div>
            </div>
          </div>
        </div>

        {/* Soluções Complementares*/}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Iluminação Inteligente*/}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mr-4">
                <i className="fas fa-lightbulb text-2xl text-yellow-500"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Iluminação Inteligente
                </h3>
                <p className="text-gray-600">Design e funcionalidade</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Sistema de iluminação LED inteligente com controle total de
              intensidade, cores e criação de ambientes únicos para cada
              momento.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-palette text-yellow-500 mr-3"></i>
                16 milhões de cores e tons de branco
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-clock text-yellow-500 mr-3"></i>
                Programação automática e cenários
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-leaf text-yellow-500 mr-3"></i>
                Até 80% de economia energética
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-sync text-yellow-500 mr-3"></i>
                Sincronização com música e filmes
              </div>
            </div>
            <button onClick={() => handleNavigate("/contato#formulario-de-contato")} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
              Solicitar Orçamento
            </button>
          </div>

          {/* Sonorização Ambiente*/}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mr-4">
                <i className="fas fa-music text-2xl text-purple-500"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Sonorização Ambiente
                </h3>
                <p className="text-gray-600">Som de alta qualidade</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Sistema de áudio multi-zona com controle independente por
              ambiente. Música de qualidade profissional em toda sua casa.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-volume-up text-purple-500 mr-3"></i>
                Som Hi-Fi em todos os ambientes
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-wifi text-purple-500 mr-3"></i>
                Streaming integrado (Spotify, Apple Music)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-sliders-h text-purple-500 mr-3"></i>
                Controle independente por zona
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-microphone text-purple-500 mr-3"></i>
                Comando de voz integrado
              </div>
            </div>
            <button onClick={() => handleNavigate("/contato#formulario-de-contato")} className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolucoesPrincipais;
