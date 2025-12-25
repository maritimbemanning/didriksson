"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHover } from "@/lib/animations";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "elevated" | "outline" | "glass";
  hoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variantStyles = {
  default: "bg-[var(--color-surface)]",
  elevated: "bg-[var(--color-surface)] shadow-lg",
  outline: "bg-[var(--color-surface)] border border-[var(--color-border)]",
  glass: "bg-white/10 backdrop-blur-md border border-white/20",
};

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      hoverable = false,
      padding = "md",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverable ? cardHover : undefined}
        className={cn(
          "rounded-xl",
          variantStyles[variant],
          paddingStyles[padding],
          hoverable && "cursor-pointer transition-shadow hover:shadow-xl",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
