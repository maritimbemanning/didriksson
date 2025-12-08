'use client';

const DollarIcon = () => (
  <svg className="w-7 h-7 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-7 h-7 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-7 h-7 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <DollarIcon />,
      title: 'Rimelig og forutsigbart',
      desc: 'Fastpris fra 15 000 kr. Du vet kostnaden før vi starter, ingen overraskelser.'
    },
    {
      icon: <RocketIcon />,
      title: 'Rask levering',
      desc: 'Ferdig på 5–14 dager. Perfekt når du trenger noe raskt uten å vente måneder.'
    },
    {
      icon: <TargetIcon />,
      title: 'Erfaring som leverer',
      desc: 'Tidligere kunder har fått 3× flere henvendelser og spart 5 timer i uken.'
    }
  ];

  return (
    <section className="py-8 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground">Hvorfor velge Didriksson Digital?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map(r => (
          <div key={r.title} className="text-center space-y-3 p-6 rounded-2xl hover:bg-card transition-all border border-transparent hover:border-ocean/30 hover:shadow-xl hover:shadow-ocean/10 group hover-lift">
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-ocean/10 rounded-2xl flex items-center justify-center group-hover:bg-ocean/20 transition-colors">
                {r.icon}
              </div>
            </div>
            <h3 className="font-bold text-lg text-foreground">{r.title}</h3>
            <p className="text-base text-muted leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
