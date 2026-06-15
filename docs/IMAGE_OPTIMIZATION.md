# ARpón - Estrategia de Optimización de Imágenes

## Análisis del Problema

### Tipo de Imágenes del Proyecto

| Tipo | Ejemplo | Cantidad | Complejidad |
|------|---------|----------|-------------|
| **Monstruos individuales** | El Inflado, La Hidra | 20+ | Media |
| **Monstruos con acciones** | Enfrentados, Conspirando | 8+ | Alta |
| **Ilustración hero** | Barco cazando monstruo | 1 | Muy Alta |
| **Iconos UI** | Lupa, documento, etc. | 10+ | Baja |
| **Logo** | Símbolo arpón | 1 | Baja |

### Características Clave

- **Estilo artístico**: Ilustraciones con texturas y detalles finos
- **Paleta limitada**: Predominantemente oscuros (#0D1B2A, #1B263B) con acentos turquesa
- **Fondos**: Transparentes o claros (#F8F9FA)
- **Uso**: Cards, dashboard, landing, storytelling

---

## Estrategia por Tipo de Imagen

### 1. Logo y Elementos Vectoriales

**Formato recomendado**: SVG

```
/logo
  ├── arpon-logo.svg          (Logo principal)
  ├── arpon-logo-white.svg    (Logo para fondos oscuros)
  ├── arpon-icon.svg          (Solo símbolo)
  └── arpon-icon-animated.svg (Versión animada)
```

**Ventajas**:
- Escalable sin pérdida de calidad
- Tamaño mínimo (~2-5KB)
- Animable con CSS/SVG animations
- Perfecto para retina/HiDPI

**Implementación**:
```jsx
// components/Logo.tsx
export const Logo = ({ variant = 'dark', animated = false }) => {
  const src = animated 
    ? '/logo/arpon-icon-animated.svg'
    : variant === 'dark' 
      ? '/logo/arpon-logo.svg'
      : '/logo/arpon-logo-white.svg';
  
  return <img src={src} alt="Arpón" className="logo" />;
};
```

---

### 2. Monstruos Individuales (Cards)

**Formato recomendado**: WebP con fallback PNG

**Estrategia de múltiples resoluciones**:

```
/monsters
  ├── /webp
  │   ├── /sm (64x64px)      ~3-5KB cada uno
  │   ├── /md (128x128px)    ~8-12KB cada uno
  │   ├── /lg (256x256px)    ~20-30KB cada uno
  │   └── /xl (512x512px)    ~40-60KB cada uno
  ├── /png (fallback)
  │   └── ... (mismas resoluciones)
  └── /placeholder
      └── ... (blurhash/tiny placeholders)
```

**Tabla de tamaños por uso**:

| Contexto | Tamaño | Formato | Peso estimado |
|----------|--------|---------|---------------|
| Card pequeña (dashboard) | 64x64 | WebP | ~3-5KB |
| Card mediana (listado) | 128x128 | WebP | ~8-12KB |
| Card grande (detalle) | 256x256 | WebP | ~20-30KB |
| Modal/tooltip | 512x512 | WebP | ~40-60KB |
| Hero section | 1024x1024 | WebP | ~80-120KB |

**Componente React optimizado**:

```jsx
// components/MonsterImage.tsx
export const MonsterImage = ({ 
  monster, 
  size = 'md',
  priority = false 
}) => {
  const sizes = {
    sm: 64,
    md: 128,
    lg: 256,
    xl: 512
  };
  
  const sizePx = sizes[size];
  
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`/monsters/webp/${size}/${monster}.webp`}
      />
      <img
        src={`/monsters/png/${size}/${monster}.png`}
        alt={`${monster} - Monstruo de irregularidad`}
        width={sizePx}
        height={sizePx}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="monster-image"
      />
    </picture>
  );
};
```

---

### 3. Ilustración Hero (Hero Section)

**Formato recomendado**: WebP con srcset responsive

**Estrategia de carga**:

```
/hero
  ├── hero-1920.webp    ~150-200KB (desktop)
  ├── hero-1280.webp    ~100-140KB (tablet)
  ├── hero-640.webp     ~50-70KB  (mobile)
  ├── hero-blur.webp    ~2-3KB    (placeholder)
  └── hero-placeholder.svg (fallback sólido)
```

**Implementación con Progressive Loading**:

```jsx
// components/HeroImage.tsx
export const HeroImage = () => {
  return (
    <div className="hero-container">
      {/* Placeholder sólido */}
      <div 
        className="hero-placeholder"
        style={{ backgroundColor: '#0D1B2A' }}
      />
      
      {/* Imagen real con lazy loading */}
      <picture>
        <source
          type="image/webp"
          media="(min-width: 1024px)"
          srcSet="/hero/hero-1920.webp"
        />
        <source
          type="image/webp"
          media="(min-width: 640px)"
          srcSet="/hero/hero-1280.webp"
        />
        <source
          type="image/webp"
          srcSet="/hero/hero-640.webp"
        />
        <img
          src="/hero/hero-1920.webp"
          alt="Arpón cazando monstruos de irregularidades"
          className="hero-image"
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  );
};
```

**CSS para Progressive Loading**:

```css
.hero-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.hero-placeholder {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-image {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.hero-image.loaded {
  opacity: 1;
}
```

---

### 4. Iconos UI

**Formato recomendado**: SVG inline o sprite

**Opción A: SVG Inline (recomendada)**:

```jsx
// components/icons/SearchIcon.tsx
export const SearchIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);
```

**Opción B: SVG Sprite**:

```html
<!-- In layout.tsx o _app.tsx -->
<svg style="display: none;">
  <symbol id="icon-search" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </symbol>
  <!-- Más iconos... -->
</svg>

<!-- Uso -->
<svg width="20" height="20">
  <use href="#icon-search" />
</svg>
```

---

## Pipeline de Procesamiento

### Script de Conversión Automatizado

```json
// package.json
{
  "scripts": {
    "images:convert": "node scripts/convert-images.js",
    "images:optimize": "sharp-cli 'src/images/**/*.{png,jpg}' --format webp --quality 80 --output public/images",
    "images:placeholders": "node scripts/generate-placeholders.js"
  }
}
```

### Script de Conversión (Node.js + Sharp)

```javascript
// scripts/convert-images.js
const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const SIZES = [64, 128, 256, 512, 1024];
const QUALITY_WEBP = 80;
const QUALITY_AVIF = 65;

async function processImage(inputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const ext = path.extname(inputPath);
  
  console.log(`Processing: ${filename}${ext}`);
  
  // Crear directorios
  for (const size of SIZES) {
    fs.mkdirSync(`public/monsters/webp/${size}`, { recursive: true });
    fs.mkdirSync(`public/monsters/avif/${size}`, { recursive: true });
    fs.mkdirSync(`public/monsters/png/${size}`, { recursive: true });
    fs.mkdirSync(`public/monsters/placeholder`, { recursive: true });
  }
  
  // Generar versiones para cada tamaño
  for (const size of SIZES) {
    const image = sharp(inputPath);
    
    // WebP
    await image
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: QUALITY_WEBP })
      .toFile(`public/monsters/webp/${size}/${filename}.webp`);
    
    // AVIF (futuro)
    await image
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .avif({ quality: QUALITY_AVIF })
      .toFile(`public/monsters/avif/${size}/${filename}.avif`);
    
    // PNG fallback
    await image
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 90 })
      .toFile(`public/monsters/png/${size}/${filename}.png`);
  }
  
  // Generar placeholder (tiny + blurhash)
  await sharp(inputPath)
    .resize(8, 8, { fit: 'cover' })
    .webp({ quality: 20 })
    .toFile(`public/monsters/placeholder/${filename}-tiny.webp`);
  
  console.log(`✓ ${filename} processed`);
}

// Ejecutar
const images = glob.sync('src/assets/monsters/**/*.{png,jpg,webp}');
Promise.all(images.map(processImage));
```

---

## Técnicas de Carga Optimizada

### 1. Lazy Loading Nativo

```html
<!-- Imágenes below the fold -->
<img 
  src="monster.webp" 
  loading="lazy" 
  decoding="async"
  alt="..."
/>

<!-- Imágenes above the fold (hero) -->
<img 
  src="hero.webp" 
  loading="eager" 
  decoding="async"
  alt="..."
/>
```

### 2. BlurHash Placeholders

```jsx
// Instalar: npm install blurhash blurhash-react
import { Blurhash } from 'react-blurhash';

export const MonsterCard = ({ monster }) => (
  <div className="monster-card">
    {/* Placeholder blurhash */}
    <Blurhash
      hash={monster.blurhash}
      width={128}
      height={128}
      resolutionX={32}
      resolutionY={32}
      punch={1}
      className="monster-placeholder"
    />
    
    {/* Imagen real */}
    <img
      src={`/monsters/webp/128/${monster.id}.webp`}
      alt={monster.name}
      className="monster-image"
      loading="lazy"
      onLoad={(e) => {
        e.target.classList.add('loaded');
      }}
    />
  </div>
);
```

```css
.monster-card {
  position: relative;
}

.monster-placeholder {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.monster-image {
  position: relative;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.monster-image.loaded {
  opacity: 1;
}
```

### 3. Intersection Observer (Progressive)

```jsx
// hooks/useLazyImage.ts
import { useEffect, useRef, useState } from 'react';

export const useLazyImage = (src, options = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return { imgRef, isLoaded, isInView };
};

// Uso
export const LazyMonsterImage = ({ src, alt }) => {
  const { imgRef, isLoaded, isInView } = useLazyImage(src);
  
  return (
    <div ref={imgRef} className="monster-container">
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`monster-image ${isLoaded ? 'loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};
```

---

## Optimización por Contexto

### Landing Page

| Elemento | Estrategia | Prioridad |
|----------|------------|-----------|
| Hero image | Eager + srcset responsive | Alta |
| Monstruos storytelling | Lazy + blurhash | Media |
| Iconos | SVG inline | Alta |
| Logo | SVG estático | Alta |

### Dashboard

| Elemento | Estrategia | Prioridad |
|----------|------------|-----------|
| Avatar de entidad | Lazy + placeholder | Baja |
| Monstruos en cards | Lazy + blurhash | Media |
| Gráficos | No imágenes | - |
| Iconos | SVG inline | Alta |

### Detalle de Contrato

| Elemento | Estrategia | Prioridad |
|----------|------------|-----------|
| Hallazgos | Lazy + blurhash | Media |
| Monstruos asociados | Lazy + placeholder | Baja |
| Documentos | No imágenes | - |

---

## CDN y Cache Strategy

### Headers de Cache

```nginx
# Para imágenes estáticas (monstruos, hero)
location ~* \.(webp|avif|png|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    add_header Vary "Accept";
}

# Para placeholders (cambian poco)
location ~* /placeholder/ {
    expires 30d;
    add_header Cache-Control "public";
}
```

### CDN Configuration (Vercel/Cloudflare)

```json
// vercel.json
{
  "headers": [
    {
      "source": "/monsters/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## Métricas de Rendimiento

### Objetivos

| Métrica | Objetivo | Cómo medir |
|---------|----------|------------|
| Total image weight (landing) | < 300KB | Lighthouse |
| Total image weight (dashboard) | < 500KB | Lighthouse |
| Largest Contentful Paint | < 2.5s | Core Web Vitals |
| Cumulative Layout Shift | < 0.1 | Core Web Vitals |
| Image decode time | < 100ms | Performance API |

### Budget por Página

| Página | Budget imágenes | Budget total |
|--------|-----------------|--------------|
| Landing | 300KB | 500KB |
| Dashboard | 500KB | 800KB |
| Detalle contrato | 200KB | 400KB |
| Hallazgos | 400KB | 600KB |

---

## Herramientas Recomendadas

### Procesamiento

- **Sharp**: Conversión y resize (Node.js)
- **Squoosh**: Compresión online (Google)
- **ImageOptim**: Compresión batch (macOS)

### Generación de Placeholders

- **blurhash**: Hash de blur (recomendado)
- **plaiceholder**: Generador de placeholders
- **next/image**: Placeholder automático (Next.js)

### Monitoreo

- **Lighthouse**: Performance scoring
- **WebPageTest**: Análisis detallado
- **Bundle Analyzer**: Tamaño de bundles

---

## Checklist de Implementación

### Pre-Desarrollo
- [ ] Definir pipeline de procesamiento
- [ ] Instalar Sharp y dependencias
- [ ] Crear estructura de carpetas
- [ ] Generar placeholders blurhash

### Durante Desarrollo
- [ ] Implementar componente MonsterImage
- [ ] Implementar componente HeroImage
- [ ] Configurar lazy loading
- [ ] Integrar blurhash placeholders
- [ ] Testing de rendimiento

### Post-Desarrollo
- [ ] Auditar con Lighthouse
- [ ] Verificar Core Web Vitals
- [ ] Configurar CDN headers
- [ ] Monitorear en producción

---

## Resumen de Estrategia

```
┌─────────────────────────────────────────────────────────────┐
│                    ESTRATEGIA DE IMÁGENES                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. LOGO + ICONOS → SVG (vectorial, escalable, mínimo KB)  │
│                                                             │
│  2. MONSTROS → WebP multi-resolución + blurhash             │
│     - 64px (cards) → ~3-5KB                                │
│     - 128px (listados) → ~8-12KB                           │
│     - 256px (detalle) → ~20-30KB                           │
│     - 512px (modal) → ~40-60KB                             │
│                                                             │
│  3. HERO → WebP responsive + progressive loading            │
│     - 640px (mobile) → ~50-70KB                            │
│     - 1280px (tablet) → ~100-140KB                         │
│     - 1920px (desktop) → ~150-200KB                        │
│                                                             │
│  4. CARGA → Lazy loading nativo + Intersection Observer     │
│                                                             │
│  5. CDN → Cache 1 año + immutable para assets estáticos     │
│                                                             │
│  BUDGET TOTAL LANDING: < 300KB imágenes                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

*Documento de estrategia de optimización de imágenes. Mantener actualizado conforme se implementen nuevas imágenes.*
