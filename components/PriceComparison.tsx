'use client';

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function PriceComparison() {
  const comparisons = [
    { feature: 'Pris', agency: '50 000 - 150 000 kr', me: '10 000 kr', winner: 'me' },
    { feature: 'Leveringstid', agency: '2-4 måneder', me: '7-14 dager', winner: 'me' },
    { feature: 'Dedikert kontakt', agency: 'Ofte nei', me: 'Alltid direkte', winner: 'me' },
    { feature: 'Revisjoner', agency: 'Ekstra kostnad', me: '1 runde inkludert', winner: 'me' },
    { feature: 'Eierskap til kode', agency: 'Varierer', me: '100% ditt', winner: 'me' },
    { feature: 'Vedlikehold', agency: 'Binding', me: 'Valgfritt', winner: 'me' },
    { feature: 'Skjulte kostnader', agency: 'Ofte', me: 'Aldri', winner: 'me' },
    { feature: 'Responstid', agency: 'Dager', me: 'Innen 24 timer', winner: 'me' },
  ];

  return (
    <section className="py-12 space-y-8">
      <div className="text-center space-y-4">
        <p className="text-ocean font-semibold text-sm uppercase tracking-wider">Sammenligning</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Byrå vs. Didriksson Digital</h2>
        <p className="text-muted text-lg">Hvorfor betale mer for mindre?</p>
      </div>

      <div className="overflow-x-auto -mx-4 px-4">
        <div className="bg-card rounded-2xl border border-border overflow-hidden min-w-[600px]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 md:p-5 font-medium text-muted w-1/3"></th>
                <th className="p-4 md:p-5 text-center w-1/3">
                  <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-2 rounded-xl font-bold text-sm">
                    <XIcon className="w-4 h-4" />
                    Typisk byrå
                  </div>
                </th>
                <th className="p-4 md:p-5 text-center w-1/3">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-xl font-bold text-sm">
                    <CheckIcon className="w-4 h-4" />
                    Didriksson Digital
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <tr key={row.feature} className={`border-b border-border/50 last:border-b-0 ${idx % 2 === 0 ? 'bg-background/50' : ''}`}>
                  <td className="p-4 md:p-5 font-medium text-foreground">{row.feature}</td>
                  <td className="p-4 md:p-5 text-center">
                    <span className="text-sm text-red-600/80 dark:text-red-400/80">{row.agency}</span>
                  </td>
                  <td className="p-4 md:p-5 text-center">
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{row.me}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-4 space-y-4">
        <p className="text-muted">
          Spar <span className="text-emerald-600 dark:text-emerald-400 font-bold">40 000 - 140 000 kr</span> med desembertilbudet
        </p>
        <a
          href="/book"
          className="inline-flex items-center gap-2 bg-ocean hover:bg-ocean-dark text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-ocean/20 hover:shadow-xl hover:-translate-y-0.5"
        >
          Book gratis strategimøte
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
