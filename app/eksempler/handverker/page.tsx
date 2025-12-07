import { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, ShowerHead, Flame, AlertTriangle, Home, ClipboardList, Phone, Mail, MapPin, Check } from 'lucide-react';

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
