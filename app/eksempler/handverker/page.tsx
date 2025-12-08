import { Metadata } from 'next';
import Link from 'next/link';

// Inline SVG Icons
const Wrench = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
);

const ShowerHead = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

const Flame = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>
);

const AlertTriangle = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

const Home = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const ClipboardList = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
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

const Check = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export const metadata: Metadata = {
  title: 'Eksempel: Håndverker-nettside | Didriksson Digital',
  description: 'Se hvordan en moderne nettside for rørleggere og håndverkere kan se ut.',
};

export default function HandverkerMockup() {
  const services = [
    { Icon: ShowerHead, title: 'Bad & renovering', desc: 'Komplett baderomsrenovering fra A til Å' },
    { Icon: Flame, title: 'Varme & VVS', desc: 'Varmepumper, gulvvarme og rørlegging' },
    { Icon: AlertTriangle, title: 'Akutt rørlegger', desc: 'Vannlekkasje? Vi kommer innen 2 timer' },
    { Icon: Home, title: 'Nybygg', desc: 'VVS-installasjon for nye boliger' },
    { Icon: Wrench, title: 'Reparasjoner', desc: 'Tette rør, kraner og toaletter' },
    { Icon: ClipboardList, title: 'Inspeksjon', desc: 'Rør-TV og tilstandsrapport' },
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
      <header className="bg-amber-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg">Nordvik Rørlegger</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#tjenester" className="hover:underline">Tjenester</a>
            <a href="#om" className="hover:underline">Om oss</a>
            <a href="#kontakt" className="hover:underline">Kontakt</a>
          </nav>
          <a href="#kontakt" className="bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-amber-50 transition">
            Ring 123 45 678
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Ledig for oppdrag i Harstad-området
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Rørlegger du kan stole på
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            20 års erfaring med VVS, bad og varme. Kvalitetsarbeid med garanti.
            Rask respons på akutte oppdrag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#kontakt" className="bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 transition shadow-lg">
              Få gratis befaring
            </a>
            <a href="tel:+4712345678" className="border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Akutt? Ring nå
            </a>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white py-8 px-4 border-b">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-neutral-600">
          {['Autorisert rørlegger', 'Mesterbrev', '5 års garanti', 'Forsikret arbeid'].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" /> {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="bg-neutral-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Våre tjenester</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <service.Icon className="w-8 h-8 text-amber-600 mb-4" strokeWidth={1.5} />
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Før og etter</h2>
          <p className="text-center text-neutral-600 mb-12">Se transformasjonen fra våre siste prosjekter</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-neutral-100 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="aspect-square bg-neutral-300 flex items-center justify-center text-neutral-500">
                    Før
                  </div>
                  <div className="aspect-square bg-amber-100 flex items-center justify-center text-amber-600">
                    Etter
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Baderomsrenovering #{i}</h3>
                  <p className="text-sm text-neutral-600">Komplett renovering på 3 uker</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-amber-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6 text-amber-300">&ldquo;</div>
          <p className="text-xl text-neutral-700 italic mb-6">
            Fantastisk jobb med badet vårt! Profesjonelle fra start til slutt,
            ryddig og punktlig. Anbefales på det sterkeste.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-700">
              KH
            </div>
            <div className="text-left">
              <p className="font-bold">Kari Hansen</p>
              <p className="text-sm text-neutral-600">Harstad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="bg-neutral-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Kontakt oss</h2>
            <p className="text-neutral-400 mb-8">
              Få et uforpliktende tilbud innen 24 timer.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-sm text-neutral-400">Telefon</p>
                  <p className="font-bold">123 45 678</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-sm text-neutral-400">E-post</p>
                  <p className="font-bold">post@nordvik-ror.no</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-sm text-neutral-400">Område</p>
                  <p className="font-bold">Harstad og omegn</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="font-bold mb-4">Send forespørsel</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Navn" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50" />
              <input type="tel" placeholder="Telefon" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50" />
              <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white/70">
                <option>Velg tjeneste...</option>
                <option>Baderom</option>
                <option>VVS</option>
                <option>Akutt</option>
              </select>
              <textarea placeholder="Beskriv oppdraget..." rows={3} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50"></textarea>
              <button type="button" className="w-full bg-amber-500 text-white py-3 rounded-lg font-bold hover:bg-amber-400 transition">
                Send forespørsel
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-8 px-4 text-center text-sm">
        <p>© 2025 Nordvik Rørlegger AS • Org.nr: 999 888 777</p>
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
