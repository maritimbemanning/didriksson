"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CreditCard, Phone, CheckCircle } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const trustIndicators = [
  { icon: CreditCard, text: "Sikker betaling via Vipps/Stripe" },
  { icon: Phone, text: "Svar innen 24 timer (man-fre)" },
  { icon: CheckCircle, text: "Trygg prosess med godkjenning underveis" },
];

interface CTASectionProps {
  onBookClick?: () => void;
}

export function CTASection({ onBookClick }: CTASectionProps) {
  return (
    <section
      id="contact"
      className="py-[var(--spacing-section)] bg-[var(--color-primary)] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Availability Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
              </span>
              Ledige plasser denne måneden
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Klar for en nettside som
            <br />
            <span className="text-[var(--color-accent)]">faktisk selger?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/80 mb-8"
          >
            Book et uforpliktende strategimøte og la oss diskutere hvordan
            vi kan hjelpe bedriften din med å vokse digitalt.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" onClick={onBookClick} className="gap-2">
              <Calendar size={20} />
              <span>Book gratis 30-min strategisamtale</span>
              <ArrowRight size={20} />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            {trustIndicators.map((indicator) => (
              <div
                key={indicator.text}
                className="flex items-center gap-2 text-white/60 text-sm"
              >
                <indicator.icon size={18} className="text-[var(--color-accent)]" />
                <span>{indicator.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-white/40 text-sm"
          >
            Ingen forpliktelser. 30 minutters samtale for å diskutere ditt prosjekt.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
