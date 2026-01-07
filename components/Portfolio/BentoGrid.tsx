"use client";

/**
 * @fileoverview BentoGrid Portfolio Component
 *
 * A responsive portfolio showcase using a bento-box grid layout. This component
 * displays case studies with images, metrics, and descriptions in a visually
 * appealing asymmetric grid.
 *
 * ## Architecture Overview
 *
 * The component uses CSS Grid with a 3-column layout on medium+ screens.
 * Cases can span multiple columns/rows using Tailwind's `col-span-*` and
 * `row-span-*` utilities. Each case card features:
 *
 * - Background image with gradient overlay
 * - Glass morphism styling effect
 * - Hover animations for interactivity
 * - Result metrics with accent gradient text
 *
 * ## Grid Layout System
 *
 * The grid uses `auto-rows-[240px]` for consistent row heights:
 *
 * ```
 * Desktop (md+):
 * ┌─────────────────┬─────────┐
 * │                 │         │
 * │  Case 1 (2x2)   │ Case 2  │
 * │                 │  (1x2)  │
 * │                 │         │
 * ├─────────────────┴─────────┤
 * │         CTA (3x1)         │
 * └───────────────────────────┘
 *
 * Mobile:
 * ┌─────────────────┐
 * │     Case 1      │
 * ├─────────────────┤
 * │     Case 2      │
 * ├─────────────────┤
 * │       CTA       │
 * └─────────────────┘
 * ```
 *
 * ## Styling Classes
 *
 * - `glass`: Base glass morphism effect (semi-transparent with backdrop blur)
 * - `glass-hover`: Hover state that increases opacity/blur
 * - `bg-gradient-to-br`: Diagonal gradient from top-left to bottom-right
 * - Color classes use opacity modifiers (e.g., `from-amber-500/20` = 20% opacity)
 *
 * ## Adding New Cases
 *
 * To add a new case study:
 *
 * 1. Add translations to `/messages/{locale}.json` under `BentoGrid.cases.{caseName}`
 * 2. Add the case object to the `cases` array with required properties
 * 3. Choose appropriate `span` values based on desired grid placement
 * 4. Add case image to `/public/images/portfolio/`
 *
 * @example
 * // Basic usage - no props required
 * <BentoGrid />
 *
 * @see {@link https://tailwindcss.com/docs/grid-column} Grid column span docs
 * @see {@link https://www.framer.com/motion/} Framer Motion animation library
 */

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

/**
 * Represents a portfolio case study item in the bento grid.
 *
 * @interface BentoCase
 *
 * @property {string} title - The project/case name displayed as heading
 * @property {string} metric - Key result or achievement (e.g., "40% økning", "2x hastighet")
 * @property {string} label - Short descriptor for the metric (e.g., "Konvertering", "Salg")
 * @property {string} [description] - Optional longer description of the case study
 * @property {string} color - Tailwind gradient classes for the card background
 *   - Format: "from-{color}/opacity to-{color}/opacity"
 *   - Example: "from-amber-500/20 to-orange-600/20"
 * @property {string} span - Tailwind grid span classes for responsive layout
 *   - Format: "md:col-span-{n} md:row-span-{n}"
 *   - col-span controls horizontal width (1-3 columns)
 *   - row-span controls vertical height (1-2 rows)
 * @property {string} href - URL to the live project or anchor link for CTA
 * @property {string} [result_label] - Label shown above the metric (e.g., "Resultat")
 * @property {string} [image] - Path to the case study image in /public
 * @property {boolean} [isCTA] - If true, renders as a call-to-action card instead of case study
 * @property {string} [button] - Button text for CTA cards only
 */
interface BentoCase {
  title: string;
  metric: string;
  label: string;
  description?: string;
  color: string;
  span: string;
  href: string;
  result_label?: string;
  image?: string;
  isCTA?: boolean;
  button?: string;
}

/* =============================================================================
 * ANIMATION CONFIGURATION
 * ============================================================================= */

/**
 * Animation delay multiplier for staggered card entrance.
 * Each card's animation is delayed by (index * STAGGER_DELAY) seconds.
 * A value of 0.1 creates a subtle cascading effect.
 */
const STAGGER_DELAY = 0.1;

/**
 * Viewport margin for triggering animations.
 * Negative values trigger animations before the element enters the viewport.
 * "-100px" means animation starts when element is 100px below viewport edge.
 */
