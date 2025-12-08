import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, Home, Users, Building2, Star, Phone, Mail, MapPin } from '../../../components/icons';

export const metadata: Metadata = {
  title: 'Eksempel: Advokat-nettside | Didriksson Digital',
  description: 'Se hvordan en moderne nettside for advokater og konsulenter kan se ut.',
};

export default function KonsulentMockup() {
  const services = [
    { Icon: Scale, title: 'Arbeidsrett', desc: 'Ansettelser, oppsigelser og arbeidskonfliker' },
    { Icon: Home, title: 'Eiendom', desc: 'Kjøp, salg og tvister' },
    { Icon: Users, title: 'Familierett', desc: 'Skilsmisse, arv og barnefordeling' },
    { Icon: Building2, title: 'Selskapsrett', desc: 'Etablering, avtaler og tvister' },
  ];

  const team = [
    { name: 'Erik Strand', title: 'Partner / Advokat', initials: 'ES' },
    { name: 'Maria Olsen', title: 'Advokat', initials: 'MO' },
    { name: 'Thomas Berg', title: 'Advokatfullmektig', initials: 'TB' },
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
      <header className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center font-bold text-slate-900">S</div>
            <div>
              <span className="font-bold">Strand Advokat</span>
              <span className="text-slate-400 text-sm block">Juridisk rådgivning</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#fagomrader" className="hover:text-amber-400 transition">Fagområder</a>
            <a href="#team" className="hover:text-amber-400 transition">Vårt team</a>
            <a href="#kontakt" className="hover:text-amber-400 transition">Kontakt</a>
          </nav>
          <a href="#kontakt" className="bg-amber-500 text-slate-900 px-4 py-2 rounded font-semibold text-sm hover:bg-amber-400 transition">
            Gratis vurdering
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Juridisk trygghet<br/>
            <span className="text-amber-400">når du trenger det</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Over 25 års erfaring med å hjelpe privatpersoner og bedrifter.
            Første konsultasjon er alltid gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#kontakt" className="bg-amber-500 text-slate-900 px-8 py-4 rounded font-bold hover:bg-amber-400 transition">
              Book gratis konsultasjon
            </a>
            <a href="tel:+4712345678" className="border border-slate-600 px-8 py-4 rounded font-bold hover:bg-slate-800 transition">
              Ring 123 45 678
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-slate-800 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
            <span>Medlem av Advokatforeningen</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
            <span>Sikkerhet for klienter</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
            <span>Profesjonsansvar</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="fagomrader" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Våre fagområder</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Vi tilbyr juridisk bistand innen en rekke områder, med særlig kompetanse på arbeidsrett og eiendom.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="border border-neutral-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-lg transition group">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <service.Icon className="w-7 h-7 text-amber-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-amber-600 transition">{service.title}</h3>
                <p className="text-neutral-600">{service.desc}</p>
                <a href="#kontakt" className="text-amber-600 font-medium mt-4 inline-block hover:underline">
                  Les mer →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vårt team</h2>
            <p className="text-neutral-600">Erfarne jurister med bred kompetanse</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((person, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {person.initials}
                </div>
                <h3 className="font-bold text-lg">{person.name}</h3>
                <p className="text-neutral-600 text-sm">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Slik jobber vi</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Kontakt', desc: 'Ta kontakt for gratis vurdering' },
              { step: '02', title: 'Møte', desc: 'Vi kartlegger saken din' },
              { step: '03', title: 'Strategi', desc: 'Vi lager en plan sammen' },
              { step: '04', title: 'Løsning', desc: 'Vi jobber for ditt beste resultat' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Trenger du juridisk hjelp?</h2>
            <p className="text-slate-300 mb-6">
              Første konsultasjon er alltid gratis og uforpliktende.
              Vi vurderer saken din og gir deg ærlige råd.
            </p>
            <div className="space-y-3 text-slate-300">
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" /> 123 45 678
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" /> post@strandadvokat.no
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-400" /> Storgata 1, 9008 Tromsø
              </p>
            </div>
          </div>
          <form className="bg-slate-800 rounded-xl p-6 space-y-4">
            <h3 className="font-bold text-lg mb-2">Send henvendelse</h3>
            <input type="text" placeholder="Navn" className="w-full px-4 py-3 rounded bg-slate-700 border border-slate-600 placeholder-slate-400" />
            <input type="email" placeholder="E-post" className="w-full px-4 py-3 rounded bg-slate-700 border border-slate-600 placeholder-slate-400" />
            <input type="tel" placeholder="Telefon" className="w-full px-4 py-3 rounded bg-slate-700 border border-slate-600 placeholder-slate-400" />
            <select className="w-full px-4 py-3 rounded bg-slate-700 border border-slate-600 text-slate-300">
              <option>Velg fagområde...</option>
              <option>Arbeidsrett</option>
              <option>Eiendom</option>
              <option>Familierett</option>
              <option>Selskapsrett</option>
            </select>
            <textarea placeholder="Beskriv kort din sak..." rows={3} className="w-full px-4 py-3 rounded bg-slate-700 border border-slate-600 placeholder-slate-400"></textarea>
            <button type="button" className="w-full bg-amber-500 text-slate-900 py-3 rounded font-bold hover:bg-amber-400 transition">
              Send henvendelse
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-sm">
        <p>© 2025 Strand Advokat AS • Org.nr: 999 888 777</p>
        <p className="mt-2">
          Demo-nettside laget av{' '}
          <Link href="/" className="text-amber-400 hover:underline">
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
