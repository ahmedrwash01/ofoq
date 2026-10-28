import { useLanguage } from '../../context/useLanguage.js';
import { useInquiry } from '../../context/useInquiry.js';
import {
  Container,
  SectionWrapper,
  Button,
  TechnicalLabel,
  StatusIndicator,
  SurfacePanel,
} from '../ui/index.js';

export function HeroSection() {
  const { isRtl, t } = useLanguage();
  const { openInquiry } = useInquiry();

  return (
    <SectionWrapper id="top" hasAmbient style={{ paddingTop: 'clamp(2.5rem, 6vw, 4.5rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4rem)',
            alignItems: 'center',
          }}
        >
          {/* Column 1: Messaging & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <TechnicalLabel variant="emerald">
                {t('hero.eyebrow')}
              </TechnicalLabel>
              <StatusIndicator status="live" label={isRtl ? 'القاهرة، مصر' : 'CAIRO • HQ'} />
            </div>

            <h1
              style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 800,
                lineHeight: 1.2,
                color: 'var(--text-primary)',
                letterSpacing: 'var(--tracking-tight)',
                margin: 0,
              }}
            >
              {t('hero.headline')}
            </h1>

            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                margin: 0,
                maxWidth: '560px',
              }}
            >
              {t('hero.lead')}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                flexWrap: 'wrap',
                marginTop: 'var(--space-2)',
              }}
            >
              <Button onClick={() => openInquiry()} variant="primary" style={{ padding: '0.85rem 1.85rem', fontSize: 'var(--text-base)' }}>
                {t('hero.ctaPrimary')}
              </Button>
              <Button href="#work" variant="secondary" style={{ padding: '0.85rem 1.65rem', fontSize: 'var(--text-base)' }}>
                {t('hero.ctaSecondary')}
              </Button>
            </div>
          </div>

          {/* Column 2: Software Engineering Architecture Core Visual */}
          <div style={{ position: 'relative' }}>
            <SurfacePanel
              elevated
              style={{
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--radius-xl, 18px)',
                border: '1px solid rgba(77, 224, 191, 0.25)',
                background: 'linear-gradient(135deg, rgba(14, 22, 40, 0.95) 0%, rgba(7, 12, 22, 0.98) 100%)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(28, 93, 78, 0.2)',
              }}
            >
              {/* Architecture Core Top Bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '0.85rem',
                  marginBottom: '1.25rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4de0bf', boxShadow: '0 0 10px #4de0bf' }} />
                  <span style={{ fontWeight: 700, fontSize: 'var(--text-xs)', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                    OFOQ SYSTEM KERNEL // 99.98% SLA
                  </span>
                </div>
                <TechnicalLabel variant="emerald">
                  {isRtl ? 'معمارية سحابية موزعة' : 'DISTRIBUTED ARCHITECTURE'}
                </TechnicalLabel>
              </div>

              {/* Architectural Tiers Display */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {/* Tier 1: Client Applications */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(77, 224, 191, 0.2)',
                    borderRadius: '8px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(28, 93, 78, 0.3)', border: '1px solid rgba(77, 224, 191, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                      📱
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: '#fff' }}>
                        {isRtl ? 'تطبيقات الموبايل والويب عالي الأداء' : 'Native & Cross-Platform Clients'}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        iOS • Android • React Native • Flutter • Next.js
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '10px', color: '#4de0bf', fontFamily: 'var(--font-mono)', background: 'rgba(77, 224, 191, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                    60 FPS UI
                  </span>
                </div>

                {/* Tier 2: Microservices & APIs */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(46, 199, 255, 0.2)',
                    borderRadius: '8px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(46, 199, 255, 0.15)', border: '1px solid rgba(46, 199, 255, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                      ⚡
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: '#fff' }}>
                        {isRtl ? 'الخدمات المصغرة والبث اللحظي' : 'Real-Time Microservices & APIs'}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        Golang • NestJS • Python FastAPI • WebSockets
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '10px', color: '#2ec7ff', fontFamily: 'var(--font-mono)', background: 'rgba(46, 199, 255, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                    &lt; 45ms P99
                  </span>
                </div>

                {/* Tier 3: Resilient Data & Cloud */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(203, 161, 106, 0.25)',
                    borderRadius: '8px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(203, 161, 106, 0.15)', border: '1px solid rgba(203, 161, 106, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                      🛡️
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: '#fff' }}>
                        {isRtl ? 'قواعد البيانات والتخزين الموزع' : 'Fault-Tolerant Distributed Storage'}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        PostgreSQL Multi-AZ • TimescaleDB • Redis Cluster
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '10px', color: '#cba16a', fontFamily: 'var(--font-mono)', background: 'rgba(203, 161, 106, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                    AES-256 E2EE
                  </span>
                </div>
              </div>

              {/* Showcase Footer Indicator */}
              <div
                style={{
                  marginTop: '1.25rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-secondary)',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <span>{isRtl ? '3 تطبيقات إنتاجية معتمدة على المتاجر' : '3 Verified Production Store Apps'}</span>
                <a
                  href="#work"
                  style={{
                    color: '#4de0bf',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  {isRtl ? 'مشاهدة المشاريع الحية ↓' : 'Explore Production Work ↓'}
                </a>
              </div>
            </SurfacePanel>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
