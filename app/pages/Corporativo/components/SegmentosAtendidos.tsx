function SegmentosAtendidos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Segmentos Corporativos Atendidos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiência comprovada em diversos setores com soluções
            personalizadas para cada tipo de negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Condomínios */}
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-building text-3xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Condomínios
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Automação predial, segurança integrada e eficiência energética
              para condomínios residenciais e comerciais.
            </p>
            <div className="text-sm text-gray-500">
              <div>• Automação áreas comuns</div>
              <div>• CFTV perimetral</div>
              <div>• Controle de elevadores</div>
            </div>
          </div>

          {/* Indústrias */}
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-industry text-3xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Indústrias</h3>
            <p className="text-gray-600 text-sm mb-4">
              Projetos elétricos industriais, automação de processos e sistemas
              de média tensão com máxima segurança.
            </p>
            <div className="text-sm text-gray-500">
              <div>• Projetos média tensão</div>
              <div>• Automação industrial</div>
              <div>• Eficiência energética</div>
            </div>
          </div>

          {/* Hospitais */}
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-hospital text-3xl text-accent"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Hospitais</h3>
            <p className="text-gray-600 text-sm mb-4">
              Sistemas críticos com redundância, automação hospitalar e projetos
              elétricos especializados para saúde.
            </p>
            <div className="text-sm text-gray-500">
              <div>• Sistemas críticos</div>
              <div>• Automação hospitalar</div>
              <div>• Backup de energia</div>
            </div>
          </div>

          {/* Escritórios */}
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-briefcase text-3xl text-purple-500"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Escritórios
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Automação corporativa, iluminação inteligente e sistemas de
              segurança para ambientes corporativos.
            </p>
            <div className="text-sm text-gray-500">
              <div>• Automação corporativa</div>
              <div>• Iluminação LED</div>
              <div>• Controle de acesso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SegmentosAtendidos;
