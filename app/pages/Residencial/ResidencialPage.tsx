import CTAResidencial from "./components/CTAResidencial";
import HeroResidencial from "./components/HeroResidencial";
import SimuladorAmbientes from "./components/SimuladorAmbientes";
import SolucoesPrincipais from "./components/SolucoesPrincipais";
import "./ResidencialPage.css";
import ResidencialStructuredData from "./ResidencialStructuredData";

function ResidencialPage() {
  return (
    <>
      {/* Hero Section*/}
      <HeroResidencial />

      {/* Soluções Principais*/}
      <SolucoesPrincipais />

      {/* Simulador de Ambientes*/}
      <SimuladorAmbientes />

      {/* Cases Residenciais
      <CasesResidenciais />
      */}

      {/* CTA Final*/}
      <CTAResidencial />

      <ResidencialStructuredData />
    </>
  );
}

export default ResidencialPage;
