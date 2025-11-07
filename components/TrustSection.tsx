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
    <section className="border-2 border-ocean/20 bg-gradient-to-br from-ocean/5 via-ocean/10 to-ocean/5 rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-ocean">Ingen risiko, kun resultater</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guarantees.map(g => (
          <div key={g.title} className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-4 hover:bg-white/80 transition-all hover:shadow-lg hover:shadow-ocean/20 border border-neutral-200">
            <div className="text-4xl mb-3">{g.icon}</div>
            <h3 className="font-bold text-base mb-2 text-neutral-900">{g.title}</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
