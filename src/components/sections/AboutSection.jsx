import { useLanguage } from '../../context/useLanguage.js';
import {
  Container,
  SectionWrapper,
  SectionHeading,
  SurfacePanel,
  TechnicalLabel,
  StatusIndicator,
} from '../ui/index.js';

export function AboutSection() {
  const { t, isRtl } = useLanguage();

  const corePillars = [
    {
      label: t('about.pillar1Label'),
      desc: t('about.pillar1Desc'),
    },
    {
      label: t('about.pillar2Label'),
      desc: t('about.pillar2Desc'),
    },
    {
      label: t('about.pillar3Label'),
      desc: t('about.pillar3Desc'),
    },
  ];

  return (
    <SectionWrapper id="about">
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(2rem, 5vw, 3.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Mission & Identity */}
          <div>
            <SectionHeading
              align="start"
              eyebrow={t('about.eyebrow')}
              title={t('about.title')}
              lead={t('about.lead')}
              badgeVariant="emerald"
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
                {t('about.p1')}
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
                {t('about.p2')}
              </p>
            </div>

            <div
              style={{
                marginTop: '1.75rem',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(28, 93, 78, 0.12)',
                border: '1px solid var(--emerald-border)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span className="tech-crosshair" aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--gold-highlight)', fontWeight: 600 }}>
                {t('about.tagline')}
              </span>
            </div>
          </div>

          {/* Right Column: Technical Tenets & Cairo Location Surface */}
          <SurfacePanel
            elevated
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              border: '1px solid var(--border-default)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <TechnicalLabel variant="neutral">
                {t('about.pillarsEyebrow')}
              </TechnicalLabel>
              <StatusIndicator status="live" label={t('about.cairoHq')} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {corePillars.map((p, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1rem',
                    background: 'rgba(14, 22, 40, 0.65)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--emerald-text)',
                      fontWeight: 600,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {p.label}
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Coordinate Bar */}
            <div
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '0.75rem',
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-2xs)',
                color: 'var(--text-muted)',
              }}
            >
              <span>{isRtl ? 'المقر الرئيسي: القاهرة، مصر' : 'HQ: CAIRO • EGYPT'}</span>
              <span>COORDINATES: 30.0444° N, 31.2357° E</span>
            </div>
          </SurfacePanel>
        </div>
      </Container>
    </SectionWrapper>
  );
}
