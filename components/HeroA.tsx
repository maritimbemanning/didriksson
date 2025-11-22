'use client';

import { trackPhoneClick, trackCalendlyClick } from '../lib/tracking';

export default function HeroA() {
  return (
    <section className='py-20 text-center space-y-6 relative'>
      {/* Glowing gradient background */}
      <div className='absolute inset-0 -z-10 bg-gradient-to-b from-ocean/20 via-ocean/5 to-transparent rounded-3xl blur-3xl' />
      
      <p className='inline-flex items-center gap-2 text-sm font-medium bg-ocean/20 text-ocean border border-ocean/30 rounded-full px-4 py-2 backdrop-blur-sm'>
        <span>⚡</span>
        <span>Levering 7–14 dager · Fastpris</span>
      </p>
      <h1 className='text-6xl font-bold tracking-tight text-neutral-900'>
        Ryddig tech.<br/>Rask leveranse.
      </h1>
      <p className='text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed'>
        Jeg bygger raske nettsider og enkle webapper for bedrifter — uten byråjargon. 
        Klar plan, tydelig pris og publisering når du trenger det.
      </p>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
        <a 
          href='tel:+4792328850' 
          onClick={trackPhoneClick}
          className='group inline-flex items-center gap-2 bg-ocean text-white hover:bg-ocean-dark transition-all rounded-xl px-6 py-4 font-semibold text-base w-full sm:w-auto justify-center shadow-lg shadow-ocean/25 hover:shadow-xl hover:shadow-ocean/40 hover:-translate-y-0.5'
        >
          <span className='text-xl'>📞</span>
          Ring 923 28 850
        </a>
        <a 
          href='https://calendly.com/didriksson' 
          target='_blank' 
          rel='noopener noreferrer'
          onClick={trackCalendlyClick}
          className='group inline-flex items-center gap-2 border-2 border-ocean text-ocean hover:bg-ocean hover:text-white transition-all rounded-xl px-6 py-4 font-semibold text-base w-full sm:w-auto justify-center hover:-translate-y-0.5'
        >
          <span className='text-xl'>📅</span>
          Book møte
        </a>
        <a 
          href='#case' 
          className='inline-flex items-center gap-1 text-neutral-600 hover:text-ocean transition-colors px-4 py-2 text-base font-medium group'
        >
          Se case
          <span className='group-hover:translate-x-1 transition-transform'>→</span>
        </a>
      </div>
    </section>
  );
} 