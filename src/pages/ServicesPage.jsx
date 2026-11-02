import { useLanguage } from '../context/useLanguage.js';
import { useInquiry } from '../context/useInquiry.js';
import {
  Container,
  SectionWrapper,
  TechnicalLabel,
  Button,
} from '../components/ui/index.js';
import { ContactCta } from '../components/sections/ContactCta.jsx';

export function ServicesPage() {
  const { t, isRtl } = useLanguage();
  const { openInquiry } = useInquiry();

  const servicesList = [
    {
      id: 'mobile',
      number: '01',
      title: isRtl ? 'هندسة تطبيقات الموبايل (iOS & Android)' : 'Mobile Application Engineering (iOS & Android)',
      tagline: isRtl
        ? 'تطبيقات جوال سريعة، مستقرة، ومعتمدة على App Store و Google Play بأحدث المعايير.'
        : 'High-performance, store-ready cross-platform and native mobile apps engineered for scale.',
      description: isRtl
        ? 'نبني تطبيقات جوال حقيقية تعمل بسلاسة 60 إطاراً في الثانية مع تجربة مستخدم انسيابية. نراعي استهلاك البطارية، دعم العمل دون اتصال بالإنترنت (Offline-First)، والتوافق الكامل مع إرشادات آبل وجوجل للنشر دون أي رفض.'
        : 'We architect production mobile applications delivering fluid 60 FPS interfaces. Optimized for minimal battery consumption, robust offline-first synchronization, and full compliance with Apple and Google store guidelines.',
      features: isRtl
        ? [
            'تطوير هجين عالي الأداء عبر Flutter و React Native',
            'دعم كامل للعمل بدون إنترنت وحفظ البيانات محلياً عبر SQLite مشفر',
            'تتبع GPS في الخلفية وإشعارات لحظية ذكية Push Notifications',
            'تجهيز الحسابات، الأصول، وتسليم ونشر التطبيق على المتاجر رسميًا',
          ]
        : [
            'High-performance cross-platform development via Flutter & React Native',
            'Offline-first architecture with encrypted local SQLite persistence',
            'Background GPS telemetry, biometrics, and intelligent push notifications',
            'End-to-end App Store & Google Play metadata, review, and release execution',
          ],
      stack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase FCM', 'SQLite', 'Mapbox SDK'],
      deliverables: isRtl ? 'كود مصدري كامل 100% • نسختين iOS و Android • حسابات المتاجر' : '100% Source Code • iOS & Android Builds • Store Launch',
    },
    {
      id: 'web',
      number: '02',
      title: isRtl ? 'منصات الويب السحابية وبرمجيات SaaS' : 'Cloud Web Platforms & SaaS Engineering',
      tagline: isRtl
        ? 'منصات ويب تفاعلية فائقة السرعة، متوافقة مع محركات البحث ومبنية لتحمل ملايين الزيارات.'
        : 'Blazing fast, SEO-optimized web platforms and complex SaaS applications built for high concurrency.',
      description: isRtl
        ? 'نصمم ونبرمج منصات الويب الحديثة باستخدام معمارية Server-Side Rendering (SSR) لضمان أعلى درجات السرعة وتصدر نتائج Google (SEO). ندمج بوابات الدفع الإلكتروني، إدارة الاشتراكات الدورية، ولوحات التحكم المتقدمة.'
        : 'We engineer modern web applications leveraging SSR & Edge caching for sub-second page loads and top Core Web Vitals. Fully integrated with payment gateways, subscription billing, and complex operational dashboards.',
      features: isRtl
        ? [
            'تطوير متقدم بـ Next.js و React مع أداء Core Web Vitals 100/100',
            'ربط بوابات الدفع الإلكتروني (Stripe, Paymob, Fawry, Apple Pay)',
            'لوحات تحكم تفاعلية مع رسوم بيانية لحظية وإدارة مستخدمين متعددة الصلاحيات',
            'تهيئة معمارية متكاملة لمحركات البحث (SEO) وخوادم متجاوبة لكافة الأجهزة',
          ]
        : [
            'Next.js & React engineering targeting 100/100 Core Web Vitals',
            'Payment gateway integrations (Stripe, Paymob, Apple Pay, Fawry)',
            'Interactive administrative dashboards with real-time analytics & RBAC',
            'Enterprise technical SEO foundations and multi-device responsive fidelity',
          ],
      stack: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'REST / GraphQL'],
      deliverables: isRtl ? 'منصة ويب متكاملة • لوحة تحكم إدارية • تهيئة SEO • كود مصدري' : 'Full Web Platform • Admin Dashboard • SEO Setup • Full Repository',
    },
    {
      id: 'systems',
      number: '03',
      title: isRtl ? 'الأنظمة المؤسسية، الباك إند وواجهات APIs' : 'Enterprise Backend, APIs & Microservices',
      tagline: isRtl
        ? 'معماريات برمجية موزعة مقاومة للأعطال وبث بيانات لحظي في أجزاء من الثانية.'
        : 'Fault-tolerant distributed backends, streaming event pipelines, and real-time WebSockets.',
      description: isRtl
        ? 'الباك إند هو العمود الفقري لأي مشروع ناجح. نقوم بهندسة خدمات مصغرة (Microservices) بلغات عالية السرعة مثل Golang و Node.js و Python FastAPI، مع قنوات WebSockets و Kafka لمعالجة آلاف الطلبات المتزامنة بنسبة استقرار 99.98%.'
        : 'The backend is the engine of scalable business software. We architect decoupled microservices in Golang, NestJS, and FastAPI, coupled with bidirectional WebSockets and Kafka streaming to handle thousands of concurrent requests with 99.98% uptime.',
      features: isRtl
        ? [
            'بناء خدمات مصغرة (Microservices) بدون أي نقطة انهيار فردية (Zero SPOF)',
            'بث لحظي للبيانات عبر WebSockets و Redis Pub/Sub بتأخير أقل من 45ms',
            'قواعد بيانات موزعة (PostgreSQL, TimescaleDB, MongoDB) مع نسخ احتياطي آلي',
            'حماية شاملة وتشفير تام للبيانات الحساسة (AES-256 E2EE & OAuth 2.0)',
          ]
        : [
            'Decoupled microservices architecture with zero single-point-of-failure',
            'Sub-45ms real-time data streaming via WebSockets & Redis Pub/Sub',
            'Distributed database replication (PostgreSQL, TimescaleDB, MongoDB)',
            'Enterprise security, automated backups, and AES-256 E2EE compliance',
          ],
      stack: ['Golang', 'NestJS', 'Python FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
      deliverables: isRtl ? 'معمارية سحابية كاملة • توثيق Swagger API • خوادم مؤمنة بالكامل' : 'Cloud Architecture • Swagger API Docs • Production Secured Servers',
    },
    {
      id: 'uiux',
      number: '04',
      title: isRtl ? 'تصميم واجهات وتجربة المستخدم (UI/UX Design Systems)' : 'UI/UX Architecture & Design Systems',
      tagline: isRtl
        ? 'تصاميم واجهات عالمية فاخرة مبنية على نظم تصميم موحدة ترفع معدلات التحويل.'
        : 'World-class digital product design and scalable design systems that maximize retention and conversion.',
      description: isRtl
        ? 'التصميم ليس مجرد ألوان وأشكال، بل هو هندسة تفاعل تسهل على المستخدم الوصول لهدفه بأقل عدد من النقرات. ننشئ نظم تصميم متكاملة (Design Systems) في Figma مع أصول جاهزة للتنفيذ البرمجي الدقيق.'
        : 'Design is functional interaction engineering. We build cohesive design systems in Figma complete with design tokens, component variants, and interactive prototypes tailored for high-conversion user journeys.',
      features: isRtl
        ? [
            'دراسة وتحليل سلوك المستخدم ورسم خرائط التدفق (User Flow Diagrams)',
            'بناء نظام تصميم متكامل (Design Tokens, Components, Typography Grid)',
            'نماذج تفاعلية حية (Clickable High-Fidelity Prototypes) للتجربة قبل الكود',
            'تسليم فني دقيق ومفصل للمطورين يشمل كافة الحالات والأبعاد والتفاعلات',
          ]
        : [
            'User journey mapping, persona architecture, and wireframing',
            'Comprehensive design token systems (Colors, Typography, Components)',
            'Clickable high-fidelity prototypes for stakeholder and user validation',
            'Pixel-perfect developer handoff with complete state specifications',
          ],
      stack: ['Figma', 'Design Tokens', 'Interactive Prototyping', 'WCAG Accessibility', 'Framer'],
      deliverables: isRtl ? 'ملف Figma معتمد • مكتبة المكونات الكاملة • النماذج التفاعلية' : 'Complete Figma File • Component Library • Clickable Prototype',
    },
    {
      id: 'desktop',
      number: '05',
      title: isRtl ? 'برمجيات سطح المكتب وأدوات التحكم الداخلية' : 'Desktop Software & Operations Control Panels',
      tagline: isRtl
        ? 'برامج متخصصة لأنظمة Windows و macOS لإدارة العمليات والمخازن وربط الأجهزة.'
        : 'Native desktop software for Windows and macOS for mission-critical operations, POS, and local hardware.',
      description: isRtl
        ? 'للمؤسسات والشركات التي تحتاج برامج سريعة تعمل على أجهزة الكمبيوتر المكتبية، نبني برامج سطح مكتب قوية لإدارة العمليات اللوجستية، الفواتير، ونقاط البيع (POS) مع دعم الطابعات وأجهزة قراءة الباركود والعمل دون إنترنت.'
        : 'For businesses needing high-speed offline desktop utilities, we engineer robust desktop tools for logistics, ERP inventory, POS systems, and direct integration with local hardware peripherals.',
      features: isRtl
        ? [
            'تطبيقات سطح مكتب متوافقة تماماً مع Windows و macOS',
            'دعم الربط مع الأجهزة الطرفية (طابعات الفواتير، أجهزة الباركود، الموازين)',
            'قواعد بيانات محلية سريعة مع مزامنة سحابية تلقائية عند توفر الإنترنت',
            'حماية وتشفير البيانات المحلية دون الاعتماد الإجباري على الاتصال بالشبكة',
          ]
        : [
            'Cross-platform desktop binaries for Windows and macOS',
            'Hardware peripheral drivers (thermal printers, barcode scanners, scales)',
            'Embedded local storage with automatic background cloud sync',
            'Offline-first operational resilience with tamper-proof audit trails',
          ],
      stack: ['Electron', 'Tauri / Rust', 'React', 'SQLite', 'Hardware Drivers'],
      deliverables: isRtl ? 'ملفات تثبيت Windows و macOS • قاعدة بيانات محلية • كود مصدري' : 'Windows & Mac Installers • Local Database • Source Code',
    },
    {
      id: 'devops',
      number: '06',
      title: isRtl ? 'البنية السحابية، DevOps والدعم المستمر (SLA)' : 'Cloud Infrastructure, DevOps & SLA Support',
      tagline: isRtl
        ? 'نشر آمن، خطوط CI/CD مؤتمتة، واستقرار تشغيلي بنسبة 99.98% مع صيانة دورية.'
        : 'Automated CI/CD deployment pipelines, container orchestration, and guaranteed 99.98% SLA support.',
      description: isRtl
        ? 'نضمن لك استمرار منتجك في العمل بكفاءة تامة دون توقف. نقوم بتهيئة خطوط النشر التلقائي (CI/CD)، وتوزيع الخوادم على شبكات سحابية عالمية (AWS / Cloudflare)، وتوفير مراقبة حية لأي أخطاء أو بطء والاستجابة الفورية.'
        : 'We ensure your production systems run with unyielding reliability. Automated deployment pipelines, multi-region cloud clustering, and proactive APM monitoring ensure zero-downtime releases and rapid incident resolution.',
      features: isRtl
        ? [
            'بناء خطوط نشر وتحديث مؤتمتة بالكامل عبر GitHub Actions و Docker',
            'توزيع الأحمال ومقاومة هجمات الـ DDoS عبر شبكة Cloudflare العالمية',
            'مراقبة لحظية للأداء وتنبيهات فورية عند حدوث أي خطأ عبر Sentry و Datadog',
            'عقود دعم فني وتحديثات توافقية دورية مع ترقيات أنظمة التشغيل السنوية',
          ]
        : [
            'Automated CI/CD release pipelines via GitHub Actions & Docker containers',
            'Global CDN caching, SSL termination, and DDoS protection via Cloudflare',
            'Real-time observability and crash reporting via Sentry & Prometheus',
            'Committed SLA maintenance agreements with continuous OS compatibility updates',
          ],
      stack: ['AWS', 'Cloudflare', 'Docker', 'GitHub Actions', 'Sentry', 'Nginx', 'Prometheus'],
      deliverables: isRtl ? 'بنية تحتية سحابية مؤمنة • خطوط CI/CD • عقود صيانة ودعم SLA' : 'Secure Cloud Infrastructure • CI/CD Pipelines • SLA Contract',
    },
  ];

  return (
    <div style={{ paddingTop: 'clamp(2rem, 5vw, 3.5rem)', paddingBottom: '5rem' }}>
      <Container>
        {/* Page Hero Header */}
        <div style={{ textAlign: isRtl ? 'right' : 'left', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <TechnicalLabel variant="emerald">
              {isRtl ? 'الخدمات الهندسية الشاملة' : 'CORE DISCIPLINES'}
            </TechnicalLabel>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
              {isRtl ? 'من الفكرة حتى استقرار الإنتاج' : 'Concept to Production Scale'}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              margin: '0.25rem 0 1rem 0',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            {isRtl ? 'قدراتنا التقنية في هندسة البرمجيات' : 'Full-Spectrum Software Engineering'}
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: '780px',
            }}
          >
            {isRtl
              ? 'لا نكتفي بكتابة الكود؛ بل نبني منظومات رقمية متكاملة تبدأ من دراسة الفكرة وتصميم المعمارية وتجربة الاستخدام وحتى النشر الرسمي على المتاجر والخوادم السحابية مع ضمان الاستقرار والأداء العالي.'
              : 'We architect and build complete software products from initial discovery and schema design to store release and mission-critical cloud hosting with full source code ownership.'}
          </p>
        </div>

        {/* Services In-Depth Showcase */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {servicesList.map((service) => (
            <div
              key={service.id}
              id={service.id}
              style={{
                background: 'linear-gradient(145deg, rgba(23, 36, 64, 0.75) 0%, rgba(13, 21, 39, 0.9) 100%)',
                border: '1px solid rgba(148, 190, 255, 0.14)',
                borderRadius: 'clamp(16px, 2.5vw, 24px)',
                padding: 'clamp(1.75rem, 4vw, 3rem)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: 'clamp(2rem, 4vw, 3.5rem)',
                alignItems: 'center',
                scrollMarginTop: '6rem',
              }}
            >
              {/* Service Info Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-xl)',
                      fontWeight: 800,
                      color: 'var(--emerald-highlight)',
                    }}
                  >
                    {service.number}
                  </span>
                  <span style={{ opacity: 0.3 }}>|</span>
                  <TechnicalLabel variant="neutral" style={{ fontSize: '11px' }}>
                    {isRtl ? 'نطاق إنتاجي معتمد' : 'PRODUCTION SCOPE'}
                  </TechnicalLabel>
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </h2>

                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--emerald-text)',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {service.tagline}
                </p>

                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>

                {/* Tech Stack Chips */}
                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.45rem' }}>
                    {isRtl ? 'الأطر والتقنيات المستخدمة:' : 'PRIMARY TECH STACK:'}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {service.stack.map((st, i) => (
                      <span
                        key={i}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.25rem 0.65rem',
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Features & Deliverables Column */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(148, 190, 255, 0.12)',
                  borderRadius: '16px',
                  padding: 'clamp(1.25rem, 3vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--gold-highlight)', fontWeight: 700 }}>
                  {isRtl ? 'المعايير والمزايا الهندسية المشمولة:' : 'ENGINEERING CAPABILITIES INCLUDED:'}
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: 'var(--emerald-highlight)', fontWeight: 700, marginTop: '2px' }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                  }}
                >
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {isRtl ? 'المخرجات والتسليم:' : 'DELIVERABLES:'}
                  </span>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: '#fff' }}>
                    {service.deliverables}
                  </span>
                </div>

                <Button
                  variant="primary"
                  onClick={() => openInquiry({ serviceId: service.id })}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    fontSize: 'var(--text-xs)',
                    padding: '0.65rem 1.25rem',
                    minHeight: '2.6rem',
                    fontWeight: 700,
                  }}
                >
                  {isRtl ? `طلب دراسة نطاق ${service.title.split('(')[0]}` : `Inquire About ${service.title.split('(')[0]}`}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Guarantees Banner */}
        <div
          style={{
            marginTop: '5rem',
            background: 'linear-gradient(135deg, rgba(23, 36, 64, 0.95) 0%, rgba(13, 21, 39, 0.95) 100%)',
            border: '1px solid var(--border-elevated)',
            borderRadius: 'var(--radius-xl, 20px)',
            padding: 'clamp(1.5rem, 4vw, 2.75rem)',
          }}
        >
          <div style={{ textAlign: isRtl ? 'right' : 'left', marginBottom: '1.75rem' }}>
            <TechnicalLabel variant="emerald" style={{ marginBottom: '0.5rem' }}>
              {isRtl ? 'ضمانات أفق الهندسية' : 'OUR COMMITMENTS'}
            </TechnicalLabel>
            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--text-primary)', margin: '0.25rem 0' }}>
              {isRtl ? 'ما يحصل عليه كل عميل يتعاقد معنا' : 'Institutional Commitments to Every Client'}
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '1.25rem',
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>📦</div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: '#fff', margin: '0 0 0.35rem 0' }}>
                {isRtl ? 'ملكية الكود 100%' : '100% Code Ownership'}
              </h4>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {isRtl ? 'تسليم كامل لمستودع الكود GitHub وكافة الوثائق دون أي حقوق احتكارية.' : 'Full source code repository handover with zero vendor lock-in.'}
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>🛡️</div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: '#fff', margin: '0 0 0.35rem 0' }}>
                {isRtl ? 'اتفاقية سرية (NDA)' : 'Strict NDA Protection'}
              </h4>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {isRtl ? 'حماية تامة لأفكار المشروع وبيانات العملاء قبل بدء أي مناقشات فنية.' : 'Complete confidentiality and non-disclosure legal protection prior to kickoff.'}
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>🚀</div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: '#fff', margin: '0 0 0.35rem 0' }}>
                {isRtl ? 'ضمان القبول بالمتاجر' : 'Store Launch Guarantee'}
              </h4>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {isRtl ? 'متابعة وفحص دوري حتى اعتماد ونشر التطبيق على Google Play و App Store.' : 'Rigorous compliance audits to guarantee smooth Apple and Google store approvals.'}
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>⚡</div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: '#fff', margin: '0 0 0.35rem 0' }}>
                {isRtl ? 'ضمان وصيانة ما بعد الإطلاق' : '30-Day Post-Launch Warranty'}
              </h4>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {isRtl ? 'دعم فني مجاني لمدة 30 يوماً بعد الإطلاق لمعالجة أي طارئ والتأكد من استقرار السيرفرات.' : 'Complimentary post-launch support and bug-fixing warranty after going live.'}
              </p>
            </div>
          </div>
        </div>
      </Container>

      <ContactCta />
    </div>
  );
}

