"use client";

import { motion } from "motion/react";

const MONSTERS = [
  {
    id: "el-inflado",
    name: "El Inflado",
    type: "Sobreprecios",
    description: "Contratos con precios inflados artificialmente",
    color: "#EF4444",
    svg: "/monsters/svg/el-inflado.svg",
  },
  {
    id: "la-hidra-burocratica",
    name: "La Hidra Burocrática",
    type: "Burocracia excesiva",
    description: "Procesos innecesariamente complejos",
    color: "#F59E0B",
    svg: "/monsters/svg/la-hidra-burocratica.svg",
  },
  {
    id: "el-coloso",
    name: "El Coloso Blindado",
    type: "Falta de transparencia",
    description: "Entidades que ocultan información",
    color: "#6B7280",
    svg: "/monsters/svg/el-coloso.svg",
  },
  {
    id: "la-sanguijuela",
    name: "La Sanguijuela",
    type: "Desvíos de recursos",
    description: "Recursos que no llegan a su destino",
    color: "#EF4444",
    svg: "/monsters/svg/la-sanguijuela.svg",
  },
  {
    id: "la-red",
    name: "La Red",
    type: "Corrupción sistémica",
    description: "Redes de corrupción interconectadas",
    color: "#EF4444",
    svg: "/monsters/svg/la-red.svg",
  },
  {
    id: "el-escondido",
    name: "El Escondido",
    type: "Opacidad",
    description: "Información oculta o difícil de acceder",
    color: "#6B7280",
    svg: "/monsters/svg/el-escondido.svg",
  },
];

export function Monsters() {
  return (
    <section className="py-96 bg-white" id="monstruos">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-28">
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
                <div className="w-20 h-20 flex-shrink-0 rounded-[8px] bg-arpon-surface-2 p-1.5 flex items-center justify-center overflow-hidden">
                  <img
                    src={monster.svg}
                    alt={monster.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    style={{ filter: `drop-shadow(0 0 2px ${monster.color}40)` }}
                  />
                </div>

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
