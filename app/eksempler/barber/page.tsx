import { Metadata } from 'next';
import Link from 'next/link';
import { Scissors, Star, MapPin, Clock, Phone, Instagram, Check, Users, Award, Flame } from 'lucide-react';

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
            <a href="#" className="bg-neutral-950 text-white px-8 py-4 rounded font-bold hover:bg-neutral-800 transition">
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
