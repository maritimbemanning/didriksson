import { Metadata } from 'next';
import Link from 'next/link';
import { Dumbbell, Bike, PersonStanding, Flame, Music2, Target, Activity, Check, MapPin, Clock, Phone, PartyPopper, Weight } from 'lucide-react';

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
