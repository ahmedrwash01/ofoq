/**
 * OFOQ INTERACTIVE BUTTON PRIMITIVE
 * Polymorphic button and link with direction-aware arrow
 */

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  icon,
  type = 'button',
  ...props
}) {
  const isLinkVariant = variant === 'link';
  const baseClass = isLinkVariant 
    ? 'ofoq-link-arrow' 
    : `ofoq-btn ofoq-btn--${variant}`;
  const fullClass = `${baseClass} focus-ring ${className}`.trim();

  const content = (
    <>
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>{children}</span>
      {isLinkVariant && (
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          aria-hidden="true"
        >
          <path 
            d="M6 12L10 8L6 4" 
            stroke="currentColor" 
            strokeWidth="1.75" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={fullClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={fullClass} {...props}>
      {content}
    </button>
  );
}
