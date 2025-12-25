"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Founder() {
  return (
    <section
      id="founder"
      className="py-[var(--spacing-section)] bg-[var(--color-surface)]/60 border-y border-[var(--color-border-light)]"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <p className="text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-3">
              Om grunnleggeren
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Teknisk founder som bygger selv – ikke et anonymt byrå
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-4">
              Jeg heter <span className="text-[var(--color-primary)] font-semibold">Isak Didriksson</span> og har
              fullstack-bakgrunn med Next.js, TypeScript og moderne skyplattformer. I stedet for å delegere alt til
              juniorer i et byrå, er jeg personlig inne i arkitektur, kode og konverteringsstrategi på hver eneste side.
            </p>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Målet mitt er enkelt: at mellomstore bedrifter som din skal slippe trege, uoversiktlige WordPress-løsninger
              og byråavhengighet. Du får en skreddersydd, teknisk solid side som er enkel å eie selv – med fokus på fart,
              SEO og målbare resultater.
            </p>
            <p className="text-[var(--color-text-secondary)] mb-6">
              Hver leveranse inkluderer tydelige måltall, PageSpeed-rapporter og innsikt i hva som faktisk driver
              trafikk og leads. Slik ser du svart på hvitt at investeringen betaler seg.
            </p>
            <ul className="grid gap-3 md:grid-cols-2 text-sm text-[var(--color-text-secondary)]">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                10+ års erfaring med webutvikling og produkt
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Spisskompetanse på ytelse, SEO og konvertering
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Jobber direkte med gründere og daglige ledere
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Én ansvarlig person – ikke fem forskjellige kontaktpunkter
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden glass shadow-glow-md">
              <Image
                src="/images/founder.jpg"
                alt="Isak Didriksson, grunnlegger av Didriksson Digital"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-sm text-white/90">
                <div className="font-semibold">Isak Didriksson</div>
                <div className="text-white/70">Grunnlegger · Fullstack utvikler</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
