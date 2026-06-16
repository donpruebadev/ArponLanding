"use client";

import { useState } from "react";
import { List, X, MagnifyingGlass } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Contratos", href: "#contratos" },
  { label: "Hallazgos", href: "#hallazgos" },
  { label: "Entidades", href: "#entidades" },
  { label: "Nosotros", href: "#nosotros" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-arpon-border">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 xl:px-28 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src="/logo/arpon-logo.webp"
            alt="ARpón"
            className="h-10 w-auto object-contain"
            loading="eager"
            decoding="sync"
          />
          <span
            className="text-[22px] tracking-[-0.02em] text-arpon-text-primary hidden sm:inline"
            style={{ fontFamily: "var(--font-akrobat)", fontWeight: 800 }}
          >
            ARPÓN
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-arpon-text-secondary hover:text-arpon-text-primary transition-colors duration-150"
              style={{ fontFamily: "var(--font-space)", fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            className="p-2 text-arpon-text-secondary hover:text-arpon-text-primary transition-colors"
            aria-label="Buscar"
          >
            <MagnifyingGlass size={20} weight="bold" />
          </button>
          <a
            href="#demo"
            className="px-5 py-2.5 bg-arpon-teal text-white text-sm font-semibold rounded-[6px] hover:bg-arpon-teal-dim transition-colors duration-150 shadow-[0_0_12px_rgba(46,196,182,0.2)]"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Solicitar demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-arpon-text-secondary hover:text-arpon-text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden bg-white border-b border-arpon-border overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base text-arpon-text-secondary hover:text-arpon-text-primary transition-colors py-2.5"
                  style={{ fontFamily: "var(--font-space)", fontWeight: 500 }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setIsOpen(false)}
                className="mt-3 px-5 py-3.5 bg-arpon-teal text-white text-sm font-semibold rounded-[6px] text-center hover:bg-arpon-teal-dim transition-colors"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Solicitar demo
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
