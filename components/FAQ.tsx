"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, accordionContent, chevronRotate } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function FAQ() {
  const t = useTranslations('FAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t('items.0.question'),
      answer: t('items.0.answer'),
    },
    {
      question: t('items.1.question'),
      answer: t('items.1.answer'),
    },
    {
      question: t('items.2.question'),
      answer: t('items.2.answer'),
    },
    {
      question: t('items.3.question'),
      answer: t('items.3.answer'),
    },
    {
      question: t('items.4.question'),
      answer: t('items.4.answer'),
    },
    {
      question: t('items.5.question'),
      answer: t('items.5.answer'),
    },
  ];

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
            {t('badge')}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)]"
          >
            {t('title')}
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
