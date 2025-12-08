'use client';

import { trackPhoneClick } from '../lib/tracking';
import CalendlyWidget from './CalendlyWidget';

export default function CTA_A() {
  return (
    <section className='relative overflow-hidden rounded-3xl'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-ocean via-cyan-600 to-ocean-dark' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]' />

      <div className='relative text-center p-8 md:p-16 space-y-8'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30'>
          <span className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse' />
          <span>Desembertilbud aktiv</span>
        </div>

        {/* Headline */}
        <div className='space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white'>
            Klar for å få flere kunder?
          </h2>
          <p className='text-lg text-white/90 max-w-xl mx-auto'>
            Book et gratis 30-minutters strategimøte. Vi diskuterer dine mål og lager en konkret plan.
          </p>
        </div>

        {/* Price highlight */}
        <div className='inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-5 border border-white/20'>
          <p className='text-sm text-white/70 mb-1'>Profesjonell nettside</p>
          <div className='flex items-baseline justify-center gap-3'>
            <span className='text-4xl md:text-5xl font-bold text-white'>10 000 kr</span>
            <span className='text-lg text-white/50 line-through'>15 000 kr</span>
          </div>
          <p className='text-sm text-emerald-300 mt-2 font-medium'>Spar 5 000 kr i desember</p>
        </div>

        {/* CTAs */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-2'>
          <CalendlyWidget
            buttonText='Book gratis møte'
            buttonClassName='inline-flex items-center gap-3 bg-white text-ocean hover:bg-white/95 transition-all rounded-xl px-8 py-4 font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5'
          />
          <a
            href='tel:+4792328850'
            onClick={trackPhoneClick}
            className='inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all rounded-xl px-6 py-4 font-semibold'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
            </svg>
            Ring 923 28 850
          </a>
        </div>

        <p className='text-sm text-white/60'>
          Ingen forpliktelser · Svar innen 24 timer
        </p>
      </div>
    </section>
  );
}
