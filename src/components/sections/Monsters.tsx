"use client";

import { motion } from "motion/react";

const MONSTERS = [
  {
    id: "el-inflado",
    name: "El Inflado",
    type: "Sobreprecios",
    description: "Contratos con precios inflados artificialmente",
    color: "#EF4444",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="40" r="32" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <circle cx="32" cy="34" r="3" fill="currentColor" />
        <circle cx="48" cy="34" r="3" fill="currentColor" />
        <path d="M30 50 Q40 58 50 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "la-hidra",
    name: "La Hidra Burocrática",
    type: "Burocracia excesiva",
    description: "Procesos innecesariamente complejos",
    color: "#F59E0B",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <path d="M20 55 Q30 25 40 55 Q50 25 60 55" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="40" r="2.5" fill="currentColor" />
        <circle cx="50" cy="40" r="2.5" fill="currentColor" />
        <path d="M15 60 Q40 70 65 60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: "el-coloso",
    name: "El Coloso Blindado",
    type: "Falta de transparencia",
    description: "Entidades que ocultan información",
    color: "#6B7280",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="20" y="20" width="40" height="50" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="28" y1="35" x2="52" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="28" y1="45" x2="52" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="28" y1="55" x2="42" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <rect x="30" y="25" width="20" height="3" rx="1" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: "la-sanguijuela",
    name: "La Sanguijuela",
    type: "Desvíos de recursos",
    description: "Recursos que no llegan a su destino",
    color: "#EF4444",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <path d="M25 40 Q40 20 55 40 Q40 60 25 40" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "la-red",
    name: "La Red",
    type: "Corrupción sistémica",
    description: "Redes de corrupción interconectadas",
    color: "#EF4444",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="25" cy="55" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="55" cy="55" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="37" x2="25" y2="45" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line x1="40" y1="37" x2="55" y2="45" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line x1="25" y1="55" x2="55" y2="55" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "el-escondido",
    name: "El Escondido",
    type: "Opacidad",
    description: "Información oculta o difícil de acceder",
    color: "#6B7280",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="20" y1="20" x2="60" y2="60" stroke="currentColor" strokeWidth="2" />
        <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function Monsters() {
  return (
    <section className="py-40 bg-arpon-surface-0" id="monstruos">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-24">
          <span
            className="data-label text-arpon-teal"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            LOS MONSTRUOS
          </span>
          <h2
            className="mt-5 text-3xl md:text-4xl lg:text-5xl tracking-tight text-arpon-text-primary leading-tight"
            style={{ fontFamily: "var(--font-space)", fontWeight: 700 }}
          >
            Cada irregularidad tiene nombre
          </h2>
          <p className="mt-5 text-lg text-arpon-text-secondary leading-relaxed max-w-[55ch]">
            Nuestro sistema clasifica las anomalías en contratación pública como
            monstruos. Identificarlos es el primer paso para acabar con ellos.
          </p>
        </div>

        {/* Monster grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MONSTERS.map((monster, i) => (
            <motion.div
              key={monster.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative p-8 rounded-[12px] border border-arpon-border bg-arpon-surface-1 hover:border-arpon-teal/20 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                {/* Monster icon */}
                <div
                  className="w-16 h-16 flex-shrink-0"
                  style={{ color: monster.color }}
                >
                  {monster.icon}
                </div>

                {/* Info */}
                <div className="min-w-0">
                  <h3
                    className="text-lg text-arpon-text-primary mb-2"
                    style={{
                      fontFamily: "var(--font-space)",
                      fontWeight: 600,
                    }}
                  >
                    {monster.name}
                  </h3>
                  <span
                    className="inline-block text-[10px] uppercase tracking-[0.08em] px-2.5 py-1 rounded-full mb-3"
                    style={{
                      fontFamily: "var(--font-mono)",
                      backgroundColor: `${monster.color}15`,
                      color: monster.color,
                    }}
                  >
                    {monster.type}
                  </span>
                  <p className="text-sm text-arpon-text-secondary leading-relaxed">
                    {monster.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
