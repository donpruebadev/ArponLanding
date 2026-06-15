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
    <header className="fixed top-0 left-0 right-0 z-50 bg-arpon-deep/95 backdrop-blur-sm border-b border-arpon-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-arpon-teal rounded flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 text-white"
              aria-hidden="true"
            >
              <path
                d="M12 2L12 18M12 18L6 12M12 18L18 12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="20" r="2" fill="currentColor" />
            </svg>
          </div>
          <span
            className="text-xl tracking-tight text-arpon-text-primary"
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
            className="px-5 py-2 bg-arpon-teal text-arpon-deep text-sm font-semibold rounded-[6px] hover:bg-arpon-teal-dim transition-colors duration-150"
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
            className="lg:hidden bg-arpon-surface-0 border-b border-arpon-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base text-arpon-text-secondary hover:text-arpon-text-primary transition-colors py-2"
                  style={{ fontFamily: "var(--font-space)", fontWeight: 500 }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-5 py-3 bg-arpon-teal text-arpon-deep text-sm font-semibold rounded-[6px] text-center hover:bg-arpon-teal-dim transition-colors"
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
