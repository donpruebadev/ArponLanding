# ARpón - Resumen Ejecutivo del Proyecto Web

## Concepto Central

**Arpón** es una plataforma de análisis de contratación gubernamental que utiliza IA para detectar irregularidades. Nuestro storytelling visual es **"cazadores de monstruos"**: cada anomalía es un monstruo que emerge de las profundidades de la burocracia, y Arpón es el arpón que los cazca y expone.

---

## Identidad Visual Clave

### Paleta de Colores
| Color | HEX | Uso Principal |
|-------|-----|---------------|
| Azul Profundo | `#0D1B2A` | Autoridad, confianza |
| Gris Azulado | `#1B263B` | Texto, estructura |
| Turquesa | `#2EC4B6` | Acciones, positividad |
| Gris Claro | `#E6EBEB` | Superficies |
| Blanco Off | `#F8F9FA` | Fondos |

### Tipografía
- **Akrobat Extrabold**: Logo y títulos principales
- **Space Grotesk**: Navegación y subtítulos
- **Inter**: Cuerpo de texto y datos

### Logo
- Símbolo de arpón (triángulo invertido con línea vertical)
- Tagline: *"Detectamos lo que otros no ven."*

---

## Estructura de la Web

### Páginas Principales
1. **Inicio** - Landing con storytelling de monstruos
2. **Contratos** - Explorador con filtros avanzados
3. **Hallazgos** - Dashboard de irregularidades
4. **Entidades** - Perfiles de organizaciones
5. **Nosotros** - Historia y equipo
6. **Demo** - Formulario de conversión

### Ilustración Principal
- Barco con arpón cazando un monstruo submarino
- Fondo oscuro con edificio gubernamental al fondo
- Representa la búsqueda activa de irregularidades

---

## Sistema de Monstruos

### Tipos de Irregularidades Representadas

| Monstruo | Irregularidad |
|----------|---------------|
| El Inflado | Sobreprecios |
| La Hidra Burocrática | Burocracia excesiva |
| El Coloso Blindado | Falta de transparencia |
| La Sanguijuela | Desvíos de recursos |
| El Paranoico | Resistencia al cambio |
| La Red | Corrupción sistémica |

### Estados de Monstruos
- **Victoriosos**: No detectados
- **Asustados**: Detectados, no procesados
- **Tristes**: Procesados y sancionados
- **Enfrentados**: Siendo investigados

---

## Componentes UI Clave

### Header
```
[Logo] Inicio | Contratos | Hallazgos | Entidades | Nosotros [🔍] [Solicitar demo]
```

### Tarjeta de Contrato
- Icono de documento
- Número de contrato
- Entidad y proveedor
- Badge de hallazgo
- Chevron para detalle

### Indicador de Hallazgos
- Número total
- Porcentaje de tendencia (+18%)
- Gráfico de evolución

---

## Flujo de Usuario

```
Landing → Explorar Contratos → Filtrar → Seleccionar → Ver Detalle → Solicitar Demo
```

---

## Fases de Desarrollo

| Fase | Duración | Entregable |
|------|----------|------------|
| Foundation | 4 semanas | Setup + Landing estática |
| Core Features | 4 semanas | Explorador de contratos |
| Intelligence | 4 semanas | Dashboard + IA mockup |
| Growth | 4 semanas | Auth + Internacionalización |
| Polish | 4 semanas | Optimización + Tests |

**Total Estimado**: 20 semanas (5 meses)

---

## Stack Tecnológico

### Frontend
- Next.js 14+ (App Router)
- Tailwind CSS
- Framer Motion (animaciones)
- Recharts (gráficos)
- Lucide React (iconos)

### Backend (Futuro)
- Node.js + Fastify
- PostgreSQL + Redis
- Python (FastAPI) para IA

### Infraestructura
- Vercel (frontend)
- GitHub Actions (CI/CD)
- Sentry (monitoreo)

---

## Objetivos de Rendimiento

| Métrica | Objetivo |
|---------|----------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Lighthouse | > 90 |

---

## Internacionalización

- **Español**: Idioma principal
- **Inglés**: Para expansión internacional
- **Portugués**: Futuro (LATAM)

---

## Documentación Completa

Ver [ROADMAP.md](./ROADMAP.md) para detalles completos.

---

*Última actualización: 2024*
