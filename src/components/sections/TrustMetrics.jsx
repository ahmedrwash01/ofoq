import { useLanguage } from '../../context/useLanguage.js';
import { Container, SectionWrapper, SurfacePanel, AnimatedCounter } from '../ui/index.js';

export function TrustMetrics() {
  const { t, isRtl } = useLanguage();

  const metrics = [
    {
      target: 5,
      prefix: isRtl ? '+' : '',
      suffix: isRtl ? '' : '+',
      duration: 1600,
      label: t('metrics.projectsLabel'),
      sub: t('metrics.projectsSub'),
      accent: 'var(--emerald-text)',
      glow: 'var(--shadow-glow-emerald)',
    },
    {
      target: 3,
      prefix: '',
      suffix: '',
      duration: 1400,
      label: t('metrics.storeLabel'),
      sub: t('metrics.storeSub'),
      accent: 'var(--gold-highlight)',
      glow: 'var(--shadow-glow-gold)',
    },
    {
      target: 24,
      prefix: '',
      suffix: 'h',
      duration: 2000,
      label: t('metrics.replyLabel'),
      sub: t('metrics.replySub'),
      accent: 'var(--cyan-text)',
      glow: 'var(--shadow-glow-cyan)',
    },
  ];

  return (
    <SectionWrapper style={{ paddingBlock: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
      <Container>
        <SurfacePanel
          elevated
          style={{
            padding: 'clamp(1.5rem, 3vw, 2.25rem)',
            border: '1px solid var(--border-default)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'center',
            }}
          >
            {metrics.map((m, index) => (
              <div
                key={index}
                className="ofoq-metric-item"
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: m.accent,
                    letterSpacing: '-0.03em',
                    flexShrink: 0,
                    minWidth: '2.5ch',
                  }}
                >
                  <AnimatedCounter
                    target={m.target}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    duration={m.duration}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {m.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SurfacePanel>
      </Container>
    </SectionWrapper>
  );
}

