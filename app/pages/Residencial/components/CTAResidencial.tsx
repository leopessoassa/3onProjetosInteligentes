import { useEffect, useRef, useState } from "react";
import CalculadoraInvestimento from "~/components/CalculadoraInvestimento/CalculadoraInvestimento";

interface CalculatorData {
  tipoResidencia: string;
  areaResidencia: number;
  numQuartos: number;
  numBanheiros: number;
  solucoes: string[];
  orcamentoDisponivel: string;
}

interface CalculatorResults {
  investimentoTotal: number;
  custoPorM2: number;
  economiaMensal: number;
  paybackAnos: number;
  itensInclusos: string[];
}

const CTAResidencial = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Transforme sua Casa em um Lar Inteligente
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mais de 50 famílias já vivem o futuro em suas casas. Descubra como
            a automação residencial pode revolucionar seu dia a dia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/** 
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <i className="fas fa-calculator"></i>
              <span>Calcular Investimento</span>
            </button>
            */}
            <a
              href="https://wa.me/5583982078702?text=Olá! Gostaria de saber mais sobre automação residencial."
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
              <span>Visita Técnica Gratuita</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle"></i>
              <span>Orçamento Sem Compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle"></i>
              <span>Garantia de 5 Anos</span>
            </div>
          </div>
        </div>
      </section>
      {/* Modal Calculadora de Investimento
      <CalculadoraInvestimento
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} />*/}
    </>
  );
};

export default CTAResidencial;
