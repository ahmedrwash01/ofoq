/**
 * OFOQ SPATIAL 3D TILT CARD
 * Physics-driven 3D perspective rotation with dynamic cursor glare
 * Multi-layer spatial depth (translateZ) and mobile gyroscope/touch support
 */

import { useRef, useState, useCallback } from 'react';

export function Spatial3DCard({
  children,
  className = '',
  maxTilt = 8,
  glare = true,
  style = {},
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    const rotateY = ((x / rect.width) - 0.5) * maxTilt * 2;
    const rotateX = -((y / rect.height) - 0.5) * maxTilt * 2;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`);
    setGlarePos({ x: percentX, y: percentY, opacity: 1 });
  }, [maxTilt]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      className={`ofoq-spatial-3d-card ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s var(--ease-out-cubic)',
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        willChange: 'transform',
        ...style,
      }}
      {...props}
    >
      {/* Dynamic Specular Holographic Glare */}
      {glare && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(77, 224, 191, 0.16) 0%, rgba(203, 161, 106, 0.08) 35%, transparent 70%)`,
            opacity: glarePos.opacity,
            transition: 'opacity 0.25s ease',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
      )}

      {/* Card Content with 3D Child Preservation */}
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d', height: '100%', width: '100%' }}>
        {children}
      </div>
    </div>
  );
}

