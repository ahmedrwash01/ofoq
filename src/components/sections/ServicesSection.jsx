import { useState } from 'react';
import { useLanguage } from '../../context/useLanguage.js';
import { useInquiry } from '../../context/useInquiry.js';
import {
  Container,
  SectionWrapper,
  SectionHeading,
  SurfacePanel,
  TechnicalLabel,
  Button,
} from '../ui/index.js';

export function ServicesSection() {
  const { t } = useLanguage();
  const { openInquiry } = useInquiry();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'mobile',
      number: '01',
      title: t('services.mobileTitle'),
      category: t('services.mobileCat'),
      description: t('services.mobileDesc'),
      badgeVariant: 'emerald',
      capabilities: ['iOS & Android Cross-Platform', 'Clean Architecture', 'Store Readiness (Google Play & App Store)', 'Push Notifications & Auth'],
    },
    {
      id: 'web',
      number: '02',
      title: t('services.webTitle'),
      category: t('services.webCat'),
      description: t('services.webDesc'),
      badgeVariant: 'cyan',
      capabilities: ['Responsive SPA & SSR', 'Technical SEO Foundations', 'High-Speed Web Vitals', 'Conversion-Focused Flows'],
    },
    {
      id: 'desktop',
      number: '03',
      title: t('services.desktopTitle'),
      category: t('services.desktopCat'),
      description: t('services.desktopDesc'),
      badgeVariant: 'neutral',
      capabilities: ['Windows & macOS Tools', 'Local Data & Offline Persistence', 'Operational Control Panels', 'Inventory & Reporting'],
    },
    {
      id: 'uiux',
      number: '04',
      title: t('services.uiuxTitle'),
      category: t('services.uiuxCat'),
      description: t('services.uiuxDesc'),
      badgeVariant: 'gold',
      capabilities: ['Design System Tokens', 'End-to-End User Journeys', 'Interactive Prototypes', 'Production Developer Handoff'],
    },
    {
      id: 'systems',
      number: '05',
      title: t('services.systemsTitle'),
      category: t('services.systemsCat'),
      description: t('services.systemsDesc'),
      badgeVariant: 'cyan',
      capabilities: ['Custom REST API Layer', 'Role-Based Authentication', 'Database Architecture', 'Payment & Map Integrations'],
    },
    {
      id: 'support',
      number: '06',
      title: t('services.supportTitle'),
      category: t('services.supportCat'),
      description: t('services.supportDesc'),
      badgeVariant: 'emerald',
      capabilities: ['Post-Launch Health Monitoring', 'Store Compliance Updates', 'SLA Bug Remediation', 'Dependency Maintenance'],
    },
  ];

  return (
    <SectionWrapper id="services">
      <Container>
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          lead={t('services.lead')}
          badgeVariant="emerald"
        />

        {/* Engineering Services Matrix Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          {services.map((svc, index) => {
            const isSelected = activeService === index;

            return (
              <SurfacePanel
                key={svc.id}
                interactive
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => setActiveService(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveService(index);
                  }
                }}
                style={{
                  padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  border: isSelected ? '1px solid var(--emerald-border)' : '1px solid var(--border-default)',
                  boxShadow: isSelected ? 'var(--shadow-lg), var(--shadow-glow-emerald)' : 'var(--shadow-md)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top Matrix Index & Category */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      color: isSelected ? 'var(--emerald-text)' : 'var(--text-muted)',
                      fontWeight: 700,
                    }}
                  >
                    SERVICE {svc.number}
                  </span>
                  <TechnicalLabel variant={svc.badgeVariant}>
                    {svc.category}
                  </TechnicalLabel>
                </div>

                {/* Title & Description */}
                <div>
                  <h3
                    style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700,
                      color: isSelected ? 'var(--white)' : 'var(--text-primary)',
                      margin: '0 0 0.5rem 0',
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                      margin: 0,
                    }}
                  >
                    {svc.description}
                  </p>
                </div>

                {/* Structured Engineering Capabilities */}
                <div
                  style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '0.85rem',
                    marginTop: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                  }}
                >
                  {svc.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: isSelected ? 'var(--emerald-text)' : 'var(--border-elevated)',
                          flexShrink: 0,
                        }}
                      />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Action Link to Contact / Pre-fill Service Inquiry */}
                <div style={{ paddingTop: '0.5rem' }}>
                  <Button
                    variant="link"
                    onClick={(e) => {
                      e.stopPropagation();
                      openInquiry({ serviceId: svc.id });
                    }}
                    style={{ fontSize: 'var(--text-xs)' }}
                  >
                    {t('hero.ctaPrimary')}
                  </Button>
                </div>
              </SurfacePanel>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
