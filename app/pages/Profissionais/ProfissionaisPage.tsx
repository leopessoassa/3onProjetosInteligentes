import BeneficiosParceria from "./components/BeneficiosParceria";
import CTAProfissionais from "./components/CTAProfissionais";
import DepoimentosParceiros from "./components/DepoimentosParceiros";
import FerramentasTecnologias from "./components/FerramentasTecnologias";
import HeroProfissionais from "./components/HeroProfissionais";
import ProcessoParceria from "./components/ProcessoParceria";
import TiposParceria from "./components/TiposParceria";
import ProfissionaisStructuredData from "./ProfissionaisStructuredData";

function ProfissionaisPage() {
  return (<>
  <HeroProfissionais />
  <TiposParceria />
  <FerramentasTecnologias />
  <BeneficiosParceria />
  <ProcessoParceria />
  {/*<DepoimentosParceiros />*/}
  <CTAProfissionais />
  <ProfissionaisStructuredData />
  </>);
}

export default ProfissionaisPage;