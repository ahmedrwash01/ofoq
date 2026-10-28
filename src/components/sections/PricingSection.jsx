import { useLanguage } from '../../context/useLanguage.js';
import { useInquiry } from '../../context/useInquiry.js';
import {
  Container,
  SectionWrapper,
  SectionHeading,
  TechnicalLabel,
  Button,
} from '../ui/index.js';

export function PricingSection() {
  const { t } = useLanguage();
  const { selectedPackage, setSelectedPackage, openInquiry } = useInquiry();

  const packages = [
    {
      id: 'starter',
      name: t('pricing.starter.name'),
      tag: t('pricing.starter.tag'),
      price: t('pricing.starter.price'),
      timeline: t('pricing.starter.timeline'),
      desc: t('pricing.starter.desc'),
      isRecommended: false,
      badge: null,
      features: [
        t('pricing.starter.feat1'),
        t('pricing.starter.feat2'),
        t('pricing.starter.feat3'),
        t('pricing.starter.feat4'),
      ],
      ctaLabel: t('pricing.inquireWith'),
    },
    {
      id: 'growth',
      name: t('pricing.growth.name'),
      tag: t('pricing.growth.tag'),
      price: t('pricing.growth.price'),
      timeline: t('pricing.growth.timeline'),
      desc: t('pricing.growth.desc'),
      isRecommended: true,
      badge: t('pricing.growth.badge'),
      features: [
        t('pricing.growth.feat1'),
        t('pricing.growth.feat2'),
        t('pricing.growth.feat3'),
        t('pricing.growth.feat4'),
        t('pricing.growth.feat5'),
      ],
      ctaLabel: t('pricing.inquireWith'),
    },
    {
      id: 'custom',
      name: t('pricing.custom.name'),
      tag: t('pricing.custom.tag'),
      price: t('pricing.custom.price'),
      timeline: t('pricing.custom.timeline'),
      desc: t('pricing.custom.desc'),
      isRecommended: false,
      badge: null,
      features: [
        t('pricing.custom.feat1'),
        t('pricing.custom.feat2'),
        t('pricing.custom.feat3'),
        t('pricing.custom.feat4'),
        t('pricing.custom.feat5'),
      ],
      ctaLabel: t('pricing.discussCustom'),
    },
  ];

  const handleCardClick = (pkgId) => {
    setSelectedPackage(pkgId);
  };

  const handleInquireClick = (e, pkgId) => {
    e.stopPropagation();
    openInquiry({ packageId: pkgId });
  };

  return (
    <SectionWrapper id="pricing" style={{ paddingBlock: 'clamp(3.5rem, 7vw, 6rem)' }}>
      {/* Backwards-compatibility anchor for #packages */}
      <span id="packages" style={{ position: 'absolute', top: '-80px' }} aria-hidden="true" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          eyebrow={t('pricing.eyebrow')}
          title={t('pricing.title')}
          lead={t('pricing.lead')}
          align="center"
          badgeVariant="emerald"
        />

        {/* Pricing Cards Grid */}
        <div className="ofoq-pricing-grid" role="list">
          {packages.map((pkg) => {
            const isSelected = selectedPackage === pkg.id;
            const cardClasses = [
              'ofoq-pricing-card',
              'focus-ring',
              pkg.isRecommended ? 'ofoq-pricing-card--recommended' : '',
              isSelected ? 'ofoq-pricing-card--selected' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <div
                key={pkg.id}
                role="listitem"
                tabIndex={0}
                className={cardClasses}
                onClick={() => handleCardClick(pkg.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(pkg.id);
                  }
                }}
                aria-current={isSelected ? 'true' : undefined}
              >
                {/* Card Top: Badges and Title */}
                <div>
                  <div className="ofoq-pricing-badge-row">
                    <TechnicalLabel variant={pkg.isRecommended ? 'gold' : 'neutral'}>
                      {pkg.tag}
                    </TechnicalLabel>

                    {pkg.badge && (
                      <TechnicalLabel variant="gold">
                        ★ {pkg.badge}
                      </TechnicalLabel>
                    )}

                    {isSelected && !pkg.badge && (
                      <TechnicalLabel variant="emerald">
                        ✓ {t('pricing.selected')}
                      </TechnicalLabel>
                    )}
                  </div>

                  <h3 className="ofoq-pricing-title">{pkg.name}</h3>
                  <p className="ofoq-pricing-desc">{pkg.desc}</p>

                  {/* Price Rate & Timeline */}
                  <div className="ofoq-pricing-rate">
                    {pkg.id !== 'custom' && (
                      <span className="ofoq-pricing-from">{t('pricing.from')}</span>
                    )}
                    <span
                      className={`ofoq-pricing-amount ${
                        pkg.isRecommended ? 'ofoq-pricing-amount--gold' : ''
                      }`}
                    >
                      {pkg.price}
                    </span>
                  </div>

                  <div className="ofoq-pricing-timeline-pill">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{pkg.timeline}</span>
                  </div>

                  {/* Feature Inclusions */}
                  <ul className="ofoq-pricing-features">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="ofoq-pricing-feature-item">
                        <span
                          className={`ofoq-pricing-feature-icon ${
                            pkg.isRecommended ? 'ofoq-pricing-feature-icon--gold' : ''
                          }`}
                          aria-hidden="true"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions Footer */}
                <div className="ofoq-pricing-actions">
                  <button
                    type="button"
                    className={`ofoq-pricing-select-btn focus-ring ${
                      isSelected ? 'ofoq-pricing-select-btn--active' : ''
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(pkg.id);
                    }}
                    aria-pressed={isSelected}
                  >
                    <span>{isSelected ? `✓ ${t('pricing.selected')}` : t('pricing.selectPackage')}</span>
                  </button>

                  <Button
                    variant={pkg.isRecommended ? 'gold' : 'primary'}
                    onClick={(e) => handleInquireClick(e, pkg.id)}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {pkg.ctaLabel}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Transparency Footnote */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(18, 26, 46, 0.45)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            textAlign: 'center',
          }}
        >
          <span style={{ color: 'var(--emerald-text)', flexShrink: 0 }} aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </span>
          <p
            style={{
              margin: 0,
              fontSize: 'var(--text-xs)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--leading-normal)',
            }}
          >
            {t('pricing.note')}
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
