import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "../components/MobileNav";
import StructuredData from "../components/StructuredData";
import Analytics from "../components/Analytics";

export const metadata: Metadata = {
  title: {
    default: "Nettside for bedrift fra 15 000 kr | Didriksson Digital",
    template: "%s | Didriksson Digital",
  },
  description:
    "Profesjonelle nettsider for små og mellomstore bedrifter i Norge. Fastpris, ferdig på 7-14 dager. Book gratis strategimøte i dag.",
  keywords: [
    // SMB-fokuserte søkeord
    "nettside for bedrift",
    "nettside små bedrifter",
    "lage nettside bedrift",
    "bedriftsnettside pris",
    "rimelig nettside bedrift",
    "profesjonell nettside",
    // Lokale søkeord
    "webutvikler Norge",
    "nettside Harstad",
    "nettside Nord-Norge",
    "webbyrå Tromsø",
    // Tjeneste-søkeord
    "fastpris nettside",
    "rask nettside levering",
    "nettside med booking",
    "nettside med kontaktskjema",
    // Tekniske søkeord
    "Next.js utvikler",
    "React nettside",
    "SEO-optimalisert nettside"
  ],
  authors: [{ name: "Isak Didriksson" }],
  creator: "Isak Didriksson",
  metadataBase: new URL("https://didriksson.no"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Nettside for bedrift fra 15 000 kr | Didriksson Digital",
    description:
      "Profesjonelle nettsider for små og mellomstore bedrifter. Fastpris, ferdig på 7-14 dager. Book gratis strategimøte.",
    url: "/",
    siteName: "Didriksson Digital",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/api/og?title=Nettside for bedrift&subtitle=Fastpris fra 15 000 kr • Ferdig på 7-14 dager",
        width: 1200,
        height: 630,
        alt: "Didriksson Digital - Nettsider for små og mellomstore bedrifter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettside for bedrift fra 15 000 kr",
    description:
      "Profesjonelle nettsider for SMB. Fastpris, ferdig på 7-14 dager.",
    images: ["/api/og?title=Nettside for bedrift&subtitle=Fastpris fra 15 000 kr"],
  },
  verification: {
    google: "din-google-verification-kode", // Legg til senere
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased bg-white font-sans">
        <Analytics />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 sm:py-6">
          <header className="flex items-center justify-between py-3 border-b border-neutral-100">
            <a href="/" className="flex items-center">
              <img src="/images/logo.png" alt="Didriksson Digital" className="h-10 w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/tjenester" className="text-neutral-600 hover:text-ocean transition-colors font-medium">Tjenester & Priser</a>
              <a href="/eksempler" className="text-neutral-600 hover:text-ocean transition-colors font-medium">Eksempler</a>
              <a href="/case" className="text-neutral-600 hover:text-ocean transition-colors font-medium">Resultater</a>
              <a href="/book" className="text-neutral-600 hover:text-ocean transition-colors font-medium">Book møte</a>
              <a href="tel:+4792328850" className="bg-ocean text-white px-5 py-2.5 rounded-xl hover:bg-ocean-dark transition-colors font-semibold shadow-lg shadow-ocean/20">
                923 28 850
              </a>
            </nav>
            <div className="flex items-center gap-3 md:hidden">
              <a href="tel:+4792328850" className="bg-ocean text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Ring
              </a>
              <MobileNav />
            </div>
          </header>

          <main className="py-4 sm:py-6">
            {children}
          </main>

          <footer className="pt-12 pb-8 border-t border-neutral-200">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-neutral-900 mb-3">Didriksson Digital</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Profesjonelle nettsider for små og mellomstore bedrifter i Norge.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-3">Tjenester</h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li><a href="/tjenester" className="hover:text-ocean transition-colors">Nettside for bedrift</a></li>
                  <li><a href="/tjenester" className="hover:text-ocean transition-colors">Webapp & system</a></li>
                  <li><a href="/tjenester" className="hover:text-ocean transition-colors">SEO-optimalisering</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-3">Kontakt</h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li><a href="tel:+4792328850" className="hover:text-ocean transition-colors">+47 923 28 850</a></li>
                  <li><a href="mailto:isak@didriksson.no" className="hover:text-ocean transition-colors">isak@didriksson.no</a></li>
                  <li><a href="/book" className="hover:text-ocean transition-colors">Book gratis møte</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-3">Lokasjon</h3>
                <p className="text-sm text-neutral-600">
                  Ervikveien 110<br/>
                  Harstad, Norge<br/>
                  <span className="text-xs text-neutral-500">Betjener hele Norge</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-neutral-100 text-sm text-neutral-500">
              <p>&copy; {new Date().getFullYear()} Didriksson Digital. Org.nr: 123 456 789</p>
              <p>Nettsider for små og mellomstore bedrifter i Norge</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
