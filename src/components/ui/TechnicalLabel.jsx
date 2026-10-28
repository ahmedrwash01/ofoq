/**
 * OFOQ TECHNICAL LABEL / BADGE
 * Precise mono telemetry pill
 */

export function TechnicalLabel({
  children,
  variant = 'emerald',
  icon,
  className = '',
  as: Component = 'span',
  ...props
}) {
  return (
    <Component 
      className={`ofoq-badge ofoq-badge--${variant} ${className}`.trim()}
      {...props}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </Component>
  );
}

export const TechBadge = TechnicalLabel;
