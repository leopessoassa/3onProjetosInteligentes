import { useEffect, useRef, useState } from "react";
import "./CalculadoraInvestimento.css";

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

interface CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalculadoraInvestimento = ({ isOpen, onClose }: CalculatorProps) => {
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    tipoResidencia: "",
    areaResidencia: 0,
    numQuartos: 2,
    numBanheiros: 1,
    solucoes: [],
    orcamentoDisponivel: "",
  });
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [showResults, setShowResults] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openCalculatorModal = () => {
    const modal = document.getElementById('calculatorModal');
    const modalContent = document.getElementById('calculatorModalContent');
    
    modal!.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      modalContent!.classList.remove('scale-95', 'opacity-0');
      modalContent!.classList.add('scale-100', 'opacity-100');
    }, 10);
  };

  const closeCalculatorModal = () => {
    const modal = document.getElementById('calculatorModal');
    const modalContent = document.getElementById('calculatorModalContent');
    
    modalContent!.classList.remove('scale-100', 'opacity-100');
    modalContent!.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal!.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 300);

    setShowResults(false);
    setResults(null);
    onClose();
  };

  const handleInputChange = (field: keyof CalculatorData, value: any) => {
    setCalculatorData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSolutionChange = (solution: string, checked: boolean) => {
    setCalculatorData((prev) => ({
      ...prev,
      solucoes: checked
        ? [...prev.solucoes, solution]
        : prev.solucoes.filter((s) => s !== solution),
    }));
  };

  const calcularInvestimentoResidencial = () => {
    const {
      tipoResidencia,
      areaResidencia,
      numQuartos,
      numBanheiros,
      solucoes,
    } = calculatorData;

    if (!tipoResidencia || !areaResidencia) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (solucoes.length === 0) {
      alert("Selecione pelo menos uma solução desejada.");
      return;
    }

    let investimentoTotal = 0;
    let economiaMensal = 0;
    const itens: string[] = [];

    const multiplicadores: Record<string, number> = {
      apartamento: 1.0,
      "casa-terrea": 1.1,
      sobrado: 1.2,
      cobertura: 1.3,
      "casa-campo": 1.15,
    };

    const multiplicador = multiplicadores[tipoResidencia] || 1.0;

    if (solucoes.includes("completa")) {
      investimentoTotal =
        (areaResidencia * 450 + numQuartos * 3500 + numBanheiros * 1200) *
        multiplicador *
        0.85;
      economiaMensal = areaResidencia * 2.5 + numQuartos * 25;
      itens.push(
        "Iluminação inteligente completa",
        "Segurança residencial",
        "Climatização automática",
        "Som ambiente multizona",
        "Central de automação",
        "App de controle personalizado",
        "Instalação e configuração",
        "Treinamento de uso"
      );
    } else {
      if (solucoes.includes("iluminacao")) {
        investimentoTotal +=
          (areaResidencia * 120 + numQuartos * 2500) * multiplicador;
        economiaMensal += areaResidencia * 1.8 + numQuartos * 15;
        itens.push(
          "Iluminação LED inteligente",
          "Sensores de presença",
          "Dimmers automáticos"
        );
      }

      if (solucoes.includes("seguranca")) {
        investimentoTotal += (3500 + areaResidencia * 25) * multiplicador;
        itens.push(
          "Câmeras de segurança",
          "Central de alarme",
          "Sensores de movimento",
          "App de monitoramento"
        );
      }

      if (solucoes.includes("climatizacao")) {
        investimentoTotal +=
          (numQuartos * 1800 + numBanheiros * 800) * multiplicador;
        economiaMensal += numQuartos * 35 + numBanheiros * 15;
        itens.push(
          "Controle inteligente de ar-condicionado",
          "Sensores de temperatura",
          "Programação automática"
        );
      }

      if (solucoes.includes("som")) {
        const zonas = Math.ceil((numQuartos + 2) / 2);
        investimentoTotal += zonas * 2200 * multiplicador;
        itens.push(
          `Sistema de som ${zonas} zonas`,
          "Controle via smartphone",
          "Streaming integrado"
        );
      }
    }

    investimentoTotal += 2500;

    const paybackAnos =
      economiaMensal > 0 ? investimentoTotal / (economiaMensal * 12) : 0;

    const calculatedResults: CalculatorResults = {
      investimentoTotal,
      custoPorM2: Math.round(investimentoTotal / areaResidencia),
      economiaMensal: Math.round(economiaMensal),
      paybackAnos,
      itensInclusos: itens,
    };

    setResults(calculatedResults);
    setShowResults(true);
  };

  useEffect(() => {
    if (isOpen) {
      openCalculatorModal();
    }
  }, [isOpen]);

  /*useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeCalculatorModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);*/

  return (
    <div
      id="calculatorModal"
      className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4"
      ref={modalRef}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-95 opacity-0"
        id="calculatorModalContent"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-6 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Calculadora de Investimento
              </h3>
              <p className="text-blue-100">
                Descubra quanto custa automatizar sua casa
              </p>
            </div>
            <button
              onClick={() => closeCalculatorModal()}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <i className="fas fa-times text-white"></i>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulário */}
            <div className="space-y-6">
              <div className="text-center lg:text-left mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Dados da sua Residência
                </h4>
                <p className="text-gray-600">
                  Preencha as informações para calcular o investimento
                  personalizado
                </p>
              </div>

              {/* Tipo de Residência */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-home text-primary mr-2"></i>
                  Tipo de Residência *
                </label>
                <select
                  id="tipoResidencia"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="casa-terrea">Casa Térrea</option>
                  <option value="sobrado">Sobrado</option>
                  <option value="cobertura">Cobertura</option>
                  <option value="casa-campo">Casa de Campo</option>
                </select>
              </div>

              {/* Área */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-ruler-combined text-secondary mr-2"></i>
                  Área da Residência (m²) *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="areaResidencia"
                    placeholder="Ex: 120"
                    min="30"
                    step="10"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-400 text-sm">m²</span>
                  </div>
                </div>
              </div>

              {/* Número de Cômodos */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quartos
                  </label>
                  <select
                    id="numQuartos"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Banheiros
                  </label>
                  <select
                    id="numBanheiros"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>

              {/* Soluções Desejadas */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  <i className="fas fa-cogs text-accent mr-2"></i>
                  Soluções Desejadas *
                </label>
                <div className="space-y-3">
                  {/* Iluminação */}
                  <label className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      id="iluminacaoAuto"
                      value="iluminacao"
                      className="mt-1 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-lightbulb text-yellow-500"></i>
                        <span className="font-semibold text-gray-900">
                          Iluminação Inteligente
                        </span>
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                          Mais Popular
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Controle de intensidade, cores e automação por presença
                      </div>
                      <div className="text-xs text-yellow-600 mt-1 font-medium">
                        A partir de R$ 2.500 por cômodo
                      </div>
                    </div>
                  </label>

                  {/* Segurança */}
                  <label className="flex items-start space-x-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      id="segurancaRes"
                      value="seguranca"
                      className="mt-1 rounded border-gray-300 text-red-500 focus:ring-red-500 focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-shield-alt text-red-500"></i>
                        <span className="font-semibold text-gray-900">
                          Segurança Residencial
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Câmeras, alarmes, sensores e monitoramento via app
                      </div>
                      <div className="text-xs text-red-600 mt-1 font-medium">
                        A partir de R$ 3.500 para casa completa
                      </div>
                    </div>
                  </label>

                  {/* Climatização */}
                  <label className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      id="climatizacao"
                      value="climatizacao"
                      className="mt-1 rounded border-gray-300 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-thermometer-half text-blue-500"></i>
                        <span className="font-semibold text-gray-900">
                          Climatização Inteligente
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Controle automático de ar-condicionado e ventilação
                      </div>
                      <div className="text-xs text-blue-600 mt-1 font-medium">
                        A partir de R$ 1.800 por ambiente
                      </div>
                    </div>
                  </label>

                  {/* Som Ambiente */}
                  <label className="flex items-start space-x-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      id="somAmbiente"
                      value="som"
                      className="mt-1 rounded border-gray-300 text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-music text-purple-500"></i>
                        <span className="font-semibold text-gray-900">
                          Som Ambiente
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Sistema de áudio multizona com controle via app
                      </div>
                      <div className="text-xs text-purple-600 mt-1 font-medium">
                        A partir de R$ 2.200 por zona
                      </div>
                    </div>
                  </label>

                  {/* Automação Completa */}
                  <label className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      id="automacaoCompleta"
                      value="completa"
                      className="mt-1 rounded border-gray-300 text-green-500 focus:ring-green-500 focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-home text-green-500"></i>
                        <span className="font-semibold text-gray-900">
                          Automação Completa
                        </span>
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                          Recomendado
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Pacote completo com todas as soluções integradas
                      </div>
                      <div className="text-xs text-green-600 mt-1 font-medium">
                        Desconto de 15% no pacote completo
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Orçamento */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-dollar-sign text-green-500 mr-2"></i>
                  Orçamento Disponível (Opcional)
                </label>
                <select
                  id="orcamentoDisponivel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                >
                  <option value="">Selecione a faixa</option>
                  <option value="ate-15k">Até R$ 15.000</option>
                  <option value="15k-30k">R$ 15.000 - R$ 30.000</option>
                  <option value="30k-50k">R$ 30.000 - R$ 50.000</option>
                  <option value="50k-80k">R$ 50.000 - R$ 80.000</option>
                  <option value="80k-mais">Acima de R$ 80.000</option>
                  <option value="flexivel">Flexível</option>
                </select>
              </div>

              {/* Botão Calcular */}
              <div className="pt-4">
                <button
                  onClick={() => "calcularInvestimentoResidencial()"}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-calculator mr-2"></i>
                  Calcular Investimento
                </button>
              </div>
            </div>

            {/* Área de Resultados */}
            <div
              id="resultadosCalc"
              className="bg-gray-50 rounded-2xl p-6 hidden"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-2xl text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Seu Projeto Personalizado
                </h4>
                <p className="text-gray-600">
                  Estimativa baseada nas suas necessidades
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {/* Investimento Total */}
                <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">
                      Investimento Total
                    </div>
                    <div
                      id="investimentoTotal"
                      className="text-2xl font-bold text-primary"
                    >
                      R$ 0
                    </div>
                    <div className="text-xs text-gray-500">
                      Instalação completa
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-coins text-xl text-primary"></i>
                  </div>
                </div>

                {/* Investimento por m² */}
                <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">
                      Custo por m²
                    </div>
                    <div
                      id="custoPorM2"
                      className="text-2xl font-bold text-secondary"
                    >
                      R$ 0
                    </div>
                    <div className="text-xs text-gray-500">
                      Valor médio por metro quadrado
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-ruler text-xl text-secondary"></i>
                  </div>
                </div>

                {/* Economia Mensal */}
                <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">
                      Economia Mensal
                    </div>
                    <div
                      id="economiaMensal"
                      className="text-2xl font-bold text-accent"
                    >
                      R$ 0
                    </div>
                    <div className="text-xs text-gray-500">
                      Redução na conta de luz
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-piggy-bank text-xl text-accent"></i>
                  </div>
                </div>

                {/* Payback */}
                <div className="bg-gradient-to-r from-accent to-green-600 rounded-xl p-4 text-white text-center shadow-lg">
                  <div className="text-sm opacity-90 font-medium">
                    Tempo de Retorno
                  </div>
                  <div id="paybackTempo" className="text-3xl font-bold mt-1">
                    0 anos
                  </div>
                  <div className="text-xs opacity-80 mt-1">
                    Quando o investimento se paga
                  </div>
                </div>
              </div>

              {/* Detalhamento */}
              <div
                id="detalhamentoProjeto"
                className="bg-white rounded-xl p-4 mb-6 shadow-sm"
              >
                <h5 className="font-bold text-gray-900 mb-3">
                  Itens Inclusos:
                </h5>
                <div
                  id="itensInclusos"
                  className="space-y-2 text-sm text-gray-700"
                >
                  {/* Será preenchido dinamicamente */}
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="space-y-3">
                <button className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Agendar Visita Técnica</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/5583999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <i className="fab fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                  <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                    <i className="fas fa-download"></i>
                    <span>PDF</span>
                  </button>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-2">
                  <i className="fas fa-info-circle text-blue-500 mt-0.5"></i>
                  <div className="text-xs text-blue-700">
                    <strong>Importante:</strong> Esta é uma estimativa baseada
                    em valores médios. O orçamento final pode variar conforme
                    especificações técnicas e condições do local. Solicite uma
                    visita técnica para orçamento preciso.
                  </div>
                </div>
              </div>
            </div>

            {/* Estado Inicial */}
            <div
              id="estadoInicialCalc"
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[500px]"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-home text-4xl text-primary"></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Calcule seu Investimento
              </h4>
              <p className="text-gray-600 mb-6 max-w-sm">
                Preencha os dados ao lado para descobrir quanto custa
                automatizar sua residência.
              </p>

              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-green-600 text-xs"></i>
                  </div>
                  <span>Cálculo personalizado</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-green-600 text-xs"></i>
                  </div>
                  <span>Estimativa de economia</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-green-600 text-xs"></i>
                  </div>
                  <span>Tempo de retorno</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-green-600 text-xs"></i>
                  </div>
                  <span>Sem compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculadoraInvestimento;
