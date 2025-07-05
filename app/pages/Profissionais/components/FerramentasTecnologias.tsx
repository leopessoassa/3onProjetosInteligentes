function FerramentasTecnologias() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ferramentas Profissionais de Projeto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos as mais avançadas ferramentas de projeto para garantir
            precisão técnica e integração perfeita com seus projetos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* AutoCAD 2D */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                <i className="fas fa-drafting-compass text-3xl text-red-500"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">AutoCAD 2D</h3>
                <p className="text-gray-600">Projetos técnicos detalhados</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Projetos elétricos e de automação em AutoCAD 2D com precisão
              técnica e documentação completa. Compatibilidade total com seus
              projetos arquitetônicos.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-red-500 text-sm"></i>
                </div>
                <span className="text-gray-700">
                  Plantas baixas elétricas detalhadas
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-red-500 text-sm"></i>
                </div>
                <span className="text-gray-700">
                  Diagramas unifilares e multifilares
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-red-500 text-sm"></i>
                </div>
                <span className="text-gray-700">
                  Layouts de automação predial
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-red-500 text-sm"></i>
                </div>
                <span className="text-gray-700">
                  Detalhes construtivos e especificações
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-red-200">
              <h4 className="font-bold text-gray-900 mb-3">
                Entregáveis AutoCAD 2D:
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Plantas baixas (.dwg)</div>
                <div>• Diagramas elétricos</div>
                <div>• Memorial descritivo</div>
                <div>• Lista de materiais</div>
                <div>• Detalhes técnicos</div>
                <div>• Layouts de automação</div>
              </div>
            </div>
          </div>

          {/* Revit BIM 3D */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mr-4">
                <i className="fas fa-cube text-3xl text-primary"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Revit BIM 3D
                </h3>
                <p className="text-gray-600">Modelagem inteligente</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Modelagem BIM 3D em Revit para projetos complexos com
              compatibilização automática e visualização realística da
              integração tecnológica.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-primary text-sm"></i>
                </div>
                <span className="text-gray-700">Modelagem 3D paramétrica</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-primary text-sm"></i>
                </div>
                <span className="text-gray-700">
                  Compatibilização automática
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-primary text-sm"></i>
                </div>
                <span className="text-gray-700">Quantitativos automáticos</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-primary text-sm"></i>
                </div>
                <span className="text-gray-700">
                  Renderizações fotorrealísticas
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-blue-200">
              <h4 className="font-bold text-gray-900 mb-3">
                Entregáveis Revit BIM:
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Modelo 3D (.rvt)</div>
                <div>• Plantas automáticas</div>
                <div>• Cortes e elevações</div>
                <div>• Tabelas de quantitativos</div>
                <div>• Renderizações 3D</div>
                <div>• Arquivos IFC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparativo de Ferramentas */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quando Usar Cada Ferramenta?
            </h3>
            <p className="text-gray-600">
              Escolhemos a ferramenta ideal baseada na complexidade e
              necessidades do seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AutoCAD 2D - Quando usar */}
            <div className="bg-white rounded-2xl p-6 border-l-4 border-red-500">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-drafting-compass text-red-500 mr-3"></i>
                AutoCAD 2D - Ideal para:
              </h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start space-x-2">
                  <i className="fas fa-arrow-right text-red-500 mt-1"></i>
                  <span>Projetos elétricos residenciais e comerciais</span>
                </div>
                <div className="flex items-start space-x-2">
                  <i className="fas fa-arrow-right text-red-500 mt-1"></i>
                  <span>SPDA (Sistema de Proteção contra Descargas)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <i className="fas fa-arrow-right text-red-500 mt-1"></i>
                  <span>Projetos com cronograma apertado</span>
                </div>
                <div className="flex items-start space-x-2">
                  <i className="fas fa-arrow-right text-red-500 mt-1"></i>
                  <span>Compatibilidade com projetos arquitetônicos 2D</span>
                </div>
                <div className="flex items-start space-x-2">
                  <i className="fas fa-arrow-right text-red-500 mt-1"></i>
                  <span>Orçamentos mais acessíveis</span>
                </div>
              </div>
            </div>

            {/* Revit BIM 3D - Quando usar */}
            <div className="bg-white rounded-2xl p-6 border-l-4 border-primary">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-cube text-primary mr-3"></i>
                Revit BIM 3D - Ideal para:
              </h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start space-x-2">
                  <i className="fas fa-arrow-right text-primary mt-1"></i>
                  <span>Projetos complexos e de grande porte</span>
                </div>
                <div className="flex items-start space-x-2">
                  <i className="fas fa-arrow-right text-primary mt-1"></i>
                  <span>Necessidade de compatibilização automática</span>
                </div>
                <div className="flex items-start space-x-2">
                  <i className="fas fa-arrow-right text-primary mt-1"></i>
                  <span>Projetos que exigem visualização 3D</span>
                </div>
                <div className="flex items-start space-x-2">
                  <i className="fas fa-arrow-right text-primary mt-1"></i>
                  <span>Integração com modelos arquitetônicos BIM</span>
                </div>
                <div className="flex items-start space-x-2">
                  <i className="fas fa-arrow-right text-primary mt-1"></i>
                  <span>Quantitativos automáticos precisos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FerramentasTecnologias;
