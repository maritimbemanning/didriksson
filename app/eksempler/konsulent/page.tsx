import { Metadata } from 'next';
import Link from 'next/link';

// Inline SVG Icons
const Scale = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </svg>
);

const Home = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const Users = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const Building2 = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);

const Star = ({ className = '', fill = 'none', strokeWidth = 1.5 }: { className?: string; fill?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const Phone = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const Mail = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const MapPin = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

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
