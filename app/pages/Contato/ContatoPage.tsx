import CertificacoesGarantias from "./components/CertificacoesGarantias";
import CTAContato from "./components/CTAContato";
import FaqContato from "./components/FaqContato";
import FormularioContato from "./components/FormularioContato";
import HeroContato from "./components/HeroContato";
import InformacoesAdicionais from "./components/InformacoesAdicionais";
import MetodoContato from "./components/MetodoContato";

function ContatoPage() {
  return (
    <>
      <HeroContato />
      <MetodoContato />
      <FormularioContato />
      <FaqContato />
      <InformacoesAdicionais />
      <CertificacoesGarantias />
      <CTAContato />
    </>
  );
}

export default ContatoPage;
