/**
 * OFOQ SURFACE PANEL
 * Layered translucent glass panel with optional elevation and hover response
 */

export function SurfacePanel({
  children,
  elevated = false,
  interactive = false,
  className = '',
  as: Component = 'div',
  ...props
}) {
  const panelType = elevated ? 'glass-panel-elevated' : 'glass-panel';
  const interactiveClass = interactive ? 'glass-panel-interactive' : '';

  return (
    <Component
      className={`${panelType} ${interactiveClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
