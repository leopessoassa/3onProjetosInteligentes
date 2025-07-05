function MetricasImpacto() {
  return (
    <section className="py-16 bg-gray-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Resultados que Comprovam Nossa Excelência
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de uma década transformando ambientes com tecnologia e gerando
            economia real para nossos clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <i className="fas fa-project-diagram text-2xl text-primary"></i>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
            <div className="text-lg font-semibold text-gray-700 mb-1">
              Cômodos Entregues
            </div>
            <div className="text-sm text-gray-500">
              Residenciais e corporativos
            </div>
          </div>
          {/** 
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <i className="fas fa-leaf text-2xl text-accent"></i>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">R$ 2.8M</div>
            <div className="text-lg font-semibold text-gray-700 mb-1">
              Economia Gerada
            </div>
            <div className="text-sm text-gray-500">Em contas de energia</div>
          </div>
          */}

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
              <i className="fas fa-users text-2xl text-secondary"></i>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-lg font-semibold text-gray-700 mb-1">
              Clientes Satisfeitos
            </div>
            <div className="text-sm text-gray-500">Taxa de satisfação 98%</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <i className="fas fa-award text-2xl text-blue-600"></i>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">12</div>
            <div className="text-lg font-semibold text-gray-700 mb-1">
              Anos de Experiência
            </div>
            <div className="text-sm text-gray-500">Inovação constante</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MetricasImpacto;
