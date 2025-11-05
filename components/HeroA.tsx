'use client';

import { trackPhoneClick, trackCalendlyClick } from '../lib/tracking';

export default function HeroA() {
  return (
    <section className='py-16 text-center space-y-5'>
      <p className='inline-flex items-center gap-2 text-xs border border-neutral-200 rounded-full px-3 py-1'>
        <span>⚡</span>
        <span>Levering 7–14 dager · Fastpris</span>
      </p>
      <h1 className='text-5xl font-semibold tracking-tight'>
        Ryddig tech. Rask leveranse.
      </h1>
      <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
        Jeg bygger raske nettsider og enkle webapper for bedrifter — uten byråjargon. 
        Klar plan, tydelig pris og publisering når du trenger det.
      </p>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
        <a 
          href='tel:+4792328850' 
          onClick={trackPhoneClick}
          className='inline-flex items-center gap-2 bg-ocean text-white hover:bg-ocean-dark transition-colors rounded-xl px-5 py-3 font-medium text-base w-full sm:w-auto justify-center'
        >
          <span>📞</span>
          Ring 923 28 850
        </a>
        <a 
          href='https://calendly.com/didriksson' 
          target='_blank' 
          rel='noopener noreferrer'
          onClick={trackCalendlyClick}
          className='inline-flex items-center gap-2 border-2 border-ocean text-ocean hover:bg-ocean hover:text-white transition-colors rounded-xl px-5 py-3 font-medium text-base w-full sm:w-auto justify-center'
        >
          <span>📅</span>
          Book møte
        </a>
        <a 
          href='#case' 
          className='inline-flex items-center border border-neutral-300 hover:border-ocean hover:text-ocean transition-colors rounded-xl px-4 py-2 text-sm'
        >
          Se case
        </a>
      </div>
    </section>
  );
} 