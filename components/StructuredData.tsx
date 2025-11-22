export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://didriksson.no/#organization",
    "name": "Didriksson Digital",
    "alternateName": "Didriksson Digital - Nettsider for bedrifter",
    "description": "Profesjonelle nettsider for små og mellomstore bedrifter i Norge. Fastpris fra 15 000 kr, ferdig på 7-14 dager. Book gratis strategimøte.",
    "url": "https://didriksson.no",
    "logo": {
      "@type": "ImageObject",
      "url": "https://didriksson.no/icon.svg",
      "width": "512",
      "height": "512"
    },
    "image": "https://didriksson.no/api/og?title=Nettside for bedrift&subtitle=Fastpris fra 15 000 kr",
    "telephone": "+47-923-28-850",
    "email": "isak@didriksson.no",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ervikveien 110",
      "addressLocality": "Harstad",
      "addressRegion": "Troms og Finnmark",
      "postalCode": "9411",
      "addressCountry": "NO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "68.7984",
      "longitude": "16.5417"
    },
    "priceRange": "15000-60000 NOK",
    "currenciesAccepted": "NOK",
    "paymentAccepted": "Bank Transfer, Invoice",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Norway"
      },
      {
        "@type": "City",
        "name": "Harstad"
      },
      {
        "@type": "City",
        "name": "Tromsø"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Nord-Norge"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+47-923-28-850",
      "contactType": "sales",
      "availableLanguage": ["Norwegian", "English"],
      "areaServed": "NO"
    },
    "founder": {
      "@type": "Person",
      "name": "Isak Didriksson",
      "email": "isak@didriksson.no",
      "jobTitle": "Webutvikler"
    },
    "knowsAbout": [
      "Nettside for bedrift",
      "Nettside små bedrifter",
      "Next.js",
      "TypeScript",
      "React",
      "SEO-optimalisering",
      "Lokal SEO",
      "Webutvikling Norge",
      "API-integrasjon"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Nettsider og webapper",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Basis nettside",
          "description": "Enkel 2-3 siders nettside for små bedrifter. Mobilresponsiv, SEO-optimalisert, kontaktskjema inkludert.",
          "price": "15000",
          "priceCurrency": "NOK",
          "availability": "https://schema.org/InStock",
          "deliveryLeadTime": {
            "@type": "QuantitativeValue",
            "minValue": "5",
            "maxValue": "7",
            "unitCode": "DAY"
          }
        },
        {
          "@type": "Offer",
          "name": "Standard nettside",
          "description": "Full 4-6 siders nettside med CMS, avansert SEO, hosting inkludert i 1 år.",
          "price": "30000",
          "priceCurrency": "NOK",
          "availability": "https://schema.org/InStock",
          "deliveryLeadTime": {
            "@type": "QuantitativeValue",
            "minValue": "10",
            "maxValue": "14",
            "unitCode": "DAY"
          }
        },
        {
          "@type": "Offer",
          "name": "Premium webapp",
          "description": "Skreddersydd webapp med brukerpålogging, API-integrasjoner, database og sikkerhet.",
          "price": "60000",
          "priceCurrency": "NOK",
          "availability": "https://schema.org/InStock",
          "deliveryLeadTime": {
            "@type": "QuantitativeValue",
            "minValue": "14",
            "maxValue": "21",
            "unitCode": "DAY"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Didriksson Digital",
    "url": "https://didriksson.no",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://didriksson.no/tjenester?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Webutvikling",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Didriksson Digital"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Norway"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Nettsider for bedrifter",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Nettside pakker",
          "itemListElement": [
            "Basis nettside fra 15 000 kr",
            "Standard nettside fra 30 000 kr",
            "Premium webapp fra 60 000 kr"
          ]
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
