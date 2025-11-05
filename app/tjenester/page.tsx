'use client';

import { trackPackageInterest } from '../../lib/tracking';

const packs = [
  {
    t: 'Basis',
    subtitle: 'Enkel nettside',
    price: 'fra 15 000 kr',
    priceNum: 15000,
    d: 'Perfekt for små bedrifter som trenger en rask og profesjonell nettside.',
    f: ['2–3 sider (Hjem, Om, Kontakt)', 'Mobilresponsiv design', 'Kontaktskjema', 'Grunnleggende SEO', 'Publisering og opplæring'],
    notIncluded: ['Ikke CMS (du må kontakte for endringer)', 'Ikke integrasjoner'],
    delivery: '5–7 dager',
    q: 'Basis',
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
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Tjenester & Priser</h1>
        <p className="text-neutral-600 max-w-2xl">Transparente pakker med fastpris. Du vet hva du får og hva det koster før vi starter.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-4" aria-label="Prispakker">
        {packs.map(p => (
          <div key={p.t} className={`border ${p.popular ? 'border-ocean ring-2 ring-ocean/20' : 'border-neutral-200'} rounded-2xl p-6 flex flex-col relative`}>
            {p.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ocean text-white text-xs font-semibold px-3 py-1 rounded-full">
                Mest populær
              </div>
            )}
            
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{p.t}</h2>
              <p className="text-sm text-neutral-600">{p.subtitle}</p>
              <p className="text-2xl font-bold text-ocean mt-3">{p.price}</p>
              <p className="text-xs text-neutral-500 mt-1">Engangspris, ingen abonnement</p>
            </div>

            <p className="text-sm text-neutral-600 mb-4">{p.d}</p>

            <div className="space-y-3 mb-4 grow">
              <div>
                <p className="text-xs font-semibold text-neutral-700 mb-2">Inkludert:</p>
                <ul className="space-y-1.5">
                  {p.f.map(x => (
                    <li key={x} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {p.notIncluded && (
                <div>
                  <p className="text-xs font-semibold text-neutral-700 mb-2">Ikke inkludert:</p>
                  <ul className="space-y-1.5">
                    {p.notIncluded.map(x => (
                      <li key={x} className="flex items-start gap-2 text-sm text-neutral-500">
                        <span className="mt-0.5">–</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="border-t border-neutral-200 pt-4 mb-4">
              <p className="text-sm">
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
      <aside className="border border-neutral-200 rounded-2xl p-6 bg-neutral-50">
        <h3 className="text-lg font-semibold mb-3">Tillegg & Vedlikehold</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-1">Ekstra sider</p>
            <p className="text-neutral-600">+ 2 000 kr per side</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Vedlikeholdspakke</p>
            <p className="text-neutral-600">Fra 1 500 kr/mnd (oppdateringer, overvåkning, support)</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Ekstra revisjonsrunde</p>
            <p className="text-neutral-600">+ 3 000 kr</p>
          </div>
          <div>
            <p className="font-semibold mb-1">API-integrasjon</p>
            <p className="text-neutral-600">Pris etter vurdering (typisk 5 000–15 000 kr)</p>
          </div>
        </div>
      </aside>

      <footer className="text-center text-sm text-neutral-600">
        <p>Alle priser er eks. mva. Har du allerede en spesifikasjon? <a href="/kontakt" className="underline hover:text-ocean">Ta kontakt</a> for et skreddersydd tilbud.</p>
        <p className="mt-3">Se <a href="/case" className="underline hover:text-ocean">tidligere prosjekter</a> og resultater fra våre kunder.</p>
      </footer>
    </main>
  );
}

