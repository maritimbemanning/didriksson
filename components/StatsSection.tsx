export default function StatsSection() {
  const stats = [
    {
      value: '3×',
      label: 'Flere henvendelser',
      description: 'Gjennomsnittlig økning for våre kunder'
    },
    {
      value: '<1s',
      label: 'Lastetid',
      description: 'Lynraske nettsider som rangerer høyt'
    },
    {
      value: '7-14',
      label: 'Dager til lansering',
      description: 'Fra oppstart til ferdig nettside'
    },
    {
      value: '100%',
      label: 'Fornøyde kunder',
      description: 'Alle prosjekter levert som avtalt'
    }
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-ocean/5 to-cyan-500/5 border border-ocean/10 hover:border-ocean/30 transition-all hover:shadow-lg hover:shadow-ocean/10"
          >
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ocean to-cyan-600 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-base font-semibold text-foreground mt-2">
              {stat.label}
            </div>
            <div className="text-sm text-muted mt-1">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
