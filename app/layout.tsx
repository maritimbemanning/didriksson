import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import "./globals.css";
import MobileNav from "../components/MobileNav";
import StructuredData from "../components/StructuredData";
import Analytics from "../components/Analytics";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeToggle from "../components/ThemeToggle";
import StickyCTA from "../components/StickyCTA";

// Lazy load non-critical components
const WhatsAppButton = dynamic(() => import("../components/WhatsAppButton"), { ssr: false });
const ChristmasSnow = dynamic(() => import("../components/ChristmasSnow"), { ssr: false });
const CookieConsent = dynamic(() => import("../components/CookieConsent"), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL("https://didriksson.no"),
  title: {
    default: "Profesjonelle nettsider for bedrifter | Didriksson Digital",
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
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Profesjonelle nettsider for bedrifter | Didriksson Digital",
    description:
      "Profesjonelle nettsider for små og mellomstore bedrifter. Fastpris, ferdig på 7-14 dager. Book gratis strategimøte.",
    url: "/",
    siteName: "Didriksson Digital",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/api/og?title=Profesjonelle nettsider&subtitle=For små og mellomstore bedrifter",
        width: 1200,
        height: 630,
        alt: "Didriksson Digital - Nettsider for små og mellomstore bedrifter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profesjonelle nettsider for bedrifter",
    description:
      "Profesjonelle nettsider for SMB. Fastpris, ferdig på 7-14 dager.",
    images: ["/api/og?title=Profesjonelle nettsider&subtitle=For små og mellomstore bedrifter"],
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
      <body className="antialiased bg-background text-foreground font-sans transition-colors">
        <ThemeProvider>
        <Analytics />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 sm:py-6">
          <header className="flex items-center justify-between py-3 border-b border-border">
            <Link href="/" className="group flex items-center gap-2">
              <span className="text-xl font-bold tracking-wide text-foreground">
                DIDRIKSSON
              </span>
              <span className="text-xs font-medium text-muted tracking-widest uppercase">
                Digital
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/tjenester" className="text-muted hover:text-ocean transition-colors font-medium">Tjenester & Priser</a>
              <a href="/eksempler" className="text-muted hover:text-ocean transition-colors font-medium">Eksempler</a>
              <a href="/case" className="text-muted hover:text-ocean transition-colors font-medium">Resultater</a>
              <a href="/book" className="text-muted hover:text-ocean transition-colors font-medium">Book møte</a>
              <ThemeToggle />
              <a href="tel:+4792328850" className="bg-ocean text-white px-5 py-2.5 rounded-xl hover:bg-ocean-dark transition-colors font-semibold shadow-lg shadow-ocean/20">
                923 28 850
              </a>
            </nav>
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <a href="tel:+4792328850" className="bg-ocean text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Ring
              </a>
              <MobileNav />
            </div>
          </header>

          <main className="py-4 sm:py-6">
            {children}
          </main>

          <footer className="pt-12 pb-8 border-t border-border">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-foreground mb-3">Didriksson Digital</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Profesjonelle nettsider for små og mellomstore bedrifter i Norge.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Tjenester</h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li><a href="/tjenester" className="hover:text-ocean transition-colors">Nettside for bedrift</a></li>
                  <li><a href="/tjenester" className="hover:text-ocean transition-colors">Webapp & system</a></li>
                  <li><a href="/tjenester" className="hover:text-ocean transition-colors">SEO-optimalisering</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Kontakt</h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li><a href="tel:+4792328850" className="hover:text-ocean transition-colors">+47 923 28 850</a></li>
                  <li><a href="mailto:isak@didriksson.no" className="hover:text-ocean transition-colors">isak@didriksson.no</a></li>
                  <li><a href="/book" className="hover:text-ocean transition-colors">Book gratis møte</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Lokasjon</h3>
                <p className="text-sm text-muted">
                  Ervikveien 110<br/>
                  Harstad, Norge<br/>
                  <span className="text-xs opacity-75">Betjener hele Norge</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-border text-sm text-muted">
              <p>&copy; {new Date().getFullYear()} Didriksson Digital. Org.nr: 936 351 371</p>
              <div className="flex gap-4">
                <a href="/personvern" className="hover:text-ocean transition-colors">Personvern</a>
                <span>·</span>
                <p>Nettsider for små og mellomstore bedrifter i Norge</p>
              </div>
            </div>
          </footer>
        </div>
        <WhatsAppButton />
        <StickyCTA />
        <ChristmasSnow />
        <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
