import ContactForm from "./ContactForm";

function FormularioContato() {
  return (
    <section id="formulario-de-contato" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Solicite seu Orçamento
              </h2>
              <p className="text-xl text-gray-600">
                Preencha o formulário e receba uma proposta personalizada em até
                24 horas.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Endereço
                    </h4>
                    <p className="text-gray-600">
                      João Pessoa - PB
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Telefone
                    </h4>
                    <p className="text-gray-600">
                      <a
                        href="tel:+5583982078702"
                        className="hover:text-primary transition-colors"
                      >
                        (83) 98207-8702
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      Segunda a Sexta: 8h às 18h
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600">
                      <a
                        href="mailto:contato@3on.eng.br"
                        className="hover:text-primary transition-colors break-all"
                      >
                        contato@3on.eng.br
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Resposta em até 24h</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-whatsapp text-xl text-green-500"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      WhatsApp
                    </h4>
                    <p className="text-gray-600">
                      <a
                        href="https://wa.me/5583982078702"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-500 transition-colors"
                      >
                        (83) 98207-8702
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Disponível 24/7</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <i className="fas fa-clock text-primary mr-2"></i>
                  Horário de Funcionamento
                </h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-medium">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-medium">8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-medium text-red-500">Fechado</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-blue-200">
                    <span className="text-green-600 font-medium">
                      <i className="fab fa-whatsapp mr-1"></i>
                      WhatsApp disponível 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map * /}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">
                  Nossa Localização
                </h3>
                <p className="text-gray-600">
                  Venha nos visitar ou agende uma visita técnica
                </p>
              </div>
              <div className="h-64 bg-gray-200 relative">
                {/* Placeholder for Google Maps * /}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="text-center">
                    <i className="fas fa-map-marked-alt text-4xl text-primary mb-4"></i>
                    <p className="text-gray-600 font-medium">Mapa Interativo</p>
                    <p className="text-sm text-gray-500">João Pessoa - PB</p>
                  </div>
                </div>
                {/* Real Google Maps integration would go here * /}
              </div>
              <div className="p-4">
                <a
                  href="https://maps.google.com/?q=João+Pessoa+PB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-block text-center"
                >
                  <i className="fas fa-directions mr-2"></i>
                  Ver no Google Maps
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-gray-600">Tempo de Resposta</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">150+</div>
                <div className="text-sm text-gray-600">Cômodos Projetados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormularioContato;
