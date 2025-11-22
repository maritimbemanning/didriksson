import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNav from "../components/MobileNav";
import StructuredData from "../components/StructuredData";
import Analytics from "../components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Didriksson Digital — Nettside og webapp fra 15 000 kr",
    template: "%s • Didriksson Digital",
  },
  description:
    "Rask levering på 7-14 dager. Fastpris fra 15 000 kr. Profesjonelle nettsider og webapper for små og mellomstore bedrifter i Norge.",
  keywords: ["Next.js utvikler", "TypeScript utvikler", "nettside utvikling Norge", "webapp utvikling", "fastpris nettside", "programvareutvikling Harstad", "React utvikler", "API integrasjon"],
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
    title: "Didriksson Digital — Nettside og webapp fra 15 000 kr",
    description:
      "Rask levering på 7-14 dager. Fastpris fra 15 000 kr. Profesjonelle nettsider og webapper for små og mellomstore bedrifter.",
    url: "/",
    siteName: "Didriksson Digital",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/api/og?title=Ryddig tech. Rask leveranse.&subtitle=Nettsider og webapper for små og mellomstore bedrifter",
        width: 1200,
        height: 630,
        alt: "Didriksson Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Didriksson Digital",
    description:
      "Ryddig tech. Rask leveranse. Nettsider og webapper i Next.js/TypeScript.",
    images: ["/api/og?title=Ryddig tech. Rask leveranse.&subtitle=Nettsider og webapper for små og mellomstore bedrifter"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <div className="mx-auto max-w-4xl px-6 py-6">
          <header className="flex items-center justify-between py-2">
            <a href="/" className="font-semibold tracking-tight flex items-center gap-2">
              <img src="/icon.svg" alt="Didriksson Digital logo" className="h-6 w-6" />
              <span>Didriksson Digital</span>
            </a>
            <nav className="hidden md:flex items-center gap-4 text-sm text-neutral-600">
              <a href="/tjenester" className="hover:text-ocean transition-colors">Tjenester</a>
              <a href="/case" className="hover:text-ocean transition-colors">Case</a>
              <a href="/kontakt" className="hover:text-ocean transition-colors">Kontakt</a>
              <a href="tel:+4792328850" className="bg-ocean text-white px-4 py-2 rounded-lg hover:bg-ocean-dark transition-colors font-medium">
                Ring 923 28 850
              </a>
            </nav>
            <div className="flex items-center gap-3 md:hidden">
              <a href="tel:+4792328850" className="bg-ocean text-white px-3 py-2 rounded-lg text-sm font-medium">
                Ring
              </a>
              <MobileNav />
            </div>
          </header>

          <main className="py-6">
            {children}
          </main>

          <footer className="pt-8 border-t border-neutral-200 text-sm text-neutral-600">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p>© {new Date().getFullYear()} Didriksson Digital — Programvareutvikling og raske nettsider.</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <p>
                  <a className="underline underline-offset-4" href="mailto:isak@didriksson.no">isak@didriksson.no</a>
                  <span className="mx-2 hidden sm:inline">•</span>
                  <a className="underline underline-offset-4" href="tel:+4792328850">+47 923 28 850</a>
                </p>
                <span className="text-neutral-500">Ervikveien 110</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
