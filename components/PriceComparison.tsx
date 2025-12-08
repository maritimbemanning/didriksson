'use client';

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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
    { feature: 'Pris', agency: '50 000 - 150 000 kr', me: 'Fra 15 000 kr', winner: 'me' },
    { feature: 'Leveringstid', agency: '2-4 måneder', me: '7-14 dager', winner: 'me' },
    { feature: 'Dedikert kontakt', agency: 'Ofte nei', me: 'Alltid direkte', winner: 'me' },
    { feature: 'Revisjoner', agency: 'Ekstra kostnad', me: '1 runde inkludert', winner: 'me' },
    { feature: 'Eierskap til kode', agency: 'Varierer', me: '100% ditt', winner: 'me' },
    { feature: 'Vedlikehold', agency: 'Binding', me: 'Valgfritt', winner: 'me' },
    { feature: 'Skjulte kostnader', agency: 'Ofte', me: 'Aldri', winner: 'me' },
    { feature: 'Responstid', agency: 'Dager', me: 'Innen 24 timer', winner: 'me' },
  ];

  return (
    <section className="py-8 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground">Byrå vs. Didriksson Digital</h2>
        <p className="text-muted mt-2">Hvorfor betale mer for mindre?</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 font-medium text-muted"></th>
              <th className="p-4 text-center">
                <div className="inline-block bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-2 rounded-xl font-bold">
                  Typisk byrå
                </div>
              </th>
              <th className="p-4 text-center">
                <div className="inline-block bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-2 rounded-xl font-bold">
                  Didriksson Digital
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row, idx) => (
              <tr key={row.feature} className={idx % 2 === 0 ? 'bg-card/50' : ''}>
                <td className="p-4 font-medium text-foreground">{row.feature}</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-red-600 dark:text-red-400">
                    <XIcon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{row.agency}</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                    <CheckIcon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{row.me}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <p className="text-muted mb-4">
          Spar <span className="text-green-600 dark:text-green-400 font-bold">35 000 - 135 000 kr</span> og få nettsiden raskere
        </p>
        <a
          href="/book"
          className="inline-flex items-center gap-2 bg-ocean hover:bg-ocean-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-ocean/20"
        >
          Book gratis strategimøte
        </a>
      </div>
    </section>
  );
}
