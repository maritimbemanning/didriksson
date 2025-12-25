"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { formatNOK } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: 39000,
    description: "Perfekt for små bedrifter",
    features: [
      "1-3 sider",
      "Responsivt design",
      "Basic SEO",
      "Google Analytics",
      "7 dagers levering",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: 79000,
    description: "For bedrifter som vil vokse og ha enkel booking",
    features: [
      "5-10 sider",
      "Premium design",
      "Full SEO optimalisering",
      "Blog / nyhetsmodul",
      "14 dagers levering",
      "30 dagers support",
      "2 revisjonsrunder",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 150000,
    description: "Skreddersydd løsning",
    features: [
      "Unlimited sider",
      "Custom CMS",
      "Avanserte funksjoner",
      "E-commerce / booking",
      "API integrasjoner",
      "Dedikert utvikler",
    ],
    popular: false,
  },
];

interface PricingProps {
  onBookClick?: () => void;
}

export function Pricing({ onBookClick }: PricingProps) {
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
            Transparent <span className="text-accent">prising</span>
          </h2>
          <p className="text-xl text-[#94A3B8]">
            Ingen skjulte kostnader. Ingen abonnement. Bare resultater.
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
                      MEST POPULÆR
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
