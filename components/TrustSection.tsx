import { Banknote, Unlock, Zap, Check } from 'lucide-react';

export default function TrustSection() {
  const guarantees = [
    {
      Icon: Banknote,
      title: 'Fastpris',
      desc: 'Du får prisen på forhånd. Ingen skjulte kostnader eller overraskelser underveis.'
    },
    {
      Icon: Unlock,
      title: 'Du eier alt',
      desc: 'Full eierskap til kildekoden og alle filer. Ingen lock-in eller avhengighet.'
    },
    {
      Icon: Zap,
      title: 'Rask respons',
      desc: 'Svar innen 24 timer på hverdager. Leveranse på avtalt tid eller pengene tilbake.'
    },
    {
      Icon: Check,
      title: 'Én revisjonsrunde inkludert',
      desc: 'Du får gjøre endringer før lansering. Ekstra runder tilgjengelig til fastpris.'
    }
  ];

  return (
    <section className="border-2 border-ocean/20 bg-gradient-to-br from-ocean/5 via-ocean/10 to-ocean/5 rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-ocean">Ingen risiko, kun resultater</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guarantees.map(g => (
          <div key={g.title} className="text-center bg-background/60 backdrop-blur-md rounded-2xl p-4 hover:bg-background/80 transition-all hover:shadow-lg hover:shadow-ocean/20 border border-border">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-ocean/10 rounded-xl flex items-center justify-center">
                <g.Icon className="w-6 h-6 text-ocean" strokeWidth={1.5} />
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
