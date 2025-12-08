import { Metadata } from 'next';
import Link from 'next/link';

// Inline SVG Icons
const Dumbbell = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
  </svg>
);

const Bike = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
  </svg>
);

const PersonStanding = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const Flame = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>
);

const Music2 = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
  </svg>
);

const Target = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const Activity = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const Check = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const MapPin = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const Clock = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Phone = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const PartyPopper = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
  </svg>
);

const Weight = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </svg>
);

export const metadata: Metadata = {
  title: 'Eksempel: Treningssenter-nettside | Didriksson Digital',
  description: 'Se hvordan en moderne nettside for treningssentre og PT kan se ut.',
};

export default function TreningMockup() {
  const memberships = [
    { name: 'Basis', price: '349', features: ['Tilgang til treningsrom', 'Garderobe og dusj', 'Gratis parkering'] },
    { name: 'Pluss', price: '499', features: ['Alt i Basis', '2 gruppetimer/uke', 'Treningsprogram', 'App-tilgang'], popular: true },
    { name: 'Premium', price: '799', features: ['Alt i Pluss', 'Ubegrenset gruppetimer', '1 PT-time/mnd', 'Ernæringsveiledning'] },
  ];

  return (
    <div className="space-y-0 -mx-4 sm:-mx-6 -my-4 sm:-my-6">
      {/* Demo banner */}
      <div className="bg-ocean text-white text-center py-2 px-4 text-sm">
        <span className="font-medium">Dette er et demo-design.</span>{' '}
        <Link href="/book" className="underline hover:no-underline">
          Vil du ha noe lignende? Book et møte →
        </Link>
      </div>

      {/* Mockup Header */}
      <header className="bg-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-xl">N</div>
            <span className="font-bold text-xl">NORD<span className="text-emerald-400">FIT</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#medlemskap" className="hover:text-emerald-400 transition">Medlemskap</a>
            <a href="#timer" className="hover:text-emerald-400 transition">Gruppetimer</a>
            <a href="#pt" className="hover:text-emerald-400 transition">PT</a>
          </nav>
          <a href="#prøv" className="bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-emerald-400 transition">
            Prøv gratis
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Dumbbell className="absolute top-20 left-10 w-48 h-48" strokeWidth={1} />
          <Weight className="absolute bottom-10 right-10 w-36 h-36" strokeWidth={1} />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative">
          <div className="inline-flex items-center gap-2 bg-emerald-700/50 rounded-full px-4 py-2 text-sm">
            <PartyPopper className="w-4 h-4" /> Nyåpnet! 50% på første måned
          </div>
          <h1 className="text-4xl md:text-6xl font-black">
            STERKERE<br/>
            <span className="text-emerald-400">HVER DAG</span>
          </h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
            Nord-Norges mest moderne treningssenter.
            Topp utstyr, dyktige instruktører og et inkluderende miljø.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#prøv" className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-400 transition shadow-lg">
              Start gratis prøveuke
            </a>
            <a href="#medlemskap" className="border-2 border-emerald-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-500/20 transition">
              Se priser
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-emerald-950 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '1200m²', label: 'Treningsareal' },
            { number: '50+', label: 'Apparater' },
            { number: '30+', label: 'Gruppetimer/uke' },
            { number: '24/7', label: 'Åpent' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-black text-emerald-400">{stat.number}</p>
              <p className="text-sm text-emerald-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership */}
      <section id="medlemskap" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Medlemskap</h2>
            <p className="text-neutral-600">Velg pakken som passer deg</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {memberships.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-6 ${plan.popular ? 'bg-emerald-600 text-white ring-4 ring-emerald-300 scale-105' : 'bg-neutral-100'}`}>
                {plan.popular && (
                  <span className="bg-emerald-400 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    MEST POPULÆR
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="mb-4">
                  <span className="text-4xl font-black">{plan.price},-</span>
                  <span className={plan.popular ? 'text-emerald-200' : 'text-neutral-500'}>/mnd</span>
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 ${plan.popular ? 'text-emerald-300' : 'text-emerald-500'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition ${plan.popular ? 'bg-white text-emerald-600 hover:bg-emerald-50' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}>
                  Velg {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section id="timer" className="bg-neutral-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gruppetimer</h2>
            <p className="text-neutral-600">Noe for enhver smak</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Spinning', Icon: Bike },
              { name: 'Yoga', Icon: PersonStanding },
              { name: 'HIIT', Icon: Flame },
              { name: 'Styrke', Icon: Dumbbell },
              { name: 'Dans', Icon: Music2 },
              { name: 'Boksing', Icon: Target },
              { name: 'Pilates', Icon: Activity },
              { name: 'Crossfit', Icon: Weight },
            ].map((cls, i) => (
              <div key={i} className="bg-white p-4 rounded-xl text-center hover:shadow-lg transition cursor-pointer">
                <div className="flex justify-center mb-2">
                  <cls.Icon className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold">{cls.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PT */}
      <section id="pt" className="bg-emerald-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Personlig trener</h2>
            <p className="text-emerald-200 mb-6">
              Få hjelp av våre sertifiserte personlige trenere til å nå målene dine raskere.
              Skreddersydd treningsprogram og oppfølging.
            </p>
            <ul className="space-y-3 mb-6">
              {['Gratis kartlegging', 'Individuelt program', 'Ernæringsveiledning', 'Ukentlig oppfølging'].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" /> {item}
                </li>
              ))}
            </ul>
            <a href="#" className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-400 transition">
              Book gratis prøvetime
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-emerald-800 rounded-xl flex items-center justify-center">
                <PersonStanding className="w-12 h-12 text-emerald-400" strokeWidth={1.5} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free trial */}
      <section id="prøv" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prøv gratis i 7 dager</h2>
          <p className="text-emerald-100 mb-8">
            Ingen binding, ingen kort. Bare kom innom og prøv!
          </p>
          <form className="bg-white/10 backdrop-blur rounded-2xl p-6 max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Navn" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70" />
            <input type="tel" placeholder="Telefon" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70" />
            <input type="email" placeholder="E-post" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70" />
            <button type="button" className="w-full bg-white text-emerald-600 py-3 rounded-lg font-bold hover:bg-emerald-50 transition">
              Start gratis prøveuke
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-neutral-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-2">
              <MapPin className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-bold mb-1">Adresse</h3>
            <p className="text-neutral-400 text-sm">Industriveien 10<br/>9480 Harstad</p>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Clock className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-bold mb-1">Åpent</h3>
            <p className="text-neutral-400 text-sm">24/7 med medlemskort<br/>Bemannet: 07-21</p>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Phone className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-bold mb-1">Kontakt</h3>
            <p className="text-neutral-400 text-sm">123 45 678<br/>hei@nordfit.no</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-8 px-4 text-center text-sm">
        <p>© 2025 NordFit AS • Org.nr: 999 888 777</p>
        <p className="mt-2">
          Demo-nettside laget av{' '}
          <Link href="/" className="text-emerald-400 hover:underline">
            Didriksson Digital
          </Link>
        </p>
      </footer>

      {/* Back to examples */}
      <div className="bg-ocean text-white text-center py-4 px-4">
        <Link href="/eksempler" className="font-medium hover:underline">
          ← Tilbake til alle eksempler
        </Link>
        <span className="mx-4">|</span>
        <Link href="/book" className="font-medium hover:underline">
          Book møte for å få lignende design →
        </Link>
      </div>
    </div>
  );
}
