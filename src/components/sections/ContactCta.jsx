import { useLanguage } from '../../context/useLanguage.js';
import { useInquiry } from '../../context/useInquiry.js';
import {
  Container,
  SectionWrapper,
  SurfacePanel,
  TechnicalLabel,
  Button,
} from '../ui/index.js';

export function ContactCta() {
  const { isRtl, t } = useLanguage();
  const { openInquiry } = useInquiry();

  return (
    <SectionWrapper id="contact" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
      <Container>
        <SurfacePanel
          elevated
          style={{
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            background: 'radial-gradient(ellipse at top center, rgba(28, 93, 78, 0.25) 0%, rgba(14, 22, 40, 0.95) 70%)',
            border: '1px solid var(--emerald-border)',
            boxShadow: 'var(--shadow-lg), var(--shadow-glow-emerald)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Tag & Crosshair */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <TechnicalLabel variant="emerald">
              {t('contact.eyebrow')}
            </TechnicalLabel>
            <span className="tech-crosshair" aria-hidden="true" />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3rem)',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Heading & Explanation */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: 'var(--text-primary)',
                  letterSpacing: 'var(--tracking-tight)',
                  margin: '0 0 1rem 0',
                }}
              >
                {t('contact.title')}
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  margin: 0,
                  maxWidth: '52ch',
                }}
              >
                {t('contact.lead')}
              </p>

              {/* Direct Communication & Inquiry Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  flexWrap: 'wrap',
                  marginTop: '1.75rem',
                }}
              >
                <Button
                  onClick={() => openInquiry()}
                  variant="primary"
                  style={{ padding: '0.85rem 1.65rem' }}
                >
                  {t('contact.inquiryBtn')}
                </Button>
                <Button
                  href="https://wa.me/201115077582"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  style={{ padding: '0.85rem 1.45rem' }}
                >
                  {t('contact.whatsappBtn')}
                </Button>
                <Button
                  href="mailto:hello@ofoq.dev"
                  variant="ghost"
                  style={{ padding: '0.85rem 1.45rem' }}
                >
                  {t('contact.emailBtn')}
                </Button>
              </div>
            </div>

            {/* Right Column: Direct Channels Substrate */}
            <div
              style={{
                background: 'rgba(7, 11, 22, 0.75)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>
                  {isRtl ? 'البريد الإلكتروني المباشر' : 'DIRECT EMAIL'}
                </span>
                <a
                  href="mailto:hello@ofoq.dev"
                  className="focus-ring"
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 600,
                    color: 'var(--emerald-text)',
                    textDecoration: 'none',
                    width: 'fit-content',
                  }}
                >
                  hello@ofoq.dev
                </a>
              </div>

              {/* Phone / WhatsApp */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>
                  {isRtl ? 'هاتف / واتساب' : 'PHONE & WHATSAPP'}
                </span>
                <a
                  href="tel:+201115077582"
                  className="focus-ring"
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 600,
                    color: 'var(--gold-highlight)',
                    textDecoration: 'none',
                    width: 'fit-content',
                    direction: 'ltr',
                    textAlign: isRtl ? 'right' : 'left',
                  }}
                >
                  +20 111 507 7582
                </a>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>
                  {isRtl ? 'المقر' : 'HEADQUARTERS'}
                </span>
                <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)', fontWeight: 500 }}>
                  {t('contact.locationDesc')}
                </span>
              </div>
            </div>
          </div>
        </SurfacePanel>
      </Container>
    </SectionWrapper>
  );
}
