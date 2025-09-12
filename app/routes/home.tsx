import type { MetaFunction } from "react-router";
import HeroSection from "~/components/sections/HeroSection";
import ParaArquitetosSection from "~/components/sections/ParaArquitetosSection";
import ComoFuncionaSection from "~/components/sections/ComoFuncionaSection";
import CasesReaisSection from "~/components/sections/CasesReaisSection";
import SobreLeoSection from "~/components/sections/SobreLeoSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Leo Pessoa - Engenheiro Eletricista João Pessoa | Projetos Elétricos e Automação Residencial" },
    { name: "description", content: "Engenheiro eletricista em João Pessoa-PB especializado em projetos elétricos e automação residencial. Parceiro técnico para arquitetos com expertise em BIM e AutoCAD." },
    { name: "keywords", content: "engenheiro eletricista João Pessoa, projetos elétricos Paraíba, automação residencial João Pessoa, BIM AutoCAD, arquitetos João Pessoa, CREA-PB" },
    { property: "og:title", content: "Leo Pessoa - Engenheiro Eletricista João Pessoa" },
    { property: "og:description", content: "Parceiro técnico para arquitetos em João Pessoa. Projetos elétricos e automação residencial com BIM e AutoCAD." },
    { name: "geo.region", content: "BR-PB" },
    { name: "geo.placename", content: "João Pessoa" },
  ];
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <ParaArquitetosSection />

      <ComoFuncionaSection />

      <CasesReaisSection />

      <SobreLeoSection />

      {/* Contato */}
      <section id="contato" className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Café na praia para falar do próximo projeto?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos trabalhar juntos. 
            Sem compromisso, só uma conversa entre profissionais.
          </p>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Seu nome"
                className="w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-transparent focus:border-accent-500 focus:outline-none transition-colors"
                required
              />
              <input 
                type="email" 
                placeholder="Seu email"
                className="w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-transparent focus:border-accent-500 focus:outline-none transition-colors"
                required
              />
              <input 
                type="tel" 
                placeholder="WhatsApp"
                className="w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-transparent focus:border-accent-500 focus:outline-none transition-colors"
                required
              />
              <textarea 
                placeholder="Conte sobre seu próximo projeto"
                rows={4}
                className="w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-transparent focus:border-accent-500 focus:outline-none transition-colors"
                required
              ></textarea>
              <button 
                type="submit"
                className="w-full gradient-cta hover:bg-accent-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Leo Pessoa - Engenheiro Eletricista. Todos os direitos reservados.</p>
          <p className="mt-2 text-secondary-400">João Pessoa - PB | CREA-PB</p>
        </div>
      </footer>
    </div>
  );
}