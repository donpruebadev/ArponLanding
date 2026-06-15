# ARpón - Guía de Uso del Componente MonsterImage

## Instalación

```bash
# Dependencias necesarias
npm install sharp  # Para procesamiento de imágenes (dev)
```

## Estructura de Carpetas

```
public/monsters/
├── webp/
│   ├── 64/        # Cards pequeñas
│   ├── 128/       # Cards medianas
│   ├── 256/       # Cards grandes
│   ├── 512/       # Modales
│   └── 1024/      # Hero (futuro)
├── avif/          # Formato futuro (máxima compresión)
│   └── ...
├── png/           # Fallback para navegadores antiguos
│   └── ...
└── placeholder/   # Tiny versions para blurhash
    └── ...
```

## Uso Básico

### 1. En una Card de Contrato

```jsx
import { MonsterImage } from '@/components/MonsterImage';

export const ContractCard = ({ contract }) => (
  <div className="contract-card">
    {/* Monstruo pequeño en la card */}
    <MonsterImage 
      monster={contract.monsterType}
      size="sm"
      showTooltip={true}
    />
    
    <div className="contract-info">
      <h3>Contrato {contract.number}</h3>
      <p>{contract.entity}</p>
    </div>
  </div>
);
```

### 2. En el Dashboard de Hallazgos

```jsx
export const FindingsDashboard = ({ findings }) => (
  <div className="findings-grid">
    {findings.map(finding => (
      <div key={finding.id} className="finding-card">
        {/* Monstruo mediano con tooltip */}
        <MonsterImage 
          monster={finding.monsterType}
          size="md"
          showTooltip={true}
          className={`severity-${finding.severity}`}
        />
        
        <div className="finding-details">
          <h4>{finding.title}</h4>
          <span className="badge">{finding.type}</span>
        </div>
      </div>
    ))}
  </div>
);
```

### 3. En la Landing Page (Storytelling)

```jsx
export const MonsterShowcase = () => (
  <section className="monsters-showcase">
    <h2>Los Monstruos que Cazamos</h2>
    
    <div className="monsters-grid">
      {/* Monstruos grandes para impacto visual */}
      <MonsterImage 
        monster="el-inflado"
        size="xl"
        showTooltip={true}
        priority={true}  // Above the fold
      />
      
      <MonsterImage 
        monster="la-hidra-burocratica"
        size="xl"
        showTooltip={true}
      />
      
      <MonsterImage 
        monster="el-coloso-blindado"
        size="xl"
        showTooltip={true}
      />
    </div>
  </section>
);
```

### 4. En el Detalle de Contrato

```jsx
export const ContractDetail = ({ contract }) => (
  <div className="contract-detail">
    {/* Header con monstruo grande */}
    <div className="contract-header">
      <MonsterImage 
        monster={contract.monsterType}
        size="lg"
        showTooltip={true}
      />
      
      <div className="contract-title">
        <h1>Contrato {contract.number}</h1>
        <p>{contract.entity}</p>
      </div>
    </div>
    
    {/* Hallazgos relacionados */}
    <div className="related-findings">
      <h3>Hallazgos Detectados</h3>
      
      {contract.findings.map(finding => (
        <div key={finding.id} className="finding-item">
          <MonsterImage 
            monster={finding.monsterType}
            size="sm"
            showTooltip={true}
          />
          
          <span>{finding.title}</span>
        </div>
      ))}
    </div>
  </div>
);
```

## Tamaños Disponibles

| Tamaño | Píxeles | Uso Recomendado |
|--------|---------|-----------------|
| `xs` | 32x32 | Badges, inline text |
| `sm` | 64x64 | Cards pequeñas, listas |
| `md` | 128x128 | Cards medianas, dashboards |
| `lg` | 256x256 | Detalles, modales |
| `xl` | 512x512 | Hero, showcase |

## Monstruos Disponibles

### Victoriosos (Irregularidades no detectadas)
- `el-inflado` - Sobreprecios
- `la-hidra-burocratica` - Burocracia excesiva
- `el-coloso-blindado` - Falta de transparencia
- `la-sanguijuela` - Desvíos de recursos

### Asustados (Detectados, no procesados)
- `el-tembloroso` - Miedo a la auditoría
- `la-serpiente-acorralada` - Conductas evasivas
- `el-escondido` - Opacidad
- `el-paranoico` - Resistencia al cambio

### Tristes (Procesados y sancionados)
- `el-derretido` - Degradación de calidad
- `el-vacio` - Cumplimiento incompleto
- `la-ajena` - Intereses externos
- `el-declinante` - Deterioro progresivo

### Enfrentados (Siendo investigados)
- `impacto-directo` - Arpón en acción
- `atrapado` - Monstruo atrapado
- `perforado` - Monstruo perforado
- `en-retirada` - Monstruo huyendo

### Durmiendo/Inactivos
- `el-dormilon` - Inacción
- `la-roca` - Rigidez
- `el-letargico` - Lentitud
- `el-archivo` - Burocracia documental

### Conspirando
- `la-asamblea` - Colusión
- `el-plan` - Maquinación
- `el-pacto` - Acuerdos secretos
- `la-red` - Corrupción sistémica

## Props del Componente

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `monster` | `string` | **requerido** | ID del monstruo |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño de la imagen |
| `showTooltip` | `boolean` | `false` | Mostrar tooltip informativo |
| `className` | `string` | `''` | Clase CSS adicional |
| `priority` | `boolean` | `false` | Carga eager (above the fold) |
| `onLoad` | `() => void` | - | Callback cuando carga |

## Rendimiento

### Métricas Objetivo

| Métrica | Objetivo |
|---------|----------|
| Peso total (landing) | < 300KB |
| Tiempo de decode | < 100ms |
| CLS | < 0.1 |
| LCP | < 2.5s |

### Tips de Optimización

1. **Usar `priority={true}` solo para hero images**
   ```jsx
   // ✅ Correcto - Hero image above the fold
   <MonsterImage monster="el-inflado" size="xl" priority={true} />
   
   // ✅ Correcto - Below the fold
   <MonsterImage monster="la-hidra" size="md" />
   ```

2. **Lazy loading por defecto**
   ```jsx
   // Las imágenes cargan cuando entran al viewport
   <MonsterImage monster="el-inflado" size="md" />
   ```

3. **Tooltips solo cuando sea necesario**
   ```jsx
   // ✅ En dashboard con información completa
   <MonsterImage monster="el-inflado" size="md" showTooltip={true} />
   
   // ✅ En listados donde ya se muestra la info
   <MonsterImage monster="el-inflado" size="sm" showTooltip={false} />
   ```

## debugging

### Verificar carga de imágenes

```jsx
// Agregar console.log al callback
<MonsterImage 
  monster="el-inflado"
  size="md"
  onLoad={() => console.log('Monster loaded!')}
/>
```

### Inspeccionar en DevTools

1. Abrir DevTools → Network
2. Filtrar por `Img`
3. Verificar que cargan formatos WebP/AVIF
4. Verificar tamaños en KB

### Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Imagen no carga | Archivo no existe | Verificar ruta en `/public/monsters/` |
| Imagen pixelada | Tamaño incorrecto | Usar tamaño apropiado para el contexto |
| CLS alto | Sin dimensiones | Siempre incluir `width` y `height` |

---

*Guía de uso del componente MonsterImage. Mantener actualizado conforme se añadan nuevos monstruos.*
