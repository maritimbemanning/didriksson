'use client';

import { motion } from 'framer-motion';
import { trackPhoneClick } from '../lib/tracking';
import CalendlyWidget from './CalendlyWidget';

export default function CTA_A() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className='relative overflow-hidden rounded-3xl'
    >
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-ocean via-cyan-600 to-ocean-dark' />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]'
      />

      <div className='relative text-center p-8 md:p-12 space-y-6'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-2xl md:text-3xl font-bold text-white'
        >
          Klar for å få flere kunder?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-lg text-white/90 max-w-xl mx-auto'
        >
          Book et gratis 30-minutters strategimøte. Vi diskuterer dine mål og lager en konkret plan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-2'
        >
          <CalendlyWidget
            buttonText='Book gratis møte'
            buttonClassName='inline-flex items-center gap-3 bg-white text-ocean hover:bg-white/90 transition-all rounded-xl px-8 py-4 font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1'
          />
          <motion.a
            href='tel:+4792328850'
            onClick={trackPhoneClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='inline-flex items-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 transition-all rounded-xl px-6 py-4 font-semibold'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
            </svg>
            Ring 923 28 850
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-sm text-white/70'
        >
          Ingen forpliktelser. Svar innen 24 timer.
        </motion.p>
      </div>
    </motion.section>
  );
}
