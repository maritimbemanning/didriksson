import type { Metadata, Viewport } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A1A",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL("https://didriksson.no"),
    title: {
      default: t('title'),
      template: `%s | Didriksson Digital`,
    },
    description: t('description'),
    keywords: t('keywords').split(', '),
    authors: [{ name: "Didriksson Digital" }],
    creator: "Didriksson Digital",
    publisher: "Didriksson Digital",
    icons: {
      icon: '/branding.png',
      shortcut: '/branding.png',
      apple: '/branding.png',
    },
    openGraph: {
      type: "website",
      locale: locale === 'no' ? 'nb_NO' : 'en_US',
      url: "https://didriksson.no",
      title: t('og_title'),
      description: t('description'),
      siteName: "Didriksson Digital",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Didriksson Digital",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: "https://didriksson.no",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Structured Data for SEO (AI-Optimized)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Didriksson Digital",
  "alternateName": "Didriksson Webbyrå",
  "image": "https://didriksson.no/og-image.png",
  "description": "Spesialister på Next.js og hodeløse nettsider for norske bedrifter. Vi leverer skreddersydde løsninger som rangerer høyt i Google og konverterer besøkende.",
  "url": "https://didriksson.no",
  "telephone": "+4792328850",
  "email": "isak@didriksson.no",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Oslo",
    "addressCountry": "NO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "59.9139",
    "longitude": "10.7522"
  },
  "priceRange": "$$$",
  "areaServed": {
    "@type": "Country",
    "name": "Norge"
  },
  "founder": {
    "@type": "Person",
    "name": "Isak Didriksson",
    "jobTitle": "Fullstack Utvikler & SEO-ekspert",
    "url": "https://didriksson.no/#founder",
    "sameAs": [
      "https://www.linkedin.com/in/isak-didriksson-855210362/",
      "https://github.com/maritimbemanning"
    ]
  },
  "knowsAbout": [
    "Next.js Utvikling",
    "Teknisk SEO",
    "Konverteringsoptimalisering",
    "Webdesign",
    "React",
    "Headless CMS"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Webutviklingstjenester",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Skreddersydd Nettside",
          "description": "Komplett nettside bygget med Next.js for maksimal ytelse."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Audit & Optimalisering",
          "description": "Teknisk gjennomgang og innholdsoptimalisering for Google."
        }
      }
    ]
  }
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!['en', 'no'].includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${ebGaramond.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
