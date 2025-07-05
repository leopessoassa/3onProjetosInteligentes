import CalculadoraRoiCorporativo from "./components/CalculadoraRoiCorporativo";
import CasesDeSucesso from "./components/CasesDeSucesso";
import CtaCorporativo from "./components/CtaCorporativo";
import HeroCorporativo from "./components/HeroCorporativo";
import MetodologiaDeTrabalho from "./components/MetodologiaDeTrabalho";
import PrincipaisSolucoes from "./components/PrincipaisSolucoes";
import SegmentosAtendidos from "./components/SegmentosAtendidos";
import "./CorporativoPage.css"
import CorporativoStructuredData from "./CorporativoStructuredData";

function CorporativoPage() {
  return (
  <>
    <HeroCorporativo />
    <PrincipaisSolucoes />
    <SegmentosAtendidos />
    <CasesDeSucesso />
    <MetodologiaDeTrabalho />
    <CalculadoraRoiCorporativo />
    <CtaCorporativo />

    <CorporativoStructuredData />
  </>);
}

export default CorporativoPage;