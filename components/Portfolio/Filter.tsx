"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  label: string;
}

interface FilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Filter({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors",
            activeCategory === category.id
              ? "text-[var(--color-primary)]"
              : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
          )}
        >
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-[var(--color-accent)]/10 rounded-full border border-[var(--color-accent)]/30"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category.label}</span>
        </button>
      ))}
    </div>
  );
}
