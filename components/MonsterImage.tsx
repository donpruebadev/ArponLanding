/**
 * ARpón - Componente MonsterImage
 * 
 * Componente optimizado para mostrar imágenes de monstruos
 * con lazy loading, blurhash placeholders y responsive images.
 * 
 * Uso:
 * <MonsterImage 
 *   monster="el-inflado" 
 *   size="md"
 *   showTooltip={true}
 * />
 */

import React, { useState, useRef, useEffect } from 'react';

// Tipos
interface MonsterImageProps {
  /** ID del monstruo (ej: 'el-inflado', 'la-hidra-burocratica') */
  monster: string;
  /** Tamaño de la imagen */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Mostrar tooltip con información */
  showTooltip?: boolean;
  /** Clase CSS adicional */
  className?: string;
  /** Prioridad de carga (above the fold) */
  priority?: false;
  /** Callback cuando la imagen carga */
  onLoad?: () => void;
}

interface MonsterInfo {
  name: string;
  type: string;
  description: string;
}

// Mapeo de monstruos
const MONSTERS: Record<string, MonsterInfo> = {
  'el-inflado': {
    name: 'El Inflado',
    type: 'Sobreprecios',
    description: 'Contratos con precios inflados artificialmente'
  },
  'la-hidra-burocratica': {
    name: 'La Hidra Burocrática',
    type: 'Burocracia excesiva',
    description: 'Procesos innecesariamente complejos'
  },
  'el-coloso-blindado': {
    name: 'El Coloso Blindado',
    type: 'Falta de transparencia',
    description: 'Entidades que ocultan información'
  },
  'la-sanguijuela': {
    name: 'La Sanguijuela',
    type: 'Desvíos de recursos',
    description: 'Recursos que no llegan a su destino'
  },
  'el-tembloroso': {
    name: 'El Tembloroso',
    type: 'Miedo a la auditoría',
    description: 'Entidades que evitan el escrutinio'
  },
  'la-serpiente-acorralada': {
    name: 'La Serpiente Acorralada',
    type: 'Conductas evasivas',
    description: 'Intentos de evitar la detección'
  },
  'el-escondido': {
    name: 'El Escondido',
    type: 'Opacidad',
    description: 'Información oculta o difícil de acceder'
  },
  'el-paranoico': {
    name: 'El Paranoico',
    type: 'Resistencia al cambio',
    description: 'Oposición a la transparencia'
  },
  'el-derretido': {
    name: 'El Derretido',
    type: 'Degradación de calidad',
    description: 'Servicios o productos inferiores'
  },
  'el-vacio': {
    name: 'El Vacío',
    type: 'Cumplimiento incompleto',
    description: 'Contratos no ejecutados total o parcialmente'
  },
  'la-ajena': {
    name: 'La Ajena',
    type: 'Intereses externos',
    description: 'Influencia de terceros no declarados'
  },
  'el-declinante': {
    name: 'El Declinante',
    type: 'Deterioro progresivo',
    description: 'Empeoramiento gradual del cumplimiento'
  },
  'el-dormilon': {
    name: 'El Dormilón',
    type: 'Inacción',
    description: 'Entidades que no monitorean contratos'
  },
  'la-roca': {
    name: 'La Roca',
    type: 'Rigidez',
    description: 'Resistencia a adaptarse a nuevas normas'
  },
  'el-letargico': {
    name: 'El Letárgico',
    type: 'Lentitud',
    description: 'Procesos excesivamente lentos'
  },
  'el-archivo': {
    name: 'El Archivo',
    type: 'Burocracia documental',
    description: 'Exceso de papeleo sin sustancia'
  },
  'la-asamblea': {
    name: 'La Asamblea',
    type: 'Colusión',
    description: 'Reuniones para coordinar irregularidades'
  },
  'el-plan': {
    name: 'El Plan',
    type: 'Maquinación',
    description: 'Estrategias elaboradas para evadir controles'
  },
  'el-pacto': {
    name: 'El Pacto',
    type: 'Acuerdos secretos',
    description: 'Convenios entre partes para beneficio mutuo'
  },
  'la-red': {
    name: 'La Red',
    type: 'Corrupción sistémica',
    description: 'Redes de corrupción interconectadas'
  }
};

// Tamaños en píxeles
const SIZES = {
  xs: 32,
  sm: 64,
  md: 128,
  lg: 256,
  xl: 512
};

// Hook para lazy loading
function useLazyLoad(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// Componente principal
export const MonsterImage: React.FC<MonsterImageProps> = ({
  monster,
  size = 'md',
  showTooltip = false,
  className = '',
  priority = false,
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTooltipState, setShowTooltipState] = useState(false);
  const { ref, isVisible } = useLazyLoad();
  
  const sizePx = SIZES[size];
  const monsterInfo = MONSTERS[monster];
  
  // Determinar si cargar eager o lazy
  const shouldLoad = priority || isVisible;
  
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };
  
  return (
    <div 
      ref={ref}
      className={`monster-image-container ${className}`}
      style={{ width: sizePx, height: sizePx }}
      onMouseEnter={() => showTooltip && setShowTooltipState(true)}
      onMouseLeave={() => showTooltip && setShowTooltipState(false)}
    >
      {/* Placeholder */}
      <div 
        className={`monster-placeholder ${isLoaded ? 'hidden' : ''}`}
        style={{ backgroundColor: '#0D1B2A' }}
      />
      
      {/* Imagen */}
      {shouldLoad && (
        <picture>
          {/* AVIF (futuro) */}
          <source
            type="image/avif"
            srcSet={`/monsters/avif/${size}/${monster}.avif`}
          />
          
          {/* WebP (principal) */}
          <source
            type="image/webp"
            srcSet={`/monsters/webp/${size}/${monster}.webp`}
          />
          
          {/* PNG (fallback) */}
          <img
            src={`/monsters/png/${size}/${monster}.png`}
            alt={monsterInfo?.name || monster}
            width={sizePx}
            height={sizePx}
            className={`monster-image ${isLoaded ? 'loaded' : ''}`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
          />
        </picture>
      )}
      
      {/* Tooltip */}
      {showTooltip && showTooltipState && monsterInfo && (
        <div className="monster-tooltip">
          <strong>{monsterInfo.name}</strong>
          <span className="monster-type">{monsterInfo.type}</span>
          <p>{monsterInfo.description}</p>
        </div>
      )}
    </div>
  );
};

// Exportar información de monstruos para uso externo
export { MONSTERS, SIZES };
export type { MonsterImageProps, MonsterInfo };
