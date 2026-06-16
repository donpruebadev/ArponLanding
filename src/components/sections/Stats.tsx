"use client";

import { motion } from "motion/react";
import { TrendUp, ShieldCheck, Buildings, MagnifyingGlass } from "@phosphor-icons/react";

const STATS = [
  {
    icon: MagnifyingGlass,
    value: "12,847",
    label: "Contratos analizados",
    trend: "+18%",
    trendUp: true,
  },
  {
    icon: TrendUp,
    value: "1,203",
    label: "Irregularidades detectadas",
    trend: "+24%",
    trendUp: true,
  },
  {
    icon: Buildings,
    value: "346",
    label: "Entidades monitoreadas",
    trend: "+12%",
    trendUp: true,
  },
  {
    icon: ShieldCheck,
    value: "98.2%",
    label: "Precisión del análisis",
    trend: "+0.4%",
    trendUp: true,
  },
];

export function Stats() {
  return (
    <section className="py-32 lg:py-40 bg-arpon-surface-3" id="estadisticas">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 xl:px-28">
        {/* Section header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span
            className="data-label text-arpon-teal"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            IMPACTO
          </span>
          <h2
            className="mt-5 text-3xl md:text-4xl lg:text-5xl tracking-tight text-arpon-text-primary leading-tight text-balance"
            style={{ fontFamily: "var(--font-space)", fontWeight: 700 }}
          >
            Números que hablan
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-8 rounded-[12px] border border-arpon-border bg-white"
            >
              <div className="flex flex-col items-center text-center">
                <stat.icon
                  size={24}
                  weight="duotone"
                  className="text-arpon-teal mb-3"
                />
                <span
                  className="data-label text-arpon-text-muted mb-4"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {stat.label}
                </span>

                <div className="flex items-center gap-3">
                  <span
                    className="text-3xl md:text-4xl text-arpon-text-primary tracking-tight"
                    style={{
                      fontFamily: "var(--font-space)",
                      fontWeight: 700,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      stat.trendUp ? "text-arpon-success" : "text-arpon-error"
                    }`}
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {stat.trend}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
