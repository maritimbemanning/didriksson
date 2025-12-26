"use client";

import { motion } from "framer-motion";
import { Zap, Sparkles, TrendingUp, Shield, Code, Rocket } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Container } from "@/components/ui/Container";

export function ValueProposition() {
  const t = useTranslations('ValueProposition');

  const values = [
    {
      icon: Zap,
      title: t('values.speed.title'),
      description: t('values.speed.description'),
      color: "text-yellow-400",
    },
    {
      icon: Sparkles,
      title: t('values.design.title'),
      description: t('values.design.description'),
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      title: t('values.results.title'),
      description: t('values.results.description'),
      color: "text-green-400",
    },
    {
      icon: Shield,
      title: t('values.process.title'),
      description: t('values.process.description'),
      color: "text-amber-300",
    },
    {
      icon: Code,
      title: t('values.tech.title'),
      description: t('values.tech.description'),
      color: "text-blue-400",
    },
    {
      icon: Rocket,
      title: t('values.seo.title'),
      description: t('values.seo.description'),
      color: "text-red-400",
    },
  ];

  return (
    <section id="services" className="py-32 relative">
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
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass glass-hover rounded-2xl p-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-4 group-hover:shadow-glow-sm transition-shadow">
                <value.icon className={value.color} size={24} />
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
              <p className="text-[#94A3B8]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
