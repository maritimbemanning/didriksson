import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case og Resultater — Tidligere prosjekter",
  description: "Se hvordan Bluecrew fikk 3× flere kunder og 217% økning i konvertering. Reelle resultater fra små og mellomstore bedrifter.",
  alternates: {
    canonical: "/case",
  },
  openGraph: {
    title: "Case og Resultater — Didriksson Digital",
    description: "Konkrete resultater: 3× flere kunder, 85% mindre arbeid, 5 timer spart per uke.",
    url: "/case",
    images: [
      {
        url: "/api/og?title=Tidligere prosjekter&subtitle=Mer kunder, mindre tid, bedre resultater",
        width: 1200,
        height: 630,
        alt: "Didriksson Digital prosjekter",
      },
    ],
  },
};

export default function CasePage() {
  const cases = [
    {
      title: 'Bluecrew — Maritim bemanning',
      industry: 'Bemanning / Maritime',
      size: '5–10 ansatte',
      description: 'Bemanningsbyrå som formidler mannskap til den maritime næringen.',
      problem: 'Gammel nettside som ikke fungerte på mobil. Tok lang tid å laste, og potensielle kunder forsvant før de fikk kontakt. Bare 1 av 100 besøkende tok kontakt.',
      solution: 'Bygget ny nettside som er rask, enkel å oppdatere, og tydelig viser hva Bluecrew tilbyr. Bedre mobilvisning og klarere kontaktmuligheter.',
      results: [
        '3× flere henvendelser fra nye kunder første måned',
        'Nettsiden lastes på under 1 sekund (tidligere 4+ sekunder)',
        '217% økning i antall som tar kontakt',
      ],
      timeline: '10 dager fra start til ferdig',
      url: 'https://www.bluecrew.no/',
    },
    {
      title: 'Bluecrew Admin — Tidssparende verktøy',
      industry: 'Bemanning / Maritime',
      size: '5–10 ansatte',
      description: 'Internt system for å administrere sertifikater, dokumenter og bemanning.',
      problem: 'Brukte 6-8 timer hver uke på manuell sjekking av sertifikater og papirer. Mange feil fordi alt var manuelt. Ingen varsel når sertifikater gikk ut.',
      solution: 'Bygget internt verktøy som automatisk sjekker sertifikater, sender varsel ved utløp, og holder oversikt over all dokumentasjon.',
      results: [
        '5 timer spart hver uke (fra 7t til 2t)',
        '85% av arbeidet skjer automatisk',
        '67% færre feil i kandidatdata',
      ],
      timeline: '14 dager fra idé til første versjon',
      url: 'https://bluecrew-admin-4xm6idalg-isak-didrikssons-projects.vercel.app/',
    },
  ];

  return (
    <main className="space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Tidligere prosjekter</h1>
        <p className="text-muted max-w-2xl">
          Små og mellomstore bedrifter som har fått flere kunder, spart tid eller økt omsetning.
        </p>
      </header>

      {cases.map((c) => (
        <article key={c.title} className="border border-border rounded-2xl p-6 space-y-5 bg-card">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">{c.title}</h2>
              <p className="text-base text-muted mt-2">{c.industry} · {c.size}</p>
            </div>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-ocean hover:underline whitespace-nowrap font-medium"
            >
              Besøk →
            </a>
          </div>

          <p className="text-base text-muted leading-relaxed">{c.description}</p>

          {/* Problem & Solution */}
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold mb-2 text-foreground">Situasjonen før</h3>
              <p className="text-base text-muted leading-relaxed">{c.problem}</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2 text-foreground">Hva vi gjorde</h3>
              <p className="text-base text-muted leading-relaxed">{c.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
            <h3 className="text-base font-semibold mb-3 text-green-600 dark:text-green-400">Resultater</h3>
            <ul className="space-y-2">
              {c.results.map(r => (
                <li key={r} className="flex items-start gap-2 text-base text-foreground">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <p className="text-base text-muted">
            <span className="font-semibold text-foreground">Tidsbruk:</span> {c.timeline}
          </p>
        </article>
      ))}

      {/* CTA */}
      <aside className="text-center border border-border rounded-2xl p-8 bg-card">
        <h2 className="text-xl font-semibold mb-2 text-foreground">Ønsker lignende resultater for din bedrift?</h2>
        <p className="text-muted mb-4">
          Ta kontakt for en uforpliktende samtale. Jeg gir deg en ærlig vurdering av hva som er mulig.
          Se også våre <a href="/tjenester" className="underline hover:text-ocean">tjenester og priser</a>.
        </p>
        <a
          href="/kontakt"
          className="inline-flex items-center bg-ocean text-white hover:bg-ocean-dark transition-colors rounded-xl px-5 py-2.5 font-medium"
        >
          Start en samtale
        </a>
      </aside>
    </main>
  );
}

