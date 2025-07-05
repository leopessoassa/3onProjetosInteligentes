function CtaCorporativo() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Pronto para Transformar seu Negócio?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Junte-se a mais de 30 empresas que já revolucionaram suas operações
          com nossas soluções de automação predial e projetos elétricos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5583982078702?text=Olá! Quero começar meu projeto com a 3on Projetos Inteligentes."
             className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
            <i className="fas fa-rocket"></i>
            <span>Começar Meu Projeto</span>
          </a>
          <a
            href="https://wa.me/5583982078702?text=Olá! Gostaria de Agendar uma Consultoria da 3on Projetos Inteligentes."
            className="border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
            <i className="fas fa-calendar-alt"></i>
            <span>Agendar Consultoria</span>
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-blue-200">
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Consultoria Gratuita</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Sem Compromisso</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Resposta em 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaCorporativo;
