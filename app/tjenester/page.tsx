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
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg">
          <span className='w-2 h-2 bg-white rounded-full animate-pulse' />
          <span>DESEMBERTILBUD AKTIV - SPAR 5 000 KR</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Tjenester & Priser</h1>
        <p className="text-muted max-w-2xl">Transparente pakker med fastpris. Du vet hva du får og hva det koster før vi starter.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-4" aria-label="Prispakker">
        {packs.map(p => (
          <div key={p.t} className={`border ${p.popular ? 'border-ocean ring-2 ring-ocean/20' : 'border-border'} rounded-2xl p-6 flex flex-col relative bg-card`}>
            {p.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ocean text-white text-xs font-semibold px-3 py-1 rounded-full">
                Mest populær
              </div>
            )}
            {p.christmasOffer && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-green-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                DESEMBERTILBUD
              </div>
            )}

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-foreground">{p.t}</h2>
              <p className="text-sm text-muted">{p.subtitle}</p>
              {p.originalPrice && (
                <p className="text-lg line-through text-muted/50 mt-3">{p.originalPrice}</p>
              )}
              <p className={`text-2xl font-bold mt-${p.originalPrice ? '1' : '3'} ${p.christmasOffer ? 'text-emerald-600 dark:text-emerald-400' : 'text-ocean'}`}>{p.price}</p>
              {p.christmasOffer && (
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-1">Spar 5 000 kr · Kun i desember</p>
              )}
              <p className="text-xs text-muted mt-1">Engangspris, ingen abonnement</p>
            </div>

            <p className="text-sm text-muted mb-4">{p.d}</p>

            <div className="space-y-3 mb-4 grow">
              <div>
                <p className="text-xs font-semibold text-foreground mb-2">Inkludert:</p>
                <ul className="space-y-1.5">
                  {p.f.map(x => (
                    <li key={x} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {p.notIncluded && (
                <div>
                  <p className="text-xs font-semibold text-foreground mb-2">Ikke inkludert:</p>
                  <ul className="space-y-1.5">
                    {p.notIncluded.map(x => (
                      <li key={x} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-0.5">–</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="border-t border-border pt-4 mb-4">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Leveringstid:</span> {p.delivery}
              </p>
            </div>

            <a
              href={`/kontakt?pakke=${p.q}`}
              onClick={() => handlePackageClick(p.t, p.priceNum)}
              className="inline-flex items-center justify-center bg-ocean text-white hover:bg-ocean-dark transition-colors rounded-xl px-4 py-2.5 font-medium"
            >
              Forespørsel
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

