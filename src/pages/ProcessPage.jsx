import { useLanguage } from '../context/useLanguage.js';
import { useInquiry } from '../context/useInquiry.js';
import {
  Container,
  TechnicalLabel,
  Button,
} from '../components/ui/index.js';
import { ContactCta } from '../components/sections/ContactCta.jsx';

export function ProcessPage() {
  const { isRtl } = useLanguage();
  const { openInquiry } = useInquiry();

  const steps = [
    {
      num: '01',
      title: isRtl ? 'الاستكشاف وتوثيق المتطلبات الفنية' : 'Discovery & Technical Requirements Specification',
      phase: isRtl ? 'الأسبوع الأول' : 'Week 1',
      desc: isRtl
        ? 'جلسات مكثفة نفهم فيها أهداف مشروعك التجارية، نحدد طبيعة المستخدمين وسلوكهم، ونوثق النطاق الفني بدقة عبر وثيقة المتطلبات الرسمية (PRD) دون أي غموض أو تكاليف خفية.'
        : 'In-depth scoping workshops to understand your business objectives, map user personas, and draft a structured Product Requirements Document (PRD) defining the exact technical scope.',
      deliverables: isRtl
        ? ['وثيقة النطاق والمتطلبات الرسمية (PRD)', 'خريطة تدفق المستخدم (User Flows)', 'جدول زمني تفصيلي للمراحل والمخرجات']
        : ['Approved PRD Document', 'User Journey Maps', 'Milestone Delivery Roadmap'],
    },
    {
      num: '02',
      title: isRtl ? 'التخطيط والمعمارية البرمجية (UX & Architecture)' : 'UX Architecture & Technical Blueprints',
      phase: isRtl ? 'الأسبوع 1 - 2' : 'Weeks 1 - 2',
      desc: isRtl
        ? 'قبل كتابة أي سطر كود، نرسم هياكل الشاشات التفاعلية (Wireframes) ونحدد المعمارية البرمجية: تصميم مخططات قواعد البيانات (ERD)، عقود واجهات البرمجة (API Contracts)، وهيكل الأمان والتخزين.'
        : 'Before writing production code, we model the software architecture: relational database schemas (ERD), API endpoints contracts, and clickable wireframe screen flows.',
      deliverables: isRtl
        ? ['هياكل الشاشات التفاعلية (Wireframes)', 'مخطط البيانات وعقود الـ APIs', 'المعمارية السحابية ونموذج الأمان']
        : ['Interactive Wireframe Flows', 'Database Schema (ERD) & API Specs', 'Security & Infrastructure Blueprint'],
    },
    {
      num: '03',
      title: isRtl ? 'التصميم التفاعلي وبناء نظام التصميم (UI/UX)' : 'High-Fidelity UI Design & Design Systems',
      phase: isRtl ? 'الأسبوع 2 - 4' : 'Weeks 2 - 4',
      desc: isRtl
        ? 'تحويل الهياكل إلى تصاميم عالمية فاخرة بهوية بصرية متناسقة. نبني نظام تصميم متكامل في Figma ونوفر نموذجاً تفاعلياً حياً على الهاتف لتجربة كل زر وانتقال قبل الانتقال للبرمجة.'
        : 'Transforming wireframes into modern, accessible user interfaces. We build a cohesive design system with design tokens and deliver clickable prototypes validated directly on mobile devices.',
      deliverables: isRtl
        ? ['تصاميم الواجهات كاملة على Figma', 'نظام التصميم (Design System & Tokens)', 'نموذج تفاعلي حي لاختبار التجربة']
        : ['Complete Figma UI Files', 'Design Tokens & Component Library', 'Clickable Prototype Validation'],
    },
    {
      num: '04',
      title: isRtl ? 'الهندسة البرمجية بنظام السبرنتات (Agile Sprints)' : 'Agile Sprint Engineering & Clean Code',
      phase: isRtl ? 'الأسابيع 3 - 8' : 'Weeks 3 - 8',
      desc: isRtl
        ? 'بناء التطبيق والأنظمة بكود معياري نظيف (Clean Architecture). نقسم المشروع إلى سبرنتات أسبوعية مع إرسال روابط تجريبية دورية لترى منتجك يتطور أسبوعاً بعد أسبوع بتنسيق مستمر.'
        : 'Modular implementation adhering to strict Clean Architecture principles. Managed via 1-week agile sprints with continuous staging builds shared directly with you for transparent feedback.',
      deliverables: isRtl
        ? ['روابط تجريبية دورية لاختبار الميزات', 'كود مصدري منظم وموثق على GitHub', 'مراجعات كود صارمة واختبارات تكامل']
        : ['Continuous Staging Preview Builds', 'Documented Source Code on GitHub', 'Peer Code Reviews & Unit Tests'],
    },
    {
      num: '05',
      title: isRtl ? 'فحص الجودة واختبارات الأمان الصارمة (QA & Security)' : 'Automated QA Testing & Store Compliance',
      phase: isRtl ? 'الأسبوع 7 - 9' : 'Weeks 7 - 9',
      desc: isRtl
        ? 'اختبار المنتج على عشرات الهواتف والشاشات المختلفة لضمان سرعة الاستجابة، سد أي ثغرات أمنية، مراجعة استهلاك البيانات والبطارية، وتجهيز أصول وحسابات النشر الرسمي للمتاجر.'
        : 'Comprehensive quality assurance across physical iOS and Android devices. Load testing, security vulnerability remediation, and app store metadata readiness.',
      deliverables: isRtl
        ? ['تقرير فحص الجودة الشامل (QA Report)', 'ملفات النشر الموقعة (AAB و IPA)', 'جاهزية كاملة لاعتماد المتاجر']
        : ['Comprehensive QA Audit Report', 'Signed Release Binaries (AAB/IPA)', 'App Store & Google Play Submission'],
    },
    {
      num: '06',
      title: isRtl ? 'الإطلاق الرسمي وضمان ما بعد الإطلاق (Launch & SLA)' : 'Production Store Launch & 30-Day Warranty',
      phase: isRtl ? 'ما بعد الإطلاق' : 'Post-Launch',
      desc: isRtl
        ? 'نشر التطبيق على Google Play و App Store وخوادم الإنتاج، مع ربط أنظمة تتبع الأعطال والمراقبة الحية، وتقديم دعم فني وصيانة مجانية لمدة 30 يوماً لضمان استقرار المنتج ونموه.'
        : 'Official public release on stores and cloud CDN, integrated with real-time crash monitoring and 30 days of complimentary post-launch support and bug fixing.',
      deliverables: isRtl
        ? ['تطبيقات حية على المتاجر وروابط رسمية', 'تسليم كامل لمستودع الكود 100%', '30 يوماً صيانة ومتابعة مجانية']
        : ['Live Verified Store Deployments', '100% Repository Handover', '30-Day Complimentary Warranty'],
    },
  ];

  return (
    <div style={{ paddingTop: 'clamp(2rem, 5vw, 3.5rem)', paddingBottom: '5rem' }}>
      <Container>
        {/* Page Hero Header */}
        <div style={{ textAlign: isRtl ? 'right' : 'left', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <TechnicalLabel variant="emerald">
              {isRtl ? 'منهجية العمل الهندسية' : 'OUR METHODOLOGY'}
            </TechnicalLabel>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
              {isRtl ? 'انضباط هندسي • التزام بالمواعيد' : 'Engineering Discipline • Zero Delays'}
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
            {isRtl ? 'كيف نحوّل فكرتك إلى منتج إنتاجي ناجح' : 'How We Engineer Digital Products'}
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
              ? 'نتبع مسار عمل هندسي دقيق من 6 مراحل يربط الفكرة بالإطلاق الناجح على المتاجر دون مفاجآت أو تأخير. في كل مرحلة هناك مخرجات موثقة وملموسة تستلمها أولاً بأول.'
              : 'A milestone-driven, disciplined 6-stage engineering process from requirement scoping to verified store release with documented deliverables at every step.'}
          </p>
        </div>

        {/* Timeline Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {steps.map((s, idx) => (
            <div
              key={s.num}
              style={{
                background: 'linear-gradient(145deg, rgba(23, 36, 64, 0.75) 0%, rgba(13, 21, 39, 0.9) 100%)',
                border: '1px solid rgba(148, 190, 255, 0.14)',
                borderRadius: 'clamp(16px, 2vw, 22px)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 'clamp(1.5rem, 3.5vw, 3rem)',
                alignItems: 'flex-start',
              }}
            >
              {/* Number Circle Badge */}
              <div
                style={{
                  width: 'clamp(50px, 8vw, 64px)',
                  height: 'clamp(50px, 8vw, 64px)',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: 'var(--emerald-highlight)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {s.num}
              </div>

              {/* Step Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                    {s.title}
                  </h2>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--gold-highlight)',
                      background: 'rgba(245, 158, 11, 0.12)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 600,
                    }}
                  >
                    {s.phase}
                  </span>
                </div>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
                  {s.desc}
                </p>

                {/* Deliverables Checklist */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '10px',
                    padding: '0.85rem 1.25rem',
                    marginTop: '0.4rem',
                  }}
                >
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    {isRtl ? 'مخرجات هذه المرحلة المسلّمة لك:' : 'DELIVERABLES FOR THIS STAGE:'}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem' }}>
                    {s.deliverables.map((item, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '12px', color: '#fff' }}>
                        <span style={{ color: 'var(--emerald-text)', fontWeight: 700 }}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Transparency Section */}
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
            <TechnicalLabel variant="cyan" style={{ marginBottom: '0.5rem' }}>
              {isRtl ? 'الشفافية وأدوات الإدارة' : 'TOOLING & TRANSPARENCY'}
            </TechnicalLabel>
            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--text-primary)', margin: '0.25rem 0' }}>
              {isRtl ? 'كيف تتواصل وتتابع معنا يومياً؟' : 'Transparent Real-Time Collaboration'}
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: '0.5rem 0 0 0', maxWidth: '720px' }}>
              {isRtl
                ? 'لا نعمل في صندوق مغلق. نمنحك وصولاً مباشراً إلى قنوات المتابعة وتحديثات التطوير لتكون دائماً على دراية بكل خطوة يتم إنجازها.'
                : 'We operate with radical transparency. You receive direct access to progress tracking, staging previews, and milestone deliveries.'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '1rem',
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>💬</div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: '#fff', margin: '0 0 0.25rem 0' }}>
                {isRtl ? 'قناة تواصل مخصصة' : 'Dedicated Channel'}
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {isRtl ? 'مجموعة عمل مباشرة عبر واتساب / Slack مع المهندسين للإجابة الفورية.' : 'Direct Slack/WhatsApp group with engineers for instant communication.'}
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>📱</div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: '#fff', margin: '0 0 0.25rem 0' }}>
                {isRtl ? 'روابط تجريبية حية' : 'Live Staging Builds'}
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {isRtl ? 'تنزيل وتجربة التطبيق أسبوعياً على هاتفك قبل أي إطلاق رسمي.' : 'Weekly internal test builds on TestFlight & Google Play Internal.'}
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>📊</div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: '#fff', margin: '0 0 0.25rem 0' }}>
                {isRtl ? 'لوحة مهام واضحة' : 'Task Milestones'}
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {isRtl ? 'تتبع التقدم خطوة بخطوة ومعرفة الميزات المكتملة والقادمة.' : 'Track roadmap and sprint velocity on Linear / Jira boards.'}
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>🔒</div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: '#fff', margin: '0 0 0.25rem 0' }}>
                {isRtl ? 'مستودع الكود المباشر' : 'GitHub Repository'}
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {isRtl ? 'وصول كامل لمستودع الكود للاطلاع على التحديثات والمراجعات.' : 'Direct repository access to inspect commits and technical documentation.'}
              </p>
            </div>
          </div>
        </div>
      </Container>

      <ContactCta />
    </div>
  );
}