const VIEWPORT_MARGIN = "-100px";

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * BentoGrid - Portfolio showcase component using asymmetric grid layout.
 *
 * Displays portfolio case studies in a visually appealing bento-box style grid.
 * Supports two card types:
 *
 * 1. **Case Study Cards**: Feature image, gradient overlay, project title,
 *    description, and key metric/result
 *
 * 2. **CTA Cards**: Call-to-action card with centered content and button
 *    (identified by `isCTA: true`)
 *
 * ## Features
 *
 * - Responsive grid layout (single column mobile, 3-column desktop)
 * - Scroll-triggered entrance animations with stagger effect
 * - Glass morphism styling with gradient backgrounds
 * - Image overlays with gradient masks for text readability
 * - External link indicators for live project links
 * - Internationalization support via next-intl
 *
 * ## Accessibility
 *
 * - Links include proper `target="_blank"` with `rel="noopener noreferrer"`
 * - Images have alt text derived from case titles
 * - Cards are keyboard navigable via anchor elements
 *
 * @component
 * @returns The rendered portfolio grid section
 *
 * @example
 * // In a page component
 * import { BentoGrid } from '@/components/Portfolio/BentoGrid';
 *
 * export default function HomePage() {
 *   return (
 *     <main>
 *       <BentoGrid />
 *     </main>
 *   );
 * }
 */
