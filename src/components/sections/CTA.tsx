"use client";

import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

export function CTA() {
  return (
    <section className="py-[32rem] bg-white" id="demo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[16px] border border-arpon-border bg-arpon-surface-1 py-20 px-12 md:px-20 text-center"
        >
          {/* Background accent glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-arpon-teal/[0.06] rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative">
            <span
              className="data-label text-arpon-teal"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ÚNETE A LA CACERÍA
            </span>

            <h2
              className="mt-8 text-3xl md:text-4xl lg:text-5xl tracking-tight text-arpon-text-primary max-w-3xl mx-auto leading-tight"
              style={{ fontFamily: "var(--font-space)", fontWeight: 700 }}
            >
              La transparencia empieza
              <br />
              con la <span className="text-arpon-teal">acción</span>
            </h2>

            <p className="mt-6 text-lg text-arpon-text-secondary max-w-[50ch] mx-auto leading-relaxed">
              Solicita una demo y descubre cómo podemos ayudarte a detectar
              irregularidades en contratación pública.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-arpon-teal text-white text-base font-semibold rounded-[6px] hover:bg-arpon-teal-dim active:scale-[0.98] transition-all duration-150"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Solicitar demo
                <ArrowRight size={18} weight="bold" />
              </a>
              <a
                href="#contratos"
                className="inline-flex items-center gap-2 px-8 py-4 text-arpon-text-secondary text-base font-semibold rounded-[6px] border border-arpon-border hover:text-arpon-text-primary hover:border-arpon-text-muted active:scale-[0.98] transition-all duration-150"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Explorar plataforma
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
