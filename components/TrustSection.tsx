export default function TrustSection() {
  const guarantees = [
    {
      icon: '💰',
      title: 'Fastpris',
      desc: 'Du får prisen på forhånd. Ingen skjulte kostnader eller overraskelser underveis.'
    },
    {
      icon: '🔓',
      title: 'Du eier alt',
      desc: 'Full eierskap til kildekoden og alle filer. Ingen lock-in eller avhengighet.'
    },
    {
      icon: '⚡',
      title: 'Rask respons',
      desc: 'Svar innen 24 timer på hverdager. Leveranse på avtalt tid eller pengene tilbake.'
    },
    {
      icon: '✓',
      title: 'Én revisjonsrunde inkludert',
      desc: 'Du får gjøre endringer før lansering. Ekstra runder tilgjengelig til fastpris.'
    }
  ];

  return (
    <section className="border-2 border-ocean/20 bg-ocean/5 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Ingen risiko, kun resultater</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {guarantees.map(g => (
          <div key={g.title} className="text-center">
            <div className="text-3xl mb-2">{g.icon}</div>
            <h3 className="font-semibold text-base mb-2">{g.title}</h3>
            <p className="text-sm text-neutral-700 leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
