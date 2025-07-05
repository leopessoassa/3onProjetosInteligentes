function MetodoContato() {
  return (
    <section className="py-20 bg-gray-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Escolha a Melhor Forma de Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos diversos canais de atendimento para sua comodidade. Nossa
            equipe está sempre disponível para ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* WhatsApp */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors">
              <i className="fab fa-whatsapp text-3xl text-green-500 group-hover:text-white transition-colors"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Atendimento rápido e direto. Tire suas dúvidas e receba orçamentos
              instantaneamente.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-lg font-semibold text-gray-900">
                (83) 98207-8702
              </div>
              <div className="text-sm text-gray-500">Disponível 24/7</div>
            </div>
            <a
              href="https://wa.me/5583982078702?text=Olá! Gostaria de saber mais sobre os serviços da 3on Projetos Inteligentes."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 inline-block"
            >
              Conversar Agora
            </a>
          </div>

          {/* Telefone */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
              <i className="fas fa-phone text-3xl text-primary group-hover:text-white transition-colors"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Telefone</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Fale diretamente com nossos especialistas para discussões técnicas
              detalhadas.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-lg font-semibold text-gray-900">
                (83) 98207-8702
              </div>
              <div className="text-sm text-gray-500">Seg-Sex: 8h às 18h</div>
            </div>
            <a
              href="tel:+5583982078702"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 inline-block"
            >
              Ligar Agora
            </a>
          </div>

          {/* E-mail */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary transition-colors">
              <i className="fas fa-envelope text-3xl text-secondary group-hover:text-white transition-colors"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">E-mail</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Envie documentos, plantas e especificações técnicas para análise
              detalhada.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-lg font-semibold text-gray-900 break-all">
                contato@3on.eng.br
              </div>
              <div className="text-sm text-gray-500">Resposta em 24h</div>
            </div>
            <a
              href="mailto:contato@3on.eng.br?subject=Solicitação de Orçamento - Automação Predial"
              className="w-full bg-secondary hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 inline-block"
            >
              Enviar E-mail
            </a>
          </div>

          {/* Visita Técnica */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 transition-colors">
              <i className="fas fa-map-marker-alt text-3xl text-purple-500 group-hover:text-white transition-colors"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Visita Técnica
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Agendamos uma visita para análise técnica presencial e
              levantamento detalhado.
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-lg font-semibold text-gray-900">
                Gratuita
              </div>
              <div className="text-sm text-gray-500">João Pessoa e região</div>
            </div>
            <button
              onClick={() => alert("openScheduleModal()")}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
            >
              Agendar Visita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MetodoContato;
