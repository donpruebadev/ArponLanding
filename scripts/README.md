# ARpón - Scripts de Procesamiento de Imágenes

## Instalación

```bash
# Instalar dependencias
npm install sharp glob
```

## Scripts Disponibles

### 1. convert-images.js

Convierte imágenes originales a múltiples formatos y tamaños.

```bash
# Ejecutar conversión
node scripts/convert-images.js
```

**Estructura de entrada:**
```
src/assets/monsters/originals/
├── el-inflado.png
├── la-hidra-burocratica.png
├── el-coloso-blindado.png
└── ...
```

**Salida generada:**
```
public/monsters/
├── webp/
│   ├── 64/      # 3-5KB cada uno
│   ├── 128/     # 8-12KB cada uno
│   ├── 256/     # 20-30KB cada uno
│   └── 512/     # 40-60KB cada uno
├── avif/        # Futuro
├── png/         # Fallback
└── placeholder/ # Tiny versions
```

### 2. generate-placeholders.js

Genera placeholders blurhash para lazy loading.

```bash
# Generar placeholders
node scripts/generate-placeholders.js
```

### 3. optimize-images.js

Optimiza imágenes existentes sin cambiar estructura.

```bash
# Optimizar todas las imágenes
node scripts/optimize-images.js

# Optimizar solo WebP
node scripts/optimize-images.js --format webp
```

## Configuración

### Calidad de Compresión

```javascript
// En convert-images.js
const CONFIG = {
  formats: {
    webp: { quality: 80 },    // 80% = buena calidad/tamaño
    avif: { quality: 65 },    // 65% = máxima compresión
    png: { quality: 90 }      // 90% = fallback sin pérdida
  }
};
```

### Tamaños

```javascript
const CONFIG = {
  sizes: [64, 128, 256, 512, 1024]  // Píxeles
};
```

##flujo de Trabajo Recomendado

### 1. Agregar nuevos monstruos

```bash
# 1. Copiar imagen original
cp nueva-imagen.png src/assets/monsters/originals/

# 2. Ejecutar conversión
node scripts/convert-images.js

# 3. Verificar resultados
ls -la public/monsters/webp/128/
```

### 2. Actualizar imagen existente

```bash
# 1. Reemplazar imagen original
cp nueva-version.png src/assets/monsters/originals/el-inflado.png

# 2. Ejecutar conversión
node scripts/convert-images.js

# 3. Limpiar cache del CDN (si aplica)
```

### 3. Optimizar para producción

```bash
# 1. Ejecutar optimización completa
node scripts/convert-images.js

# 2. Verificar tamaños
du -sh public/monsters/

# 3. Ejecutar tests de rendimiento
npm run test:performance
```

## Monitoreo de Tamaños

### Budget por Categoría

| Categoría | Budget | KB/imagen |
|-----------|--------|-----------|
| Landing (hero + monstruos) | 300KB | ~50-100KB |
| Dashboard | 500KB | ~5-30KB |
| Detalle contrato | 200KB | ~10-30KB |
| Total sitio | 1MB | - |

### Verificar tamaños

```bash
# Tamaño total de imágenes WebP
du -sh public/monsters/webp/

# Por tamaño
for size in 64 128 256 512; do
  echo "Tamaño $size: $(du -sh public/monsters/webp/$size/ | cut -f1)"
done
```

## Solución de Problemas

### Error: "sharp not found"

```bash
npm install sharp
# o
yarn add sharp
```

### Error: "input directory not found"

```bash
mkdir -p src/assets/monsters/originals
```

### Imágenes borrosas

- Verificar que la imagen original tiene buena resolución
- Aumentar calidad en CONFIG.formats
- Usar tamaño mayor para el contexto

### Archivos muy grandes

- Reducir calidad webp (ej: 70 en vez de 80)
- Eliminar tamaños no utilizados
- Usar AVIF para máxima compresión

---

*Scripts de procesamiento de imágenes. Mantener actualizados conforme se añadan nuevas funcionalidades.*
