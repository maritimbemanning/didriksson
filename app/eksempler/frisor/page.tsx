import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Eksempel: Frisør-nettside | Didriksson Digital',
  description: 'Se hvordan en moderne nettside for frisører og skjønnhetssalonger kan se ut.',
};

export default function FrisorMockup() {
  const services = [
    { name: 'Dameklipp', price: 'fra 590,-', duration: '45 min' },
    { name: 'Herreklipp', price: 'fra 390,-', duration: '30 min' },
    { name: 'Farge - helfarging', price: 'fra 990,-', duration: '90 min' },
    { name: 'Balayage', price: 'fra 1490,-', duration: '120 min' },
    { name: 'Striper/Highlights', price: 'fra 890,-', duration: '90 min' },
    { name: 'Behandling', price: 'fra 290,-', duration: '30 min' },
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
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="font-bold text-xl tracking-tight">Studio<span className="text-purple-600">Lux</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#tjenester" className="text-neutral-600 hover:text-purple-600 transition">Tjenester</a>
            <a href="#priser" className="text-neutral-600 hover:text-purple-600 transition">Priser</a>
            <a href="#om" className="text-neutral-600 hover:text-purple-600 transition">Om oss</a>
          </nav>
          <a href="#book" className="bg-purple-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-purple-700 transition">
            Book time
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Ledige timer denne uken
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900">
            Din stil,<br/>
            <span className="text-purple-600">vår lidenskap</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Velkommen til StudioLux – din frisørsalong i hjertet av Harstad.
            Vi skaper look som passer deg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#book" className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition shadow-lg shadow-purple-200">
              Book time online
            </a>
            <a href="tel:+4712345678" className="border-2 border-purple-200 text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition">
              Ring 123 45 678
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Våre tjenester</h2>
            <p className="text-neutral-600">Alt fra klipp til farging og behandlinger</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '✂️', title: 'Klipp', desc: 'Dame, herre og barn' },
              { icon: '🎨', title: 'Farge', desc: 'Helfarging, balayage, striper' },
              { icon: '💆', title: 'Behandling', desc: 'Olaplex, keratinbehandling' },
              { icon: '💅', title: 'Styling', desc: 'Oppsett og føning' },
              { icon: '👰', title: 'Bryllup', desc: 'Brud og bryllupsgjester' },
              { icon: '🧴', title: 'Produkter', desc: 'Kvalitetsprodukter for hjemmebruk' },
            ].map((service, i) => (
              <div key={i} className="bg-purple-50 p-6 rounded-2xl text-center hover:bg-purple-100 transition">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                <p className="text-neutral-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price list */}
      <section id="priser" className="bg-purple-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Prisliste</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {services.map((service, i) => (
              <div key={i} className={`flex items-center justify-between p-4 ${i !== services.length - 1 ? 'border-b' : ''}`}>
                <div>
                  <h3 className="font-medium">{service.name}</h3>
                  <p className="text-sm text-neutral-500">{service.duration}</p>
                </div>
                <span className="text-purple-600 font-bold">{service.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-neutral-500 mt-4">
            Alle priser er veiledende. Eksakt pris avtales ved konsultasjon.
          </p>
        </div>
      </section>

      {/* Gallery mock */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Vårt arbeid</h2>
            <p className="text-neutral-600">Før og etter transformasjoner</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl flex items-center justify-center text-4xl">
                💇
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="om" className="bg-neutral-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Møt teamet</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Lisa Johansen', role: 'Daglig leder / Frisør', years: '15 år erfaring' },
              { name: 'Emma Berg', role: 'Fargespesialist', years: '8 år erfaring' },
              { name: 'Sofia Nilsen', role: 'Frisør', years: '5 år erfaring' },
            ].map((person, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👩
                </div>
                <h3 className="font-bold text-lg">{person.name}</h3>
                <p className="text-purple-600 text-sm">{person.role}</p>
                <p className="text-neutral-500 text-xs mt-1">{person.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Klar for ny look?</h2>
          <p className="text-purple-100 mb-8">
            Book time online eller ring oss. Vi gleder oss til å møte deg!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition">
              Book online nå
            </a>
            <a href="tel:+4712345678" className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
              Ring 123 45 678
            </a>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="bg-neutral-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="text-2xl mb-2 block">📍</span>
            <h3 className="font-bold mb-1">Besøk oss</h3>
            <p className="text-neutral-400 text-sm">Strandgata 15<br/>9480 Harstad</p>
          </div>
          <div>
            <span className="text-2xl mb-2 block">🕐</span>
            <h3 className="font-bold mb-1">Åpningstider</h3>
            <p className="text-neutral-400 text-sm">Man-Fre: 09-18<br/>Lør: 10-16</p>
          </div>
          <div>
            <span className="text-2xl mb-2 block">📱</span>
            <h3 className="font-bold mb-1">Kontakt</h3>
            <p className="text-neutral-400 text-sm">123 45 678<br/>hei@studiolux.no</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-8 px-4 text-center text-sm">
        <p>© 2025 StudioLux Frisør • Org.nr: 999 888 777</p>
        <p className="mt-2">
          Demo-nettside laget av{' '}
          <Link href="/" className="text-purple-400 hover:underline">
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
