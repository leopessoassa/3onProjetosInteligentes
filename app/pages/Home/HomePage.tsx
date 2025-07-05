
import CasesDestaque from "./components/CasesDestaque";
import HeroHome from "./components/HeroHome";
import MetricasImpacto from "./components/MetricasImpacto";
import "./HomePage.css";
import HomeStructuredData from "./HomeStructuredData";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroHome />

      {/* Métricas de Impacto */}
      <MetricasImpacto />

      {/* Cases em Destaque 
      <CasesDestaque />
      */}
      <HomeStructuredData />
    </>
  );
}

export default HomePage;
