import ContatoPage from "~/pages/Contato/ContatoPage";
import type { Route } from "./+types/contato";
import { GTMPageTracker } from "~/providers/GTMProvider";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Contato - Automação Predial e Projetos Elétricos | 3on Projetos Inteligentes",
    },
    {
      name: "description",
      content:
        "Entre em contato com a 3on Projetos Inteligentes. Especialistas em automação predial, projetos elétricos, segurança eletrônica e SPDA. Consultoria gratuita e atendimento personalizado.",
    },
    {
      name: "keywords",
      content:
        "contato automação predial, orçamento projeto elétrico, consultoria SPDA, contato segurança eletrônica, telefone 3on projetos, whatsapp automação",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "3on Projetos Inteligentes" },
    { property: "og:title", content: "Contato - 3on Projetos Inteligentes" },
    {
      property: "og:description",
      content:
        "Fale conosco para projetos de automação predial, elétricos e segurança eletrônica. Consultoria gratuita e atendimento especializado.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://3on.com.br/contato" },
    //{property:"og:image", content:"https://3on.com.br/og-image.jpg"},

    { property: "og:locale", content: "pt_BR" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
    { name: "theme-color", content: "#ffffff" },
  ];
}

export default function Contato() {
  return (
    <>
      <GTMPageTracker />
      <ContatoPage />
    </>
  );
}
