const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contato - 3on Projetos Inteligentes",
  "description": "Entre em contato para projetos de automação predial, elétricos e segurança eletrônica",
  "url": "https://3on.eng.br/contato",
  "logo": "https://3on.eng.br/images/marca-3on-projetos-inteligentes-transparente-site.png",
  "mainEntity": {
        "@type": "Organization",
        "name": "3on Projetos Inteligentes",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "João Pessoa",
            "addressRegion": "PB",
            "postalCode": "58420-010",
            "addressCountry": "BR"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+55-83-98207-8702",
                "contactType": "customer service",
                "availableLanguage": "Portuguese",
                "hoursAvailable": "Mo-Fr 08:00-18:00"
            },
            {
                "@type": "ContactPoint",
                "email": "contato@3on.eng.br",
                "contactType": "customer service"
            }
        ]
    }
};

function ContatoStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default ContatoStructuredData;