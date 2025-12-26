"use client";

import { useState } from "react";
import { Header, Footer } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Testimonials } from "@/components/Testimonials";
import { BentoGrid } from "@/components/Portfolio/BentoGrid";
import { Pricing } from "@/components/Pricing";
import { Founder } from "@/components/Founder";
import { CalendlyModal } from "@/components/CalendlyButton";

export default function HomePage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  return (
    <>
      <Header onBookClick={openCalendly} />

      <main>
        <Hero onBookClick={openCalendly} />
        <ValueProposition />
        <BentoGrid />
        {/* <Testimonials /> */}
        <Founder />
        <Pricing onBookClick={openCalendly} />
      </main>

      <Footer />

      {/* Calendly Modal */}
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
}
