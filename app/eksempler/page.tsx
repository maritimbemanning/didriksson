'use client';

import { useState } from 'react';
import CalendlyWidget from '../../components/CalendlyWidget';

interface MockupData {
  id: string;
  title: string;
  industry: string;
  description: string;
  features: string[];
  gradient: string;
  icon: string;
  price: string;
}

const mockups: MockupData[] = [
  {
    id: 'handverker',
    title: 'Rørlegger & Håndverker',
    industry: 'Håndverk',
    description: 'Profesjonell nettside for håndverkere med fokus på tillit og lokale søk.',
    features: ['Før/etter galleri', 'Prisindikator', 'Sertifiseringer', 'Akutt-knapp'],
    gradient: 'from-amber-500 to-orange-600',
    icon: '🔧',
    price: 'Fra 15 000 kr',
  },
  {
    id: 'restaurant',
    title: 'Restaurant & Café',
    industry: 'Servering',
    description: 'Appetittvekkende design med meny, reservasjon og stemningsbilder.',
    features: ['Digital meny', 'Bordreservasjon', 'Instagram-feed', 'Google Maps'],
    gradient: 'from-rose-500 to-pink-600',
    icon: '🍽️',
    price: 'Fra 18 000 kr',
  },
  {
    id: 'konsulent',
    title: 'Advokat & Konsulent',
    industry: 'Profesjonelle tjenester',
    description: 'Troverdig og seriøs profil som bygger tillit hos potensielle klienter.',
    features: ['Fagområder', 'Team-presentasjon', 'Booking-system', 'Ressurser/artikler'],
    gradient: 'from-slate-600 to-slate-800',
    icon: '⚖️',
    price: 'Fra 20 000 kr',
  },
  {
    id: 'frisør',
    title: 'Frisør & Skjønnhet',
    industry: 'Skjønnhet',
    description: 'Moderne og visuell nettside som viser frem ditt arbeid.',
    features: ['Online booking', 'Prisliste', 'Behandlinger', 'Før/etter bilder'],
    gradient: 'from-purple-500 to-violet-600',
    icon: '💇',
    price: 'Fra 15 000 kr',
  },
  {
    id: 'trening',
    title: 'PT & Treningssenter',
    industry: 'Fitness',
    description: 'Energisk design som motiverer til handling og medlemskap.',
    features: ['Timeplan', 'Medlemsportal', 'Prøvetime-booking', 'Transformasjoner'],
    gradient: 'from-emerald-500 to-teal-600',
    icon: '💪',
    price: 'Fra 18 000 kr',
  },
];

export default function EksemplerPage() {
  const [selectedMockup, setSelectedMockup] = useState<MockupData | null>(null);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-sm font-medium bg-ocean/10 text-ocean rounded-full px-4 py-2">
          <span className="w-2 h-2 bg-ocean rounded-full animate-pulse" />
          5 bransje-tilpassede design
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-neutral-900">
          Se hva du kan få
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Utforsk våre ferdiglagde design-konsepter for ulike bransjer.
          Alle kan tilpasses din bedrift.
        </p>
      </section>

      {/* Mockup Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockups.map((mockup) => (
          <button
            key={mockup.id}
            onClick={() => setSelectedMockup(mockup)}
            className="group text-left bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-ocean/30 transition-all duration-300"
          >
            {/* Preview Image */}
            <div className={`aspect-video bg-gradient-to-br ${mockup.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl opacity-30">{mockup.icon}</span>
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
                  Se detaljer
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-ocean font-semibold uppercase tracking-wide">{mockup.industry}</p>
                  <h3 className="text-lg font-bold text-neutral-900 mt-1">{mockup.title}</h3>
                </div>
                <span className="text-2xl">{mockup.icon}</span>
              </div>
              <p className="text-sm text-neutral-600 line-clamp-2">{mockup.description}</p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-ocean font-bold">{mockup.price}</span>
                <span className="text-xs text-neutral-500">Klikk for mer →</span>
              </div>
            </div>
          </button>
        ))}
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

      {/* Modal */}
      {selectedMockup && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMockup(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`aspect-video bg-gradient-to-br ${selectedMockup.gradient} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl opacity-30">{selectedMockup.icon}</span>
              </div>
              <button
                onClick={() => setSelectedMockup(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Fake browser */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <p className="text-sm text-ocean font-semibold uppercase tracking-wide">{selectedMockup.industry}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-1">{selectedMockup.title}</h2>
                <p className="text-neutral-600 mt-2">{selectedMockup.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">Inkluderte funksjoner:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedMockup.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* What's included */}
              <div className="bg-neutral-50 rounded-xl p-4">
                <h3 className="font-semibold text-neutral-900 mb-2">Alt dette er inkludert:</h3>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>✓ Responsivt design (mobil, nettbrett, PC)</li>
                  <li>✓ SEO-optimalisering for Google</li>
                  <li>✓ Kontaktskjema med varsling</li>
                  <li>✓ Google Analytics oppsett</li>
                  <li>✓ 30 dager gratis support</li>
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-200">
                <div>
                  <p className="text-sm text-neutral-500">Pris</p>
                  <p className="text-2xl font-bold text-ocean">{selectedMockup.price}</p>
                </div>
                <CalendlyWidget buttonText="Book gratis møte" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
