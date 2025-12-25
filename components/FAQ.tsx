"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, accordionContent, chevronRotate } from "@/lib/animations";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Hvordan kan dere levere på 14 dager?",
    answer:
      "Vi har en velprøvd prosess og bruker moderne teknologi som Next.js og Tailwind CSS. Dette, kombinert med et dedikert team og tett kommunikasjon med deg, gjør det mulig å levere kvalitetsnettsider på kort tid.",
  },
  {
    question: "Hva er inkludert i prisen?",
    answer:
      "Prisen inkluderer design, utvikling, SEO-optimalisering, hosting første året, SSL-sertifikat og opplæring i hvordan du oppdaterer innholdet. Det er ingen skjulte kostnader.",
  },
  {
    question: "Kan jeg få endringer etter lansering?",
    answer:
      "Ja! Alle pakker inkluderer 2 revisjonsrunder i prosjektet. Etter lansering tilbyr vi vedlikeholdsavtaler fra 999 kr/mnd som inkluderer løpende endringer og support.",
  },
  {
    question: "Hvordan fungerer SEO-optimaliseringen?",
    answer:
      "Vi bygger nettsiden med SEO i tankene fra start. Dette inkluderer teknisk SEO (hastighet, struktur, metadata), on-page SEO (innhold, overskrifter, bilder), og oppsett av Google Search Console og Analytics.",
  },
  {
    question: "Trenger jeg teknisk kunnskap for å oppdatere nettsiden?",
    answer:
      "Nei! Vi setter opp et brukervennlig CMS (innholdsstyringssystem) der du enkelt kan oppdatere tekst og bilder uten teknisk kunnskap. Vi gir deg også opplæring.",
  },
  {
    question: "Hva skjer hvis jeg ikke er fornøyd?",
    answer:
      "Vi tilbyr 100 % fornøydgaranti. Hvis du ikke er fornøyd med designet etter første utkast, jobber vi gratis til du er fornøyd – eller så får du pengene tilbake.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[var(--spacing-section)] bg-[var(--color-surface)]">
      <Container size="md">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-3"
          >
            Spørsmål
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)]"
          >
            Ofte stilte spørsmål
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="border border-[var(--color-border)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-[var(--color-surface)] hover:bg-[var(--color-border-light)] transition-colors"
              >
                <span className="font-medium text-[var(--color-primary)] pr-8">
                  {faq.question}
                </span>
                <motion.span
                  variants={chevronRotate}
                  animate={openIndex === index ? "open" : "closed"}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    size={20}
                    className={cn(
                      "transition-colors",
                      openIndex === index
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-text-secondary)]"
                    )}
                  />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={accordionContent}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[var(--color-text-secondary)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
