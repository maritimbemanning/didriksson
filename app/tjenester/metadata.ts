import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester og Priser — Fra 15 000 kr",
  description: "Transparente fastpriser: Basis 15k, Standard 30k, Premium 60k. Leveringstid 5-21 dager. Se hva som er inkludert i hver pakke.",
  openGraph: {
    title: "Tjenester og Priser — Didriksson Digital",
    description: "Fastpris-pakker fra 15 000 kr. Levering på 5-21 dager. Se hva som er inkludert.",
    url: "/tjenester",
    images: [
      {
        url: "/api/og?title=Fastpris-pakker&subtitle=Nettside · Webapp · Integrasjon",
        width: 1200,
        height: 630,
        alt: "Didriksson Digital Tjenester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tjenester — Didriksson Digital",
    description: "Fastpris-pakker for nettsider, webapper og integrasjoner.",
    images: ["/api/og?title=Fastpris-pakker&subtitle=Nettside · Webapp · Integrasjon"],
  },
};
