'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseA() {
  const [activeImage, setActiveImage] = useState(0);

  const screenshots = [
    { src: '/images/bluecrew-admin.jpg', alt: 'Bluecrew Admin Portal - Hovedmeny' },
    { src: '/images/bluecrew-import.jpg', alt: 'Bluecrew Import Management' },
    { src: '/images/bluecrew-iso.jpg', alt: 'Bluecrew ISO 9001 Internstyring' },
  ];

  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className='text-center'
      >
        <p className='text-ocean font-semibold mb-2'>Kundecase</p>
        <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
          Fra 1% til 3× flere henvendelser
        </h2>
        <p className='text-lg text-muted mt-3 max-w-2xl mx-auto'>
          Se hvordan Bluecrew gikk fra en treg, utdatert nettside til et komplett system som sparer dem timer hver uke.
        </p>
      </motion.div>

      {/* Main case study */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className='bg-card rounded-3xl p-6 md:p-10'
      >
        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          {/* Screenshots carousel */}
          <div className='space-y-4'>
            <div className='relative aspect-video bg-background rounded-2xl shadow-2xl overflow-hidden border border-border'>
              <AnimatePresence mode='wait'>
                <motion.img
                  key={activeImage}
                  src={screenshots[activeImage].src}
                  alt={screenshots[activeImage].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className='w-full h-full object-cover object-top'
                />
              </AnimatePresence>
            </div>
            <div className='flex gap-2 justify-center'>
              {screenshots.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-3 rounded-full transition-all ${
                    activeImage === idx
                      ? 'bg-ocean w-8'
                      : 'bg-muted/50 hover:bg-muted w-3'
                  }`}
                  aria-label={`Vis bilde ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Case details */}
          <div className='space-y-6'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className='inline-flex items-center gap-2 bg-ocean/10 text-ocean text-sm font-semibold px-3 py-1 rounded-full mb-4'>
                <span className='w-2 h-2 bg-ocean rounded-full' />
                Maritim bemanning
              </div>
              <h3 className='text-2xl font-bold text-foreground'>Bluecrew AS</h3>
              <p className='text-muted mt-2'>
                Bemanningsselskap for maritim næring som trengte en komplett digital løsning.
              </p>
            </motion.div>

            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='bg-red-500/10 border border-red-500/30 rounded-xl p-4'
            >
              <h4 className='font-semibold text-red-600 dark:text-red-400 mb-2'>Utfordringen</h4>
              <ul className='space-y-1 text-sm text-foreground'>
                <li>• Gammel nettside med 4+ sekunder lastetid</li>
                <li>• Kun 1% av besøkende tok kontakt</li>
                <li>• Manuelle prosesser tok 10+ timer i uken</li>
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='bg-green-500/10 border border-green-500/30 rounded-xl p-4'
            >
              <h4 className='font-semibold text-green-600 dark:text-green-400 mb-2'>Løsningen</h4>
              <ul className='space-y-1 text-sm text-foreground'>
                <li>• Ny nettside i Next.js med &lt;1s lastetid</li>
                <li>• Admin-portal for HMS og kandidathåndtering</li>
                <li>• ISO 9001 kvalitetsstyringssystem</li>
                <li>• Automatisert import og onboarding</li>
              </ul>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='grid grid-cols-3 gap-4'
            >
              {[
                { value: '3×', label: 'Flere leads' },
                { value: '85%', label: 'Mindre admin' },
                { value: '<1s', label: 'Lastetid' }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + idx * 0.1, type: 'spring' }}
                  className='text-center'
                >
                  <div className='text-3xl font-bold text-ocean'>{stat.value}</div>
                  <div className='text-xs text-muted'>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href='https://www.bluecrew.no/'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ x: 5 }}
              className='inline-flex items-center gap-2 text-ocean font-semibold hover:gap-3 transition-all'
            >
              Se bluecrew.no
              <span>→</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Testimonial placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className='bg-ocean/5 border border-ocean/20 rounded-2xl p-8 text-center'
      >
        <motion.svg
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
          className='w-10 h-10 text-ocean/40 mx-auto mb-4'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
        </motion.svg>
        <p className='text-lg text-foreground italic max-w-2xl mx-auto'>
          &quot;Isak leverte langt over forventning. Vi fikk ikke bare en nettside, men et komplett system som har transformert måten vi jobber på.&quot;
        </p>
        <p className='text-muted mt-4 font-semibold'>— Daglig leder, Bluecrew AS</p>
      </motion.div>
    </section>
  );
}
