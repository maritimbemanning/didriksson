"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Card } from "@/components/ui";

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  video?: string;
  result: string;
  tags: string[];
}

interface CaseCardProps {
  caseStudy: CaseStudy;
}

export function CaseCard({ caseStudy }: CaseCardProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        variant="default"
        padding="none"
        className="overflow-hidden group cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Image / Video */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className={`object-cover transition-all duration-500 ${
              isHovering && caseStudy.video ? "opacity-0" : "opacity-100"
            } group-hover:scale-105`}
          />

          {/* Video on hover */}
          {caseStudy.video && isHovering && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={caseStudy.video} type="video/mp4" />
            </video>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Play icon (if video available) */}
          {caseStudy.video && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play size={24} className="text-white ml-1" />
              </div>
            </div>
          )}

          {/* Arrow indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHovering ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="absolute bottom-4 right-4 w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center"
          >
            <ArrowUpRight size={20} className="text-[var(--color-primary)]" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-[var(--color-accent)] text-sm font-medium mb-1">
            {caseStudy.client}
          </p>
          <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
            {caseStudy.title}
          </h3>

          {/* Result */}
          <div className="text-2xl font-bold text-[var(--color-accent)] mb-4">
            {caseStudy.result}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[var(--color-border-light)] rounded-full text-xs text-[var(--color-text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
