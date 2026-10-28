/**
 * OFOQ LOGO COMPONENT
 * Verified brand SVG mark with architectural precision frame
 * Eliminates legacy white circle badge in favor of integrated dark emerald glass
 */

export function OfoqLogo({
  compact = false,
  href = '#',
  lang = 'ar',
  className = '',
  ...props
}) {
  const isArabic = lang === 'ar';

  return (
    <a 
      href={href} 
      className={`ofoq-logo-wrap focus-ring ${className}`.trim()} 
      aria-label="Ofoq Digital Products — أفق للمنتجات الرقمية"
      {...props}
    >
      <div className="ofoq-logo-mark">
        <img 
          src="/assets/ofoq-mark.svg" 
          alt="Ofoq Horizon Mark" 
          width="32" 
          height="32" 
          loading="eager"
          decoding="async"
        />
      </div>
      {!compact && (
        <div className="ofoq-logo-text">
          <span className="ofoq-logo-title">
            {isArabic ? 'أفق' : 'Ofoq'}
          </span>
          <span className="ofoq-logo-sub">
            {isArabic ? 'منتجات رقمية' : 'Digital Products'}
          </span>
        </div>
      )}
    </a>
  );
}
