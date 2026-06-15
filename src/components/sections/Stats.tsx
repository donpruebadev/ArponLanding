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
    <section className="py-24 bg-arpon-deep" id="estadisticas">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span
            className="data-label text-arpon-teal"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            IMPACTO
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl tracking-tight text-arpon-text-primary"
            style={{ fontFamily: "var(--font-space)", fontWeight: 700 }}
          >
            Números que hablan
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="p-6 rounded-[12px] border border-arpon-border bg-arpon-surface-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <stat.icon
                  size={20}
                  weight="duotone"
                  className="text-arpon-teal"
                />
                <span
                  className="data-label text-arpon-text-muted"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {stat.label}
                </span>
              </div>

              <div className="flex items-end gap-3">
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
                  className={`text-sm font-medium pb-1 ${
                    stat.trendUp ? "text-arpon-success" : "text-arpon-error"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {stat.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
