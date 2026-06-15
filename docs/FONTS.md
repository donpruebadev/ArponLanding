# ARpón - Tipografías del Proyecto

## Paleta Tipográfica

| Fuente | Peso | Uso | Ejemplo |
|--------|------|-----|---------|
| **Akrobat** | 800 (Extrabold) | Logo, títulos principales | ARPÓN |
| **Space Grotesk** | 400-700 | Navegación, subtítulos | H2, H3, Nav |
| **Inter** | 400-600 | Cuerpo de texto, datos | Párrafos, datos |

---

## Importación

### Opción 1: Google Fonts (Recomendada para desarrollo)

```html
<!-- En layout.tsx o _app.tsx -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Akrobat:wght@800&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Opción 2: Next.js Font Optimization

```typescript
// app/layout.tsx
import { Akrobat, Inter, Space_Grotesk } from 'next/font/google';

const akrobat = Akrobat({
  weight: '800',
  subsets: ['latin'],
  variable: '--font-logo'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display'
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${akrobat.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### Opción 3: Self-Hosted (Producción)

```bash
# Descargar fuentes de Google Fonts
# https://gwfh.mranftl.com/fonts
# Seleccionar: Akrobat (800), Inter (400-600), Space Grotesk (400-700)
```

```css
/* En styles/fonts.css */
@font-face {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('/fonts/akrobat-extrabold.woff2') format('woff2'),
       url('/fonts/akrobat-extrabold.woff') format('woff');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/inter-regular.woff2') format('woff2'),
       url('/fonts/inter-regular.woff') format('woff');
}

/* ... más pesos ... */
```

---

## Variables CSS

```css
:root {
  /* Fuentes */
  --font-logo: 'Akrobat', sans-serif;           /* Logo - Extrabold */
  --font-display: 'Space Grotesk', sans-serif;  /* Títulos, navegación */
  --font-body: 'Inter', sans-serif;              /* Cuerpo de texto */
  
  /* Pesos */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;  /* Solo para Akrobat */
}
```

---

## Uso en Componentes

### Logo (Akrobat Extrabold)

```css
.logo-text {
  font-family: var(--font-logo);
  font-weight: 800;
  letter-spacing: 0.05em;
}
```

```jsx
<span className="logo-text">ARPÓN</span>
```

### Títulos (Space Grotesk)

```css
h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 600;
}
```

### Cuerpo (Inter)

```css
body, p, span {
  font-family: var(--font-body);
  font-weight: 400;
}
```

---

## Ejemplos Visuales

### Logo
```
┌─────────────────────────────────────┐
│  ⚓ ARPÓN                           │  ← Akrobat Extrabold
│  Detectamos lo que otros no ven.    │  ← Inter
└─────────────────────────────────────┘
```

### Títulos
```
┌─────────────────────────────────────┐
│  Cazamos anomalías                  │  ← Space Grotesk
│  en contratación gubernamental      │  ← Space Grotesk
│                                     │
│  Exploramos contratos públicos      │  ← Inter
│  para detectar irregularidades.     │  ← Inter
└─────────────────────────────────────┘
```

---

## Compatibilidad

| Navegador | Akrobat | Space Grotesk | Inter |
|-----------|---------|---------------|-------|
| Chrome | ✅ | ✅ | ✅ |
| Firefox | ✅ | ✅ | ✅ |
| Safari | ✅ | ✅ | ✅ |
| Edge | ✅ | ✅ | ✅ |
| iOS Safari | ✅ | ✅ | ✅ |
| Android Chrome | ✅ | ✅ | ✅ |

---

## Rendimiento

### Optimización

- **font-display: swap**: Muestra fallback mientras carga
- **Preconnect**: Conecta con Google Fonts antes
- **Subset: latin**: Solo caracteres necesarios
- **Self-hosted**: Para producción (mejor rendimiento)

### Métricas

| Métrica | Objetivo |
|---------|----------|
| FOUT | Mínimo con swap |
| FOIT | 0ms (con swap) |
| Tamaño total | < 100KB |

---

## Checklist

### Pre-Desarrollo
- [ ] Akrobat Extrabold (800) importada
- [ ] Space Grotesk (400-700) importada
- [ ] Inter (400-600) importada
- [ ] Variables CSS configuradas

### Durante Desarrollo
- [ ] Logo usa Akrobat Extrabold
- [ ] Títulos usan Space Grotesk
- [ ] Cuerpo usa Inter
- [ ] Fallbacks configurados

### Producción
- [ ] Fuentes self-hosted
- [ ] WOFF2 format
- [ ] font-display: swap
- [ ] Preconnect configurado

---

*Documento de tipografías. Mantener actualizado conforme se añadan nuevas fuentes.*
