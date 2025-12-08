import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative order-2 md:order-1">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 to-cyan-500/20 rounded-3xl transform rotate-3" />
            <div className="absolute -inset-4 bg-gradient-to-br from-ocean/5 to-transparent rounded-3xl transform -rotate-3" />
            <Image
              src="/images/isak-profil.jpg"
              alt="Isak Didriksson - Webutvikler"
              width={500}
              height={500}
              quality={85}
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-border/50"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 order-1 md:order-2">
          <div>
            <p className="text-ocean font-semibold text-sm uppercase tracking-wider mb-3">Om meg</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Hei, jeg er Isak
            </h2>
          </div>

          <div className="space-y-4 text-lg text-muted leading-relaxed">
            <p>
              Jeg hjelper små og mellomstore bedrifter med å få nettsider som faktisk gir resultater
              – uten byråpriser og lang ventetid.
            </p>
            <p>
              Med bakgrunn fra både maritim næring og tech, forstår jeg hva bedrifter trenger:
              <strong className="text-foreground"> enkle løsninger som fungerer</strong>.
            </p>
            <p>
              Jeg bygger alt selv, fra design til kode, så du slipper å forholde deg til flere ledd.
              Du får en fast kontaktperson som svarer raskt og leverer på tid.
            </p>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-card border border-border rounded-xl p-5 hover:border-ocean/30 transition-colors">
              <div className="text-2xl font-bold text-ocean">Harstad</div>
              <div className="text-sm text-muted mt-1">Basert i Nord-Norge</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 hover:border-ocean/30 transition-colors">
              <div className="text-2xl font-bold text-ocean">24t</div>
              <div className="text-sm text-muted mt-1">Maks responstid</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
