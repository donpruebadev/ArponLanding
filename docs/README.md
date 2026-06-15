# ARpón - Documentación del Proyecto Web

## Bienvenido a la documentación de ARpón

Esta carpeta contiene toda la documentación necesaria para el desarrollo de la plataforma web de ARpón, una StartUp de análisis de contratación gubernamental con storytelling visual de **"cazadores de monstruos"**.

---

## Documentos Principales

### 1. [Resumen Ejecutivo](./EXECUTIVE_SUMMARY.md)
Visión general del proyecto, incluyendo:
- Concepto central
- Identidad visual clave
- Estructura de la web
- Fases de desarrollo
- Stack tecnológico

**Para**: Stakeholders, inversores, nuevos miembros del equipo.

### 2. [Hoja de Ruta Completa](./ROADMAP.md)
Documentación detallada que incluye:
- Identidad visual completa
- Estructura de navegación
- Arquitectura de contenido
- Sistema de monstruos (storytelling)
- Componentes UI
- Flujos de usuario
- Responsividad y accesibilidad
- SEO e internacionalización
- Integraciones
- Fases de desarrollo detalladas
- Stack tecnológico recomendado
- Métricas de éxito

**Para**: Equipo de desarrollo, diseño, producto.

### 3. [Especificaciones de Diseño](./DESIGN_SPECS.md)
Especificaciones técnicas detalladas:
- Variables CSS (colores, tipografía, espaciado)
- Componentes UI con código CSS
- Layout y grid system
- Animaciones
- Iconografía
- Breakpoints
- Accesibilidad
- Utilidades de texto
- Especificaciones de imágenes
- Tema oscuro (futuro)

**Para**: Desarrolladores frontend, diseñadores UI.

---

## Archivos de Referencia Visual

### `/visual_reference/`

- **concept_art.png**: Prop sheet completo con logo, paleta de colores, tipografía, ilustración principal, iconografía, componentes UI y navegación.

- **character_sheet.png**: Catálogo de monstruos representando diferentes tipos de irregularidades en contratos gubernamentales, con sus estados emocionales.

## Documentación de Imágenes

### [Optimización de Imágenes](./IMAGE_OPTIMIZATION.md)
Estrategia completa para manejar las imágenes de monstruos:
- Formatos recomendados (WebP, AVIF, SVG)
- Tamaños por contexto
- Lazy loading y placeholders
- Pipeline de procesamiento
- CDN y cache strategy

### [Uso del Componente MonsterImage](./MONSTER_IMAGE_USAGE.md)
Guía práctica para usar el componente:
- Ejemplos de código
- Props disponibles
- Tamaños y monstruos
- Tips de rendimiento

---

## Inicio Rápido

### Para Desarrolladores
1. Revisar [Especificaciones de Diseño](./DESIGN_SPECS.md)
2. Revisar [Hoja de Ruta](./ROADMAP.md) - Sección de Stack Tecnológico
3. Revisar [Resumen Ejecutivo](./EXECUTIVE_SUMMARY.md) - Fases de Desarrollo

### Para Diseñadores
1. Revisar imágenes en `/visual_reference/`
2. Revisar [Hoja de Ruta](./ROADMAP.md) - Sección de Identidad Visual
3. Revisar [Especificaciones de Diseño](./DESIGN_SPECS.md)

### Para Producto/Marketing
1. Revisar [Resumen Ejecutivo](./EXECUTIVE_SUMMARY.md)
2. Revisar [Hoja de Ruta](./ROADMAP.md) - Sección de Storytelling
3. Revisar [Hoja de Ruta](./ROADMAP.md) - Métricas de Éxito

---

## Estructura del Proyecto

```
ArpWeb/
├── docs/
│   ├── README.md                  ← Este archivo
│   ├── EXECUTIVE_SUMMARY.md       ← Resumen ejecutivo
│   ├── ROADMAP.md                 ← Hoja de ruta completa
│   └── DESIGN_SPECS.md            ← Especificaciones de diseño
├── visual_reference/
│   ├── concept_art.png            ← Prop sheet visual
│   └── character_sheet.png        ← Catálogo de monstruos
└── README.md                      ← README del proyecto
```

---

## Decisiones Clave Documentadas

### Storytelling
- **Concepto**: Cazadores de monstruos
- **Metáfora**: Cada irregularidad es un monstruo que emerge de la burocracia
- **Acción**: Arpón es el arpón que los cazca y expone

### Identidad Visual
- **Paleta**: Azul profundo + Turquesa (confianza + acción)
- **Tipografía**: Akrobat Extrabold (logo) + Space Grotesk (títulos) + Inter (cuerpo)
- **Estilo**: Profesional, moderno, accesible internacionalmente

### Posicionamiento
- **Mercado**: Análisis de contratación gubernamental
- **Diferenciador**: IA + Storytelling visual único
- **Expansión**: Internacional (español → inglés → portugués)

---

## Próximos Pasos

1. **Aprobación de Documentación**: Revisar y aprobar esta hoja de ruta
2. **Setup de Proyecto**: Inicializar Next.js con Tailwind CSS
3. **Sistema de Diseño**: Implementar componentes base
4. **Landing Page**: Desarrollar primera versión
5. **Iteración**: Feedback y ajustes

---

## Contacto y Contribuciones

Para preguntas sobre esta documentación o contribuciones al proyecto, contactar al equipo de ARpón.

---

*Última actualización: 2024*
