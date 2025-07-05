import { handleSmoothScroll } from "~/utils/ComponentUtils";

function CTAProfissionais() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Pronto para Fazer Parte da Nossa Rede?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Junte-se a mais de 180 profissionais que já expandiram seus negócios
          com nossa parceria estratégica em automação predial e projetos
          elétricos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => handleSmoothScroll("#como-funciona-nossa-parceria")}
            className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <i className="fas fa-user-plus"></i>
            <span>Solicitar Parceria</span>
          </button>
          <a
            href="https://wa.me/5583982078702?text=Olá! Gostaria de saber mais sobre as parcerias profissionais da 3on."
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <i className="fab fa-whatsapp"></i>
            <span>Falar no WhatsApp</span>
          </a>
        </div>
        <div className="flex items-center justify-center space-x-8 text-sm text-blue-200">
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Análise Gratuita</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Sem Compromisso</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Resposta em 48h</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTAProfissionais;
