"use client";

import { motion } from "motion/react";
import { FileText, MagnifyingGlass, Bug } from "@phosphor-icons/react";

const STEPS = [
  {
    icon: FileText,
    number: "01",
    title: "Contratos públicos",
    description:
      "Recopilamos datos de contratación gubernamental de fuentes abiertas y bases de datos oficiales.",
  },
  {
    icon: MagnifyingGlass,
    number: "02",
    title: "Análisis avanzado",
    description:
      "Nuestra IA examina patrones, compara precios y detecta anomalías que el ojo humano no ve.",
  },
  {
    icon: Bug,
    number: "03",
    title: "Irregularidades",
    description:
      "Identificamos sobreprecios, opacidad, colusión y otros monstruos de la contratación pública.",
  },
];

export function Process() {
  return (
    <section className="py-40 bg-arpon-surface-1" id="proceso">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-24">
          <span
            className="data-label text-arpon-teal"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            CÓMO FUNCIONA
          </span>
          <h2
            className="mt-5 text-3xl md:text-4xl lg:text-5xl tracking-tight text-arpon-text-primary leading-tight"
            style={{ fontFamily: "var(--font-space)", fontWeight: 700 }}
          >
            Tres pasos para cazar anomalías
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative group"
            >
              {/* Connector line (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-14 left-full w-full h-px bg-arpon-border z-0" />
              )}

              <div className="relative p-10 rounded-[12px] border border-arpon-border bg-arpon-deep hover:border-arpon-teal/30 hover:shadow-[0_4px_16px_rgba(46,196,182,0.08)] transition-all duration-300">
                {/* Number */}
                <span
                  className="data-label text-arpon-text-muted block mb-5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-[8px] bg-arpon-teal/10 flex items-center justify-center mb-6">
                  <step.icon
                    size={28}
                    weight="duotone"
                    className="text-arpon-teal"
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-xl text-arpon-text-primary mb-4"
                  style={{
                    fontFamily: "var(--font-space)",
                    fontWeight: 600,
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-base text-arpon-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
