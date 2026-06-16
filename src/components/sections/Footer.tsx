export function Footer() {
  return (
    <footer className="py-48 bg-arpon-surface-3 border-t border-arpon-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#inicio" className="flex items-center gap-2">
              <img
                src="/logo/arpon-logo.webp"
                alt="ARpón"
                className="h-9 w-auto object-contain"
              />
              <span
                className="text-xl tracking-tight text-arpon-text-primary"
                style={{ fontFamily: "var(--font-akrobat)", fontWeight: 800 }}
              >
                ARPÓN
              </span>
            </a>
            <p className="mt-5 text-sm text-arpon-text-secondary leading-relaxed">
              Detectamos lo que otros no ven. Análisis de contratación
              gubernamental con inteligencia artificial.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4
              className="text-sm text-arpon-text-primary mb-5"
              style={{ fontFamily: "var(--font-space)", fontWeight: 600 }}
            >
              Plataforma
            </h4>
            <ul className="space-y-3">
              {["Contratos", "Hallazgos", "Entidades", "API"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-arpon-text-secondary hover:text-arpon-text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-sm text-arpon-text-primary mb-5"
              style={{ fontFamily: "var(--font-space)", fontWeight: 600 }}
            >
              Empresa
            </h4>
            <ul className="space-y-3">
              {["Nosotros", "Equipo", "Blog", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-arpon-text-secondary hover:text-arpon-text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-sm text-arpon-text-primary mb-5"
              style={{ fontFamily: "var(--font-space)", fontWeight: 600 }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {["Privacidad", "Términos", "Cookies"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-arpon-text-secondary hover:text-arpon-text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-10 border-t border-arpon-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-xs text-arpon-text-muted"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © 2024 ARpón. Todos los derechos reservados.
          </p>
          <p
            className="text-xs text-arpon-text-muted"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Hecho con transparencia.
          </p>
        </div>
      </div>
    </footer>
  );
}
