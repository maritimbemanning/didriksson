'use client';

import { trackPhoneClick, trackCalendlyClick, trackEmailClick } from '../lib/tracking';

export default function CTA_A() {
  return (
    <section className='text-center border border-neutral-200 rounded-2xl p-8 space-y-4'>
      <h2 className='text-2xl font-semibold mb-2'>Klar for en ryddig leveranse?</h2>
      <p className='text-neutral-600'>
        Ring direkte eller book et uforpliktende møte. Jeg svarer normalt innen 1 arbeidsdag.
      </p>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
        <a 
          href='tel:+4792328850'
          onClick={trackPhoneClick}
          className='inline-flex items-center gap-2 bg-ocean text-white hover:bg-ocean-dark transition-colors rounded-xl px-5 py-3 font-medium w-full sm:w-auto justify-center'
        >
          <span>📞</span>
          Ring 923 28 850
        </a>
        <a 
          href='https://calendly.com/didriksson' 
          target='_blank' 
          rel='noopener noreferrer'
          onClick={trackCalendlyClick}
          className='inline-flex items-center gap-2 border-2 border-ocean text-ocean hover:bg-ocean hover:text-white transition-colors rounded-xl px-5 py-3 font-medium w-full sm:w-auto justify-center'
        >
          <span>📅</span>
          Book møte
        </a>
        <a 
          href='/kontakt'
          onClick={trackEmailClick}
          className='inline-flex items-center border border-neutral-300 hover:border-ocean hover:text-ocean transition-colors rounded-xl px-4 py-2'
        >
          Send e-post
        </a>
      </div>
    </section>
  );
} 