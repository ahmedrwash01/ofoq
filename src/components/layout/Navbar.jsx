import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/useLanguage.js';
import { useInquiry } from '../../context/useInquiry.js';
import { Container, Button, OfoqLogo } from '../ui/index.js';

export function Navbar() {
  const { lang, toggleLang, isRtl, t } = useLanguage();
  const { openInquiry } = useInquiry();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setIsMobileOpen(false);

  const navLinks = [
    { href: '#services', label: t('nav.services') },
    { href: '#work', label: t('nav.projects') },
    { href: '#process', label: t('nav.process') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 100,
        background: isScrolled ? 'rgba(5, 8, 17, 0.94)' : 'rgba(7, 11, 22, 0.82)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'background var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
      }}
    >
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '4.75rem',
            gap: '1.5rem',
          }}
        >
          {/* Logo with official SVG mark */}
          <OfoqLogo lang={lang} href="#top" onClick={closeMobile} />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.25rem',
            }}
            className="md-flex-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  padding: '0.5rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'color var(--duration-fast) var(--ease-standard), background var(--duration-fast) var(--ease-standard)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Tools: Language Switcher & Quote CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Language Switcher Button */}
            <div
              role="group"
              aria-label="Language selection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '2px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(18, 26, 46, 0.75)',
                border: '1px solid var(--border-default)',
              }}
            >
              <button
                type="button"
                onClick={() => lang !== 'ar' && toggleLang()}
                aria-pressed={isRtl}
                style={{
                  padding: '0.35rem 0.65rem',
                  fontSize: 'var(--text-2xs)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-full)',
                  background: isRtl ? 'var(--emerald-surface)' : 'transparent',
                  color: isRtl ? 'var(--emerald-text)' : 'var(--text-muted)',
                  border: isRtl ? '1px solid var(--emerald-border)' : '1px solid transparent',
                  transition: 'var(--transition-fast)',
                }}
              >
                AR
              </button>
              <button
                type="button"
                onClick={() => lang !== 'en' && toggleLang()}
                aria-pressed={!isRtl}
                style={{
                  padding: '0.35rem 0.65rem',
                  fontSize: 'var(--text-2xs)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-full)',
                  background: !isRtl ? 'var(--emerald-surface)' : 'transparent',
                  color: !isRtl ? 'var(--emerald-text)' : 'var(--text-muted)',
                  border: !isRtl ? '1px solid var(--emerald-border)' : '1px solid transparent',
                  transition: 'var(--transition-fast)',
                }}
              >
                EN
              </button>
            </div>

            {/* Desktop Contact CTA Button */}
            <div className="md-block-cta" style={{ display: 'none' }}>
              <Button onClick={() => openInquiry()} variant="primary" style={{ padding: '0.55rem 1.25rem', minHeight: '2.5rem' }}>
                {t('nav.cta')}
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="md-hidden-burger focus-ring"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-expanded={isMobileOpen}
              aria-label={isMobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-default)',
                background: 'rgba(18, 26, 46, 0.6)',
                color: 'var(--text-primary)',
              }}
            >
              <span
                style={{
                  width: '20px',
                  height: '2px',
                  background: 'currentColor',
                  borderRadius: '2px',
                  transition: 'transform 0.2s ease, opacity 0.2s ease',
                  transform: isMobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  width: '20px',
                  height: '2px',
                  background: 'currentColor',
                  borderRadius: '2px',
                  transition: 'opacity 0.2s ease',
                  opacity: isMobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  width: '20px',
                  height: '2px',
                  background: 'currentColor',
                  borderRadius: '2px',
                  transition: 'transform 0.2s ease, opacity 0.2s ease',
                  transform: isMobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {isMobileOpen && (
        <div
          id="mobile-drawer"
          style={{
            borderTop: '1px solid var(--border-subtle)',
            background: 'rgba(7, 11, 22, 0.98)',
            backdropFilter: 'blur(20px)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              style={{
                color: 'var(--text-primary)',
                fontSize: 'var(--text-base)',
                fontWeight: 500,
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: '0.5rem' }}>
            <Button
              variant="primary"
              onClick={() => {
                closeMobile();
                openInquiry();
              }}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {t('nav.cta')}
            </Button>
          </div>
        </div>
      )}

      {/* Responsive Utilities for Navbar */}
      <style>{`
        @media (min-width: 860px) {
          .md-flex-nav { display: flex !important; }
          .md-block-cta { display: block !important; }
          .md-hidden-burger { display: none !important; }
        }
      `}</style>
    </header>
  );
}