export function BentoGrid() {
  // Access translations for the BentoGrid namespace
  const t = useTranslations('BentoGrid');

  /**
   * Portfolio case studies configuration.
   *
   * Each case defines its layout, content, and styling. Cases are rendered
   * in array order, so arrange them for optimal visual flow in the grid.
   *
   * ## Grid Span Reference
   *
   * | Span Value              | Desktop Size        | Use Case                |
   * |------------------------|---------------------|-------------------------|
   * | md:col-span-2 row-span-2 | Large (2x2)        | Featured/primary case   |
   * | md:col-span-1 row-span-2 | Tall (1x2)         | Secondary case          |
   * | md:col-span-3           | Full width (3x1)    | CTA or featured banner  |
   * | md:col-span-2           | Wide (2x1)          | Standard case           |
   * | md:col-span-1           | Small (1x1)         | Compact case            |
   */
  const cases: BentoCase[] = [
    {
      // Primary featured case - uses largest grid area (2x2)
      // Place most impressive/important case here
      title: t('cases.bluecrew.title'),
      metric: t('cases.bluecrew.metric'),
      label: t('cases.bluecrew.label'),
      description: t('cases.bluecrew.description'),
      // Warm amber/orange gradient - evokes energy and creativity
      color: "from-amber-500/20 to-orange-600/20",
      // 2x2 grid area provides maximum visual impact
      span: "md:col-span-2 md:row-span-2",
      href: "https://bluecrew.no",
      result_label: t('cases.bluecrew.result_label'),
      image: "/images/portfolio/bluecrew.webp"
    },
    {
      // Secondary case - tall format (1x2) complements the featured case
      // Good for vertical-oriented screenshots or portrait images
      title: t('cases.case2.title'),
      metric: t('cases.case2.metric'),
      label: t('cases.case2.label'),
      description: t('cases.case2.description'),
      // Cool blue/indigo gradient - conveys professionalism and trust
      color: "from-blue-500/20 to-indigo-600/20",
      // 1x2 creates visual balance with 2x2 featured case
      span: "md:col-span-1 md:row-span-2",
      href: "https://optima-steel.vercel.app/en",
      result_label: t('cases.case2.result_label'),
      image: "/images/portfolio/optima.jpg"
    },
    {
      // Call-to-Action card - full width for maximum visibility
      // Special rendering: centered content with action button
      title: t('cases.cta.title'),
      metric: t('cases.cta.metric'),
      label: t('cases.cta.label'),
      // Darker styling with dashed border for visual distinction
      color: "from-slate-800 to-slate-900 border-dashed border-2 border-slate-700",
      // Full width spans all 3 columns
      span: "md:col-span-3",
      // isCTA flag triggers alternate rendering path with centered layout
      isCTA: true,
      // Anchor link scrolls to contact section
      href: "#contact",
      button: t('cases.cta.button'),
    },
  ];

  return (
    <section id="portfolio" className="py-32 relative">
      <Container>
        {/* =================================================================
         * SECTION HEADER
         * Centered title and subtitle with scroll-triggered animation
         * ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: VIEWPORT_MARGIN }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            {/*
             * Rich text interpolation for styled spans
             * The 'span' tag in translations wraps text in accent color
             * Example: "Mine <span>Prosjekter</span>" → "Mine" + styled "Prosjekter"
             */}
            {t.rich('title', {
              span: (chunks) => <span className="text-accent">{chunks}</span>
            })}
          </h2>
          <p className="text-lg text-(--color-text-secondary)">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* =================================================================
         * BENTO GRID CONTAINER
         *
         * Grid configuration:
         * - md:grid-cols-3: 3 equal columns on medium+ screens
         * - gap-6: 1.5rem (24px) spacing between cards
         * - auto-rows-[240px]: Each row is exactly 240px tall
         *   - Cards spanning 2 rows = 240px * 2 + gap = 504px
         * ================================================================= */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[240px]">
          {cases.map((item, i) => (
            <motion.div
              key={item.title + i}
              // Entrance animation: fade in from below
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // Only animate once when scrolling into view
              viewport={{ once: true, margin: VIEWPORT_MARGIN }}
              // Stagger effect: each card animates slightly after the previous
              transition={{ delay: i * STAGGER_DELAY }}
              // Dynamic span classes control grid positioning
              className={`${item.span} group relative`}
            >
              {/* =============================================================
               * CARD LINK WRAPPER
               *
               * All cards are clickable. External links (http/https) open in
               * new tab with security attributes. Internal anchors scroll
               * to the target section.
               * ============================================================= */}
              <a
                href={item.href}
                // Only add target="_blank" for external URLs
                target={item.href.startsWith('http') ? "_blank" : undefined}
                // Security: prevent reverse tabnabbing attacks
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                {/* ===========================================================
                 * CARD CONTAINER
                 *
                 * Styling differs based on card type (CTA vs regular):
                 *
                 * Regular cards:
                 * - glass glass-hover: Glass morphism with hover effect
                 * - bg-gradient-to-br: Diagonal gradient background
                 * - Dynamic color from case configuration
                 *
                 * CTA cards:
                 * - Semi-transparent slate background
                 * - Dashed border that highlights on hover
                 * - Flexbox centering for content
                 * =========================================================== */}
                <div
                  className={`
                    relative h-full rounded-3xl p-8 transition-all duration-500 overflow-hidden
                    ${item.isCTA
                      ? "bg-slate-900/50 hover:bg-slate-900/80 border-2 border-dashed border-slate-700 hover:border-accent/50 flex items-center justify-center"
                      : `glass glass-hover bg-gradient-to-br ${item.color}`
                    }
                  `}
                >
                  {/* =========================================================
                   * BACKGROUND IMAGE LAYER (Case Study Cards Only)
                   *
                   * Structure:
                   * 1. Next.js Image component for optimized loading
                   * 2. Gradient overlay for text readability
                   *
                   * The gradient goes from transparent (top) to near-black
                   * (bottom) so text remains readable over the image.
                   * ========================================================= */}
                  {item.image && (
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        // object-cover maintains aspect ratio, fills container
                        // opacity increases on hover for subtle interaction
                        className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                      />
                      {/* Gradient mask: ensures text readability over image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    </div>
                  )}

                  {/* =========================================================
                   * CARD CONTENT
                   *
                   * Two rendering paths based on card type:
                   * 1. CTA cards: Centered title, subtitle, and button
                   * 2. Case cards: Project info with metric display
                   * ========================================================= */}
                  {item.isCTA ? (
                    /* -----------------------------------------------------
                     * CTA CARD CONTENT
                     * Centered layout with call-to-action button
                     * ----------------------------------------------------- */
                    <div className="text-center relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400 mb-6">{item.label}</p>
                      <Button variant="primary" size="sm" className="rounded-full">
                        {item.button} <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      {/* ---------------------------------------------------
                       * CASE STUDY CARD CONTENT
                       *
                       * Layout structure (flex column, justify-between):
                       * ┌─────────────────────────┐
                       * │ Title        [Link Icon]│  <- Header row
                       * │ Label with trend icon   │  <- Metric label
                       * │ Description text...     │  <- Optional description
                       * │                         │
                       * │ Result Label            │  <- Bottom section
                       * │ METRIC VALUE            │  <- Gradient text
                       * └─────────────────────────┘
                       * --------------------------------------------------- */}
                      <div className="relative h-full flex flex-col justify-between z-10">
                        <div>
                          {/* Header: Title and external link icon */}
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                              {item.title}
                            </h3>
                            {/* External link indicator with hover effect */}
                            <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-accent group-hover:text-slate-900 transition-colors">
                              <ExternalLink size={20} />
                            </div>
                          </div>

                          {/* Metric label with trend icon */}
                          <div className="flex items-center gap-2 text-slate-300 mb-4">
                            <TrendingUp size={18} className="text-accent" />
                            <span className="font-medium">{item.label}</span>
                          </div>

                          {/* Optional description - hidden on smaller cards */}
                          {item.description && (
                            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Metric display - bottom of card */}
                        <div className="mt-6">
                          <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">
                            {item.result_label}
                          </div>
                          {/* Gradient text effect for visual emphasis */}
                          <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200">
                            {item.metric}
                          </div>
                        </div>
                      </div>

                      {/* ---------------------------------------------------
                       * DECORATIVE BACKGROUND GLOW
                       *
                       * A large blurred circle positioned at bottom-right
                       * creates a subtle ambient glow effect. The glow
                       * intensifies on hover for interactive feedback.
                       * --------------------------------------------------- */}
                      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700" />
                    </>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
