import HomePage from "~/pages/Home/HomePage";
import type { Route } from "./+types/home";
import { GTMPageTracker } from "~/providers/GTMProvider";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "3on Projetos Inteligentes - Automação Residencial, Projetos Elétricos e Segurança Eletrônica | João Pessoa PB",
    },
    {
      name: "description",
      content:
        "Especialistas em automação residencial, projetos elétricos, segurança eletrônica, SPDA e iluminação inteligente em João Pessoa PB. Mais de 12 anos transformando ambientes com tecnologia KNX e BIM. Consultoria gratuita.",
    },
    {
      name: "keywords",
      content:
        "automação residencial joão pessoa, projetos elétricos paraíba, segurança eletrônica PB, SPDA joão pessoa, iluminação inteligente, KNX paraíba, projetos BIM, engenharia elétrica",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "3on Projetos Inteligentes" },
    {
      property: "og:title",
      content:
        "3on Projetos Inteligentes - Automação Residencial e Projetos Elétricos",
    },
    {
      property: "og:description",
      content:
        "Transforme seu ambiente com automação residencial, projetos elétricos e segurança eletrônica. Mais de 150 cômodos entregues na Paraíba.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://3on.com.br" },
    //{property:"og:image", content:"https://3on.com.br/og-image.jpg"},

    { property: "og:locale", content: "pt_BR" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
    { name: "theme-color", content: "#ffffff" },
  ];
}

export default function Home() {
  return (
    <>
      <GTMPageTracker />
      <HomePage />
    </>
  );
}
