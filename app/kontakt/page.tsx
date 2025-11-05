import type { Metadata } from "next";
import KontaktForm from "../../components/KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt oss — Ring 923 28 850",
  description: "Ta kontakt for gratis konsultasjon. Ring 923 28 850, book møte eller send e-post. Svar innen 1 arbeidsdag. Ervikveien 110.",
  openGraph: {
    title: "Kontakt — Didriksson Digital",
    description: "Ring 923 28 850 eller book gratis møte. Svar innen 1 arbeidsdag.",
    url: "/kontakt",
    images: [
      {
        url: "/api/og?title=Ta kontakt&subtitle=Jeg svarer normalt innen 1 arbeidsdag",
        width: 1200,
        height: 630,
        alt: "Kontakt Didriksson Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt — Didriksson Digital",
    description: "Ta kontakt for et uforpliktende tilbud.",
    images: ["/api/og?title=Ta kontakt&subtitle=Jeg svarer normalt innen 1 arbeidsdag"],
  },
};

export default function KontaktPage() {
  return <KontaktForm />;
}
