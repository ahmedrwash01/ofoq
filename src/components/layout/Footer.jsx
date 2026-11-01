import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/useLanguage.js';
import { Container, OfoqLogo, Divider } from '../ui/index.js';

export function Footer() {
  const { lang, t, isRtl } = useLanguage();

  const siteLinks = [
    { to: '/services', label: t('nav.services') },
    { to: '/work', label: t('nav.projects') },
    { to: '/process', label: t('nav.process') },
    { to: '/pricing', label: t('nav.pricing') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const serviceLinks = [
    { to: '/services', label: t('services.mobileTitle') },
    { to: '/services', label: t('services.webTitle') },
    { to: '/services', label: t('services.desktopTitle') },
    { to: '/services', label: t('services.systemsTitle') },
  ];

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-deep)',
        paddingTop: 'clamp(3rem, 6vw, 4.5rem)',
        paddingBottom: '2.5rem',
      }}
    >
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '3rem',
          }}
        >
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '34ch' }}>
            <OfoqLogo lang={lang} to="/" />
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
              {t('footer.brandDesc')}
            </p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>
              {t('footer.verifiedNote')}
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', color: 'var(--emerald-text)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              {t('footer.navTitle')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0, listStyle: 'none' }}>
              {siteLinks.map((l) => (
                <li key={l.to + l.label}>
                  <Link
                    to={l.to}
                    className="focus-ring"
                    style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color var(--duration-fast)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', color: 'var(--gold-highlight)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              {t('footer.servicesTitle')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0, listStyle: 'none' }}>
              {serviceLinks.map((s, idx) => (
                <li key={idx}>
                  <Link
                    to={s.to}
                    className="focus-ring"
                    style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color var(--duration-fast)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Verified Contact Column */}
          <div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)', color: 'var(--cyan-text)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              {t('footer.contactTitle')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: 'var(--text-sm)' }}>
              <a
                href="mailto:hello@ofoq.dev"
                style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                hello@ofoq.dev
              </a>
              <a
                href="https://wa.me/201115077582"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                WhatsApp (+20 111 507 7582)
              </a>
              <span style={{ color: 'var(--text-muted)' }}>
                {t('contact.locationDesc')}
              </span>
            </div>
          </div>
        </div>

        <Divider showCrosshair={false} />

        {/* Bottom Bar: Copyright & System status */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-2xs)',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            {t('footer.copyright')} {t('footer.year')}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span>{isRtl ? 'أفق • القاهرة' : 'OFOQ • CAIRO'}</span>
            <span style={{ opacity: 0.3 }}>•</span>
            <span style={{ color: 'var(--emerald-text)' }}>{isRtl ? 'المنظومة • نشطة ومستقرة' : 'SYSTEM • ONLINE'}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
