"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";
import { CaseCard, CaseStudy } from "./CaseCard";
import { Filter } from "./Filter";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const cases: CaseStudy[] = [
  {
    id: "nordic-fashion",
    title: "E-commerce Redesign",
    client: "Nordic Fashion AS",
    category: "ecommerce",
    image: "/images/portfolio/nordic-fashion.jpg",
    result: "+340% traffic",
    tags: ["Next.js", "E-commerce", "SEO"],
  },
  {
    id: "tech-solutions",
    title: "Corporate Website",
    client: "TechSolutions Norge",
    category: "b2b",
    image: "/images/portfolio/tech-solutions.jpg",
    result: "97/100 PageSpeed",
    tags: ["Next.js", "B2B", "Performance"],
  },
  {
    id: "handverkeren",
    title: "Local Business Site",
    client: "Handverkeren Bergen",
    category: "portfolio",
    image: "/images/portfolio/handverkeren.jpg",
    result: "+150% bookinger",
    tags: ["Next.js", "Local SEO", "Calendly"],
  },
  {
    id: "startupx",
    title: "Startup Landing",
    client: "StartupX Oslo",
    category: "b2b",
    image: "/images/portfolio/startupx.jpg",
    result: "+200% konvertering",
    tags: ["Next.js", "Startup", "Analytics"],
  },
  {
    id: "butikken",
    title: "Nettbutikk Platform",
    client: "Butikken.no",
    category: "ecommerce",
    image: "/images/portfolio/butikken.jpg",
    result: "3x salg på 6 måneder",
    tags: ["Next.js", "E-commerce", "CMS"],
  },
  {
    id: "konsulentgruppen",
    title: "Lead Generation",
    client: "Konsulentgruppen",
    category: "b2b",
    image: "/images/portfolio/konsulentgruppen.jpg",
    result: "+80% leads",
    tags: ["Next.js", "B2B", "Forms"],
  },
];

const categories = [
  { id: "alle", label: "Alle" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "b2b", label: "B2B" },
  { id: "portfolio", label: "Portefolje" },
];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("alle");

  const filteredCases =
    activeCategory === "alle"
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  return (
    <section id="portfolio" className="py-[var(--spacing-section)] bg-[var(--color-bg)]">
      <Container>
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
            Portfolio
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4"
          >
            Utvalgte prosjekter
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8"
          >
            Se hvordan vi har hjulpet andre bedrifter med å nå sine digitale mål.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Filter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((caseStudy) => (
              <CaseCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
