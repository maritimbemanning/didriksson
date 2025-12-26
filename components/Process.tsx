"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Process() {
  const t = useTranslations('Process');

  const steps = [
    {
      number: "01",
      icon: Search,
      title: t('steps.0.title'),
      days: t('steps.0.days'),
      description: t('steps.0.description'),
      deliverable: t('steps.0.deliverable'),
    },
    {
      number: "02",
      icon: Palette,
      title: t('steps.1.title'),
      days: t('steps.1.days'),
      description: t('steps.1.description'),
      deliverable: t('steps.1.deliverable'),
    },
    {
      number: "03",
      icon: Code,
      title: t('steps.2.title'),
      days: t('steps.2.days'),
      description: t('steps.2.description'),
      deliverable: t('steps.2.deliverable'),
    },
    {
      number: "04",
      icon: Rocket,
      title: t('steps.3.title'),
      days: t('steps.3.days'),
      description: t('steps.3.description'),
      deliverable: t('steps.3.deliverable'),
    },
  ];

  return (
    <section id="process" className="py-[var(--spacing-section)] bg-[var(--color-primary)]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-3"
          >
            {t('badge')}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            {t('description')}
          </motion.p>
        </motion.div>

        {/* Desktop Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="hidden lg:block relative"
        >
          {/* Timeline line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-white/20" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-primary)]" />

                {/* Content card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mt-20 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center">
                      <step.icon size={20} className="text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">
                        {step.title}
                      </span>
                      <div className="text-white/60 text-xs">{step.days}</div>
                    </div>
                  </div>

                  <p className="text-white/80 text-sm mb-4">
                    {step.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-white/40">Leveranse:</span>
                    <span className="text-[var(--color-accent)] font-medium">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:hidden space-y-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative pl-8 border-l-2 border-white/20"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--color-accent)]" />

              {/* Content card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center">
                    <step.icon size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">
                      {step.title}
                    </span>
                    <div className="text-white/60 text-xs">{step.days}</div>
                  </div>
                </div>

                <p className="text-white/80 text-sm mb-4">
                  {step.description}
                </p>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-white/40">Leveranse:</span>
                  <span className="text-[var(--color-accent)] font-medium">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
