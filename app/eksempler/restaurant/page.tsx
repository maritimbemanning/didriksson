import { Metadata } from 'next';
import Link from 'next/link';

// Inline SVG Icons
const UtensilsCrossed = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
);

const Wine = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.867.525 3.611 1.438 5.091A4.5 4.5 0 008.25 19.5h7.5a4.5 4.5 0 004.562-2.409A9.72 9.72 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75zM8.25 19.5v2.25M15.75 19.5v2.25M12 2.25v4.5m-7.5 3h15M12 12v7.5" />
  </svg>
);

const MapPin = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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

const ImageIcon = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

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
