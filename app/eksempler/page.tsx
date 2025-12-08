import { Metadata } from 'next';
import Link from 'next/link';
import CalendlyWidget from '../../components/CalendlyWidget';

export const metadata: Metadata = {
  title: 'Eksempler på nettsider | Didriksson Digital',
  description: 'Se eksempler på nettsider vi kan lage for din bransje. Håndverker, restaurant, advokat, frisør og treningssenter.',
};

// Simple inline SVG icons
const WrenchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
  </svg>
);

const UtensilsIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12" />
  </svg>
);

const ScaleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </svg>
);

const ScissorsIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
  </svg>
);

const DumbbellIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
);

const mockups = [
  {
    id: 'handverker',
    href: '/eksempler/handverker',
    title: 'Rørlegger & Håndverker',
    industry: 'Håndverk',
    description: 'Profesjonell nettside for håndverkere med fokus på tillit og lokale søk.',
    features: ['Før/etter galleri', 'Prisindikator', 'Sertifiseringer', 'Akutt-knapp'],
    gradient: 'from-amber-500 to-orange-600',
    Icon: WrenchIcon,
    price: 'Fra 15 000 kr',
  },
  {
    id: 'restaurant',
    href: '/eksempler/restaurant',
    title: 'Restaurant & Café',
    industry: 'Servering',
    description: 'Appetittvekkende design med meny, reservasjon og stemningsbilder.',
    features: ['Digital meny', 'Bordreservasjon', 'Instagram-feed', 'Google Maps'],
    gradient: 'from-rose-500 to-pink-600',
    Icon: UtensilsIcon,
    price: 'Fra 18 000 kr',
  },
  {
    id: 'konsulent',
    href: '/eksempler/konsulent',
    title: 'Advokat & Konsulent',
    industry: 'Profesjonelle tjenester',
    description: 'Troverdig og seriøs profil som bygger tillit hos potensielle klienter.',
    features: ['Fagområder', 'Team-presentasjon', 'Booking-system', 'Ressurser/artikler'],
    gradient: 'from-slate-600 to-slate-800',
    Icon: ScaleIcon,
    price: 'Fra 20 000 kr',
  },
  {
    id: 'frisor',
    href: '/eksempler/frisor',
    title: 'Frisør & Skjønnhet',
    industry: 'Skjønnhet',
    description: 'Moderne og visuell nettside som viser frem ditt arbeid.',
    features: ['Online booking', 'Prisliste', 'Behandlinger', 'Før/etter bilder'],
    gradient: 'from-purple-500 to-violet-600',
    Icon: ScissorsIcon,
    price: 'Fra 15 000 kr',
  },
  {
    id: 'trening',
    href: '/eksempler/trening',
    title: 'PT & Treningssenter',
    industry: 'Fitness',
    description: 'Energisk design som motiverer til handling og medlemskap.',
    features: ['Timeplan', 'Medlemsportal', 'Prøvetime-booking', 'Transformasjoner'],
    gradient: 'from-emerald-500 to-teal-600',
    Icon: DumbbellIcon,
    price: 'Fra 18 000 kr',
  },
  {
    id: 'barber',
    href: '/eksempler/barber',
    title: 'Barbershop',
    industry: 'Grooming',
    description: 'Premium maskulint design for barbershops med fokus på anmeldelser og booking.',
    features: ['Online booking', 'Prisliste', 'Reviews', 'Team-presentasjon'],
    gradient: 'from-amber-500 to-neutral-900',
    Icon: ScissorsIcon,
    price: 'Fra 15 000 kr',
  },
];

export default function EksemplerPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-sm font-medium bg-ocean/10 text-ocean rounded-full px-4 py-2">
          <span className="w-2 h-2 bg-ocean rounded-full animate-pulse" />
          6 komplette demo-nettsider
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-foreground">
          Se hva du kan få
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Klikk på en bransje for å se en komplett demo-nettside.
          Alle kan tilpasses din bedrift.
        </p>
      </section>

      {/* Mockup Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockups.map((mockup) => (
          <Link
            key={mockup.id}
            href={mockup.href}
            className="group text-left bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-ocean/30 transition-all duration-300"
          >
            {/* Preview Image */}
            <div className={`aspect-video bg-gradient-to-br ${mockup.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <mockup.Icon className="w-16 h-16 text-white/30" />
              </div>
              {/* Fake browser chrome */}
              <div className="absolute top-3 left-3 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-neutral-900 px-4 py-2 rounded-lg font-semibold text-sm">
                  Se demo →
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-ocean font-semibold uppercase tracking-wide">{mockup.industry}</p>
                  <h3 className="text-lg font-bold text-foreground mt-1">{mockup.title}</h3>
                </div>
                <mockup.Icon className="w-6 h-6 text-muted" />
              </div>
              <p className="text-sm text-muted line-clamp-2">{mockup.description}</p>

              {/* Features preview */}
              <div className="flex flex-wrap gap-1">
                {mockup.features.slice(0, 3).map((feature, idx) => (
                  <span key={idx} className="text-xs bg-card border border-border text-muted px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-ocean font-bold">{mockup.price}</span>
                <span className="text-xs text-muted group-hover:text-ocean transition-colors">Se komplett demo →</span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Info box */}
      <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
        <div className="flex items-start gap-4">
          <LightbulbIcon className="w-8 h-8 text-amber-500 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Dette er konseptdesign</h3>
            <p className="text-muted">
              Nettsidene du ser her er demo-versjoner som viser hva vi kan lage for deg.
              Fiktive bedriftsnavn er brukt for illustrasjon. Din nettside blir selvfølgelig
              tilpasset din bedrift, ditt innhold og din merkevare.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-ocean to-cyan-600 rounded-3xl p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Finner du ikke din bransje?
        </h2>
        <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
          Ingen problem! Vi lager skreddersydde design for alle typer bedrifter.
          Book et gratis møte så diskuterer vi dine behov.
        </p>
        <CalendlyWidget buttonText="Book gratis strategimøte" />
      </section>
    </div>
  );
}
