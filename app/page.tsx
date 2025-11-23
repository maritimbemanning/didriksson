import HeroA from "../components/HeroA";
import ProblemSolution from "../components/ProblemSolution";
import StatsSection from "../components/StatsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import TrustSection from "../components/TrustSection";
import AboutMe from "../components/AboutMe";
import ProcessA from "../components/ProcessA";
import CaseA from "../components/CaseA";
import PriceComparison from "../components/PriceComparison";
import FAQ from "../components/FAQ";
import CTA_A from "../components/CTA_A";

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero - Main value proposition */}
      <HeroA />

      {/* Problem/Solution - Identify with customer pain */}
      <ProblemSolution />

      {/* Stats - Social proof with numbers */}
      <StatsSection />

      {/* About Me - Personal connection */}
      <AboutMe />

      {/* Why Choose Us - Key differentiators */}
      <WhyChooseUs />

      {/* Price Comparison - Byrå vs Meg */}
      <PriceComparison />

      {/* Trust Section - Guarantees */}
      <TrustSection />

      {/* Process - How it works */}
      <ProcessA />

      {/* Case Study - Real results */}
      <article id="case">
        <CaseA />
      </article>

      {/* FAQ - Answer objections */}
      <FAQ />

      {/* Final CTA */}
      <CTA_A />
    </div>
  );
}
