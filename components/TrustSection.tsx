'use client';

const BanknoteIcon = () => (
  <svg className="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);

const UnlockIcon = () => (
  <svg className="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 019.9-1" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function TrustSection() {
  const guarantees = [
    {
      icon: <BanknoteIcon />,
      title: 'Fastpris',
      desc: 'Du får prisen på forhånd. Ingen skjulte kostnader eller overraskelser underveis.'
    },
    {
      icon: <UnlockIcon />,
      title: 'Du eier alt',
      desc: 'Full eierskap til kildekoden og alle filer. Ingen lock-in eller avhengighet.'
    },
    {
      icon: <ZapIcon />,
      title: 'Rask respons',
      desc: 'Svar innen 24 timer på hverdager. Leveranse på avtalt tid eller pengene tilbake.'
    },
    {
      icon: <CheckIcon />,
      title: 'Én revisjonsrunde inkludert',
      desc: 'Du får gjøre endringer før lansering. Ekstra runder tilgjengelig til fastpris.'
    }
  ];

  return (
    <section className="border-2 border-ocean/20 bg-gradient-to-br from-ocean/5 via-ocean/10 to-ocean/5 rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-ocean">Ingen risiko, kun resultater</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guarantees.map(g => (
          <div key={g.title} className="text-center bg-background/60 backdrop-blur-md rounded-2xl p-4 hover:bg-background/80 transition-all hover:shadow-lg hover:shadow-ocean/20 border border-border hover-lift">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-ocean/10 rounded-xl flex items-center justify-center">
                {g.icon}
              </div>
            </div>
            <h3 className="font-bold text-base mb-2 text-foreground">{g.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
