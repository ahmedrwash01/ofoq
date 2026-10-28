/**
 * OFOQ SECTION WRAPPER
 * Semantic section layout with optional horizon ambient atmosphere
 */

export function SectionWrapper({
  children,
  className = '',
  id,
  hasAmbient = false,
  as: Component = 'section',
  ...props
}) {
  const ambientClass = hasAmbient ? 'horizon-ambient' : '';

  return (
    <Component
      id={id}
      className={`ofoq-section ${ambientClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
