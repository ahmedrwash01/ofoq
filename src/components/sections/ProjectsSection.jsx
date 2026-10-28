import { useState } from 'react';
import { useLanguage } from '../../context/useLanguage.js';
import {
  Container,
  SectionWrapper,
  SectionHeading,
  Button,
  TechnicalLabel,
  Interactive3DCanvas,
  Spatial3DCard,
  IPhone16Mockup,
} from '../ui/index.js';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal.jsx';

export function ProjectsSection() {
  const { t, isRtl } = useLanguage();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // 1. Flagship Store Applications
  const grandProjects = [
    {
      id: 'weport',
      number: '01',
      serviceCategory: 'mobile',
      title: t('projects.weportTitle'),
      category: t('projects.weportCat'),
      tagline: t('projects.weportTagline'),
      description: t('projects.weportChallenge'),
      solution: t('projects.weportSolution'),
      image: '/assets/work-weport.webp',
      fallback: '/assets/work-weport.png',
      status: 'APP STORE & GOOGLE PLAY • VERIFIED',
      statusVariant: 'emerald',
      floatingBadge1: isRtl ? '🛡️ محفظة دفع مشروط Escrow آمنة' : '🛡️ Escrow Protected Ledger',
      floatingBadge2: isRtl ? '💬 محادثات مشفرة لحظية WebSockets' : '💬 Sub-120ms E2EE Live Chat',
      metrics: [
        { value: '35,000+', label: isRtl ? 'صفقة شحن ناجحة' : 'Escrow Matches' },
        { value: '0%', label: isRtl ? 'خروقات أو نزاعات دفع' : 'Escrow Breaches' },
        { value: '2 Stores', label: isRtl ? 'معتمد على Apple & Google' : 'iOS & Android' },
      ],
      links: [
        { label: 'App Store', href: 'https://apps.apple.com/eg/app/weport-solutions/id1595639204', icon: '' },
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.weport.solution', icon: '▶' },
      ],
      technologies: ['React Native', 'NestJS Microservices', 'WebSockets / Redis', 'Escrow Payment Engine', 'Firebase FCM', 'Docker'],
      architectureLayers: {
        client: 'React Native & Redux State Engine',
        gateway: 'Kong API Gateway & JWT Auth',
        backend: 'NestJS Microservices & WebSockets',
        data: 'MongoDB Replica Set & Redis Pub/Sub',
      },
    },
    {
      id: 'visgo',
      number: '02',
      serviceCategory: 'mobile',
      title: t('projects.visgoTitle'),
      category: t('projects.visgoCat'),
      tagline: t('projects.visgoTagline'),
      description: t('projects.visgoChallenge'),
      solution: t('projects.visgoSolution'),
      image: '/assets/work-visgo.webp',
      fallback: '/assets/work-visgo.png',
      status: 'STORE & WEB DEPLOYED',
      statusVariant: 'emerald',
      floatingBadge1: isRtl ? '⚡ GPS تتبع ذكي (<3% بطارية)' : '⚡ Background GPS Telemetry (<3%)',
      floatingBadge2: isRtl ? '🗺️ كاش خرائط أوفلاين SQLite' : '🗺️ 100% Offline SQLite Cache',
      metrics: [
        { value: '20,000+', label: isRtl ? 'جولة سياحية منجزة' : 'Tours Completed' },
        { value: '99.9%', label: isRtl ? 'استقرار وجاهزية الخوادم' : 'Uptime SLA' },
        { value: '4.8★', label: isRtl ? 'تقييم متجر التطبيقات' : 'Store Rating' },
      ],
      links: [
        { label: isRtl ? 'الموقع الرسمي' : 'Official Website', href: 'https://visgo.app/', icon: '🌐' },
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.visgo.app', icon: '▶' },
      ],
      technologies: ['Flutter / Dart', 'Mapbox GL SDK', 'Offline SQLite', 'Node.js Express', 'AWS CloudFront CDN', 'Background Geo-Fencing'],
      architectureLayers: {
        client: 'Flutter & Mapbox GL Native SDK',
        gateway: 'CloudFront CDN & NGINX Proxy',
        backend: 'Node.js Express GeoJSON Engine',
        data: 'SQLite Offline Cache & PostgreSQL',
      },
    },
    {
      id: 'wealth',
      number: '03',
      serviceCategory: 'mobile',
      title: t('projects.wealthTitle'),
      category: t('projects.wealthCat'),
      tagline: t('projects.wealthTagline'),
      description: t('projects.wealthChallenge'),
      solution: t('projects.wealthSolution'),
      image: '/assets/work-wealth.webp',
      fallback: '/assets/work-wealth.png',
      status: 'FINTECH • GOOGLE PLAY STORE',
      statusVariant: 'gold',
      floatingBadge1: isRtl ? '⚡ أسعار لحظية <100ms' : '⚡ Sub-100ms Live Ticker',
      floatingBadge2: isRtl ? '🔒 حساب محلي وتشفير أوفلاين' : '🔒 Zero-Cloud Data Privacy',
      metrics: [
        { value: '15,000+', label: isRtl ? 'مستثمر نشط يومياً' : 'Daily Investors' },
        { value: '< 100ms', label: isRtl ? 'زمن البث اللحظي' : 'Feed Latency' },
        { value: '4.9★', label: isRtl ? 'تقييم متجر جوجل بلاي' : 'Store Rating' },
      ],
      links: [
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.wealth.omar', icon: '▶' },
      ],
      technologies: ['Flutter Engine', 'Python FastAPI', 'WebSockets', 'TimescaleDB', 'Encrypted SQLite', 'Financial Algorithms'],
      architectureLayers: {
        client: 'Flutter & Custom Canvas Charts',
        gateway: 'Cloudflare Zero-Trust Edge',
        backend: 'FastAPI Python Socket Worker',
        data: 'TimescaleDB & Local Encrypted SQLite',
      },
    },
  ];

  // 2. Specialized Enterprise Cloud Platforms
  const enterpriseSystems = [
    {
      id: 'nexus',
      serviceCategory: 'systems',
      title: t('projects.nexusTitle'),
      category: t('projects.nexusCat'),
      tagline: t('projects.nexusTagline'),
      description: t('projects.nexusDesc'),
      challenge: t('projects.nexusChallenge'),
      solution: t('projects.nexusSolution'),
      status: 'ENTERPRISE SLA 99.98%',
      statusVariant: 'cyan',
      highlight: isRtl ? '🚚 45k شحنة شهرياً • -22% توفير وقود' : '🚚 45k Monthly Deliveries • -22% Fuel',
      metrics: [
        { value: '120+', label: isRtl ? 'شاحنة تحت الإدارة' : 'Fleet Vehicles' },
        { value: '45k+', label: isRtl ? 'مهمة شهرية' : 'Monthly Trips' },
        { value: '99.98%', label: isRtl ? 'نسبة استقرار SLA' : 'Enterprise SLA' },
      ],
      technologies: ['Golang Microservices', 'Next.js 14', 'Apache Kafka', 'PostgreSQL / PostGIS', 'GIS TSP Routing'],
      architectureLayers: {
        client: 'Next.js 14 & Leaflet GIS Mapping Engine',
        gateway: 'Envoy Proxy & TLS Termination',
        backend: 'Golang Microservices & Apache Kafka',
        data: 'PostGIS Spatial DB & TimescaleDB',
      },
      links: [],
    },
    {
      id: 'qismah',
      serviceCategory: 'web',
      title: t('projects.qismahTitle'),
      category: t('projects.qismahCat'),
      tagline: t('projects.qismahTagline'),
      description: t('projects.qismahDesc'),
      challenge: t('projects.qismahChallenge'),
      solution: t('projects.qismahSolution'),
      status: 'PRODUCTION PLATFORM',
      statusVariant: 'gold',
      highlight: isRtl ? '🔍 بحث فوري < 50ms • جولات 360°' : '🔍 Sub-50ms Faceted Search • 360°',
      metrics: [
        { value: '150k+', label: isRtl ? 'زيارة شهرياً' : 'Monthly Views' },
        { value: '< 50ms', label: isRtl ? 'زمن الاستجابة' : 'Search Latency' },
        { value: '3x', label: isRtl ? 'معدل التحويل' : 'Conversion Rate' },
      ],
      technologies: ['React / Next.js SSR', 'Elasticsearch 8', 'Three.js / WebGL', 'GraphQL APIs', 'AWS Cloud'],
      architectureLayers: {
        client: 'Next.js SSR & Three.js 3D Viewers',
        gateway: 'Cloudflare Edge Cache Workers',
        backend: 'Node.js Express & GraphQL APIs',
        data: 'Elasticsearch 8.x & AWS S3 Storage',
      },
      links: [],
    },
    {
      id: 'pulsecare',
      serviceCategory: 'systems',
      title: t('projects.pulsecareTitle'),
      category: t('projects.pulsecareCat'),
      tagline: t('projects.pulsecareTagline'),
      description: t('projects.pulsecareDesc'),
      challenge: t('projects.pulsecareChallenge'),
      solution: t('projects.pulsecareSolution'),
      status: 'HIPAA COMPLIANT',
      statusVariant: 'emerald',
      highlight: isRtl ? '🔒 مكالمات WebRTC مشفرة E2EE' : '🔒 HIPAA Encrypted WebRTC Video',
      metrics: [
        { value: '10,000+', label: isRtl ? 'جلسة مكتملة' : 'Consultations' },
        { value: '42ms', label: isRtl ? 'تأخير الاتصال' : 'P2P Latency' },
        { value: 'AES-256', label: isRtl ? 'تشفير تام' : 'E2EE Encryption' },
      ],
      technologies: ['WebRTC SFU Engine', 'Python / Django REST', 'React', 'AES-256 E2EE', 'Celery / Redis'],
      architectureLayers: {
        client: 'React & WebRTC Native Video Engine',
        gateway: 'Selective Forwarding Unit (SFU)',
        backend: 'Django REST & Celery Async Workers',
        data: 'Encrypted PostgreSQL & AWS KMS',
      },
      links: [],
    },
  ];

  return (
    <SectionWrapper id="work" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 3D Interactive WebGL / Canvas Universe Background */}
      <Interactive3DCanvas />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          lead={t('projects.lead')}
          badgeVariant="gold"
        />

        {/* GRAND FULL-BLEED ALTERNATING SHOWCASE ROWS */}
        <div className="ofoq-grand-showcase-container">
          {grandProjects.map((p, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={p.id}
                className={`ofoq-grand-row ${isReversed ? 'ofoq-grand-row--reversed' : ''}`}
              >
                {/* Ambient Soft Glow */}
                <div
                  className={`ofoq-row-ambient-glow ${idx % 2 === 0 ? 'ofoq-row-ambient-glow--emerald' : 'ofoq-row-ambient-glow--gold'}`}
                />

                {/* VISUAL COLUMN: Realistic iPhone 16 Pro 3D Mockup */}
                <div className="ofoq-grand-visual-col">
                  <Spatial3DCard maxTilt={10}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
                      {/* Floating Badge Top */}
                      <div className="ofoq-floating-tag ofoq-floating-tag--top" style={{ transform: 'translateZ(35px)' }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4de0bf', boxShadow: '0 0 8px #4de0bf' }} />
                        <span>{p.floatingBadge1}</span>
                      </div>

                      {/* iPhone 16 Pro Hardware Frame */}
                      <IPhone16Mockup
                        src={p.image}
                        alt={p.title}
                        title={p.title}
                        style={{ transform: 'translateZ(18px)' }}
                      />

                      {/* Floating Badge Bottom */}
                      <div className="ofoq-floating-tag ofoq-floating-tag--bottom" style={{ transform: 'translateZ(40px)' }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#cba16a', boxShadow: '0 0 8px #cba16a' }} />
                        <span>{p.floatingBadge2}</span>
                      </div>

                      {/* Mobile Floating Tags Fallback */}
                      <div className="ofoq-floating-tags-mobile">
                        <div className="ofoq-floating-tag">
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4de0bf' }} />
                          <span>{p.floatingBadge1}</span>
                        </div>
                        <div className="ofoq-floating-tag">
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#cba16a' }} />
                          <span>{p.floatingBadge2}</span>
                        </div>
                      </div>
                    </div>
                  </Spatial3DCard>
                </div>

                {/* STORY COLUMN: Narrative, Numbers & Verification */}
                <div className="ofoq-grand-story-col">
                  {/* Big Watermark Number */}
                  <span className="ofoq-watermark-number">{p.number}</span>

                  {/* Badges Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <TechnicalLabel variant={p.statusVariant}>
                      {p.status}
                    </TechnicalLabel>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                      {p.category}
                    </span>
                  </div>

                  {/* Title & Subheading */}
                  <div>
                    <h3 className="ofoq-project-headline">
                      {p.title}
                    </h3>
                    <p className="ofoq-project-subhead">
                      {p.tagline}
                    </p>
                  </div>

                  {/* Engineering Narrative */}
                  <p className="ofoq-project-narrative">
                    {p.description}
                  </p>

                  {/* Luxury Metrics Bar */}
                  <div className="ofoq-luxury-metrics-bar">
                    {p.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="ofoq-luxury-metric">
                        <span className="ofoq-luxury-metric-num">{m.value}</span>
                        <span className="ofoq-luxury-metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="ofoq-tech-pills">
                    {p.technologies.map((tItem, tIdx) => (
                      <span key={tIdx} className="ofoq-tech-pill">
                        {tItem}
                      </span>
                    ))}
                  </div>

                  {/* Verified Links & Deep Dive CTA */}
                  <div className="ofoq-grand-actions">
                    <Button
                      variant="primary"
                      onClick={() => setSelectedCaseStudy(p)}
                      style={{
                        fontSize: 'var(--text-sm)',
                        padding: '0.75rem 1.6rem',
                        minHeight: '2.85rem',
                        boxShadow: '0 4px 25px rgba(28, 93, 78, 0.5)',
                        fontWeight: 700,
                      }}
                    >
                      🔍 {t('projects.caseStudy')}
                    </Button>

                    {p.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ofoq-store-btn"
                      >
                        <span style={{ fontSize: '14px' }}>{link.icon}</span>
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. SPECIALIZED ENTERPRISE PLATFORMS */}
        <div style={{ marginTop: '5rem', marginBottom: '2rem' }}>
          <TechnicalLabel variant="cyan" style={{ marginBottom: '0.5rem' }}>
            {isRtl ? 'أنظمة مؤسسية متقدمة' : 'ENTERPRISE PLATFORMS'}
          </TechnicalLabel>
          <h3 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)', margin: '0.2rem 0' }}>
            {isRtl ? 'منظومات مؤسسية متكاملة وقدرات حوسبة سحابية' : 'Mission-Critical Cloud & Scaled Architectures'}
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.75rem',
          }}
        >
          {enterpriseSystems.map((item) => (
            <Spatial3DCard key={item.id} maxTilt={6}>
              <div
                style={{
                  height: '100%',
                  background: 'rgba(14, 22, 40, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--gold-highlight)',
                      background: 'rgba(203, 161, 106, 0.1)',
                      border: '1px solid rgba(203, 161, 106, 0.25)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontWeight: 700,
                    }}
                  >
                    {item.highlight}
                  </span>
                  <TechnicalLabel variant={item.statusVariant} style={{ fontSize: '9px' }}>
                    {item.status}
                  </TechnicalLabel>
                </div>

                <div>
                  <h4 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: '#fff', margin: '0 0 0.4rem 0' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {item.description}
                  </p>
                </div>

                {/* Quick Specs */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', paddingBlock: '0.6rem', borderBlock: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  {item.metrics.map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '13px', fontWeight: 800, color: '#4de0bf', fontFamily: 'var(--font-display)' }}>{m.value}</span>
                      <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
                  {item.technologies.map((tItem, idx) => (
                    <span key={idx} style={{ fontSize: '10.5px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '4px', padding: '2px 6px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                      {tItem}
                    </span>
                  ))}
                </div>

                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedCaseStudy(item)}
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: 'var(--text-xs)',
                      padding: '0.5rem 1rem',
                      minHeight: '2.4rem',
                      borderColor: 'rgba(77, 224, 191, 0.3)',
                      color: '#fff',
                    }}
                  >
                    🔍 {t('projects.caseStudy')}
                  </Button>
                </div>
              </div>
            </Spatial3DCard>
          ))}
        </div>

        {/* 3. INSTITUTIONAL RIGOR & GUARANTEES */}
        <div
          style={{
            marginTop: '5rem',
            background: 'linear-gradient(135deg, rgba(14, 22, 40, 0.95) 0%, rgba(7, 13, 24, 0.95) 100%)',
            border: '1px solid var(--border-elevated)',
            borderRadius: 'var(--radius-xl, 20px)',
            padding: 'clamp(1.5rem, 4vw, 2.75rem)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div style={{ marginBottom: '1.75rem', textAlign: isRtl ? 'right' : 'left' }}>
            <TechnicalLabel variant="emerald" style={{ marginBottom: '0.5rem' }}>
              {isRtl ? 'المعايير المؤسسية' : 'ENGINEERING STANDARDS'}
            </TechnicalLabel>
            <h3
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                margin: '0.25rem 0 0.5rem 0',
              }}
            >
              {t('projects.guaranteesTitle')}
            </h3>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-secondary)',
                margin: 0,
                maxWidth: '750px',
              }}
            >
              {t('projects.guaranteesLead')}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md, 8px)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div style={{ fontSize: '1.5rem' }}>📦</div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                {t('projects.g1Title')}
              </h4>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {t('projects.g1Desc')}
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md, 8px)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div style={{ fontSize: '1.5rem' }}>🏗️</div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                {t('projects.g2Title')}
              </h4>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {t('projects.g2Desc')}
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md, 8px)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div style={{ fontSize: '1.5rem' }}>🛡️</div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                {t('projects.g3Title')}
              </h4>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {t('projects.g3Desc')}
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md, 8px)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div style={{ fontSize: '1.5rem' }}>⚡</div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                {t('projects.g4Title')}
              </h4>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {t('projects.g4Desc')}
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Case Study Deep Dive Modal */}
      {selectedCaseStudy && (
        <ProjectCaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </SectionWrapper>
  );
}
