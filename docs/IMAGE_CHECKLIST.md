# ARpón - Checklist de Optimización de Imágenes

## Pre-Desarrollo

### Setup Inicial
- [ ] Instalar dependencias: `npm install sharp glob`
- [ ] Crear estructura de carpetas
- [ ] Configurar scripts en package.json
- [ ] Definir calidad de compresión

### Estructura de Carpetas
```
src/assets/monsters/originals/    # Imágenes originales
public/monsters/webp/             # Formato principal
public/monsters/avif/             # Formato futuro
public/monsters/png/              # Fallback
public/monsters/placeholder/      # Tiny versions
public/logo/                      # Logo SVG
public/icons/                     # Iconos SVG
```

---

## Pipeline de Procesamiento

### Scripts
- [ ] `scripts/convert-images.js` - Conversión automática
- [ ] `scripts/generate-placeholders.js` - Blurhash
- [ ] `scripts/optimize-images.js` - Optimización batch

### Configuración de Calidad
```javascript
webp: { quality: 80 }   // Balance calidad/tamaño
avif: { quality: 65 }   // Máxima compresión
png: { quality: 90 }    // Fallback sin pérdida
```

### Tamaños a Generar
- [ ] 64x64 (cards pequeñas)
- [ ] 128x128 (cards medianas)
- [ ] 256x256 (cards grandes)
- [ ] 512x512 (modales)
- [ ] 1024x1024 (hero, futuro)

---

## Monstruos - Imágenes Requeridas

### Victoriosos
- [ ] el-inflado.png
- [ ] la-hidra-burocratica.png
- [ ] el-coloso-blindado.png
- [ ] la-sanguijuela.png

### Asustados
- [ ] el-tembloroso.png
- [ ] la-serpiente-acorralada.png
- [ ] el-escondido.png
- [ ] el-paranoico.png

### Tristes
- [ ] el-derretido.png
- [ ] el-vacio.png
- [ ] la-ajena.png
- [ ] el-declinante.png

### Enfrentados
- [ ] impacto-directo.png
- [ ] atrapado.png
- [ ] perforado.png
- [ ] en-retirada.png

### Durmiendo/Inactivos
- [ ] el-dormilon.png
- [ ] la-roca.png
- [ ] el-letargico.png
- [ ] el-archivo.png

### Conspirando
- [ ] la-asamblea.png
- [ ] el-plan.png
- [ ] el-pacto.png
- [ ] la-red.png

---

## Elementos Vectoriales (SVG)

### Logo
- [ ] arpon-logo.svg (principal)
- [ ] arpon-logo-white.svg (fondo oscuro)
- [ ] arpon-icon.svg (solo símbolo)
- [ ] arpon-icon-animated.svg (animado)

### Iconos UI
- [ ] search.svg (lupa)
- [ ] document.svg (documento)
- [ ] building.svg (edificio)
- [ ] shield.svg (escudo)
- [ ] chart.svg (gráfico)
- [ ] filter.svg (filtros)
- [ ] calendar.svg (calendario)
- [ ] download.svg (descarga)
- [ ] eye.svg (ojo)
- [ ] more.svg (puntos)

---

## Componentes React

### MonsterImage
- [ ] Componente creado
- [ ] Lazy loading implementado
- [ ] Blurhash placeholders
- [ ] Tooltip informativo
- [ ] Responsive images (srcset)
- [ ] Estilos CSS

### HeroImage
- [ ] Progressive loading
- [ ] Responsive srcset
- [ ] Placeholder sólido
- [ ] Animación de carga

---

## Pruebas de Rendimiento

### Budget de Imágenes
| Página | Budget | Status |
|--------|--------|--------|
| Landing | 300KB | [ ] |
| Dashboard | 500KB | [ ] |
| Detalle contrato | 200KB | [ ] |
| Total sitio | 1MB | [ ] |

### Core Web Vitals
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Lighthouse > 90

### Herramientas de Verificación
- [ ] Lighthouse audit
- [ ] WebPageTest
- [ ] Chrome DevTools Network
- [ ] Bundle Analyzer

---

## CDN y Cache

### Headers de Cache
```nginx
location ~* \.(webp|avif|png|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Implementación
- [ ] Vercel headers configurados
- [ ] Cloudflare cache rules
- [ ] Cache invalidation strategy

---

## Documentación

### Archivos
- [ ] IMAGE_OPTIMIZATION.md
- [ ] MONSTER_IMAGE_USAGE.md
- [ ] IMAGE_CHECKLIST.md (este archivo)

### Actualizaciones
- [ ] README.md actualizado
- [ ] Ejemplos de código
- [ ] Guías de troubleshooting

---

## Sign Off

### Diseño
- [ ] Aprobado por: _______________
- [ ] Fecha: _______________

### Desarrollo
- [ ] Aprobado por: _______________
- [ ] Fecha: _______________

### Performance
- [ ] Aprobado por: _______________
- [ ] Fecha: _______________

---

*Checklist de optimización de imágenes. Mantener actualizado conforme se procesen nuevas imágenes.*
