import ProfissionaisPage from "~/pages/Profissionais/ProfissionaisPage";
import type { Route } from "./+types/profissionais";
import { GTMPageTracker } from "~/providers/GTMProvider";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Para Profissionais - Parcerias em Automação Predial e Projetos Elétricos | 3on Projetos Inteligentes",
    },
    {
      name: "description",
      content:
        "Parcerias estratégicas para arquitetos, engenheiros e designers. Projetos técnicos em AutoCAD 2D e Revit BIM 3D, automação predial, SPDA e suporte comercial especializado.",
    },
    {
      name: "keywords",
      content:
        "parceria arquitetos, parceria engenheiros, AutoCAD 2D, Revit BIM 3D, projetos elétricos profissionais, automação predial, SPDA, suporte técnico, designers de interiores",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "3on Projetos Inteligentes" },
    {
      property: "og:title",
      content: "Parcerias Profissionais - 3on Projetos Inteligentes",
    },
    {
      property: "og:description",
      content:
        "Parcerias estratégicas com suporte técnico completo, projetos em AutoCAD/BIM e automação predial para profissionais do setor.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://3on.com.br/profissionais" },
    //{property:"og:image", content:"https://3on.com.br/og-image.jpg"},

    { property: "og:locale", content: "pt_BR" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
    { name: "theme-color", content: "#ffffff" },
  ];
}

export default function Profissionais() {
  return (
    <>
      <GTMPageTracker />
      <ProfissionaisPage />
    </>
  );
}
