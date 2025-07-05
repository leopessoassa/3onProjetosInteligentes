const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "3on Projetos Inteligentes",
  "url": "https://3on.eng.br/corporativo",
  "logo": "https://3on.eng.br/images/marca-3on-projetos-inteligentes-transparente-site.png",
  "description": "Empresa especializada em automação predial, segurança corporativa e projetos elétricos",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "João Pessoa",
    "addressRegion": "PB",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-83-98207-8702",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.instagram.com/3on.eng",
  ]
};

function CorporativoStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default CorporativoStructuredData;