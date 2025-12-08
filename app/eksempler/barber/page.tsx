import { Metadata } from 'next';
import Link from 'next/link';

// Inline SVG Icons
const Scissors = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
  </svg>
);

const Star = ({ className = '', fill = 'none', strokeWidth = 1.5 }: { className?: string; fill?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
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

const Instagram = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
  </svg>
);

const Users = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const Award = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
);

const Flame = ({ className = '', strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>
);

export const metadata: Metadata = {
  title: 'Eksempel: Barbershop-nettside | Didriksson Digital',
  description: 'Se hvordan en moderne nettside for barbershops kan se ut.',
};

export default function BarberMockup() {
  const services = [
    { name: 'Herreklipp', price: 'fra 850,-', duration: '45 min', desc: 'Ny frisyre/designklipp' },
    { name: 'Fade kun på sider og bak', price: '600,-', duration: '30 min', desc: 'Kun fade, ikke klipp' },
    { name: 'Skjegg (stuss)', price: '550,-', duration: '15 min', desc: 'Forming av linjer med maskin' },
    { name: 'Skjegg (medium)', price: '700,-', duration: '30 min', desc: 'Forming med kniv på øvre linje' },
    { name: 'Skjegg (full)', price: '950,-', duration: '45 min', desc: 'Full forming med kniv og varme omslag' },
  ];

  const team = [
    { name: 'Tommy', role: 'Eier / Master Barber', initials: 'T' },
    { name: 'Stine', role: 'Barber', initials: 'S' },
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
      <header className="bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center">
              <Scissors className="w-5 h-5 text-neutral-950" />
            </div>
            <span className="font-black text-2xl tracking-tight">REBEL</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#tjenester" className="text-neutral-400 hover:text-white transition">Tjenester</a>
            <a href="#priser" className="text-neutral-400 hover:text-white transition">Priser</a>
            <a href="#team" className="text-neutral-400 hover:text-white transition">Vårt team</a>
          </nav>
          <a href="#book" className="bg-amber-500 text-neutral-950 px-5 py-2.5 rounded font-bold text-sm hover:bg-amber-400 transition">
            Book time
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-neutral-950 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0yOHY2aDZ2LTZoLTZ6bTAgMTR2Nmg2di02aC02em0wIDE0djZoNnYtNmgtNnptLTE0LTE0djZoNnYtNmgtNnptMCAxNHY2aDZ2LTZoLTZ6bTAtMjh2Nmg2di02aC02em0wIDQydjZoNnYtNmgtNnptLTE0LTE0djZoNnYtNmgtNnptMC0xNHY2aDZ2LTZoLTZ6bTAtMTR2Nmg2di02aC02em0wIDQydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative">
          {/* Reviews badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 text-sm">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500" fill="currentColor" />
              ))}
            </div>
            <span className="text-amber-400 font-medium">5.0 stjerner på Timma</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            REBEL<br/>
            <span className="text-amber-500">HARSTAD</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Herrenes fristed. Din lokale barbershop i hjertet av Harstad.
            Klassisk håndverk og tradisjonell knivbarbering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#book" className="bg-amber-500 text-neutral-950 px-8 py-4 rounded font-bold text-lg hover:bg-amber-400 transition shadow-lg shadow-amber-500/20">
              Book time nå
            </a>
            <a href="tel:+4741641137" className="border border-neutral-700 text-white px-8 py-4 rounded font-bold text-lg hover:bg-neutral-800 transition">
              Ring oss
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-900 text-white py-8 px-4 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { Icon: Star, number: '5.0', label: 'På Timma' },
            { Icon: Users, number: '100%', label: 'Fornøyde' },
            { Icon: Award, number: 'Harstad', label: 'Lokasjon' },
            { Icon: Flame, number: '#1', label: 'I byen' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <stat.Icon className="w-5 h-5 text-amber-500 mb-2" />
              <p className="text-2xl font-black text-white">{stat.number}</p>
              <p className="text-xs text-neutral-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="bg-neutral-950 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-2">Våre tjenester</p>
            <h2 className="text-3xl font-bold">Premium grooming</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Scissors, title: 'Klassisk klipp', desc: 'Presisjonskutt tilpasset din stil og ansiktsform' },
              { Icon: Scissors, title: 'Knivbarbering', desc: 'Tradisjonell barbering med varme håndklær' },
              { Icon: Scissors, title: 'Skin Fade', desc: 'Sømløs overgang fra kort til lang' },
            ].map((service, i) => (
              <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center hover:border-amber-500/50 transition group">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition">
                  <service.Icon className="w-7 h-7 text-amber-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-neutral-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price list */}
      <section id="priser" className="bg-neutral-900 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-2">Prisliste</p>
            <h2 className="text-3xl font-bold text-white">Enkelt og transparent</h2>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden">
            {services.map((service, i) => (
              <div key={i} className={`flex items-center justify-between p-5 ${i !== services.length - 1 ? 'border-b border-neutral-800' : ''} hover:bg-neutral-900 transition`}>
                <div>
                  <h3 className="font-bold text-white">{service.name}</h3>
                  <p className="text-sm text-neutral-500">{service.duration}</p>
                </div>
                <span className="text-amber-500 font-bold text-lg">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-neutral-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-2">Vårt team</p>
            <h2 className="text-3xl font-bold">Mestere i faget</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
            {team.map((person, i) => (
              <div key={i} className="text-center group">
                <div className="w-28 h-28 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-black text-neutral-950 group-hover:scale-105 transition">
                  {person.initials}
                </div>
                <h3 className="font-bold text-lg">{person.name}</h3>
                <p className="text-amber-500 text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-neutral-900 py-16 px-4 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-500" fill="currentColor" />
              ))}
            </div>
            <h2 className="text-3xl font-bold text-white">Hva kundene sier</h2>
            <p className="text-neutral-500 mt-2">5 av 5 stjerner på Timma</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Kunde', text: 'Tommy utfører jobben til punkt og prikke, med fantastisk presisjon.' },
              { name: 'Kunde', text: 'En glimrende opplevelse! Anbefales på det sterkeste.' },
              { name: 'Kunde', text: 'Beste barbershopen i Harstad. Tommy er en mester.' },
            ].map((review, i) => (
              <div key={i} className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-500" fill="currentColor" />
                  ))}
                </div>
                <p className="text-neutral-400 text-sm mb-4">&quot;{review.text}&quot;</p>
                <p className="text-white font-medium text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="bg-amber-500 text-neutral-950 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Klar for fresh cut?</h2>
          <p className="text-amber-900 mb-8">
            Book time online eller bare stikk innom. Walk-ins alltid velkommen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://timma.no/salong/Rebel" target="_blank" rel="noopener noreferrer" className="bg-neutral-950 text-white px-8 py-4 rounded font-bold hover:bg-neutral-800 transition">
              Book på Timma
            </a>
            <a href="tel:+4741641137" className="border-2 border-neutral-950 px-8 py-4 rounded font-bold hover:bg-amber-400 transition">
              Ring 416 41 137
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-neutral-950 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-2">
              <MapPin className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="font-bold mb-1">Adresse</h3>
            <p className="text-neutral-500 text-sm">Rikard Kaarbos plass 1<br/>9405 Harstad</p>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Clock className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="font-bold mb-1">Åpningstider</h3>
            <p className="text-neutral-500 text-sm">Man-Fre: 10-19<br/>Lør: 10-17</p>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Phone className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="font-bold mb-1">Kontakt</h3>
            <p className="text-neutral-500 text-sm">416 41 137</p>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Instagram className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="font-bold mb-1">Instagram</h3>
            <p className="text-neutral-500 text-sm">@rebel_harstad</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-500 py-8 px-4 text-center text-sm border-t border-neutral-900">
        <p>&copy; 2025 Rebel Harstad</p>
        <p className="mt-2">
          Demo-nettside laget av{' '}
          <Link href="/" className="text-amber-500 hover:underline">
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
