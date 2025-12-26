"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function BentoGrid() {
  const t = useTranslations('BentoGrid');

  const cases = [
    {
      // CASE 1: Den viktigste casen din (stor boks)
      title: t('cases.bluecrew.title'),
      metric: t('cases.bluecrew.metric'),
      label: t('cases.bluecrew.label'),
      description: t('cases.bluecrew.description'),
      color: "from-amber-500/20 to-orange-600/20",
      span: "md:col-span-2 md:row-span-2",
      href: "https://bluecrew.no",
      result_label: t('cases.bluecrew.result_label'),
      image: "/images/portfolio/bluecrew.webp"
    },
    {
      // CASE 2: Den andre solide casen (høy boks)
      title: t('cases.case2.title'),
      metric: t('cases.case2.metric'),
      label: t('cases.case2.label'),
      description: t('cases.case2.description'),
      color: "from-blue-500/20 to-indigo-600/20",
      span: "md:col-span-1 md:row-span-2",
      href: "https://optima.is",
      result_label: t('cases.case2.result_label'),
      image: "/images/portfolio/optima.jpg"
    },
    {
      title: t('cases.cta.title'),
      metric: t('cases.cta.metric'),
      label: t('cases.cta.label'),
      color: "from-slate-800 to-slate-900 border-dashed border-2 border-slate-700",
      span: "md:col-span-3",
      isCTA: true, // Special styling for CTA
      href: "#contact",
      button: t('cases.cta.button'),
    },
  ];

  return (
    <section id="portfolio" className="py-32 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            {t.rich('title', {
              span: (chunks) => <span className="text-accent">{chunks}</span>
            })}
          </h2>
          <p className="text-lg text-(--color-text-secondary)">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[240px]">
          {cases.map((item, i) => (
            <motion.div
              key={item.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className={`${item.span} group relative`}
            >
              <a 
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                <div
                  className={`
                    relative h-full rounded-3xl p-8 transition-all duration-500 overflow-hidden
                    ${item.isCTA 
                      ? "bg-slate-900/50 hover:bg-slate-900/80 border-2 border-dashed border-slate-700 hover:border-accent/50 flex items-center justify-center" 
                      : `glass glass-hover bg-gradient-to-br ${item.color}`
                    }
                  `}
                >
                  {item.image && (
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    </div>
                  )}

                  {item.isCTA ? (
                    <div className="text-center relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400 mb-6">{item.label}</p>
                      <Button variant="primary" size="sm" className="rounded-full">
                        {item.button} <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-between z-10">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                              {item.title}
                            </h3>
                            <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-accent group-hover:text-slate-900 transition-colors">
                              <ExternalLink size={20} />
                            </div>
                          </div>
                        
                        <div className="flex items-center gap-2 text-slate-300 mb-4">
                          <TrendingUp size={18} className="text-accent" />
                          <span className="font-medium">{item.label}</span>
                        </div>
                        
                        {item.description && (
                          <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className="mt-6">
                        <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">{item.result_label}</div>
                        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200">
                          {item.metric}
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative background glow */}
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

