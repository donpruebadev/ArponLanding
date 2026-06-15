# ARpón - Especificaciones de Diseño

## Variables de Diseño

### Colores

```css
:root {
  /* Paleta Principal */
  --color-primary: #0D1B2A;      /* Azul Profundo */
  --color-secondary: #1B263B;    /* Gris Azulado */
  --color-accent: #2EC4B6;       /* Turquesa/Teal */
  --color-surface: #E6EBEB;      /* Gris Claro */
  --color-background: #F8F9FA;   /* Blanco Off */
  
  /* Colores de Estado */
  --color-success: #10B981;      /* Verde */
  --color-warning: #F59E0B;      /* Amarillo */
  --color-error: #EF4444;        /* Rojo */
  --color-info: #3B82F6;         /* Azul */
  
  /* Opacidades */
  --opacity-accent-20: rgba(46, 196, 182, 0.2);
  --opacity-primary-50: rgba(13, 27, 42, 0.5);
  
  /* Sombras */
  --shadow-sm: 0 1px 2px rgba(13, 27, 42, 0.05);
  --shadow-md: 0 4px 6px rgba(13, 27, 42, 0.1);
  --shadow-lg: 0 10px 15px rgba(13, 27, 42, 0.15);
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
}
```

### Tipografía

Ver [FONTS.md](./FONTS.md) para documentación completa de importación.

```css
:root {
  /* Fuentes */
  --font-logo: 'Akrobat', sans-serif;           /* Logo - Extrabold */
  --font-display: 'Space Grotesk', sans-serif;  /* Títulos, navegación */
  --font-body: 'Inter', sans-serif;              /* Cuerpo de texto */
  
  /* Tamaños */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  
  /* Pesos */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### Espaciado

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
}
```

---

## Componentes

### Botón Primario

```css
.btn-primary {
  background-color: var(--color-accent);
  color: var(--color-primary);
  font-family: var(--font-display);
  font-weight: var(--font-semibold);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: #25a99d;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-primary:active {
  transform: translateY(0);
}
```

### Botón Secundario

```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-secondary);
  font-family: var(--font-display);
  font-weight: var(--font-semibold);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  border: 2px solid var(--color-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: var(--color-secondary);
  color: var(--color-background);
}
```

### Tarjeta de Contrato

```css
.card-contract {
  background-color: var(--color-background);
  border: 1px solid var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
}

.card-contract:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--color-accent);
}

.card-contract__header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.card-contract__icon {
  width: 48px;
  height: 48px;
  color: var(--color-accent);
}

.card-contract__title {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-primary);
}

.card-contract__subtitle {
  font-size: var(--text-sm);
  color: var(--color-secondary);
}

.card-contract__badge {
  display: inline-block;
  background-color: var(--opacity-accent-20);
  color: var(--color-accent);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
}
```

### Tarjeta de Hallazgo

```css
.card-finding {
  background-color: var(--color-background);
  border: 1px solid var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  border-left: 4px solid var(--color-accent);
}

.card-finding--critical {
  border-left-color: var(--color-error);
}

.card-finding--warning {
  border-left-color: var(--color-warning);
}

.card-finding--info {
  border-left-color: var(--color-info);
}

.card-finding__monster {
  width: 64px;
  height: 64px;
  margin-bottom: var(--space-4);
}

.card-finding__title {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.card-finding__meta {
  display: flex;
  gap: var(--space-4);
  font-size: var(--text-sm);
  color: var(--color-secondary);
}
```

### Barra de Búsqueda

```css
.search-bar {
  display: flex;
  align-items: center;
  background-color: var(--color-background);
  border: 1px solid var(--color-surface);
  border-radius: var(--radius-full);
  padding: var(--space-3) var(--space-6);
  transition: all 0.2s ease;
}

.search-bar:focus-within {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px var(--opacity-accent-20);
}

.search-bar__icon {
  width: 20px;
  height: 20px;
  color: var(--color-secondary);
  margin-right: var(--space-3);
}

.search-bar__input {
  flex: 1;
  border: none;
  background: transparent;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-primary);
  outline: none;
}

.search-bar__input::placeholder {
  color: var(--opacity-primary-50);
}
```

### Badge de Estado

```css
.badge {
  display: inline-flex;
  align-items: center;
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
}

.badge--success {
  background-color: rgba(16, 185, 129, 0.2);
  color: var(--color-success);
}

.badge--warning {
  background-color: rgba(245, 158, 11, 0.2);
  color: var(--color-warning);
}

.badge--error {
  background-color: rgba(239, 68, 68, 0.2);
  color: var(--color-error);
}

.badge--info {
  background-color: rgba(59, 130, 246, 0.2);
  color: var(--color-info);
}

.badge--accent {
  background-color: var(--opacity-accent-20);
  color: var(--color-accent);
}
```

### Indicador de Métricas

```css
.metric-card {
  background-color: var(--color-background);
  border: 1px solid var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.metric-card__label {
  font-size: var(--text-sm);
  color: var(--color-secondary);
  margin-bottom: var(--space-2);
}

.metric-card__value {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--color-primary);
}

.metric-card__trend {
  display: inline-flex;
  align-items: center;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  margin-top: var(--space-2);
}

.metric-card__trend--positive {
  color: var(--color-success);
}

.metric-card__trend--negative {
  color: var(--color-error);
}
```

---

## Layout

### Header

```css
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-8);
  background-color: var(--color-primary);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--color-background);
  text-decoration: none;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.header__link {
  color: var(--color-background);
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: var(--font-medium);
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.header__link:hover,
.header__link--active {
  opacity: 1;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

@media (max-width: 1024px) {
  .header__nav {
    display: none;
  }
  
  .header__menu-toggle {
    display: block;
  }
}
```

