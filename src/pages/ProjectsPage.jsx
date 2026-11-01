import { useLanguage } from '../context/useLanguage.js';
import { ProjectsSection } from '../components/sections/ProjectsSection.jsx';
import { TrustMetrics } from '../components/sections/TrustMetrics.jsx';
import { ContactCta } from '../components/sections/ContactCta.jsx';
import { Container, TechnicalLabel } from '../components/ui/index.js';

export function ProjectsPage() {
  const { isRtl } = useLanguage();

  return (
    <div style={{ paddingTop: 'clamp(1rem, 3vw, 2.5rem)', paddingBottom: '3rem' }}>
      <Container>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(2rem, 4vw, 3.5rem)' }}>
          <TechnicalLabel variant="emerald">
            {isRtl ? 'سجل الأعمال الهندسية المعتمدة' : 'PROVEN PRODUCTION CASE STUDIES'}
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
            {isRtl ? 'منتجات حقيقية تخدم مئات الآلاف' : 'Production Systems Powering Modern Businesses'}
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
              ? 'تصفح نماذج من الأنظمة والتطبيقات التي صممناها وطورناها لعملائنا في الشرق الأوسط، والمبنية لتتحمل ذروات الاستخدام العالية مع تجربة مستخدم سلسة واستقرار تشغيلي بنسبة 99.9%.'
              : 'Explore production-grade platforms engineered for enterprise resilience, high concurrency, and seamless cross-platform user experience.'}
          </p>
        </div>
      </Container>

      <ProjectsSection />
      <div style={{ margin: 'clamp(2.5rem, 5vw, 4.5rem) 0' }}>
        <TrustMetrics />
      </div>
      <ContactCta />
    </div>
  );
}
