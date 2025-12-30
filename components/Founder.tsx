"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Founder() {
  const t = useTranslations('Founder');

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
              {t('label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              {t('title')}
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-4">
              {t.rich('p1', {
                span: (chunks) => <span className="text-[var(--color-accent)] font-semibold">{chunks}</span>
              })}
            </p>
            <p className="text-[var(--color-text-secondary)] mb-4">
              {t('p2')}
            </p>
            <p className="text-[var(--color-text-secondary)] mb-6">
              {t('p3')}
            </p>
            <ul className="grid gap-3 md:grid-cols-2 text-sm text-[var(--color-text-secondary)]">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                {t('list.1')}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                {t('list.2')}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                {t('list.3')}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                {t('list.4')}
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-3xl overflow-hidden glass shadow-glow-md">
              <Image
                src="/images/testimonials/Isak.jpeg"
                alt="Isak Didriksson, grunnlegger av Didriksson Digital"
                fill
                className="object-cover object-center grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-sm text-white/90">
                <div className="font-semibold">{t('image_caption.name')}</div>
                <div className="text-white/70">{t('image_caption.role')}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
