import { handleSmoothScroll } from "~/utils/ComponentUtils";

function HeroProfissionais() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <i className="fas fa-handshake mr-2"></i>
              Parcerias Profissionais
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Parcerias que{" "}
              <span className="text-secondary">Potencializam</span> Seus
              Projetos
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Suporte técnico especializado para arquitetos, engenheiros e
              designers. Projetos em AutoCAD 2D e Revit BIM 3D, automação
              predial e SPDA com excelência técnica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  handleSmoothScroll("#como-funciona-nossa-parceria")
                }
                className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <i className="fas fa-user-plus"></i>
                <span>Tornar-se Parceiro</span>
              </button>
              {/** 
              <button className="border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <i className="fas fa-download"></i>
                <span>Material Técnico</span>
              </button>
              */}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-2xl p-6 text-center">
                  <i className="fas fa-users text-3xl text-secondary mb-3"></i>
                  <div className="text-lg font-bold">180+</div>
                  <div className="text-sm opacity-90">Parceiros ativos</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 text-center">
                  <i className="fas fa-drafting-compass text-3xl text-accent mb-3"></i>
                  <div className="text-lg font-bold">AutoCAD</div>
                  <div className="text-sm opacity-90">Projetos 2D</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 text-center">
                  <i className="fas fa-cube text-3xl text-blue-300 mb-3"></i>
                  <div className="text-lg font-bold">Revit BIM</div>
                  <div className="text-sm opacity-90">Modelagem 3D</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 text-center">
                  <i className="fas fa-headset text-3xl text-yellow-300 mb-3"></i>
                  <div className="text-lg font-bold">24/7</div>
                  <div className="text-sm opacity-90">Suporte técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroProfissionais;
