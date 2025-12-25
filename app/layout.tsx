import type { Metadata, Viewport } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://didriksson.no"),
  title: {
    default: "Didriksson Digital | Nettsider for mellomstore bedrifter i Norge",
    template: "%s | Didriksson Digital",
  },
  description:
    "Lei av treg WordPress og byråavhengighet? Didriksson Digital (grunnlegger og fullstack-utvikler Isak Didriksson) bygger raske, SEO-optimaliserte Next.js-nettsider for mellomstore bedrifter som vil ha mer organisk trafikk og flere leads.",
  keywords: [
    "nettside",
    "nettsider for bedrifter",
    "bytte fra wordpress",
    "next.js",
    "seo",
    "organisk trafikk",
    "nettsider oslo",
    "webbyra",
    "webutvikling",
  ],
  authors: [{ name: "Didriksson Digital" }],
  creator: "Didriksson Digital",
  publisher: "Didriksson Digital",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://didriksson.no",
    title: "Didriksson Digital - Nettsider som kjennes raske og ryddige",
    description:
      "Moderne Next.js-nettsider levert på rundt to uker når innholdet er klart. SEO og sporing er med fra start.",
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
    title: "Didriksson Digital - Nettsider som gjør det lett å ta kontakt",
    description:
      "Raske, ryddige sider bygget for flere gode henvendelser – ikke tomme løfter.",
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

// Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Didriksson Digital",
  image: "https://didriksson.no/logo.png",
  description: "Moderne nettsider med Next.js for mellomstore bedrifter i Norge",
  url: "https://didriksson.no",
  telephone: "+4792328850",
  email: "isak@didriksson.no",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NO",
  },
  priceRange: "39000-150000 NOK",
  areaServed: "NO",
  founder: {
    "@type": "Person",
    name: "Isak Didriksson",
    jobTitle: "Grunnlegger & Fullstack-utvikler",
  },
  sameAs: [
    "https://www.linkedin.com/in/isak-didriksson-855210362/",
    "https://www.instagram.com/isakdidriksson",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${ebGaramond.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
