import { useLanguage } from '../context/useLanguage.js';
import { useInquiry } from '../context/useInquiry.js';
import { AboutSection } from '../components/sections/AboutSection.jsx';
import { TrustMetrics } from '../components/sections/TrustMetrics.jsx';
import { ContactCta } from '../components/sections/ContactCta.jsx';
import { Container, SurfacePanel, TechnicalLabel, Button } from '../components/ui/index.js';

export function AboutPage() {
  const { lang, isRtl } = useLanguage();
  const { openInquiry } = useInquiry();

  const teamDisciplines = [
    {
      roleAr: 'هندسة النظم والبنية التحتية',
      roleEn: 'Systems & Cloud Architecture',
      descAr: 'تصميم أنظمة موزعة عالية التوفر (High-Availability)، قواعد بيانات موثوقة (PostgreSQL / Redis)، وهياكل خالية من نقاط الفشل الفردية (Zero SPOF).',
      descEn: 'Architecting fault-tolerant distributed systems, multi-region database clusters, and zero-single-point-of-failure cloud backbones.',
      tags: ['PostgreSQL', 'Docker', 'Kubernetes', 'Redis', 'AWS / Cloudflare'],
    },
    {
      roleAr: 'هندسة تطبيقات الهواتف الذكية',
      roleEn: 'Mobile Systems Engineering',
      descAr: 'تطوير تطبيقات iOS و Android بأداء 60/120 FPS مع بنية عمل بلا اتصال (Offline-first) وتزامن فوري مشفر للبيانات.',
      descEn: 'Native iOS & Android engineering running at 60/120 FPS, offline-first sync engines, and encrypted end-to-end telemetry.',
      tags: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Offline-First'],
    },
    {
      roleAr: 'هندسة الواجهات وتجربة المستخدم',
      roleEn: 'Frontend & UI/UX Product Design',
      descAr: 'واجهات فائقة النقاء والاستجابة، مع أنظمة تصميم تفاعلية (Design Systems) تركز على سرعة التحميل وسهولة الاستخدام وإمكانية الوصول العالمية.',
      descEn: 'Ultra-responsive frontend interfaces backed by cohesive Figma design systems, micro-interactions, and WCAG accessibility standards.',
      tags: ['React', 'Next.js', 'Figma Tokens', 'Tailwind', 'Web Vitals'],
    },
    {
      roleAr: 'ضمان الجودة واختبارات الأمان',
      roleEn: 'QA, Security & CI/CD Pipelines',
      descAr: 'خطوط فحص آلي تغطي Unit و Integration و Load Testing، مع اختبارات أمان واختراق استباقية لضمان ثبات النظام تحت أقصى ضغط.',
      descEn: 'Automated test suites covering unit, integration, and high-concurrency load testing with strict vulnerability audits.',
      tags: ['CI/CD', 'Jest / Cypress', 'OWASP Top 10', 'Grafana', 'Sentry'],
    },
  ];

  const corePrinciples = [
    {
      num: '01',
      titleAr: 'هندسة نظيفة قابلة للتوسع (Clean Architecture)',
      titleEn: 'Decoupled Clean Architecture',
      descAr: 'نفصل منطق الأعمال (Business Logic) تماماً عن طبقات العرض والواجهات. النتيجة هي كود يسهل اختباره، صيانته، والتوسع فيه عبر السنوات.',
      descEn: 'Business logic is strictly decoupled from presentation and infrastructure, making the codebase long-term maintainable and audit-proof.',
    },
    {
      num: '02',
      titleAr: 'الاعتمادية والعمل المستمر (Zero SPOF)',
      titleEn: 'Zero Single Point of Failure',
      descAr: 'نصمم كل مسار حرج في التطبيق ليتعامل مع الانقطاعات المفاجئة بأمان دون توقف كامل للخدمة، مع خطط استعادة فورية (Failover & Resilience).',
      descEn: 'Every critical system path handles sudden network or server degradation gracefully with automatic failover and data persistence.',
    },
    {
      num: '03',
      titleAr: 'الملكية والشفافية الكاملة (100% IP Ownership)',
      titleEn: '100% Full Client Ownership',
      descAr: 'المشروع ملك لك بنسبة 100%. تحصل على كافة مستودعات الكود المصدري، حسابات السحابة، والتوثيق التقني المفصل بلا قيود أو احتكار.',
      descEn: 'You own every line of code, repository, credential, and design system. Zero lock-in, full autonomy from day one.',
    },
    {
      num: '04',
      titleAr: 'سرعة الإطلاق دون التضحية بالصلابة',
      titleEn: 'Velocity Without Technical Debt',
      descAr: 'نجمع بين سرعة تسليم المعالم (Milestones) المحددة والتطبيق الصارم للممارسات الهندسية الفضلى لضمان عدم تراكم أي ديون تقنية.',
      descEn: 'We deliver rapid milestone increments backed by automated test suites to ensure speed never compromises enterprise stability.',
    },
  ];

  return (
    <div style={{ paddingTop: 'clamp(1rem, 3vw, 2.5rem)', paddingBottom: '4rem' }}>
      {/* Intro Hero Header */}
      <Container>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
          <TechnicalLabel variant="emerald">
            {isRtl ? 'استوديو أفق للهندسة الرقمية • القاهرة' : 'OFOQ DIGITAL STUDIO • CAIRO HQ'}
          </TechnicalLabel>
          <h1
            style={{
              fontSize: 'clamp(2.1rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: 'var(--tracking-tight)',
              color: 'var(--text-primary)',
              margin: '1.25rem 0 1.25rem',
            }}
          >
            {isRtl ? 'نبني برمجيات تليق بالشركات الطموحة' : 'Architecting Digital Products Built to Scale'}
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {isRtl
              ? 'أفق هو استوديو هندسي متخصص في بناء الأنظمة الرقمية وتطبيقات الهواتف والويب فائقة الأداء. نلتزم بأعلى معايير هندسة البرمجيات العالمية ونحول الأفكار المعقدة إلى منتجات تقنية صلبة ومستقرة.'
              : 'Ofoq is an engineering studio crafting high-velocity mobile and enterprise web platforms. We bridge rigorous architectural standards with world-class user experience.'}
          </p>
        </div>
      </Container>

      {/* Core About Section Component */}
      <AboutSection />

      {/* Trust Metrics */}
      <div style={{ margin: 'clamp(2.5rem, 5vw, 4.5rem) 0' }}>
        <TrustMetrics />
      </div>

      {/* Engineering Principles */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <TechnicalLabel variant="cyan">
              {isRtl ? 'فلسفتنا الهندسية' : 'ENGINEERING PHILOSOPHY'}
            </TechnicalLabel>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                margin: '0.75rem 0 0.5rem',
              }}
            >
              {isRtl ? 'المبادئ التي تحكم كل سطر كود نكتبه' : 'Core Principles Behind Every Line of Code'}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {corePrinciples.map((p, idx) => (
              <SurfacePanel
                key={idx}
                style={{
                  padding: '2rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-default)',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 800,
                    color: 'var(--emerald-text)',
                    lineHeight: 1,
                  }}
                >
                  {p.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: '0 0 0.5rem 0',
                    }}
                  >
                    {isRtl ? p.titleAr : p.titleEn}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                      margin: 0,
                    }}
                  >
                    {isRtl ? p.descAr : p.descEn}
                  </p>
                </div>
              </SurfacePanel>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Disciplines Grid */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <TechnicalLabel variant="gold">
              {isRtl ? 'فريق العمل والتخصصات' : 'SPECIALIZED DISCIPLINES'}
            </TechnicalLabel>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                margin: '0.75rem 0 0.5rem',
              }}
            >
              {isRtl ? 'كفاءات هندسية متكاملة تحت سقف واحد' : 'Engineers, Architects & Designers'}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {teamDisciplines.map((item, idx) => (
              <SurfacePanel
                key={idx}
                style={{
                  padding: '2rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-default)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: '0 0 0.5rem 0',
                    }}
                  >
                    {isRtl ? item.roleAr : item.roleEn}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                      margin: 0,
                    }}
                  >
                    {isRtl ? item.descAr : item.descEn}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 'var(--text-2xs)',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SurfacePanel>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </div>
  );
}

