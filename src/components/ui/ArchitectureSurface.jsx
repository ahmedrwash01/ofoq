/**
 * OFOQ ARCHITECTURE SURFACE PRIMITIVE
 * Engineering substrate ready to host future architecture diagrams and system topologies
 */

import { StatusIndicator } from './StatusIndicator.jsx';

export function ArchitectureSurface({
  title = 'SYSTEM ARCHITECTURE • V2.4',
  systemStatus = 'STABLE • 99.98% SLA',
  children,
  className = '',
  ...props
}) {
  return (
    <div 
      className={`glass-panel tech-grid-dense p-4 md:p-6 overflow-hidden ${className}`.trim()}
      {...props}
    >
      {/* Top Architecture Metadata Bar */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '0.75rem',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className="tech-crosshair" aria-hidden="true" />
          <span className="tech-annotation">{title}</span>
        </div>
        <StatusIndicator label={systemStatus} />
      </div>

      {/* Surface Content Area */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>

      {/* Subtle Bottom Technical Footer */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '0.75rem',
          marginTop: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-2xs)',
          color: 'var(--text-muted)'
        }}
      >
        <span>NODE_BUS: ACTIVE</span>
        <span>LATENCY: &lt; 24MS</span>
      </div>
    </div>
  );
}
