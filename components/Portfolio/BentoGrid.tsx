"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";

const cases = [
  {
    title: "Nordic Fashion",
    metric: "Flere bestillinger",
    label: "Fra treig nettbutikk til jevn flyt av ordre",
    color: "from-amber-500/15 to-rose-500/15",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "TechSolutions",
    metric: "Rask side",
    label: "Teknisk ryddig løsning som Google liker",
    color: "from-sky-500/15 to-indigo-500/15",
    span: "md:col-span-1",
  },
  {
    title: "Butikken.no",
    metric: "Flere salg",
    label: "Enklere vei fra produkt til kjøp",
    color: "from-emerald-500/15 to-teal-500/15",
    span: "md:col-span-1",
  },
  {
    title: "Fitness Studio",
    metric: "Flere medlemmer",
    label: "Bedre info og enklere booking",
    color: "from-blue-500/15 to-slate-500/15",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Konsulent Pro",
    metric: "Raskere side",
    label: "Kortere lastetid og tydeligere budskap",
    color: "from-slate-500/15 to-zinc-500/15",
    span: "md:col-span-2",
  },
];

export function BentoGrid() {
  return (
    <section id="results" className="py-32 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Beviste <span className="text-accent">resultater</span>
          </h2>
          <p className="text-lg text-(--color-text-secondary)">
            Utdrag av faktiske resultater fra prosjekter der vi har byttet ut
            trege, utdaterte løsninger med moderne, raske nettsider.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-[200px]">
          {cases.map((item, i) => (
            <motion.div
              key={item.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05 }}
              className={`${item.span} group`}
            >
              <div
                className={`
                  relative h-full glass glass-hover rounded-2xl p-8
                  bg-gradient-to-br ${item.color}
                  cursor-pointer overflow-hidden
                `}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-accent/5 group-hover:to-amber-300/10 transition-all duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-(--color-text-secondary)">
                      <TrendingUp size={16} className="text-accent" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between mt-4">
                    <div className="text-4xl font-semibold text-accent">
                      {item.metric}
                    </div>
                    <ExternalLink
                      size={22}
                      className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

