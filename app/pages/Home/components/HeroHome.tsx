import { Link } from "react-router";

function HeroHome() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-secondary opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <i className="fas fa-award mr-2"></i>
              12 Anos de Excelência
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Projetos Inteligentes que{" "}
                <span className="text-secondary">Transformam</span> Ambientes
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
                Automação residencial e soluções corporativas com tecnologia de
                ponta e resultados comprovados.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Qual é o seu perfil?
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  to="/residencial"
                  className="profile-btn group bg-white/20 hover:bg-white hover:text-primary transition-all duration-300 rounded-xl p-4 text-center border border-white/30 hover:border-primary"
                  data-profile="residencial"
                >
                  <i className="fas fa-home text-2xl mb-2 group-hover:text-primary"></i>
                  <div className="font-semibold">Residencial</div>
                  <div className="text-sm opacity-90">Casa ou apartamento</div>
                </Link>
                {/** 
                <Link
                  to="/corporativo"
                  className="profile-btn group bg-white/20 hover:bg-white hover:text-primary transition-all duration-300 rounded-xl p-4 text-center border border-white/30 hover:border-primary"
                  data-profile="corporativo"
                >
                  <i className="fas fa-building text-2xl mb-2 group-hover:text-primary"></i>
                  <div className="font-semibold">Corporativo</div>
                  <div className="text-sm opacity-90">
                    Empresas e condomínios
                  </div>
                </Link>
                */}
                <Link
                  to="/profissionais"
                  className="profile-btn group bg-white/20 hover:bg-white hover:text-primary transition-all duration-300 rounded-xl p-4 text-center border border-white/30 hover:border-primary"
                  data-profile="profissional"
                >
                  <i className="fas fa-user-tie text-2xl mb-2 group-hover:text-primary"></i>
                  <div className="font-semibold">Profissional</div>
                  <div className="text-sm opacity-90">
                    Arquitetos e engenheiros
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <i className="fas fa-users text-4xl text-secondary mb-3"></i>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm opacity-90">Satisfação</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <i className="fas fa-home-alt text-4xl text-accent mb-3"></i>
                  <div className="text-2xl font-bold">Automação</div>
                  <div className="text-sm opacity-90">Controle inteligente</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <i className="fas fa-shield-alt text-4xl text-blue-300 mb-3"></i>
                  <div className="text-2xl font-bold">Segurança</div>
                  <div className="text-sm opacity-90">Proteção total</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <i className="fas fa-lightbulb text-4xl text-yellow-300 mb-3"></i>
                  <div className="text-2xl font-bold">Iluminação</div>
                  <div className="text-sm opacity-90">Design inteligente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
