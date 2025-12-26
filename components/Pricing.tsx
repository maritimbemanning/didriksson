"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { formatNOK } from "@/lib/utils";

interface PricingProps {
  onBookClick?: () => void;
}

export function Pricing({ onBookClick }: PricingProps) {
  const t = useTranslations('Pricing');

  const tiers = [
    {
      name: t('tiers.starter.name'),
      price: 39000,
      description: t('tiers.starter.description'),
      features: [
        t('tiers.starter.features.0'),
        t('tiers.starter.features.1'),
        t('tiers.starter.features.2'),
        t('tiers.starter.features.3'),
        t('tiers.starter.features.4'),
      ],
      popular: false,
    },
    {
      name: t('tiers.business.name'),
      price: 79000,
      description: t('tiers.business.description'),
      features: [
        t('tiers.business.features.0'),
        t('tiers.business.features.1'),
        t('tiers.business.features.2'),
        t('tiers.business.features.3'),
        t('tiers.business.features.4'),
        t('tiers.business.features.5'),
        t('tiers.business.features.6'),
      ],
      popular: true,
    },
    {
      name: t('tiers.enterprise.name'),
      price: 150000,
      description: t('tiers.enterprise.description'),
      features: [
        t('tiers.enterprise.features.0'),
        t('tiers.enterprise.features.1'),
        t('tiers.enterprise.features.2'),
        t('tiers.enterprise.features.3'),
        t('tiers.enterprise.features.4'),
        t('tiers.enterprise.features.5'),
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            {t.rich('title', {
              span: (chunks) => <span className="text-accent">{chunks}</span>
            })}
          </h2>
          <p className="text-xl text-[#94A3B8]">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="glass px-4 py-1 rounded-full flex items-center gap-2 shadow-glow-sm">
                    <Sparkles size={14} className="text-accent" />
                    <span className="text-sm font-semibold text-accent">
                      {t('popular')}
                    </span>
                  </div>
                </div>
              )}

                <div
                  className={`
                glass glass-hover rounded-2xl p-8 h-full
                ${tier.popular ? "ring-2 ring-accent shadow-glow-md" : ""}
              `}
                >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {tier.name}
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="text-4xl font-semibold text-accent">
                    {tier.name === "Enterprise"
                      ? "På forespørsel"
                      : formatNOK(tier.price)}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular || tier.name === "Enterprise" ? "primary" : "ghost"}
                  className="w-full"
                  onClick={onBookClick}
                >
                  {tier.name === "Enterprise"
                    ? "Book møte"
                    : tier.popular
                    ? "Book konsultasjon"
                    : "Kontakt oss"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
