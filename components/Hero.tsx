"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";

interface HeroProps {
  onBookClick?: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pt-32 md:pb-28 flex items-center">
      {/* Animated Background Mesh – softer, corporate */}
      {/* Subtle background accents */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-32 -right-16 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 w-80 h-80 rounded-full bg-slate-800/70 blur-3xl" />
      </div>

      <Container className="relative z-10 pt-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="glass glass-hover inline-flex items-center gap-2 px-4 py-2 rounded-full">
            <Sparkles size={16} className="text-(--color-accent)" />
            <span className="text-sm text-(--color-text-secondary)">
              7/10 plasser ledige i desember
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[3.3rem] font-semibold tracking-tight mb-4 leading-tight">
            Nettsider som er raske, synlige i Google, og gir resultater.
          </h1>

          <p className="text-base md:text-lg text-(--color-text-secondary) mb-3">
            Vi hjelper mellomstore bedrifter å bytte ut trege, utydelige løsninger med en
            rask, ryddig nettside som faktisk genererer møter og leads.
          </p>

          <p className="text-sm md:text-base text-(--color-text-secondary) mb-6">
            <span className="text-(--color-accent)">Isak Didriksson</span> – grunnlegger. Bygger nettsider som er raske, synlige i Google, og enkle å bruke.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group" onClick={onBookClick}>
              Book gratis konsultasjon
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => scrollToSection("portfolio")}
            >
              Se våre caser
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-24"
        >
          {["Basert i Norge", "Fast kontaktperson", "Svar innen 24t"].map(
            (label, i) => (
              <div key={i} className="text-center">
                <div className="text-sm text-(--color-text-secondary)">
                  {label}
                </div>
              </div>
            )
          )}
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.button
        type="button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 outline-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection("services")}
        aria-label="Scroll ned til tjenestene"
      >
        <div className="w-6 h-10 rounded-full border-2 border-(--color-accent)/40 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-accent rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.button>
    </section>
  );
}
