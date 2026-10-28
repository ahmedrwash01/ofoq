import { useLanguage } from '../../context/useLanguage.js';
import {
  Container,
  SectionWrapper,
  SectionHeading,
  SurfacePanel,
} from '../ui/index.js';

export function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t('process.step1Title'),
      desc: t('process.step1Desc'),
      metric: 'DISCOVERY • REQUIREMENTS',
    },
    {
      number: '02',
      title: t('process.step2Title'),
      desc: t('process.step2Desc'),
      metric: 'PLANNING • ARCHITECTURE',
    },
    {
      number: '03',
      title: t('process.step3Title'),
      desc: t('process.step3Desc'),
      metric: 'EXECUTION • MODULAR CODE',
    },
    {
      number: '04',
      title: t('process.step4Title'),
      desc: t('process.step4Desc'),
      metric: 'VALIDATION • STORE DEPLOY',
    },
    {
      number: '05',
      title: t('process.step5Title'),
      desc: t('process.step5Desc'),
      metric: 'STABILITY • PRODUCTION SLA',
    },
  ];

  return (
    <SectionWrapper id="process">
      <Container>
        <SectionHeading
          eyebrow={t('process.eyebrow')}
          title={t('process.title')}
          lead={t('process.lead')}
          badgeVariant="cyan"
        />

        {/* Milestone Steps Timeline Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '1.25rem',
            marginTop: '2.5rem',
            position: 'relative',
          }}
        >
          {steps.map((st) => (
            <SurfacePanel
              key={st.number}
              interactive
              style={{
                padding: 'clamp(1.25rem, 3vw, 1.65rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                border: '1px solid var(--border-default)',
                position: 'relative',
              }}
            >
              {/* Step Index & Telemetry Code */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 800,
                    color: 'var(--emerald-text)',
                    lineHeight: 1,
                  }}
                >
                  {st.number}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-2xs)',
                    color: 'var(--text-muted)',
                    letterSpacing: 'var(--tracking-wide)',
                  }}
                >
                  PHASE
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                {st.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {st.desc}
              </p>

              {/* Technical Milestone Tag */}
              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.65rem',
                  marginTop: 'auto',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-2xs)',
                  color: 'var(--cyan-text)',
                }}
              >
                {st.metric}
              </div>
            </SurfacePanel>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
