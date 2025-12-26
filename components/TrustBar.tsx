"use client";

import { Star, TrendingUp, Shield } from "lucide-react";
import { useTranslations } from 'next-intl';

export function TrustBar() {
  const t = useTranslations('TrustBar');

  const trustItems = [
    { icon: TrendingUp, text: t('delivered') },
    { icon: Star, text: t('rating') },
    { icon: Shield, text: t('partner') },
  ];

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...trustItems, ...trustItems, ...trustItems, ...trustItems];

  return (
    <section
      id="trust"
      className="py-6 bg-[var(--color-bg)] border-y border-[var(--color-border-light)] overflow-hidden"
    >
      <div className="relative flex">
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10" />

        {/* Scrolling content */}
        <div className="flex animate-[marquee_25s_linear_infinite]">
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-8 text-[var(--color-text-secondary)] whitespace-nowrap"
            >
              <item.icon size={18} className="text-[var(--color-accent)]" />
              <span className="text-sm font-medium">{item.text}</span>
              <span className="mx-4 text-[var(--color-border)]">|</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