### Contenedor Principal

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

@media (min-width: 640px) {
  .container {
    padding: 0 var(--space-8);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-12);
  }
}
```

### Grid de Tarjetas

```css
.card-grid {
  display: grid;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## Animaciones

### Transiciones Básicas

```css
.transition-fast {
  transition: all 0.15s ease;
}

.transition-normal {
  transition: all 0.2s ease;
}

.transition-slow {
  transition: all 0.3s ease;
}
```

### Animaciones de Entrada

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease forwards;
}

.animate-slideUp {
  animation: slideUp 0.4s ease forwards;
}

.animate-slideInRight {
  animation: slideInRight 0.4s ease forwards;
}
```

### Animación de Monstruo

```css
@keyframes monsterFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes monsterWiggle {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-2deg);
  }
  75% {
    transform: rotate(2deg);
  }
}

.monster-float {
  animation: monsterFloat 3s ease-in-out infinite;
}

.monster-wiggle {
  animation: monsterWiggle 0.5s ease-in-out;
}
```

---

## Iconos

### Tamaños

```css
.icon-sm {
  width: 16px;
  height: 16px;
}

.icon-md {
  width: 20px;
  height: 20px;
}

.icon-lg {
  width: 24px;
  height: 24px;
}

.icon-xl {
  width: 32px;
  height: 32px;
}

.icon-2xl {
  width: 48px;
  height: 48px;
}
```

### Colores

```css
.icon-primary {
  color: var(--color-primary);
}

.icon-secondary {
  color: var(--color-secondary);
}

.icon-accent {
  color: var(--color-accent);
}

.icon-muted {
  color: var(--opacity-primary-50);
}
```

---

## Breakpoints

```css
/* Mobile: 0 - 639px */
/* Tablet: 640px - 1023px */
/* Desktop: 1024px - 1279px */
/* Large: 1280px+ */

@media (max-width: 639px) {
  /* Mobile styles */
}

@media (min-width: 640px) and (max-width: 1023px) {
  /* Tablet styles */
}

@media (min-width: 1024px) and (max-width: 1279px) {
  /* Desktop styles */
}

@media (min-width: 1280px) {
  /* Large screen styles */
}
```

---

## Accesibilidad

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Screen Reader Only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## Utilidades de Texto

```css
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-accent { color: var(--color-accent); }
.text-background { color: var(--color-background); }

.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-accent { background-color: var(--color-accent); }
.bg-surface { background-color: var(--color-surface); }
.bg-background { background-color: var(--color-background); }

.font-logo { font-family: var(--font-logo); font-weight: 800; }
.font-display { font-family: var(--font-display); }
.font-body { font-family: var(--font-body); }

.font-normal { font-weight: var(--font-normal); }
.font-medium { font-weight: var(--font-medium); }
.font-semibold { font-weight: var(--font-semibold); }
.font-bold { font-weight: var(--font-bold); }

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
```

---

## Especificaciones de Imágenes

### Estrategia de Formatos

| Elemento | Formato | Razón | KB estimado |
|----------|---------|-------|-------------|
| Logo | SVG | Vectorial, escalable | ~2-5KB |
| Iconos UI | SVG inline | Mínimo peso, animable | ~0.5-1KB |
| Monstruos | WebP + PNG fallback | Mejor compresión + transparencia | ~3-60KB |
| Hero image | WebP responsive | Máxima compresión | ~50-200KB |
| Placeholders | WebP tiny | Blurhash/preview | ~2-3KB |

### Tamaños de Monstruos por Contexto

| Contexto | Tamaño | Formato | KB estimado |
|----------|--------|---------|-------------|
| Card pequeña (dashboard) | 64x64 | WebP | ~3-5KB |
| Card mediana (listado) | 128x128 | WebP | ~8-12KB |
| Card grande (detalle) | 256x256 | WebP | ~20-30KB |
| Modal/tooltip | 512x512 | WebP | ~40-60KB |
| Hero section | 1920x1080 | WebP | ~150-200KB |

### Lazy Loading

```html
<!-- Below the fold -->
<img 
  src="monster.webp" 
  alt="El Inflado - Representa sobreprecios en contratos"
  loading="lazy"
  decoding="async"
  width="128"
  height="128"
/>

<!-- Above the fold (hero) -->
<img 
  src="hero.webp" 
  alt="Arpón cazando monstruos"
  loading="eager"
  decoding="async"
/>
```

### BlurHash Placeholders

```jsx
import { Blurhash } from 'react-blurhash';

<Blurhash
  hash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
  width={128}
  height={128}
  resolutionX={32}
  resolutionY={32}
  punch={1}
/>
```

### Responsive Images (srcset)

```html
<picture>
  <source
    type="image/webp"
    media="(min-width: 1024px)"
    srcSet="/monsters/webp/256/monster.webp"
  />
  <source
    type="image/webp"
    media="(min-width: 640px)"
    srcSet="/monsters/webp/128/monster.webp"
  />
  <source
    type="image/webp"
    srcSet="/monsters/webp/64/monster.webp"
  />
  <img
    src="/monsters/png/128/monster.png"
    alt="Monster name"
    width="128"
    height="128"
  />
</picture>
```

---

## Tema Oscuro (Futuro)

```css
[data-theme="dark"] {
  --color-primary: #F8F9FA;
  --color-secondary: #E6EBEB;
  --color-accent: #2EC4B6;
  --color-surface: #1B263B;
  --color-background: #0D1B2A;
}
```

---

*Documento de referencia para desarrollo. Mantener actualizado conforme se implementen componentes.*
