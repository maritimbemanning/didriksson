"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Hva koster en enkel nettside?',
      a: 'En enkel nettside (2-3 sider) starter på 15 000 kr eks. mva. Du får fastpris før vi starter, så det blir ingen overraskelser.'
    },
    {
      q: 'Hvor lang tid tar det?',
      a: 'Avhengig av pakke: Basis 5-7 dager, Standard 10-14 dager, Premium 14-21 dager. Vi starter så fort vi har avtalt innhold og design.'
    },
    {
      q: 'Hva med hosting og domene?',
      a: 'Hosting er inkludert i Standard og Premium-pakken (1 år). Domene (f.eks. dinbedrift.no) kjøper du selv hos en leverandør, jeg hjelper med oppsett.'
    },
    {
      q: 'Kan jeg oppdatere nettsiden selv?',
      a: 'Ja, i Standard og Premium-pakken får du et enkelt CMS (innholdssystem) hvor du kan endre tekst og bilder selv. Basis-pakken krever at du kontakter meg for endringer.'
    },
    {
      q: 'Hva skjer etter lansering?',
      a: 'Du eier all kode og kan drifte selv eller kjøpe vedlikeholdspakke (fra 1 500 kr/mnd) som inkluderer oppdateringer, overvåkning og support.'
    },
    {
      q: 'Får jeg hjelp hvis noe går galt?',
      a: 'Ja, jeg gir support i 30 dager etter lansering uten ekstra kostnad. Deretter kan du kjøpe vedlikeholdspakke eller betale pr. time (950 kr/t).'
    },
    {
      q: 'Eier jeg koden og designet?',
      a: 'Ja, full eierskap. Du får tilgang til kildekoden og kan ta den med deg hvor som helst. Ingen lock-in eller bindingstid.'
    },
    {
      q: 'Hva hvis jeg ikke er fornøyd?',
      a: 'Du får én revisjonsrunde inkludert (flere mot tilleggspris). Hvis jeg ikke leverer innen avtalt tid uten god grunn, får du pengene tilbake.'
    },
    {
      q: 'Tilbyr du også vedlikehold og videreutvikling?',
      a: 'Ja, vedlikeholdspakke fra 1 500 kr/mnd inkluderer oppdateringer, sikkerhet og support. Videreutvikling prises pr. time eller som egne prosjekter.'
    },
    {
      q: 'Kan dere lage nettbutikk?',
      a: 'Ja, vi kan integrere enkel nettbutikk (Stripe, WooCommerce, Shopify). Pris avhenger av kompleksitet, ta kontakt for tilbud.'
    }
  ];

  return (
    <section className="space-y-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-2xl font-semibold text-foreground"
      >
        Ofte stilte spørsmål
      </motion.h2>
      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="border border-border rounded-xl overflow-hidden"
          >
            <motion.button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              whileHover={{ backgroundColor: 'var(--card)' }}
              className="w-full text-left px-5 py-4 flex items-center justify-between transition-colors"
            >
              <span className="font-semibold text-base text-foreground">{faq.q}</span>
              <motion.span
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-ocean"
              >
                ▼
              </motion.span>
            </motion.button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 pt-2 text-base text-muted leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm text-muted text-center mt-6"
      >
        Fant du ikke svar? <a href="/kontakt" className="underline hover:text-ocean">Ta kontakt</a> så hjelper jeg deg.
      </motion.p>
    </section>
  );
}
