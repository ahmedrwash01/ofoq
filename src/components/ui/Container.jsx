/**
 * OFOQ CONTAINER COMPONENT
 * Constrained responsive wrapper with logical padding
 */

export function Container({
  children,
  className = '',
  as: Component = 'div',
  size = 'default',
  ...props
}) {
  const sizeClass = size === 'narrow' 
    ? 'ofoq-container--narrow' 
    : size === 'wide' 
    ? 'ofoq-container--wide' 
    : '';

  return (
    <Component 
      className={`ofoq-container ${sizeClass} ${className}`.trim()} 
      {...props}
    >
      {children}
    </Component>
  );
}
