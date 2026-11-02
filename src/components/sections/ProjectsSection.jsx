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

  // 1. Flagship Production Store Applications
  const grandProjects = [
    {
      id: 'nasia',
      number: '01',
      serviceCategory: 'mobile',
      title: t('projects.nasiaTitle'),
      category: t('projects.nasiaCat'),
      tagline: t('projects.nasiaTagline'),
      description: t('projects.nasiaChallenge'),
      solution: t('projects.nasiaSolution'),
      image: '/assets/projects/nasya-user-screen-1.webp',
      fallback: '/assets/projects/nasya-user-screen-1.webp',
      status: 'GOOGLE PLAY & WEB • PRODUCTION LIVE',
      statusVariant: 'emerald',
      floatingBadge1: isRtl ? '🛒 تطبيق عميل + تطبيق مندوب + منصة ويب' : '🛒 Tri-App Ecosystem (User, Courier, Web)',
      floatingBadge2: isRtl ? '⚡ تتبع GPS فوري وحساب مسافات ديناميكي' : '⚡ Sub-120ms GPS Live Telemetry',
      metrics: [
        { value: '10,000+', label: isRtl ? 'طلب وشحنة منجزة' : 'Orders Fulfilled' },
        { value: '3 Apps', label: isRtl ? 'منظومة متزامنة بالكامل' : 'Synchronized Apps' },
        { value: '99.9%', label: isRtl ? 'جاهزية السيرفرات' : 'System Uptime' },
      ],
      links: [
        { label: 'Google Play (User)', href: 'https://play.google.com/store/apps/details?id=com.fassladev.nasyaUser', icon: '▶' },
        { label: 'Google Play (Courier)', href: 'https://play.google.com/store/apps/details?id=com.fassladev.nasyaDelivery', icon: '🛵' },
        { label: isRtl ? 'الموقع الرسمي' : 'Official Portal', href: 'https://new.nasia-ec.com/', icon: '🌐' },
      ],
      technologies: ['Flutter / Dart', 'Node.js Express', 'WebSockets / Redis', 'Google Maps API', 'Firebase FCM', 'Docker'],
      architectureLayers: {
        client: 'Flutter Reactive State & Geofencing SDK',
        gateway: 'NGINX Reverse Proxy & Rate Limiting',
        backend: 'Node.js / Express Order Engine & WebSockets',
        data: 'PostgreSQL Relational DB & Redis Cache',
      },
    },
    {
      id: 'spring',
      number: '02',
      serviceCategory: 'mobile',
      title: t('projects.springTitle'),
      category: t('projects.springCat'),
      tagline: t('projects.springTagline'),
      description: t('projects.springChallenge'),
      solution: t('projects.springSolution'),
      image: '/assets/projects/spring-customer-screen-1.png',
      fallback: '/assets/projects/spring-customer-screen-1.png',
      status: 'APPLE APP STORE • VERIFIED APPS',
      statusVariant: 'cyan',
      floatingBadge1: isRtl ? ' معتمد على Apple App Store' : ' Live on Apple App Store',
      floatingBadge2: isRtl ? '📍 مطابقة فورية لأقرب كابتن متاح' : '📍 Real-Time Spatial Dispatching',
      metrics: [
        { value: '2 Apps', label: isRtl ? 'تطبيق ركاب + تطبيق كابتن' : 'Dual Store Apps' },
        { value: '< 60ms', label: isRtl ? 'زمن بث إحداثيات الكابتن' : 'GPS Stream Latency' },
        { value: '100%', label: isRtl ? 'امتثال لسياسات Apple' : 'Apple Store Compliance' },
      ],
      links: [
        { label: 'App Store (Customer)', href: 'https://apps.apple.com/eg/app/spring-customer/id6764054345', icon: '' },
        { label: 'App Store (Driver)', href: 'https://apps.apple.com/eg/app/spring-driver/id6764071917', icon: '🚘' },
      ],
      technologies: ['iOS Native / Cross-Platform', 'Mapbox GL / Apple Maps', 'WebSockets / Socket.io', 'NestJS Backend', 'PostGIS Geospatial', 'AWS'],
      architectureLayers: {
        client: 'Native iOS Architecture & Spatial Tracking',
        gateway: 'Cloudflare Zero-Trust & API Gateway',
        backend: 'NestJS Event-Driven Dispatch Service',
        data: 'PostGIS Spatial Engine & Redis Pub/Sub',
      },
    },
    {
      id: 'oryx',
      number: '03',
      serviceCategory: 'mobile',
      title: t('projects.oryxTitle'),
      category: t('projects.oryxCat'),
      tagline: t('projects.oryxTagline'),
      description: t('projects.oryxChallenge'),
      solution: t('projects.oryxSolution'),
      image: '/assets/projects/oryx-app-screen-1.webp',
      fallback: '/assets/projects/oryx-app-screen-1.webp',
      status: 'FINTECH & PROPTECH • STORE & WEB',
      statusVariant: 'gold',
      floatingBadge1: isRtl ? '🏢 استعراض وحجز المشروعات العقارية' : '🏢 High-Yield PropTech Portfolios',
      floatingBadge2: isRtl ? '🔒 حاسبة عوائد وأقساط بنكية مشفرة' : '🔒 Secure Financial Projections',
      metrics: [
        { value: 'EGP Millions', label: isRtl ? 'محافظ مشروعات تحت الإدارة' : 'Project Pipeline' },
        { value: 'Mobile + Web', label: isRtl ? 'تطبيق جوال وبوابة رقمية' : 'Multi-Platform Suite' },
        { value: 'AES-256', label: isRtl ? 'تشفير السجلات والبيانات' : 'Data Encryption' },
      ],
      links: [
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.oryxinvestmentsegypt.oryx', icon: '▶' },
        { label: isRtl ? 'المنصة الرسمية' : 'Live Platform', href: 'https://oryxinvestmentsegypt.com/', icon: '🌐' },
      ],
      technologies: ['Flutter Mobile', 'React / Next.js', 'FastAPI / Node.js', 'PostgreSQL', 'Financial Modeling', 'Docker'],
      architectureLayers: {
        client: 'Flutter Multi-Platform & Next.js Portal',
        gateway: 'Secure TLS Proxy & OAuth2 Authentication',
        backend: 'Modular Financial & Inventory Engine',
        data: 'Encrypted PostgreSQL & Audit Ledger',
      },
    },
  ];

  // 2. Specialized Production Platforms & Enterprise Systems
  const enterpriseSystems = [
    {
      id: 'moviq',
      serviceCategory: 'mobile',
      title: t('projects.moviqTitle'),
      category: t('projects.moviqCat'),
      tagline: t('projects.moviqTagline'),
      description: t('projects.moviqDesc'),
      challenge: t('projects.moviqChallenge'),
      solution: t('projects.moviqSolution'),
      image: '/assets/projects/moviq-driver-screen-1.webp',
      status: 'LOGISTICS & DISPATCH • LIVE',
      statusVariant: 'cyan',
      highlight: isRtl ? '📦 معالجة آلاف الشحنات • إثبات تسليم رقمي' : '📦 Thousands of Deliveries • Digital Proof',
      metrics: [
        { value: 'Offline-1st', label: isRtl ? 'يعمل دون اتصال' : 'Offline Mode' },
        { value: 'Google Play', label: isRtl ? 'معتمد ومنشور' : 'Live on Store' },
        { value: '< 200ms', label: isRtl ? 'سرعة مسح الباركود' : 'Scan Speed' },
      ],
      technologies: ['Flutter / Android', 'SQLite Local DB', 'REST APIs', 'Barcode / QR Scanner', 'Background Location'],
      architectureLayers: {
        client: 'Flutter Offline-First & Camera Scanner',
        gateway: 'TLS API Gateway & Token Auth',
        backend: 'Node.js Dispatch & Webhook Engine',
        data: 'PostgreSQL Relational DB & SQLite Cache',
      },
      links: [
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=info.moviq.driver', icon: '▶' },
      ],
    },
    {
      id: 'drivo',
      serviceCategory: 'web',
      title: t('projects.drivoTitle'),
      category: t('projects.drivoCat'),
      tagline: t('projects.drivoTagline'),
      description: t('projects.drivoDesc'),
      challenge: t('projects.drivoChallenge'),
      solution: t('projects.drivoSolution'),
      image: '/assets/projects/drivo-screen-1.png',
      status: 'SMART MOBILITY • WEB & APP',
      statusVariant: 'emerald',
      highlight: isRtl ? '🚗 رحلات مدن • سفر محافظات • مشاركة سيارات' : '🚗 City Commutes • Carpool • Intercity',
      metrics: [
        { value: '6 Services', label: isRtl ? 'خدمات تنقل في منصة واحدة' : 'Mobility Verticals' },
        { value: 'Live Web', label: isRtl ? 'منصة منشورة ومتاحة' : 'Active Web Platform' },
        { value: 'Instant', label: isRtl ? 'حجز فوري ومجدول' : 'Instant Booking' },
      ],
      technologies: ['Modern Web Architecture', 'Responsive UI/UX', 'Node.js Microservices', 'Route Matching', 'Payment Gateway'],
      architectureLayers: {
        client: 'Next.js & Responsive Mobile Web Shell',
        gateway: 'Cloudflare Edge Cache & DDoS Defense',
        backend: 'Microservices Fleet & Commute Dispatcher',
        data: 'PostgreSQL & Geolocation Coordinates',
      },
      links: [
        { label: isRtl ? 'زيارة الموقع' : 'Official Website', href: 'https://drivoeg.com/', icon: '🌐' },
      ],
    },
    {
      id: 'se7aty',
      serviceCategory: 'systems',
      title: t('projects.se7atyTitle'),
      category: t('projects.se7atyCat'),
      tagline: t('projects.se7atyTagline'),
      description: t('projects.se7atyDesc'),
      challenge: t('projects.se7atyChallenge'),
      solution: t('projects.se7atySolution'),
      image: '/assets/projects/se7aty-screen-3.png',
      status: 'DIGITAL HEALTHCARE • ACTIVE',
      statusVariant: 'gold',
      highlight: isRtl ? '💊 تذكير أدوية دقيق • متابعة عائلية هادئة' : '💊 Exact Medication Alarms • Family Care',
      metrics: [
        { value: '0% Fail', label: isRtl ? 'تنبيهات دقيقة بالدقيقة' : 'Alarm Reliability' },
        { value: '100% Private', label: isRtl ? 'حماية تامة لبيانات المرضى' : 'Patient Privacy' },
        { value: 'Accessible', label: isRtl ? 'سهل جداً لكبار السن' : 'Senior Friendly' },
      ],
      technologies: ['Exact Alarm Architecture', 'React Native / Flutter', 'Encrypted Health Store', 'Push Notifications', 'WCAG Accessibility'],
      architectureLayers: {
        client: 'Accessible Cross-Platform Mobile Client',
        gateway: 'Encrypted Health Ingestion Gateway',
        backend: 'FastAPI Python Medication Engine',
        data: 'Encrypted SQLite & HIPAA-grade Cloud Sync',
      },
      links: [
        { label: isRtl ? 'زيارة المنصة' : 'Official Portal', href: 'https://se7aty.com/', icon: '🌐' },
      ],
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

                {/* VISUAL COLUMN: Clean iPhone 16 Pro 3D Mockup */}
                <div className="ofoq-grand-visual-col">
                  <Spatial3DCard maxTilt={8}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
                      <IPhone16Mockup
                        src={p.image}
                        alt={p.title}
                        title={p.title}
                        style={{ transform: 'translateZ(12px)' }}
                      />
                    </div>
                  </Spatial3DCard>
                </div>

                {/* STORY COLUMN: Clean Editorial Narrative & Metrics */}
                <div className="ofoq-grand-story-col">
                  {/* Eyebrow Status & Category */}
                  <div className="ofoq-project-eyebrow">
                    <span className="ofoq-eyebrow-accent">{p.status}</span>
                    <span style={{ opacity: 0.35 }}>•</span>
                    <span>{p.category}</span>
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

                  {/* Clean Feature Highlights List */}
                  <ul className="ofoq-feature-list">
                    <li className="ofoq-feature-item">
                      <span className="ofoq-feature-bullet" />
                      <span>{p.floatingBadge1}</span>
                    </li>
                    <li className="ofoq-feature-item">
                      <span className="ofoq-feature-bullet" style={{ background: 'var(--gold-highlight)' }} />
                      <span>{p.floatingBadge2}</span>
                    </li>
                  </ul>

                  {/* Open, Unboxed Performance Metrics */}
                  <div className="ofoq-luxury-metrics-bar">
                    {p.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="ofoq-luxury-metric">
                        <span className="ofoq-luxury-metric-num">{m.value}</span>
                        <span className="ofoq-luxury-metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Clean Borderless Technology Tags */}
                  <div className="ofoq-tech-pills">
                    <span className="ofoq-tech-label">{isRtl ? 'التقنيات:' : 'Stack:'}</span>
                    {p.technologies.map((tItem, tIdx) => (
                      <span key={tIdx} className="ofoq-tech-pill">
                        {tItem}
                      </span>
                    ))}
                  </div>

                  {/* Actions & Live Store Links */}
                  <div className="ofoq-grand-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                    <Button
                      variant="primary"
                      onClick={() => setSelectedCaseStudy(p)}
                      style={{
                        fontSize: 'var(--text-sm)',
                        padding: '0.75rem 1.4rem',
                        minHeight: '2.85rem',
                        boxShadow: '0 4px 20px rgba(16, 185, 129, 0.35)',
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
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '0.65rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          fontSize: 'var(--text-xs)',
                          fontWeight: 600,
                          transition: 'background var(--duration-fast)',
                        }}
                      >
                        <span style={{ fontSize: '13px' }}>{link.icon}</span>
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. SPECIALIZED PRODUCTION PLATFORMS */}
        <div style={{ marginTop: '5rem', marginBottom: '2rem' }}>
          <TechnicalLabel variant="cyan" style={{ marginBottom: '0.5rem' }}>
            {isRtl ? 'أنظمة حية ومنصات متخصصة' : 'PRODUCTION PLATFORMS & SUITES'}
          </TechnicalLabel>
          <h3 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)', margin: '0.2rem 0' }}>
            {isRtl ? 'منظومات لوجستية وطبية وتطبيقات نقل ذكي' : 'Logistics, Healthcare & Mobility Architectures'}
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
                  background: 'rgba(23, 36, 64, 0.78)',
                  border: '1px solid rgba(148, 190, 255, 0.14)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.15rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Visual Preview Image */}
                {item.image && (
                  <div
                    style={{
                      width: '100%',
                      height: '160px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      background: '#0d1527',
                      position: 'relative',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(23, 36, 64, 0.9) 0%, transparent 70%)',
                      }}
                    />
                  </div>
                )}

                {/* Eyebrow */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: item.statusVariant === 'emerald' ? 'var(--emerald-text)' : item.statusVariant === 'gold' ? 'var(--gold-highlight)' : 'var(--cyan-text)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.status}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.category}</span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 0.35rem 0' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {item.tagline}
                  </p>
                </div>

                {/* Highlight callout */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '12px',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                  }}
                >
                  {item.highlight}
                </div>

                {/* Unboxed Metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                  {item.metrics.map((m, idx) => (
                    <div key={idx} style={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clean Borderless Technologies */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                  {item.technologies.map((tItem, idx) => (
                    <span key={idx} style={{ fontSize: '11px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)', padding: '2px 8px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                      {tItem}
                    </span>
                  ))}
                </div>

                {/* Actions & Links */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.75rem' }}>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedCaseStudy(item)}
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      fontSize: 'var(--text-xs)',
                      padding: '0.55rem 0.85rem',
                      minHeight: '2.4rem',
                      borderColor: 'rgba(52, 211, 153, 0.3)',
                      color: '#fff',
                    }}
                  >
                    🔍 {t('projects.caseStudy')}
                  </Button>

                  {item.links?.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '0.55rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                      }}
                    >
                      <span>{link.icon}</span>
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Spatial3DCard>
          ))}
        </div>

        {/* 3. INSTITUTIONAL RIGOR & GUARANTEES */}
        <div
          style={{
            marginTop: '5rem',
            background: 'linear-gradient(135deg, rgba(23, 36, 64, 0.95) 0%, rgba(13, 21, 39, 0.95) 100%)',
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
