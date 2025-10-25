export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Didriksson Digital</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">Tjenester</a>
              <a href="#about" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">Om oss</a>
              <a href="#contact" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
              Profesjonelle IT-tjenester
              <span className="block text-blue-600 dark:text-blue-400 mt-2">for din bedrift</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mb-10">
              Vi leverer skreddersydde digitale løsninger som hjelper bedrifter med å vokse og lykkes i den digitale tidsalderen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Kom i gang
              </a>
              <a href="#services" className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                Les mer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Våre tjenester
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Vi tilbyr et bredt spekter av IT-tjenester tilpasset dine behov
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Webutvikling</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Moderne, responsive nettsider og webapplikasjoner bygget med de nyeste teknologiene som Next.js og React.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">App-utvikling</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Skreddersydde mobilapplikasjoner for iOS og Android som engasjerer brukerne og driver forretningsvekst.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Cloud-løsninger</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Sikker og skalerbar skyinfrastruktur som sikrer optimal ytelse og tilgjengelighet for din virksomhet.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">IT-sikkerhet</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Omfattende sikkerhetstjenester som beskytter din bedrift mot digitale trusler og cyberkriminalitet.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Digital markedsføring</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Strategisk digital markedsføring og SEO-optimalisering for å øke din synlighet og nå flere kunder.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">IT-konsultasjon</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Erfarne konsulenter som hjelper deg med strategisk planlegging og implementering av IT-løsninger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                Om Didriksson Digital ENK
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-4">
                Vi er en innovativ IT-leverandør som brenner for å hjelpe bedrifter med å realisere sitt digitale potensial. 
                Med solid erfaring og dyp teknisk kompetanse leverer vi løsninger som gjør en forskjell.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
                Vårt fokus er å forstå dine behov og levere skreddersydde løsninger som ikke bare oppfyller, 
                men overskrider forventningene. Vi bygger langsiktige partnerskap basert på tillit og resultater.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-300">Fornøyde kunder</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-300">Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">∞</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-300">Muligheter</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Hvorfor velge oss?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Erfaren og dedikert team med dyptgående teknisk kunnskap</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Skreddersydde løsninger tilpasset dine unike behov</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Konkurransedyktige priser og transparent prismodell</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rask responstid og pålitelig support hele døgnet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            Klar til å komme i gang?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10 max-w-2xl mx-auto">
            Kontakt oss i dag for en uforpliktende samtale om hvordan vi kan hjelpe din bedrift med å lykkes digitalt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:kontakt@didriksson.no" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Send oss en e-post
            </a>
            <a href="tel:+4712345678" className="inline-block bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700">
              Ring oss
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Didriksson Digital ENK</h3>
              <p className="text-zinc-400">
                Profesjonelle IT-tjenester for moderne bedrifter
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Tjenester</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#services" className="hover:text-white transition-colors">Webutvikling</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">App-utvikling</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Cloud-løsninger</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">IT-sikkerhet</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>E-post: kontakt@didriksson.no</li>
                <li>Telefon: +47 123 45 678</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-400">
            <p>&copy; {new Date().getFullYear()} Didriksson Digital ENK. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
