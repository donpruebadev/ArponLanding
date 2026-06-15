/**
 * ARpón - Componente Logo
 * 
 * Logo principal de Arpón con tipografía Akrobat Extrabold.
 * 
 * Uso:
 * <Logo />                    // Logo completo (oscuro)
 * <Logo variant="light" />    // Logo para fondos oscuros
 * <Logo variant="icon" />     // Solo símbolo
 */

import React from 'react';

// Tipos
interface LogoProps {
  /** Variante del logo */
  variant?: 'dark' | 'light' | 'icon';
  /** Tamaño del logo */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Clase CSS adicional */
  className?: string;
  /** Animación al cargar */
  animated?: boolean;
}

// Tamaños en píxeles
const SIZES = {
  sm: { width: 100, height: 30 },
  md: { width: 150, height: 45 },
  lg: { width: 200, height: 60 },
  xl: { width: 280, height: 84 }
};

// Componente Logo
export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  animated = false
}) => {
  const dimensions = SIZES[size];
  
  // Color del texto según variante
  const textColor = variant === 'light' ? '#F8F9FA' : '#0D1B2A';
  
  // Ruta del icono SVG
  const iconSrc = animated 
    ? '/logo/arpon-icon-animated.svg'
    : '/logo/arpon-icon.svg';
  
  return (
    <div 
      className={`logo-container ${className}`}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      {/* Icono (símbolo de arpón) */}
      <img 
        src={iconSrc}
        alt=""
        className="logo-icon"
        width={dimensions.height}
        height={dimensions.height}
      />
      
      {/* Texto "ARPÓN" */}
      {variant !== 'icon' && (
        <span 
          className="logo-text"
          style={{ color: textColor }}
        >
          ARPÓN
        </span>
      )}
    </div>
  );
};

export default Logo;
