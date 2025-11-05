import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester — Didriksson Digital",
  description: "Fastpris-pakker for nettsider, webapper og integrasjoner. Next.js/TypeScript, 7-14 dagers leveranse. Nettside, Webapp light, og Integrasjon.",
  openGraph: {
    title: "Tjenester — Didriksson Digital",
    description: "Fastpris-pakker for nettsider, webapper og integrasjoner. 7-14 dagers leveranse.",
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
