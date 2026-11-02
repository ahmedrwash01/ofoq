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
                background: 'linear-gradient(135deg, rgba(23, 36, 64, 0.95) 0%, rgba(13, 21, 39, 0.98) 100%)',
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {/* Tier 1: Client Applications */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '10px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0, flex: 1 }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>
                      📱
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                        {isRtl ? 'تطبيقات الموبايل والويب عالي الأداء' : 'Native & Cross-Platform Clients'}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        iOS • Android • React Native • Flutter • Next.js
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '10.5px', color: 'var(--emerald-text)', fontFamily: 'var(--font-mono)', fontWeight: 600, flexShrink: 0, whiteSpace: 'nowrap' }}>
                    60 FPS UI
                  </span>
                </div>

                {/* Tier 2: Microservices & APIs */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '10px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0, flex: 1 }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>
                      ⚡
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                        {isRtl ? 'الخدمات المصغرة والبث اللحظي' : 'Real-Time Microservices & APIs'}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        Golang • NestJS • Python FastAPI • WebSockets
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '10.5px', color: 'var(--cyan-text)', fontFamily: 'var(--font-mono)', fontWeight: 600, flexShrink: 0, whiteSpace: 'nowrap' }}>
                    &lt; 45ms P99
                  </span>
                </div>

                {/* Tier 3: Resilient Data & Cloud */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '10px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0, flex: 1 }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>
                      🛡️
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                        {isRtl ? 'قواعد البيانات والتخزين الموزع' : 'Fault-Tolerant Distributed Storage'}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        PostgreSQL Multi-AZ • TimescaleDB • Redis Cluster
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '10.5px', color: 'var(--gold-highlight)', fontFamily: 'var(--font-mono)', fontWeight: 600, flexShrink: 0, whiteSpace: 'nowrap' }}>
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
