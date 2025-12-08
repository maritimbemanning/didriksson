'use client';

import { trackPackageInterest } from '../../lib/tracking';

interface Package {
  t: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  priceNum: number;
  d: string;
  f: string[];
  notIncluded?: string[];
  delivery: string;
  q: string;
  popular?: boolean;
  christmasOffer?: boolean;
}

const packs: Package[] = [
  {
    t: 'Basis',
    subtitle: 'Enkel nettside',
    price: '10 000 kr',
    originalPrice: '15 000 kr',
    priceNum: 10000,
    d: 'Perfekt for små bedrifter som trenger en rask og profesjonell nettside.',
    f: ['2–3 sider (Hjem, Om, Kontakt)', 'Mobilresponsiv design', 'Kontaktskjema', 'Grunnleggende SEO', 'Publisering og opplæring'],
    notIncluded: ['Ikke CMS (du må kontakte for endringer)', 'Ikke integrasjoner'],
    delivery: '5–7 dager',
    q: 'Basis',
    christmasOffer: true,
  },
  {
    t: 'Standard',
    subtitle: 'Full nettside',
    price: 'fra 30 000 kr',
    priceNum: 30000,
    d: 'For bedrifter som ønsker mer innhold, enkel CMS og bedre SEO.',
    f: ['4–6 sider med egen design', 'Enkel CMS (du oppdaterer selv)', 'Avansert SEO og strukturerte data', 'Kontaktskjema med e-post', 'Hosting inkludert i 1 år', '1 revisjonsrunde'],
    notIncluded: ['Ikke brukerpålogging', 'Ikke API-integrasjoner'],
    delivery: '10–14 dager',
    q: 'Standard',
    popular: true,
  },
  {
    t: 'Premium',
    subtitle: 'Webapp / System',
    price: 'fra 60 000 kr',
    priceNum: 60000,
    d: 'For bedrifter med spesifikke behov: pålogging, API, automatisering.',
    f: ['Egendefinert funksjonalitet', 'Brukerpålogging og roller', 'API-integrasjoner (CRM, ERP)', 'Database og sikkerhet', 'Hosting og vedlikehold i 3 mnd', '2 revisjonsrunder'],
    notIncluded: ['Løpende vedlikehold (tilgjengelig som tillegg)'],
    delivery: '14–21 dager',
    q: 'Premium',
  },
];

export default function TjenesterPage(){
  const handlePackageClick = (packageName: string, price: number) => {
    trackPackageInterest(packageName, price);
  };

  return (
    <main className="space-y-10">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-red-500/20">
          <span className='text-lg'>🎄</span>
          <span>JULETILBUD AKTIV - SPAR 5 000 KR</span>
          <span className='text-lg'>🎁</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Tjenester & Priser</h1>
        <p className="text-muted max-w-2xl">Transparente pakker med fastpris. Du vet hva du får og hva det koster før vi starter.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6" aria-label="Prispakker">
        {packs.map(p => (
          <div key={p.t} className={`border ${p.christmasOffer ? 'border-red-300 dark:border-red-700 ring-2 ring-red-500/20' : p.popular ? 'border-ocean ring-2 ring-ocean/20' : 'border-border'} rounded-2xl p-6 flex flex-col relative bg-card hover:shadow-xl transition-shadow`}>
            {p.popular && !p.christmasOffer && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ocean text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                Mest populær
              </div>
            )}
            {p.christmasOffer && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <span>🎅</span>
                JULETILBUD
              </div>
            )}

            <div className="mb-5 pt-2">
              <h2 className="text-xl font-bold text-foreground">{p.t}</h2>
              <p className="text-sm text-muted mt-0.5">{p.subtitle}</p>

              <div className="mt-4">
                {p.originalPrice && (
                  <p className="text-base line-through text-muted/60">{p.originalPrice}</p>
                )}
                <p className={`text-3xl font-bold ${p.christmasOffer ? 'text-red-600 dark:text-red-400' : 'text-ocean'}`}>{p.price}</p>
                {p.christmasOffer && (
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">🎁 Spar 5 000 kr - Juletilbud!</p>
                )}
                <p className="text-xs text-muted mt-2">Engangspris, ingen abonnement</p>
              </div>
            </div>

            <p className="text-sm text-muted mb-5 leading-relaxed">{p.d}</p>

            <div className="space-y-4 mb-6 grow">
              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Inkludert:</p>
                <ul className="space-y-2">
                  {p.f.map(x => (
                    <li key={x} className="flex items-start gap-2.5 text-sm text-foreground">
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {p.notIncluded && (
                <div className="pt-2">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Ikke inkludert:</p>
                  <ul className="space-y-2">
                    {p.notIncluded.map(x => (
                      <li key={x} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="mt-0.5 text-muted/50">—</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="border-t border-border pt-4 mb-4">
              <p className="text-sm text-foreground flex items-center gap-2">
                <svg className="w-4 h-4 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Leveringstid:</span> {p.delivery}
              </p>
            </div>

            <a
              href={`/kontakt?pakke=${p.q}`}
              onClick={() => handlePackageClick(p.t, p.priceNum)}
              className={`inline-flex items-center justify-center gap-2 ${p.christmasOffer ? 'bg-red-600 hover:bg-red-700' : 'bg-ocean hover:bg-ocean-dark'} text-white transition-all rounded-xl px-5 py-3 font-semibold shadow-lg ${p.christmasOffer ? 'shadow-red-500/20' : 'shadow-ocean/20'} hover:-translate-y-0.5`}
            >
              Forespørsel
              <span>→</span>
            </a>
          </div>
        ))}
      </section>

      {/* Add-ons */}
      <aside className="border border-border rounded-2xl p-6 bg-card">
        <h3 className="text-lg font-semibold mb-3 text-foreground">Tillegg & Vedlikehold</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-1 text-foreground">Ekstra sider</p>
            <p className="text-muted">+ 2 000 kr per side</p>
          </div>
          <div>
            <p className="font-semibold mb-1 text-foreground">Vedlikeholdspakke</p>
            <p className="text-muted">Fra 1 500 kr/mnd (oppdateringer, overvåkning, support)</p>
          </div>
          <div>
            <p className="font-semibold mb-1 text-foreground">Ekstra revisjonsrunde</p>
            <p className="text-muted">+ 3 000 kr</p>
          </div>
          <div>
            <p className="font-semibold mb-1 text-foreground">API-integrasjon</p>
            <p className="text-muted">Pris etter vurdering (typisk 5 000–15 000 kr)</p>
          </div>
        </div>
      </aside>

      <footer className="text-center text-sm text-muted">
        <p>Alle priser er eks. mva. Har du allerede en spesifikasjon? <a href="/kontakt" className="underline hover:text-ocean">Ta kontakt</a> for et skreddersydd tilbud.</p>
        <p className="mt-3">Se <a href="/case" className="underline hover:text-ocean">tidligere prosjekter</a> og resultater fra våre kunder.</p>
      </footer>
    </main>
  );
}

