import { useLanguage } from '../context/useLanguage.js';
import { useInquiry } from '../context/useInquiry.js';
import { ContactCta } from '../components/sections/ContactCta.jsx';
import { Container, SurfacePanel, TechnicalLabel, Button } from '../components/ui/index.js';

export function ContactPage() {
  const { lang, t, isRtl } = useLanguage();
  const { openInquiry } = useInquiry();

  const contactMethods = [
    {
      titleAr: 'محادثة مباشرة عبر واتساب',
      titleEn: 'WhatsApp Direct Chat',
      descAr: 'تحدث فوراً مع مهندس الاستشارات التقنية لمناقشة فكرة مشروعك ومتطلباته.',
      descEn: 'Connect directly with our lead solutions architect for an instant scoping discussion.',
      value: '+20 103 654 4369',
      href: 'https://wa.me/201036544369?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A7%D8%B3%D8%AA%D9%88%D8%AF%D9%8A%D9%88%20%D8%A3%D9%81%D9%82%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%AC%D8%AF%D9%8A%D8%AF',
      actionAr: 'محادثة فورية ↗',
      actionEn: 'Chat Now ↗',
      highlight: 'emerald',
    },
    {
      titleAr: 'البريد الإلكتروني الرسمي',
      titleEn: 'Direct Inquiries Email',
      descAr: 'أرسل لنا وثائق المتطلبات التقنية (RFP / Scope) وسنرد عليك بدراسة أولية خلال 24 ساعة.',
      descEn: 'Send RFPs, technical specifications, or briefs. We respond with a preliminary study within 24 hours.',
      value: 'ofoqtech.info@gmail.com',
      href: 'mailto:ofoqtech.info@gmail.com?subject=New%20Project%20Inquiry%20-%20Ofoq%20Studio',
      actionAr: 'إرسال بريد ↗',
      actionEn: 'Send Email ↗',
      highlight: 'cyan',
    },
    {
      titleAr: 'الاتصال الهاتفي المباشر',
      titleEn: 'Direct Telephone Line',
      descAr: 'متاح للاتصالات العاجلة وحجز جلسات النقاش الفني من الأحد إلى الخميس (9 ص - 6 م).',
      descEn: 'Available for high-priority calls and scheduled consultations (Sun-Thu 9 AM - 6 PM GMT+2).',
      value: '+20 103 654 4369',
      href: 'tel:+201036544369',
      actionAr: 'اتصال مباشر ↗',
      actionEn: 'Call Now ↗',
      highlight: 'gold',
    },
  ];

  const assurancePoints = [
    {
      titleAr: 'اتفاقية سرية معلومات (NDA) معتمدة',
      titleEn: 'Mutual Non-Disclosure Agreement',
      descAr: 'أفكارك وبيانات عملك في أمان تام؛ نوقع اتفاقية سرية ملزمة قبل مشاركة أي تفاصيل حساسة.',
      descEn: 'Your business ideas and proprietary workflows are protected by signed mutual NDA prior to disclosure.',
    },
    {
      titleAr: 'استشارة معمارية مجانية',
      titleEn: 'Free Architectural Scoping Call',
      descAr: 'جلسة عمل مدتها 30 دقيقة مع كبير المهندسين لمراجعة الجدوى التقنية وهيكلية النظام مجاناً.',
      descEn: 'A 30-minute deep architectural consultation with our senior systems engineer with zero obligation.',
    },
    {
      titleAr: 'عرض سعر وجدول زمني دقيق',
      titleEn: 'Deterministic Scope & Timeline',
      descAr: 'لا وعود وهمية أو تكاليف مفتوحة؛ نقدم جدول معالم محدد باليوم وتكلفة ثابتة تضمن راحة بالك.',
      descEn: 'Fixed timeline, milestones, and deliverables breakdown without hidden costs or scope creep.',
    },
  ];

  return (
    <div style={{ paddingTop: 'clamp(1rem, 3vw, 2.5rem)', paddingBottom: '4rem' }}>
      {/* Hero Header */}
      <Container>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
          <TechnicalLabel variant="emerald">
            {isRtl ? 'قنوات الاتصال المباشرة • استجابة خلال 24 ساعة' : 'DIRECT ENGINEERING CHANNELS • 24H SLA'}
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
            {isRtl ? 'لنتحدث عن مشروعك القادم' : "Let's Architect Your Next Breakthrough"}
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              margin: '0 auto 2rem',
            }}
          >
            {isRtl
              ? 'سواء كنت تملك فكرة ناشئة ترغب في تحويلها لتطبيق عالمي، أو شركة بحاجة لتطوير بنية تحتية رقمية معقدة، فريقنا الهندسي جاهز لمساعدتك.'
              : 'Whether you are launching a high-growth startup or upgrading mission-critical enterprise systems, our engineering team is ready to deliver.'}
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={() => openInquiry()}
            style={{ padding: '0.9rem 2rem', fontSize: 'var(--text-base)' }}
          >
            {isRtl ? 'فتح نموذج طلب المشروع السريع ↗' : 'Launch Project Scoping Form ↗'}
          </Button>
        </div>
      </Container>

      {/* Direct Contact Cards */}
      <section style={{ padding: 'clamp(1.5rem, 4vw, 3rem) 0' }}>
        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {contactMethods.map((m, idx) => (
              <SurfacePanel
                key={idx}
                style={{
                  padding: '2rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-default)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  transition: 'border-color var(--duration-fast), transform var(--duration-fast)',
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
                    {isRtl ? m.titleAr : m.titleEn}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                      margin: '0 0 1rem 0',
                    }}
                  >
                    {isRtl ? m.descAr : m.descEn}
                  </p>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 600,
                      color: m.highlight === 'emerald' ? 'var(--emerald-text)' : m.highlight === 'cyan' ? 'var(--cyan-text)' : 'var(--gold-highlight)',
                    }}
                  >
                    {m.value}
                  </div>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      padding: '0.5rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      textDecoration: 'none',
                      transition: 'background var(--duration-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)')}
                  >
                    {isRtl ? m.actionAr : m.actionEn}
                  </a>
                </div>
              </SurfacePanel>
            ))}
          </div>
        </Container>
      </section>

      {/* Assurance / Why Reach Out Section */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <TechnicalLabel variant="cyan">
              {isRtl ? 'ضمانات البدء' : 'CLIENT ASSURANCES'}
            </TechnicalLabel>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                margin: '0.75rem 0 0.5rem',
              }}
            >
              {isRtl ? 'ما الذي تتوقعه عند التواصل معنا؟' : 'What Happens When You Reach Out'}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {assurancePoints.map((item, idx) => (
              <SurfacePanel
                key={idx}
                style={{
                  padding: '2rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-default)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--emerald-text)',
                    marginBottom: '0.75rem',
                  }}
                >
                  GUARANTEE 0{idx + 1}
                </div>
                <h3
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: '0 0 0.5rem 0',
                  }}
                >
                  {isRtl ? item.titleAr : item.titleEn}
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
              </SurfacePanel>
            ))}
          </div>
        </Container>
      </section>

      {/* Cairo HQ & Global Operations Card */}
      <section style={{ padding: 'clamp(1rem, 3vw, 2.5rem) 0' }}>
        <Container>
          <SurfacePanel
            style={{
              padding: '2.5rem',
              background: 'radial-gradient(ellipse at top left, rgba(28, 93, 78, 0.15) 0%, rgba(14, 22, 40, 0.9) 70%)',
              border: '1px solid var(--border-default)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div>
              <TechnicalLabel variant="emerald">
                {isRtl ? 'المقر الرئيسي والعمليات' : 'HEADQUARTERS & TIMEZONE'}
              </TechnicalLabel>
              <h3
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  margin: '0.75rem 0 0.5rem',
                }}
              >
                {isRtl ? 'استوديو أفق • القاهرة، جمهورية مصر العربية' : 'Ofoq Studio • Cairo, Egypt'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
                {isRtl
                  ? 'نعمل بتوقيت القاهرة (GMT+2) مع تغطية متزامنة لمنطقة الخليج العربي وشمال إفريقيا، ونقدم دعماً وتواصلاً تقنياً فورياً عبر منصات Slack و Teams و WhatsApp.'
                  : 'Operating in Cairo (GMT+2) with live overlap for GCC and EMEA clients. Real-time engineering sync via dedicated Slack, Teams, and WhatsApp channels.'}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)' }}>TIMEZONE</span>
                <span style={{ color: 'var(--text-primary)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>Cairo (UTC+2)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)' }}>RESPONSE SLA</span>
                <span style={{ color: 'var(--emerald-text)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>&lt; 24 Hours</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)' }}>ENGAGEMENT</span>
                <span style={{ color: 'var(--cyan-text)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>Fixed / Dedicated Team</span>
              </div>
            </div>
          </SurfacePanel>
        </Container>
      </section>

      <ContactCta />
    </div>
  );
}

