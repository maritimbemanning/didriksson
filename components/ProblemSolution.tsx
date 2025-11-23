'use client';

export default function ProblemSolution() {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Problem */}
        <div className="bg-red-500/10 dark:bg-red-500/20 border border-red-500/30 rounded-2xl p-8 space-y-6 hover-lift">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-red-600 dark:text-red-400">Kjenner du deg igjen?</h2>
          </div>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span className="text-foreground">Nettsiden ser utdatert ut og skremmer bort kunder</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span className="text-foreground">Du får for få henvendelser fra nettet</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span className="text-foreground">Byråer tar 50–100k+ og bruker måneder</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span className="text-foreground">Du vet ikke hva du faktisk trenger</span>
            </li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-green-500/10 dark:bg-green-500/20 border border-green-500/30 rounded-2xl p-8 space-y-6 hover-lift">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-green-600 dark:text-green-400">Slik løser vi det</h2>
          </div>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span className="text-foreground">Moderne, rask nettside som bygger tillit</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span className="text-foreground">SEO-optimalisert for lokale søk</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span className="text-foreground">Fastpris fra 15 000 kr, ferdig på 1–2 uker</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span className="text-foreground">Gratis strategimøte for å finne ut hva du trenger</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
