"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  containerClassName?: string;
}

export function AnimatedIcon({
  icon: Icon,
  size = 24,
  className,
  containerClassName,
}: AnimatedIconProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.4 },
      }}
      className={cn("inline-flex", containerClassName)}
    >
      <Icon size={size} className={className} />
    </motion.div>
  );
}
