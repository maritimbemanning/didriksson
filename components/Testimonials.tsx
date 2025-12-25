"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer, testimonialSlide } from "@/lib/animations";

const testimonials = [
  {
    id: 1,
    quote:
      "Før: 2 000 kr/mnd fra nettsiden. Etter: 45 000 kr/mnd på 3 måneder. Didriksson Digital forsto målgruppen vår fra dag 1.",
    author: "Jonas Hansen",
    role: "CEO",
    company: "BedriftAS",
    image: "/images/testimonials/jonas.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "97/100 på PageSpeed. Kunder kommenterer hvor rask nettsiden er. Beste investeringen vi har gjort.",
    author: "Maria Olsen",
    role: "Daglig Leder",
    company: "ShopNorge",
    image: "/images/testimonials/maria.jpg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Fra kontakt til lansering: 14 dager. Prosessen var knirkefri, og resultatet overgikk forventningene.",
    author: "Erik Johansen",
    role: "Founder",
    company: "StartupX",
    image: "/images/testimonials/erik.jpg",
    rating: 5,
  },
];

export function Testimonials() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      const newIndex =
        (activeIndex + newDirection + testimonials.length) % testimonials.length;
      setActiveIndex([newIndex, newDirection]);
    },
    [activeIndex]
  );

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, paginate]);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section
      className="py-[var(--spacing-section)] bg-[var(--color-surface)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
            Kundehistorier
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)]"
          >
            Hva kundene sier
          </motion.h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={testimonialSlide}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-center"
            >
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-[var(--color-primary)] mb-8 leading-relaxed max-w-3xl mx-auto">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[var(--color-border-light)]">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-[var(--color-primary)]">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] hover:bg-[var(--color-border-light)] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-[var(--color-primary)]" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] hover:bg-[var(--color-border-light)] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-[var(--color-primary)]" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex([index, index > activeIndex ? 1 : -1])}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-border)]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
