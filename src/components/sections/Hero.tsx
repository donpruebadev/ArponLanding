"use client";

import { motion } from "motion/react";
import { ArrowRight, Eye } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-arpon-deep"
    >
      {/* Background gradient mesh (subtle) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-arpon-teal/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-arpon-teal/[0.04] rounded-full blur-[100px]" />
      </div>

      {/* Grid lines (subtle, dark on light) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(13,27,42,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13,27,42,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="data-label inline-flex items-center gap-2 text-arpon-teal"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Eye size={14} weight="bold" />
                Análisis de contratación pública
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-arpon-text-primary"
              style={{
                fontFamily: "var(--font-space)",
                fontWeight: 700,
              }}
            >
              Cazamos lo que
              <br />
              otros no{" "}
              <span className="text-arpon-teal">ven.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-5 text-lg text-arpon-text-secondary leading-relaxed max-w-[50ch]"
            >
              Exploramos contratos públicos con inteligencia artificial para
              detectar irregularidades, opacidad y corrupción.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contratos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-arpon-teal text-white text-sm font-semibold rounded-[6px] hover:bg-arpon-teal-dim active:scale-[0.98] transition-all duration-150"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Explorar contratos
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#hallazgos"
                className="inline-flex items-center gap-2 px-6 py-3 text-arpon-text-secondary text-sm font-semibold rounded-[6px] border border-arpon-border hover:text-arpon-text-primary hover:border-arpon-text-muted active:scale-[0.98] transition-all duration-150"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Ver hallazgos
              </a>
            </motion.div>
          </div>

          {/* Right: Visual — Monster hunting scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden border border-arpon-border bg-arpon-surface-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <MonsterHuntingScene />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Monster Hunting Scene (SVG Illustration) ─── */
function MonsterHuntingScene() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      className="w-full h-full"
      aria-label="Arpón cazando monstruos de irregularidades en contratos públicos"
    >
      {/* Background */}
      <defs>
        <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8F9FA" />
          <stop offset="100%" stopColor="#E6EBEB" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#ocean)" />

      {/* Grid lines */}
      {[...Array(10)].map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 60}
          x2="800"
          y2={i * 60}
          stroke="rgba(13,27,42,0.06)"
          strokeWidth="1"
        />
      ))}
      {[...Array(13)].map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 60 + 20}
          y1="0"
          x2={i * 60 + 20}
          y2="600"
          stroke="rgba(13,27,42,0.06)"
          strokeWidth="1"
        />
      ))}

      {/* Ship hull */}
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M350 280 L450 280 L480 320 L320 320 Z"
          fill="#E6EBEB"
          stroke="#2EC4B6"
          strokeWidth="1.5"
        />
        {/* Mast */}
        <line
          x1="400"
          y1="280"
          x2="400"
          y2="180"
          stroke="#2EC4B6"
          strokeWidth="2"
        />
        {/* Sail */}
        <path
          d="M400 185 L440 220 L400 250"
          fill="none"
          stroke="#2EC4B6"
          strokeWidth="1.5"
          opacity="0.6"
        />
        {/* Arpoon */}
        <motion.line
          x1="400"
          y1="200"
          x2="520"
          y2="350"
          stroke="#2EC4B6"
          strokeWidth="2"
          strokeDasharray="8 4"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        {/* Arpoon tip */}
        <motion.path
          d="M520 350 L530 340 L525 355 Z"
          fill="#2EC4B6"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.g>

      {/* Monster 1: El Inflado (sobreprecios) */}
      <motion.g
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <circle cx="580" cy="380" r="40" fill="#F8F9FA" stroke="#EF4444" strokeWidth="1.5" />
        <circle cx="580" cy="380" r="28" fill="none" stroke="#EF4444" strokeWidth="0.5" opacity="0.4" />
        <circle cx="570" cy="370" r="4" fill="#EF4444" />
        <circle cx="590" cy="370" r="4" fill="#EF4444" />
        <text x="580" y="435" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="monospace" letterSpacing="0.1em">
          EL INFLADO
        </text>
      </motion.g>

      {/* Monster 2: La Hidra (burocracia) */}
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <path
          d="M200 400 Q220 360 240 400 Q260 360 280 400"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />
        <circle cx="220" cy="385" r="3" fill="#F59E0B" />
        <circle cx="260" cy="385" r="3" fill="#F59E0B" />
        <text x="240" y="435" textAnchor="middle" fill="#F59E0B" fontSize="10" fontFamily="monospace" letterSpacing="0.1em">
          LA HIDRA
        </text>
      </motion.g>

      {/* Monster 3: El Coloso (opacidad) */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <rect x="100" y="320" width="60" height="80" rx="4" fill="#F8F9FA" stroke="#6B7280" strokeWidth="1" />
        <line x1="110" y1="340" x2="150" y2="340" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
        <line x1="110" y1="360" x2="150" y2="360" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
        <line x1="110" y1="380" x2="140" y2="380" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
        <text x="130" y="435" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="monospace" letterSpacing="0.1em">
          EL COLOSO
        </text>
      </motion.g>

      {/* Monster 4: La Red (corrupción sistémica) */}
      <motion.g
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <circle cx="680" cy="280" r="20" fill="none" stroke="#EF4444" strokeWidth="1" opacity="0.5" />
        <circle cx="700" cy="300" r="15" fill="none" stroke="#EF4444" strokeWidth="1" opacity="0.4" />
        <circle cx="660" cy="300" r="18" fill="none" stroke="#EF4444" strokeWidth="1" opacity="0.45" />
        <line x1="680" y1="280" x2="700" y2="300" stroke="#EF4444" strokeWidth="0.5" opacity="0.3" />
        <line x1="680" y1="280" x2="660" y2="300" stroke="#EF4444" strokeWidth="0.5" opacity="0.3" />
        <line x1="660" y1="300" x2="700" y2="300" stroke="#EF4444" strokeWidth="0.5" opacity="0.3" />
        <text x="680" y="340" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="monospace" letterSpacing="0.1em">
          LA RED
        </text>
      </motion.g>

      {/* Status indicators */}
      <g opacity="0.7">
        <rect x="30" y="20" width="120" height="24" rx="4" fill="rgba(46,196,182,0.12)" stroke="rgba(46,196,182,0.25)" strokeWidth="1" />
        <text x="90" y="36" textAnchor="middle" fill="#249e93" fontSize="10" fontFamily="monospace">
          ESCANEANDO...
        </text>
      </g>

      {/* Crosshair on target */}
      <motion.g
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformOrigin: "580px 380px" }}
      >
        <line x1="555" y1="380" x2="565" y2="380" stroke="#2EC4B6" strokeWidth="1.5" />
        <line x1="595" y1="380" x2="605" y2="380" stroke="#2EC4B6" strokeWidth="1.5" />
        <line x1="580" y1="355" x2="580" y2="365" stroke="#2EC4B6" strokeWidth="1.5" />
        <line x1="580" y1="395" x2="580" y2="405" stroke="#2EC4B6" strokeWidth="1.5" />
      </motion.g>
    </svg>
  );
}
