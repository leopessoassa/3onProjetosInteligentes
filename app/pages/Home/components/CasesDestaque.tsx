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
                <img src="./images/projeto-residencial-cond.-ville-cristal-gravata-pe.jpeg" alt="Residência Alto Padrão - Gravatá-PE" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Casa em condomínio
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Condomínio Ville Cristal - Gravatá - PE
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Projeto de automação residencial com controle de iluminação, som ambiente e sistema de redes.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Tamanho:</span>
                  <span className="font-bold text-accent">400m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Número de circuitos:</span>
                  <span className="font-bold text-primary">63</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Tecnologia:</span>
                  <span className="font-bold text-secondary">Cabeada</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Projeto Elétrico</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Automação</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Iluminação</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Persianas</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Som Ambiente</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Climatização</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Rede Wifi</span>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-secondary to-orange-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="./images/projeto-residencial-cond.-alphaville-paraiba.png" alt="Residência Alto Padrão - Alphaville Paraíba" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Casa em condomínio
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Condomínio Alphaville Paraíba - Bayeux - PB
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Projeto elétrico completo com sistema de iluminação personalizada e controle de ambientes por aplicativo, sistema de segurança integrado com IA.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Tamanho:</span>
                  <span className="font-bold text-accent">220m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Número de circuitos:</span>
                  <span className="font-bold text-primary">35</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Tecnologia:</span>
                  <span className="font-bold text-secondary">Cabeada</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Projeto Elétrico</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Automação</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Iluminação</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Persianas</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Som Ambiente</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Climatização</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Rede Wifi</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Aspiração Central</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Sistema de segurança</span>
              </div>
            </div>
          </div>

          {/* Case 3 */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-accent to-green-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="./images/projeto-residencial-apartamento-3quartos-manaira-pb.png" alt="Apartamento 3 quartos em Manaíra - João Pessoa - PB" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                Apartamento
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Apartamento 3 quartos - João Pessoa - PB
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Reforma para projeto de iluminação inteligente e climatização
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Tamanho:</span>
                  <span className="font-bold text-accent">84m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Número de circuitos:</span>
                  <span className="font-bold text-primary">11</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Tecnologia:</span>
                  <span className="font-bold text-secondary">Sem fio Zigbee</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Automação</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Iluminação</span>
                <span className="bg-secondary text-gray-700 px-3 py-1 rounded-full text-sm">Climatização</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CasesDestaque;
