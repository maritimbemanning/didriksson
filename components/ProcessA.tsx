'use client';

import { motion } from 'framer-motion';

export default function ProcessA() {
  const steps = [
    {
      title: '1. Gratis møte (15-20 min)',
      customer: 'Du forteller om behovet ditt, hva som skal løses',
      we: 'Vi foreslår løsning og gir veiledende pris'
    },
    {
      title: '2. Tilbud med fastpris',
      customer: 'Du godkjenner tilbudet eller ber om justeringer',
      we: 'Vi sender én side med konkret beskrivelse og fastpris'
    },
    {
      title: '3. Vi bygger løsningen',
      customer: 'Du får se underveis og gir tilbakemelding',
      we: 'Vi holder deg oppdatert og gjør endringer etter avtale'
    },
    {
      title: '4. Ferdig og klart til bruk',
      customer: 'Du tar i bruk og bestemmer om du vil ha vedlikehold',
      we: 'Vi publiserer, viser hvordan det fungerer og tilbyr støtte'
    },
  ];

  return (
    <section className='space-y-6'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className='text-2xl font-semibold mb-2 text-foreground'>Hvordan det fungerer</h2>
        <p className='text-muted'>Enkel prosess fra første møte til ferdig løsning</p>
      </motion.div>
      <ol className='space-y-4'>
        {steps.map((step, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ x: 5 }}
            className='border border-border rounded-2xl p-6 space-y-3 hover:bg-card hover:border-ocean/30 transition-all hover:shadow-md'
          >
            <h3 className='font-semibold text-lg text-foreground'>{step.title}</h3>
            <div className='grid md:grid-cols-2 gap-4 text-base'>
              <div>
                <p className='font-medium text-ocean mb-1'>✓ Du:</p>
                <p className='text-muted'>{step.customer}</p>
              </div>
              <div>
                <p className='font-medium text-ocean mb-1'>✓ Vi:</p>
                <p className='text-muted'>{step.we}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
