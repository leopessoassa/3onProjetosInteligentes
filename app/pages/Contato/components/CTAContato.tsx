function CTAContato() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Vamos Transformar seu Projeto em Realidade?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Nossa equipe está pronta para atender você. Entre em contato agora e
          receba uma consultoria técnica gratuita e personalizada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://wa.me/5583982078702"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp Direto</span>
          </a>
          <a
            href="tel:+5583982078702"
            className="border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <i className="fas fa-phone"></i>
            <span>Ligar Agora</span>
          </a>
        </div>
        <div className="flex items-center justify-center space-x-8 text-sm text-blue-200">
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Consultoria Gratuita</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Resposta em 24h</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Sem Compromisso</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTAContato;
