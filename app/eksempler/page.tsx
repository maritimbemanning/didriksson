import { Metadata } from 'next';
import Link from 'next/link';
import CalendlyWidget from '../../components/CalendlyWidget';
import { Wrench, UtensilsCrossed, Scale, Scissors, Dumbbell, Lightbulb, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eksempler på nettsider | Didriksson Digital',
  description: 'Se eksempler på nettsider vi kan lage for din bransje. Håndverker, restaurant, advokat, frisør og treningssenter.',
};

const mockups = [
  {
    id: 'handverker',
    href: '/eksempler/handverker',
    title: 'Rørlegger & Håndverker',
    industry: 'Håndverk',
    description: 'Profesjonell nettside for håndverkere med fokus på tillit og lokale søk.',
    features: ['Før/etter galleri', 'Prisindikator', 'Sertifiseringer', 'Akutt-knapp'],
    gradient: 'from-amber-500 to-orange-600',
    Icon: Wrench,
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
    Icon: UtensilsCrossed,
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
    Icon: Scale,
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
    Icon: Scissors,
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
    Icon: Dumbbell,
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
    Icon: Scissors,
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
                <mockup.Icon className="w-16 h-16 text-white/30" strokeWidth={1.5} />
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
                <mockup.Icon className="w-6 h-6 text-muted" strokeWidth={1.5} />
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
          <Lightbulb className="w-8 h-8 text-amber-500 flex-shrink-0" strokeWidth={1.5} />
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
