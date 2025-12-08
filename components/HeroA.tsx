'use client';

import Image from 'next/image';
import { trackPhoneClick } from '../lib/tracking';
import CalendlyWidget from './CalendlyWidget';

export default function HeroA() {
  // Dynamisk måned for urgency
  const currentMonth = new Date().toLocaleString('nb-NO', { month: 'long' });
  const formattedMonth =
    currentMonth.length > 0
      ? currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)
      : 'måneden';

  return (
    <section className='py-12 md:py-20 relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-ocean/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse' />
      </div>

      <div className='grid lg:grid-cols-5 gap-10 items-center'>
        {/* Left side - Content */}
        <div className='lg:col-span-3 space-y-6'>
          {/* Christmas Offer Badge */}
          <div className='inline-flex items-center gap-2.5 text-sm font-bold bg-gradient-to-r from-red-600 to-red-700 text-white border border-white/20 rounded-full px-5 py-2.5 shadow-lg shadow-red-500/20'>
            <span className='text-lg'>🎄</span>
            <span>JULETILBUD: Profesjonell nettside for 10.000kr</span>
            <span className='text-lg'>🎁</span>
          </div>

          {/* Main headline */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight'>
            Få en nettside som<br/>
            <span className='bg-gradient-to-r from-ocean to-cyan-600 bg-clip-text text-transparent'>
              gir deg flere kunder
            </span>
          </h1>

          {/* Value proposition */}
          <p className='text-lg md:text-xl text-muted max-w-xl leading-relaxed'>
            Profesjonelle nettsider for <strong className='text-foreground'>små og mellomstore bedrifter</strong>. Ferdig på under 2 uker.
          </p>

          {/* Christmas Offer Box - Festive */}
          <div className='relative max-w-md'>
            {/* Glow effect - red/green christmas gradient */}
            <div className='absolute -inset-1 bg-gradient-to-r from-red-500 via-green-500 to-red-500 rounded-2xl blur opacity-25 dark:opacity-35' />

            <div className='relative bg-gradient-to-br from-red-50 via-green-50 to-red-50 dark:from-red-950/40 dark:via-green-950/40 dark:to-red-950/40 rounded-2xl border-2 border-red-200/80 dark:border-red-700/50 p-5 shadow-xl overflow-hidden'>
              {/* Decorative corner ornaments */}
              <div className='absolute top-2 right-2 text-2xl opacity-80'>🎄</div>
              <div className='absolute bottom-2 left-2 text-xl opacity-60'>❄️</div>

              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5'>
                    <span>🎁</span> Juletilbud
                  </p>
                  <div className='flex items-baseline gap-3'>
                    <span className='text-3xl md:text-4xl font-bold text-red-700 dark:text-red-300'>10 000 kr</span>
                    <span className='text-base text-muted/70 line-through'>15 000 kr</span>
                  </div>
                  <p className='text-sm text-green-700 dark:text-green-400 mt-1.5 font-semibold'>
                    Spar 5 000 kr · Gjelder hele {formattedMonth}
                  </p>
                </div>
                <div className='flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg border-2 border-white/30'>
                  <span className='text-2xl'>🎅</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className='flex flex-wrap gap-4 text-sm text-muted'>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
              <span>Ingen skjulte kostnader</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
              <span>Du eier alt selv</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
              <span>Fornøyd eller pengene tilbake</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 pt-2'>
            <CalendlyWidget buttonText='Book gratis strategimøte' />
            <a
              href='tel:+4792328850'
              onClick={trackPhoneClick}
              className='group inline-flex items-center gap-2 border-2 border-border text-muted hover:border-ocean hover:text-ocean transition-all rounded-xl px-6 py-4 font-semibold text-base justify-center hover-scale'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
              </svg>
              Ring 923 28 850
            </a>
          </div>
        </div>

        {/* Right side - Personal intro */}
        <div className='lg:col-span-2'>
          <div className='bg-card border border-border rounded-3xl p-3 md:p-6 space-y-3 md:space-y-4'>
            {/* Profile photo */}
            <div className='relative'>
              <Image
                src='/images/isak-hero.jpg'
                alt='Isak Didriksson - Webutvikler'
                width={96}
                height={96}
                quality={90}
                className='w-16 h-16 md:w-24 md:h-24 mx-auto rounded-full object-cover shadow-lg border-2 border-ocean/20'
                priority
                sizes='(max-width: 768px) 64px, 96px'
              />
              {/* Online indicator */}
              <div className='absolute bottom-0 right-1/2 translate-x-6 md:translate-x-8 w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full border-2 border-card' />
            </div>

            <div className='text-center'>
              <h2 className='text-base md:text-xl font-bold text-foreground'>Isak Didriksson</h2>
              <p className='text-xs md:text-sm text-ocean font-medium'>Webutvikler & Designer</p>
            </div>

            <p className='text-xs md:text-sm text-muted text-center leading-relaxed'>
              &quot;Jeg hjelper små bedrifter med å få nettsider som faktisk gir resultater.
              Ikke fancy byråpriser - bare ærlig arbeid.&quot;
            </p>

            {/* Quick stats */}
            <div className='grid grid-cols-3 gap-1 md:gap-2 pt-1 md:pt-2'>
              <div className='text-center p-1.5 md:p-2 bg-background rounded-xl'>
                <div className='text-sm md:text-lg font-bold text-ocean'>5+</div>
                <div className='text-[10px] md:text-xs text-muted'>År erfaring</div>
              </div>
              <div className='text-center p-1.5 md:p-2 bg-background rounded-xl'>
                <div className='text-sm md:text-lg font-bold text-ocean'>20+</div>
                <div className='text-[10px] md:text-xs text-muted'>Prosjekter</div>
              </div>
              <div className='text-center p-1.5 md:p-2 bg-background rounded-xl'>
                <div className='text-sm md:text-lg font-bold text-ocean'>100%</div>
                <div className='text-[10px] md:text-xs text-muted'>Fornøyde</div>
              </div>
            </div>

            {/* Social proof */}
            <div className='flex items-center justify-center gap-2 pt-1 md:pt-2'>
              <div className='flex -space-x-2'>
                <div className='w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 border-2 border-card flex items-center justify-center text-white text-[10px] md:text-xs font-bold'>BC</div>
                <div className='w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-2 border-card flex items-center justify-center text-white text-[10px] md:text-xs font-bold'>NK</div>
                <div className='w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-card flex items-center justify-center text-white text-[10px] md:text-xs font-bold'>HT</div>
              </div>
              <p className='text-[10px] md:text-xs text-muted'>
                <span className='font-semibold text-foreground'>3× flere leads</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
