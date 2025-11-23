import { Metadata } from 'next';
import CalendlyWidget from '../../components/CalendlyWidget';

export const metadata: Metadata = {
  title: 'Book gratis strategimøte',
  description: 'Book et gratis 30-minutters strategimøte. Vi diskuterer dine behov og hvordan en ny nettside kan hjelpe bedriften din.',
  alternates: {
    canonical: '/book',
  },
  openGraph: {
    title: 'Book gratis strategimøte | Didriksson Digital',
    description: 'Book et gratis 30-minutters strategimøte. Vi diskuterer dine behov og lager en plan.',
  },
};

export default function BookPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-sm font-medium bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30 rounded-full px-4 py-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Ledig kapasitet nå
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Book et gratis strategimøte
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          30 minutter der vi snakker om dine mål, utfordringer og hvordan en ny nettside kan hjelpe bedriften din.
        </p>
      </header>

      {/* What to expect */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-ocean/5 border border-ocean/20 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="font-bold text-foreground mb-2">Vi lytter først</h3>
          <p className="text-sm text-muted">Fortell om bedriften din, målene dine og hva som ikke fungerer i dag.</p>
        </div>

        <div className="bg-ocean/5 border border-ocean/20 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="font-bold text-foreground mb-2">Rådgivning</h3>
          <p className="text-sm text-muted">Du får konkrete tips og anbefalinger, uansett om du velger oss eller ikke.</p>
        </div>

        <div className="bg-ocean/5 border border-ocean/20 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h3 className="font-bold text-foreground mb-2">Klar plan</h3>
          <p className="text-sm text-muted">Vi lager en konkret plan med pris og tidslinje du kan ta stilling til.</p>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="bg-card rounded-3xl p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Velg en tid som passer</h2>
          <p className="text-muted">Møtet varer ca. 30 minutter og gjennomføres på video eller telefon.</p>
        </div>
        <CalendlyWidget variant="inline" />
      </section>

      {/* Alternative contact */}
      <section className="text-center bg-card border border-border rounded-2xl p-8">
        <h3 className="font-bold text-foreground mb-2">Foretrekker du å snakke direkte?</h3>
        <p className="text-muted mb-4">Ring meg på telefon eller send en e-post.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+4792328850"
            className="inline-flex items-center gap-2 bg-ocean text-white hover:bg-ocean-dark transition-colors rounded-xl px-6 py-3 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            923 28 850
          </a>
          <a
            href="mailto:isak@didriksson.no"
            className="inline-flex items-center gap-2 border-2 border-ocean text-ocean hover:bg-ocean hover:text-white transition-colors rounded-xl px-6 py-3 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            isak@didriksson.no
          </a>
        </div>
      </section>
    </div>
  );
}
