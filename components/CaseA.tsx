'use client';

export default function CaseA() {
  return (
    <section className='space-y-8'>
      <div className='text-center'>
        <p className='text-ocean font-semibold mb-2 text-sm uppercase tracking-wider'>Kundecase</p>
        <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
          Fra 1% til 3× flere henvendelser
        </h2>
        <p className='text-lg text-muted mt-3 max-w-2xl mx-auto'>
          Se hvordan Bluecrew gikk fra en treg, utdatert nettside til et komplett system som sparer dem timer hver uke.
        </p>
      </div>

      {/* Main case study */}
      <div className='bg-card rounded-3xl p-6 md:p-10 border border-border'>
        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          {/* Left side - Results highlight */}
          <div className='space-y-6'>
            {/* Results - Big numbers */}
            <div className='grid grid-cols-3 gap-4'>
              <div className='text-center p-4 bg-ocean/5 rounded-2xl'>
                <div className='text-4xl md:text-5xl font-bold text-ocean'>3×</div>
                <div className='text-sm text-muted mt-1'>Flere leads</div>
              </div>
              <div className='text-center p-4 bg-ocean/5 rounded-2xl'>
                <div className='text-4xl md:text-5xl font-bold text-ocean'>85%</div>
                <div className='text-sm text-muted mt-1'>Mindre admin</div>
              </div>
              <div className='text-center p-4 bg-ocean/5 rounded-2xl'>
                <div className='text-4xl md:text-5xl font-bold text-ocean'>&lt;1s</div>
                <div className='text-sm text-muted mt-1'>Lastetid</div>
              </div>
            </div>

            {/* Website preview link */}
            <div className='bg-gradient-to-br from-ocean/10 to-cyan-500/10 rounded-2xl p-6 border border-ocean/20'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-10 h-10 bg-ocean rounded-xl flex items-center justify-center'>
                  <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
                  </svg>
                </div>
                <div>
                  <p className='font-semibold text-foreground'>bluecrew.no</p>
                  <p className='text-sm text-muted'>Maritim bemanning</p>
                </div>
              </div>
              <a
                href='https://www.bluecrew.no/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-ocean hover:bg-ocean-dark text-white px-5 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-ocean/20'
              >
                Besøk nettsiden
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Case details */}
          <div className='space-y-5'>
            <div>
              <div className='inline-flex items-center gap-2 bg-ocean/10 text-ocean text-sm font-semibold px-3 py-1 rounded-full mb-4'>
                <span className='w-2 h-2 bg-ocean rounded-full' />
                Maritim bemanning
              </div>
              <h3 className='text-2xl font-bold text-foreground'>Bluecrew AS</h3>
              <p className='text-muted mt-2'>
                Bemanningsselskap for maritim næring som trengte en komplett digital løsning.
              </p>
            </div>

            {/* Problem */}
            <div className='bg-red-500/10 border border-red-500/30 rounded-xl p-4'>
              <h4 className='font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' />
                </svg>
                Utfordringen
              </h4>
              <ul className='space-y-1 text-sm text-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-red-500 mt-0.5'>•</span>
                  Gammel nettside med 4+ sekunder lastetid
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-500 mt-0.5'>•</span>
                  Kun 1% av besøkende tok kontakt
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-red-500 mt-0.5'>•</span>
                  Manuelle prosesser tok 10+ timer i uken
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className='bg-green-500/10 border border-green-500/30 rounded-xl p-4'>
              <h4 className='font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                Løsningen
              </h4>
              <ul className='space-y-1 text-sm text-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500 mt-0.5'>•</span>
                  Ny nettside i Next.js med &lt;1s lastetid
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500 mt-0.5'>•</span>
                  Admin-portal for HMS og kandidathåndtering
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500 mt-0.5'>•</span>
                  ISO 9001 kvalitetsstyringssystem
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500 mt-0.5'>•</span>
                  Automatisert import og onboarding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className='bg-gradient-to-br from-ocean/5 to-cyan-500/5 border border-ocean/20 rounded-2xl p-8 md:p-10 text-center'>
        <svg className='w-12 h-12 text-ocean/30 mx-auto mb-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
        </svg>
        <blockquote className='text-xl md:text-2xl text-foreground italic max-w-2xl mx-auto leading-relaxed'>
          &quot;Isak leverte langt over forventning. Vi fikk ikke bare en nettside, men et komplett system som har transformert måten vi jobber på.&quot;
        </blockquote>
        <p className='text-muted mt-6 font-semibold'>— Daglig leder, Bluecrew AS</p>
      </div>
    </section>
  );
}
