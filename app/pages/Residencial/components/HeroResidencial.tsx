import { handleSmoothScroll } from "~/utils/ComponentUtils";

const HeroResidencial = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <i className="fas fa-home mr-2"></i>
              Soluções Residenciais
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Sua Casa <span className="text-secondary">Inteligente</span>{" "}
              Começa Aqui
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Automação residencial, segurança eletrônica, iluminação e
              sonorização inteligente para o máximo conforto e praticidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => handleSmoothScroll("#simulador-ambientes")} className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                <i className="fas fa-play"></i>
                <span>Ver Simulação</span>
              </button>
              <a
                href="https://wa.me/5583982078702?text=Olá! Gostaria de uma Consultoria Gratuita sobre Automação Residencial."
                target="_blank"
                className="border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <i className="fas fa-phone"></i>
                <span>Consultoria Gratuita</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-2xl p-6 text-center">
                  <i className="fas fa-mobile-alt text-3xl text-secondary mb-3"></i>
                  <div className="text-lg font-bold">Controle Total</div>
                  <div className="text-sm opacity-90">Via smartphone</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 text-center">
                  <i className="fas fa-shield-alt text-3xl text-accent mb-3"></i>
                  <div className="text-lg font-bold">Segurança 24h</div>
                  <div className="text-sm opacity-90">Monitoramento</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 text-center">
                  <i className="fas fa-lightbulb text-3xl text-yellow-300 mb-3"></i>
                  <div className="text-lg font-bold">Iluminação</div>
                  <div className="text-sm opacity-90">Inteligente</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 text-center">
                  <i className="fas fa-music text-3xl text-purple-300 mb-3"></i>
                  <div className="text-lg font-bold">Som Ambiente</div>
                  <div className="text-sm opacity-90">Multi-zona</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroResidencial;
