export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Didriksson Digital",
    "description": "Programvareutvikling og nettsider for små og mellomstore bedrifter. Fastpris, 7-14 dagers leveranse.",
    "url": "https://didrikssondigital.vercel.app",
    "logo": "https://didrikssondigital.vercel.app/icon.svg",
    "image": "https://didrikssondigital.vercel.app/api/og",
    "telephone": "+47-923-28-850",
    "email": "isak@didriksson.no",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ervikveien 110",
      "addressCountry": "NO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "69.6489",
      "longitude": "18.9551"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Norway"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bluecrew-as/"
    ],
    "founder": {
      "@type": "Person",
      "name": "Isak Didriksson",
      "email": "isak@didriksson.no"
    },
    "knowsAbout": [
      "Next.js",
      "TypeScript",
      "React",
      "Web Development",
      "Software Development",
      "API Integration"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Nettside",
        "description": "Rask, enkel og ryddig nettside i Next.js/Tailwind. Inkludert publisering og basis SEO.",
        "category": "Web Development"
      },
      {
        "@type": "Offer",
        "name": "Webapp light",
        "description": "Lett webapp for spesifikke behov. Enkelt dashboard, skjema og integrasjon mot API.",
        "category": "Software Development"
      },
      {
        "@type": "Offer",
        "name": "Integrasjon",
        "description": "Koble sammen systemer og automatiser manuelle steg. Fokus på driftssikkerhet og logging.",
        "category": "API Integration"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
