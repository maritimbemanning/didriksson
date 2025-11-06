export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '💸',
      title: 'Rimelig og forutsigbart',
      desc: 'Fastpris fra 15 000 kr. Du vet kostnaden før vi starter, ingen overraskelser.'
    },
    {
      icon: '🚀',
      title: 'Rask levering',
      desc: 'Ferdig på 5–14 dager. Perfekt når du trenger noe raskt uten å vente måneder.'
    },
    {
      icon: '🎯',
      title: 'Erfaring som leverer',
      desc: 'Tidligere kunder har fått 3× flere henvendelser og spart 5 timer i uken.'
    }
  ];

  return (
    <section className="py-8 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Hvorfor velge Didriksson Digital?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reasons.map(r => (
          <div key={r.title} className="text-center space-y-2">
            <div className="text-4xl">{r.icon}</div>
            <h3 className="font-semibold text-base">{r.title}</h3>
            <p className="text-base text-neutral-700 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
