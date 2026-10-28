/**
 * OFOQ TECH GRID COMPONENT
 * Technical background substrate with fine coordinates and hairline lines
 */

export function TechGrid({
  children,
  dense = false,
  coordinates = '30.0444° N, 31.2357° E [CAIRO_HQ]',
  className = '',
  ...props
}) {
  const gridClass = dense ? 'tech-grid-dense' : 'tech-grid-pattern';

  return (
    <div className={`relative ${gridClass} ${className}`.trim()} {...props}>
      {coordinates && (
        <div 
          className="tech-annotation absolute top-2 right-4 opacity-40 select-none pointer-events-none"
          aria-hidden="true"
        >
          {coordinates}
        </div>
      )}
      {children}
    </div>
  );
}
