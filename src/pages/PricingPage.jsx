import { useLanguage } from '../context/useLanguage.js';
import { useInquiry } from '../context/useInquiry.js';
import { PricingSection } from '../components/sections/PricingSection.jsx';
import { ContactCta } from '../components/sections/ContactCta.jsx';
import { Container, SurfacePanel, TechnicalLabel, Button } from '../components/ui/index.js';

export function PricingPage() {
  const { lang, t, isRtl } = useLanguage();
  const { openInquiry } = useInquiry();

  const comparisonRows = [
    {
      featureAr: 'ملكية الشفرة المصدرية (Source Code)',
      featureEn: 'Full 100% Source Code Ownership',
      starter: isRtl ? 'نعم (كاملة)' : 'Yes (100%)',
      growth: isRtl ? 'نعم (كاملة)' : 'Yes (100%)',
      custom: isRtl ? 'نعم + ترخيص حصري' : 'Yes + Exclusive IP',
    },
    {
      featureAr: 'اتفاقية عدم الإفصاح والسرية (NDA)',
      featureEn: 'Mutual Non-Disclosure Agreement (NDA)',
      starter: isRtl ? 'قبل البدء فوراً' : 'Pre-signed',
      growth: isRtl ? 'قبل البدء فوراً' : 'Pre-signed',
      custom: isRtl ? 'شاملة البنود القانونية للشركات' : 'Enterprise SLA & NDA',
    },
    {
      featureAr: 'تصميم واجهة وتجربة المستخدم (Figma)',
      featureEn: 'UI/UX Interactive Figma System',
      starter: isRtl ? 'حتى 10 شاشات' : 'Up to 10 screens',
      growth: isRtl ? 'منظومة تصميم متكاملة' : 'Full Design System',
      custom: isRtl ? 'منظومة متعددة المنصات' : 'Multi-platform Tokens',
    },
    {
      featureAr: 'البنية التحتية والاستضافة السحابية',
      featureEn: 'Cloud Architecture & CI/CD',
      starter: isRtl ? 'إعداد سحابي أساسي' : 'Standard Cloud Setup',
      growth: isRtl ? 'خطوط نشر آلي + Docker' : 'Automated CI/CD & Docker',
      custom: isRtl ? 'Kubernetes / Multi-region' : 'K8s Multi-Region Zero-Downtime',
    },
    {
      featureAr: 'اختبارات الجودة والأمان (QA)',
      featureEn: 'QA, Unit & Integration Testing',
      starter: isRtl ? 'اختبار وظيفي شامل' : 'Core Functional QA',
      growth: isRtl ? 'أمان + اختبار أداء وضغط' : 'Security + Load Testing',
      custom: isRtl ? 'اختبار اختراق وأمان بنكي' : 'Pentesting & High-concurrency',
    },
    {
      featureAr: 'فترة الضمان والصيانة المجانية',
      featureEn: 'Free Warranty & Hypercare Support',
      starter: isRtl ? '30 يوماً بعد الإطلاق' : '30 Days Post-launch',
      growth: isRtl ? '60 يوماً بعد الإطلاق' : '60 Days Post-launch',
      custom: isRtl ? '90 يوماً + عقد صيانة مستمر' : '90 Days + Dedicated SLA',
    },
    {
      featureAr: 'طريقة الدفع وسداد المستحقات',
      featureEn: 'Payment Milestones',
      starter: isRtl ? 'على مرحلتين (50% / 50%)' : '2 Milestones (50% / 50%)',
      growth: isRtl ? 'على 3 مراحل متسلسلة' : '3 Milestones per phase',
      custom: isRtl ? 'دفعات شهرية أو حسب الإنجاز' : 'Milestone-based / Retainer',
    },
  ];

  const pricingFaqs = [
    {
      qAr: 'كيف يتم تسعير المشاريع في استوديو أفق؟',
      qEn: 'How are projects priced at Ofoq Studio?',
      aAr: 'نعتمد تسعيراً شفافاً ثابتاً يعتمد على نطاق العمل الفعلي (Milestone-based Fixed Scope)، مع جدول زمني واضح ومخرجات هندسية متفق عليها مسبقاً، بدون أي تكاليف خفية.',
      aEn: 'We use transparent milestone-based fixed scope pricing, with a defined timeline and tangible architectural deliverables agreed upon upfront, with zero hidden fees.',
    },
    {
      qAr: 'هل أحصل على ملكية كاملة لجميع الأكواد والتصاميم؟',
      qEn: 'Do I get 100% ownership of all source code and design files?',
      aAr: 'نعم تماماً. عند تسليم المشروع وسداد كافة المستحقات، تنتقل إليك ملكية الكود المصدري كاملاً بنسبة 100% مع مستودعات Git، وحسابات النشر السحابي، وملفات Figma الأصلية.',
      aEn: 'Absolutely. Upon project completion, 100% of the source code, Git repositories, cloud deployment credentials, and original Figma assets transfer to your full ownership.',
    },
    {
      qAr: 'ما الذي تتضمنه فترة الضمان والدعم الفني؟',
      qEn: 'What does the warranty and hypercare period include?',
      aAr: 'تتضمن معالجة فورية لأي خلل برمجي أو ثغرة تظهر بعد الإطلاق دون أي تكلفة إضافية، إلى جانب مراقبة أداء الخوادم والتأكد من استقرار المنظومة بالكامل.',
      aEn: 'It includes immediate remediation of any technical defects or bugs post-launch at zero extra charge, alongside server telemetry monitoring and stability assurance.',
    },
    {
      qAr: 'هل يمكن التعديل أو التوسع في المشروع لاحقاً؟',
      qEn: 'Can the product be easily expanded or modified later?',
      aAr: 'هذا هو جوهر عملنا؛ نحن نبني بأنماط Clean Architecture وكود موثق بأعلى المعايير، مما يجعل أي فريق هندسي قادر على قراءة الكود والتوسع فيه بسهولة وسرعة دون إعادة بناء.',
      aEn: 'This is core to our philosophy; we build using Clean Architecture and deeply documented modular code, ensuring any engineering team can scale it smoothly without rewrites.',
    },
  ];

  return (
    <div style={{ paddingTop: 'clamp(1rem, 3vw, 2.5rem)', paddingBottom: '4rem' }}>
      {/* Intro Header */}
      <Container>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2rem, 4vw, 3.5rem)' }}>
          <TechnicalLabel variant="emerald">
            {isRtl ? 'استثمار مدروس ومضمون 100%' : 'TRANSPARENT ENGINEERING INVESTMENT'}
          </TechnicalLabel>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: 'var(--tracking-tight)',
              color: 'var(--text-primary)',
              margin: '1rem 0 1.25rem',
            }}
          >
            {isRtl ? 'خطط استثمارية واضحة بلا مفاجآت' : 'Engineering Packages Built for Predictable ROI'}
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {isRtl
              ? 'تسعير ثابت قائم على معالم إنجاز دقيقة (Milestones). نضمن لك استلام كود نظيف، قابل للتوسع، مع ملكية كاملة بنسبة 100% وضمان تشغيلي معتمد.'
              : 'Fixed-price milestone delivery with zero hidden overheads. Guaranteed clean code, full IP ownership, and dedicated hypercare warranty.'}
          </p>
        </div>
      </Container>

      {/* Main Pricing Cards Component */}
      <PricingSection />

      {/* Feature Comparison Table */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <TechnicalLabel variant="gold">
              {isRtl ? 'مقارنة المزايا الهندسية' : 'ARCHITECTURAL FEATURE MATRIX'}
            </TechnicalLabel>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                margin: '0.75rem 0 0.5rem',
              }}
            >
              {isRtl ? 'ماذا تتضمن كل خطة هندسية؟' : 'Detailed Deliverables Breakdown'}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', margin: 0 }}>
              {isRtl
                ? 'قارن بين باقاتنا الهندسية واختر المسار الأنسب لمرحلة نمو مشروعك'
                : 'Compare technical capabilities and pick the best path for your growth stage'}
            </p>
          </div>

          <div
            style={{
              overflowX: 'auto',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-default)',
              background: 'var(--bg-surface)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: isRtl ? 'right' : 'left',
                minWidth: '650px',
              }}
            >
              <thead>
                <tr style={{ background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid var(--border-default)' }}>
                  <th style={{ padding: '1.25rem 1.5rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                    {isRtl ? 'المعيار / المخرج الهندسي' : 'Deliverable / Capability'}
                  </th>
                  <th style={{ padding: '1.25rem 1.5rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', textAlign: 'center' }}>
                    {isRtl ? 'الأساسية (Starter)' : 'Starter Package'}
                  </th>
                  <th style={{ padding: '1.25rem 1.5rem', color: 'var(--emerald-text)', fontWeight: 700, fontSize: 'var(--text-sm)', textAlign: 'center' }}>
                    {isRtl ? 'النمو (Growth)' : 'Growth Package'}
                  </th>
                  <th style={{ padding: '1.25rem 1.5rem', color: 'var(--cyan-text)', fontWeight: 700, fontSize: 'var(--text-sm)', textAlign: 'center' }}>
                    {isRtl ? 'المؤسسات (Enterprise)' : 'Enterprise / Custom'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: idx === comparisonRows.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                      background: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.01)',
                    }}
                  >
                    <td style={{ padding: '1.15rem 1.5rem', color: 'var(--text-primary)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                      {isRtl ? row.featureAr : row.featureEn}
                    </td>
                    <td style={{ padding: '1.15rem 1.5rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', textAlign: 'center' }}>
                      {row.starter}
                    </td>
                    <td style={{ padding: '1.15rem 1.5rem', color: 'var(--emerald-text)', fontWeight: 600, fontSize: 'var(--text-sm)', textAlign: 'center' }}>
                      {row.growth}
                    </td>
                    <td style={{ padding: '1.15rem 1.5rem', color: 'var(--cyan-text)', fontWeight: 600, fontSize: 'var(--text-sm)', textAlign: 'center' }}>
                      {row.custom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Pricing FAQs */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <Container>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <TechnicalLabel variant="cyan">
                {isRtl ? 'إجابات واضحة' : 'FAQ'}
              </TechnicalLabel>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  margin: '0.75rem 0 0.5rem',
                }}
              >
                {isRtl ? 'الأسئلة الشائعة حول الاستثمار والتعاقد' : 'Frequently Asked Questions'}
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pricingFaqs.map((faq, idx) => (
                <SurfacePanel
                  key={idx}
                  style={{
                    padding: '1.5rem 1.75rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: '0 0 0.65rem 0',
                    }}
                  >
                    {isRtl ? faq.qAr : faq.qEn}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                      margin: 0,
                    }}
                  >
                    {isRtl ? faq.aAr : faq.aEn}
                  </p>
                </SurfacePanel>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactCta />
    </div>
  );
}

