import { handleSmoothScroll } from "~/utils/ComponentUtils";

function TiposParceria() {
  return (
    <section className="py-20 bg-gray-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Parcerias Especializadas por Profissão
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada profissional tem necessidades específicas. Oferecemos suporte
            personalizado para diferentes áreas de atuação.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Arquitetos */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-48 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-drafting-compass text-6xl text-white/80"></i>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                Mais Procurado
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Para Arquitetos
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Integração perfeita entre design arquitetônico e tecnologia.
                Projetos em AutoCAD 2D e Revit BIM 3D com foco na estética e
                funcionalidade.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-cube text-primary mr-3"></i>
                  Projetos BIM 3D integrados ao seu design
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-palette text-primary mr-3"></i>
                  Automação que valoriza a estética
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-lightbulb text-primary mr-3"></i>
                  Iluminação arquitetônica inteligente
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-handshake text-primary mr-3"></i>
                  Suporte em apresentações para clientes
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">+25%</div>
                  <div className="text-sm text-gray-600">
                    Valorização dos projetos com automação
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  handleSmoothScroll("#como-funciona-nossa-parceria")
                }
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300"
              >
                Parceria para Arquitetos
              </button>
            </div>
          </article>

          {/* Engenheiros */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-48 bg-gradient-to-br from-secondary to-orange-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-hard-hat text-6xl text-white/80"></i>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                Técnico
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Para Engenheiros
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Suporte técnico especializado em projetos elétricos, automação
                predial e SPDA. Conformidade total com normas técnicas
                brasileiras.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-file-alt text-secondary mr-3"></i>
                  Projetos elétricos em AutoCAD 2D
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-bolt text-secondary mr-3"></i>
                  SPDA conforme NBR 5419
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-network-wired text-secondary mr-3"></i>
                  Automação predial KNX/BACnet
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-certificate text-secondary mr-3"></i>
                  ART e documentação técnica
                </div>
              </div>

              <div className="bg-orange-50 rounded-2xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-gray-600">
                    Conformidade com normas técnicas
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  handleSmoothScroll("#como-funciona-nossa-parceria")
                }
                className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300"
              >
                Parceria para Engenheiros
              </button>
            </div>
          </article>

          {/* Designers */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-48 bg-gradient-to-br from-accent to-green-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-paint-brush text-6xl text-white/80"></i>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                Design
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Para Designers
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tecnologia invisível que valoriza o design de interiores.
                Automação discreta e iluminação que realça cada ambiente.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-eye-slash text-accent mr-3"></i>
                  Automação invisível e discreta
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-palette text-accent mr-3"></i>
                  Iluminação com 16 milhões de cores
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-mobile-alt text-accent mr-3"></i>
                  Controle integrado ao design
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-star text-accent mr-3"></i>
                  Valorização do projeto final
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">+40%</div>
                  <div className="text-sm text-gray-600">
                    Aumento no valor dos projetos
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  handleSmoothScroll("#como-funciona-nossa-parceria")
                }
                className="w-full bg-accent hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300"
              >
                Parceria para Designers
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default TiposParceria;
