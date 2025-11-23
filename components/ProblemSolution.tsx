'use client';

import { motion } from 'framer-motion';

export default function ProblemSolution() {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-red-500/10 dark:bg-red-500/20 border border-red-500/30 rounded-2xl p-8 space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-red-600 dark:text-red-400">Kjenner du deg igjen?</h2>
          </div>

          <ul className="space-y-4">
            {[
              'Nettsiden ser utdatert ut og skremmer bort kunder',
              'Du får for få henvendelser fra nettet',
              'Byråer tar 50–100k+ og bruker måneder',
              'Du vet ikke hva du faktisk trenger'
            ].map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-green-500/10 dark:bg-green-500/20 border border-green-500/30 rounded-2xl p-8 space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-green-600 dark:text-green-400">Slik løser vi det</h2>
          </div>

          <ul className="space-y-4">
            {[
              'Moderne, rask nettside som bygger tillit',
              'SEO-optimalisert for lokale søk',
              'Fastpris fra 15 000 kr, ferdig på 1–2 uker',
              'Gratis strategimøte for å finne ut hva du trenger'
            ].map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
