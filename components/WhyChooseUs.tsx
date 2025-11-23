'use client';

import { motion } from 'framer-motion';
import { DollarSign, Rocket, Target } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      Icon: DollarSign,
      title: 'Rimelig og forutsigbart',
      desc: 'Fastpris fra 15 000 kr. Du vet kostnaden før vi starter, ingen overraskelser.'
    },
    {
      Icon: Rocket,
      title: 'Rask levering',
      desc: 'Ferdig på 5–14 dager. Perfekt når du trenger noe raskt uten å vente måneder.'
    },
    {
      Icon: Target,
      title: 'Erfaring som leverer',
      desc: 'Tidligere kunder har fått 3× flere henvendelser og spart 5 timer i uken.'
    }
  ];

  return (
    <section className="py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-foreground">Hvorfor velge Didriksson Digital?</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((r, idx) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 + idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -5 }}
            className="text-center space-y-3 p-6 rounded-2xl hover:bg-card transition-all border border-transparent hover:border-ocean/30 hover:shadow-xl hover:shadow-ocean/10 group"
          >
            <div className="flex justify-center">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-14 h-14 bg-ocean/10 rounded-2xl flex items-center justify-center group-hover:bg-ocean/20 transition-colors"
              >
                <r.Icon className="w-7 h-7 text-ocean" strokeWidth={1.5} />
              </motion.div>
            </div>
            <h3 className="font-bold text-lg text-foreground">{r.title}</h3>
            <p className="text-base text-muted leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
