/**
 * OFOQ REALISTIC 3D IPHONE 16 PRO HARDWARE MOCKUP
 * Handcrafted pure CSS vector device frame with Dynamic Island,
 * Titanium bezel, glass sheen & status bar telemetry
 */

export function IPhone16Mockup({
  src,
  alt = 'Mobile app showcase',
  title = 'Mobile App',
  className = '',
  style = {},
}) {
  const webpSrc = typeof src === 'string' ? src.replace(/\.(png|jpg|jpeg)$/i, '.webp') : null;

  return (
    <div
      className={`ofoq-iphone16-mockup ${className}`.trim()}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '340px',
        marginInline: 'auto',
        aspectRatio: '9 / 18.5',
        borderRadius: '46px',
        padding: '10px',
        background: 'linear-gradient(145deg, #2a3447 0%, #101626 50%, #080c16 100%)',
        boxShadow:
          '0 0 0 2px rgba(255, 255, 255, 0.15), 0 30px 80px rgba(0, 0, 0, 0.85), 0 0 50px rgba(28, 93, 78, 0.2)',
        overflow: 'visible',
        ...style,
      }}
    >
      {/* Outer Titanium Side Hardware Buttons */}
      {/* Volume Up */}
      <span
        style={{
          position: 'absolute',
          left: '-3px',
          top: '90px',
          width: '3px',
          height: '42px',
          background: '#3a475d',
          borderRadius: '2px 0 0 2px',
        }}
      />
      {/* Volume Down */}
      <span
        style={{
          position: 'absolute',
          left: '-3px',
          top: '142px',
          width: '3px',
          height: '42px',
          background: '#3a475d',
          borderRadius: '2px 0 0 2px',
        }}
      />
      {/* Power Button */}
      <span
        style={{
          position: 'absolute',
          right: '-3px',
          top: '110px',
          width: '3px',
          height: '60px',
          background: '#3a475d',
          borderRadius: '0 2px 2px 0',
        }}
      />

      {/* Screen Frame Bezel */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '38px',
          overflow: 'hidden',
          background: '#040711',
          border: '1px solid rgba(0, 0, 0, 0.9)',
        }}
      >
        {/* Top Status Bar & Dynamic Island */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '36px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: '1.25rem',
            pointerEvents: 'none',
          }}
        >
          {/* Status Time */}
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
            9:41
          </span>

          {/* Dynamic Island Pill */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '9px',
              transform: 'translateX(-50%)',
              width: '88px',
              height: '22px',
              borderRadius: '20px',
              background: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingInlineEnd: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.8)',
            }}
          >
            {/* Camera Lens glint */}
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#0d1627',
                border: '1px solid #1c2738',
              }}
            />
          </div>

          {/* Signal & Battery Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            {/* Signal bar */}
            <span style={{ fontSize: '10px', color: '#fff' }}>5G</span>
            {/* Battery bar */}
            <span
              style={{
                display: 'inline-block',
                width: '18px',
                height: '9px',
                borderRadius: '3px',
                border: '1px solid #fff',
                padding: '1px',
              }}
            >
              <span style={{ display: 'block', width: '80%', height: '100%', background: '#fff', borderRadius: '1px' }} />
            </span>
          </div>
        </div>

        {/* Live Screenshot Picture */}
        <picture>
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={src}
            alt={alt || title}
            loading="eager"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        </picture>

        {/* Specular Diagonal Glass Glare */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        {/* Bottom Home Indicator Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '110px',
            height: '4px',
            borderRadius: '2px',
            background: 'rgba(255, 255, 255, 0.7)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
}

