const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "3on Projetos Inteligentes - Parcerias Profissionais",
  "url": "https://3on.eng.br/profissionais",
  "logo": "https://3on.eng.br/images/marca-3on-projetos-inteligentes-transparente-site.png",
  "description": "Parcerias estratégicas para arquitetos, engenheiros e designers com suporte técnico em automação predial e projetos elétricos",
  "serviceType": ["Automação Predial", "Projetos Elétricos", "AutoCAD 2D", "Revit BIM 3D", "SPDA"],
  "areaServed": "Brasil",
  "provider": {
    "@type": "Organization",
    "name": "3on Projetos Inteligentes",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "João Pessoa",
        "addressRegion": "PB",
        "addressCountry": "BR"
    }
}
};

function ProfissionaisStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default ProfissionaisStructuredData;