/**
 * OFOQ PROJECT MEDIA FRAME
 * Architectural bezel showcase frame for verified production systems
 * Optimized with picture WebP support, explicit dimensions & async decoding
 */

import { TechnicalLabel } from './TechnicalLabel.jsx';

export function ProjectMediaFrame({
  src,
  alt,
  title,
  category = 'MOBILE & WEB',
  status = 'STORE_VERIFIED',
  statusVariant = 'emerald',
  className = '',
  width = 768,
  height = 512,
  children,
  ...props
}) {
  const webpSrc = typeof src === 'string' ? src.replace(/\.(png|jpg|jpeg)$/i, '.webp') : null;

  return (
    <div className={`ofoq-media-frame ${className}`.trim()} {...props}>
      <div className="ofoq-media-frame-bar">
        <div className="ofoq-media-dots">
          <span className="ofoq-media-dot" />
          <span className="ofoq-media-dot" />
          <span className="ofoq-media-dot" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }}>
          <span style={{ fontWeight: 600 }}>{title}</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span style={{ opacity: 0.75, fontSize: 'var(--text-3xs, 10px)' }}>{category}</span>
        </div>
        <TechnicalLabel variant={statusVariant}>
          {status}
        </TechnicalLabel>
      </div>
      {children ? (
        <div className="ofoq-media-frame-custom" style={{ width: '100%', aspectRatio: '16 / 9', position: 'relative', overflow: 'hidden' }}>
          {children}
        </div>
      ) : src ? (
        <picture>
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={src}
            alt={alt || title}
            loading="lazy"
            decoding="async"
            width={width}
            height={height}
          />
        </picture>
      ) : null}
    </div>
  );
}
