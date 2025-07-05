import PartnershipForm from "./PartnershipForm";

function ProcessoParceria() {
  return (
    <section id="como-funciona-nossa-parceria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona Nossa Parceria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Processo simples e transparente para iniciar uma parceria
            estratégica de longo prazo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Etapa 1 */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-plus text-3xl text-white"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cadastro</h3>
            <p className="text-gray-600 text-sm">
              Preencha o formulário de parceria com suas informações
              profissionais e área de atuação.
            </p>
          </div>

          {/* Etapa 2 */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-3xl text-white"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Reunião</h3>
            <p className="text-gray-600 text-sm">
              Agendamos uma reunião para conhecer melhor seu perfil e alinhar
              expectativas da parceria.
            </p>
          </div>

          {/* Etapa 3 */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-file-contract text-3xl text-white"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contrato</h3>
            <p className="text-gray-600 text-sm">
              Assinatura do contrato de parceria com condições transparentes e
              benefícios definidos.
            </p>
          </div>

          {/* Etapa 4 */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-3xl text-white"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Início</h3>
            <p className="text-gray-600 text-sm">
              Início imediato da parceria com acesso a todos os benefícios e
              suporte técnico especializado.
            </p>
          </div>
        </div>

        {/* Formulário de Parceria */}
        <div id="solicite-sua-parceria" className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Solicite sua Parceria Agora
            </h3>
            <p className="text-gray-600">
              Preencha o formulário e nossa equipe entrará em contato em até 24
              horas para alinhar os detalhes da parceria.
            </p>
          </div>

          <PartnershipForm />
        </div>
      </div>
    </section>
  );
}

export default ProcessoParceria;
