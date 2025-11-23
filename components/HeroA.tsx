'use client';

import { motion } from 'framer-motion';
import { trackPhoneClick } from '../lib/tracking';
import CalendlyWidget from './CalendlyWidget';

export default function HeroA() {
  return (
    <section className='py-16 md:py-24 relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 -z-10'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className='absolute top-0 left-1/4 w-96 h-96 bg-ocean/10 rounded-full blur-3xl'
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className='absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl'
        />
      </div>

      <div className='text-center space-y-8 max-w-3xl mx-auto'>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className='inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-ocean/15 to-cyan-500/15 text-ocean border border-ocean/25 rounded-full px-5 py-2.5 backdrop-blur-sm shadow-sm'
        >
          <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
          <span>Ledig kapasitet nå · Levering på 7–14 dager</span>
        </motion.div>

        {/* Main headline - SMB focused */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className='text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight'
        >
          Få en nettside som<br/>
          <span className='bg-gradient-to-r from-ocean to-cyan-600 bg-clip-text text-transparent'>
            gir deg flere kunder
          </span>
        </motion.h1>

        {/* Value proposition for SMB */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className='text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed'
        >
          Profesjonelle nettsider for <strong className='text-foreground'>små og mellomstore bedrifter</strong>.
          Fastpris fra 15 000 kr, ferdig på under 2 uker.
        </motion.p>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className='flex flex-wrap justify-center gap-6 text-sm text-muted'
        >
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
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'
        >
          <CalendlyWidget
            buttonText='Book gratis strategimøte'
          />
          <motion.a
            href='tel:+4792328850'
            onClick={trackPhoneClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='group inline-flex items-center gap-2 border-2 border-border text-muted hover:border-ocean hover:text-ocean transition-colors rounded-xl px-6 py-4 font-semibold text-base w-full sm:w-auto justify-center'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
            </svg>
            Ring 923 28 850
          </motion.a>
        </motion.div>

        {/* Social proof snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className='pt-8 flex items-center justify-center gap-4'
        >
          <div className='flex -space-x-2'>
            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-ocean to-cyan-500 border-2 border-background flex items-center justify-center text-white text-xs font-bold'>BC</div>
            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 border-2 border-background flex items-center justify-center text-white text-xs font-bold'>NK</div>
            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-2 border-background flex items-center justify-center text-white text-xs font-bold'>HT</div>
          </div>
          <p className='text-sm text-muted'>
            <span className='font-semibold text-foreground'>3× flere henvendelser</span> for våre kunder
          </p>
        </motion.div>
      </div>
    </section>
  );
}
