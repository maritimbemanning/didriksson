import HeroA from "../components/HeroA";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutA from "../components/AboutA";
import ValueA from "../components/ValueA";
import ProcessA from "../components/ProcessA";
import CaseA from "../components/CaseA";
import TrustSection from "../components/TrustSection";
import FAQ from "../components/FAQ";
import CTA_A from "../components/CTA_A";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-16">
      <HeroA />

      <WhyChooseUs />

      <TrustSection />

      <article id="tjenester" className="space-y-6">
        <AboutA />
        <ValueA />
      </article>

      <ProcessA />

      <article id="case">
        <CaseA />
      </article>

      <FAQ />

      <CTA_A />
    </main>
  );
}
