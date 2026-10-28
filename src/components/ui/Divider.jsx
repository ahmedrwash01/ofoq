/**
 * OFOQ TECHNICAL DIVIDER
 * Hairline gradient divider with optional crosshair or coordinate annotation
 */

export function Divider({
  label,
  showCrosshair = true,
  className = '',
  ...props
}) {
  return (
    <div className={`tech-divider ${className}`.trim()} role="separator" {...props}>
      {showCrosshair && <span className="tech-crosshair" aria-hidden="true" />}
      {label && <span className="tech-annotation">{label}</span>}
      {showCrosshair && !label && <span className="tech-crosshair" aria-hidden="true" />}
    </div>
  );
}
