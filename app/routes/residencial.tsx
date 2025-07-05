import { GTMPageTracker } from "~/providers/GTMProvider";
import type { Route } from "./+types/residencial";
import ResidencialPage from "~/pages/Residencial/ResidencialPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Soluções Residenciais - 3on Projetos Inteligentes" },
    { name: "description", content: "" },
    { name: "keywords", content: "" },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "3on Projetos Inteligentes" },
    {
      property: "og:title",
      content: "Soluções Residenciais - 3on Projetos Inteligentes",
    },
    { property: "og:description", content: "" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://3on.com.br/residencial" },
    //{property:"og:image", content:"https://3on.com.br/og-image.jpg"},

    { property: "og:locale", content: "pt_BR" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
    { name: "theme-color", content: "#ffffff" },
  ];
}

export default function Residencial() {
  return (
    <>
      <GTMPageTracker />
      <ResidencialPage />
    </>
  );
}
