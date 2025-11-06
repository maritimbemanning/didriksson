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
    <section className="py-8 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">Hvorfor velge Didriksson Digital?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map(r => (
          <div key={r.title} className="text-center space-y-3 p-6 rounded-2xl hover:bg-neutral-50 transition-all border border-transparent hover:border-ocean/20 hover:shadow-lg group">
            <div className="text-5xl group-hover:scale-110 transition-transform">{r.icon}</div>
            <h3 className="font-bold text-lg text-neutral-900">{r.title}</h3>
            <p className="text-base text-neutral-600 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
