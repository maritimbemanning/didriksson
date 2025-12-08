import { Metadata } from 'next';
import Link from 'next/link';
import { UtensilsCrossed, Wine, MapPin, Phone, Mail, ImageIcon } from '../../../components/icons';

export const metadata: Metadata = {
  title: 'Eksempel: Restaurant-nettside | Didriksson Digital',
  description: 'Se hvordan en moderne nettside for restauranter og caféer kan se ut.',
};

export default function RestaurantMockup() {
  const menuItems = [
    { name: 'Bacalao', desc: 'Tradisjonell klippfisk med tomat og paprika', price: '289,-' },
    { name: 'Nordlandslam', desc: 'Mørt lammekjøtt med rotgrønnsaker', price: '349,-' },
    { name: 'Dagens fangst', desc: 'Fersk fisk fra lokale fiskere', price: '319,-' },
    { name: 'Reinsdyrfilet', desc: 'Med tyttebær og potetpuré', price: '389,-' },
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
      <header className="bg-rose-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-6 h-6" />
            <span className="font-serif font-bold text-xl">Sjøkanten</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#meny" className="hover:underline">Meny</a>
            <a href="#om" className="hover:underline">Om oss</a>
            <a href="#kontakt" className="hover:underline">Kontakt</a>
          </nav>
          <a href="#reserver" className="bg-white text-rose-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-rose-50 transition">
            Reserver bord
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-800 to-rose-950 text-white py-24 px-4 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0yOHY2aDZ2LTZoLTZ6bTAgMTR2Nmg2di02aC02em0wIDE0djZoNnYtNmgtNnptLTE0LTE0djZoNnYtNmgtNnptMCAxNHY2aDZ2LTZoLTZ6bTAtMjh2Nmg2di02aC02em0wIDQydjZoNnYtNmgtNnptLTE0LTE0djZoNnYtNmgtNnptMC0xNHY2aDZ2LTZoLTZ6bTAtMTR2Nmg2di02aC02em0wIDQydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative">
          <p className="text-rose-300 font-medium tracking-widest uppercase text-sm">Restaurant & Bar</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold">
            Sjøkanten
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
            Nordnorsk mat med sjel. Ferske råvarer fra hav og land,
            servert med utsikt over havna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#reserver" className="bg-white text-rose-900 px-8 py-4 rounded-full font-bold hover:bg-rose-50 transition shadow-lg">
              Reserver bord
            </a>
            <a href="#meny" className="border-2 border-white/50 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
              Se menyen
            </a>
          </div>
        </div>
      </section>

      {/* Opening hours bar */}
      <section className="bg-rose-950 text-white py-4 px-4 border-t border-rose-800">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-sm">
          <div className="text-center">
            <p className="text-rose-400 text-xs uppercase tracking-wide">Man-Tor</p>
            <p className="font-medium">16:00 - 22:00</p>
          </div>
          <div className="text-center">
            <p className="text-rose-400 text-xs uppercase tracking-wide">Fre-Lør</p>
            <p className="font-medium">16:00 - 24:00</p>
          </div>
          <div className="text-center">
            <p className="text-rose-400 text-xs uppercase tracking-wide">Søndag</p>
            <p className="font-medium">14:00 - 21:00</p>
          </div>
        </div>
      </section>

      {/* Menu preview */}
      <section id="meny" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-rose-600 font-medium tracking-widest uppercase text-sm mb-2">Vår meny</p>
            <h2 className="text-3xl font-serif font-bold">Dagens utvalg</h2>
          </div>
          <div className="space-y-6">
            {menuItems.map((item, i) => (
              <div key={i} className="flex items-start justify-between border-b border-neutral-200 pb-6">
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
                <span className="text-rose-600 font-bold text-lg whitespace-nowrap ml-4">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="inline-flex items-center gap-2 text-rose-600 font-medium hover:underline">
              Se full meny (PDF) →
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="om" className="bg-neutral-100 py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-rose-200 rounded-2xl flex items-center justify-center">
            <Wine className="w-24 h-24 text-rose-400" strokeWidth={1} />
          </div>
          <div>
            <p className="text-rose-600 font-medium tracking-widest uppercase text-sm mb-2">Vår historie</p>
            <h2 className="text-3xl font-serif font-bold mb-4">Smak av Nord-Norge</h2>
            <p className="text-neutral-600 mb-4">
              Siden 2010 har vi servert det beste fra nordnorske råvarer.
              Vår kokk henter inspirasjon fra havet rett utenfor vinduet
              og fjellet i horisonten.
            </p>
            <p className="text-neutral-600">
              Vi samarbeider med lokale fiskere, bønder og sanker for å
              gi deg den mest autentiske smaksopplevelsen.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram feed mock */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-rose-600 font-medium">@sjokanten_harstad</p>
            <h2 className="text-2xl font-serif font-bold">Følg oss på Instagram</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg flex items-center justify-center">
                <ImageIcon className="w-10 h-10 text-rose-300" strokeWidth={1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section id="reserver" className="bg-rose-900 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Reserver bord</h2>
          <p className="text-rose-200 mb-8">
            Book online eller ring oss på 123 45 678
          </p>
          <form className="bg-white/10 rounded-2xl p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Navn" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50" />
              <input type="tel" placeholder="Telefon" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <input type="date" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white/70" />
              <input type="time" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white/70" />
              <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white/70">
                <option>2 personer</option>
                <option>3 personer</option>
                <option>4 personer</option>
                <option>5+ personer</option>
              </select>
            </div>
            <button type="button" className="w-full bg-white text-rose-900 py-3 rounded-lg font-bold hover:bg-rose-50 transition">
              Send reservasjon
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="bg-neutral-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-2">
              <MapPin className="w-6 h-6 text-rose-400" />
            </div>
            <h3 className="font-bold mb-1">Adresse</h3>
            <p className="text-neutral-400 text-sm">Havnegata 12<br/>9480 Harstad</p>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Phone className="w-6 h-6 text-rose-400" />
            </div>
            <h3 className="font-bold mb-1">Telefon</h3>
            <p className="text-neutral-400 text-sm">123 45 678</p>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Mail className="w-6 h-6 text-rose-400" />
            </div>
            <h3 className="font-bold mb-1">E-post</h3>
            <p className="text-neutral-400 text-sm">hei@sjokanten.no</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-8 px-4 text-center text-sm">
        <p>© 2025 Restaurant Sjøkanten • Org.nr: 999 888 777</p>
        <p className="mt-2">
          Demo-nettside laget av{' '}
          <Link href="/" className="text-rose-400 hover:underline">
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
