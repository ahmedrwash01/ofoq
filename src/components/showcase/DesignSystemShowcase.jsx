/**
 * OFOQ DESIGN SYSTEM SHOWCASE
 * Visual Test Matrix for Phase 2 Verification
 * Demonstrates Palette, Typography, Motifs, Bilingual RTL/LTR, and Primitives
 */

import { useState, useEffect } from 'react';
import {
  Container,
  SectionWrapper,
  Button,
  TechnicalLabel,
  StatusIndicator,
  SurfacePanel,
  Divider,
  SectionHeading,
  OfoqLogo,
  TechGrid,
  ArchitectureSurface,
  ProjectMediaFrame
} from '../ui/index.js';

export function DesignSystemShowcase() {
  const [lang, setLang] = useState('ar');
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <div className="horizon-ambient" style={{ minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* 1. System Showcase Header */}
      <header 
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          background: 'rgba(7, 11, 22, 0.85)',
          backdropFilter: 'blur(16px)',
          position: 'sticky',
          top: 0,
          zIndex: 50
        }}
      >
        <Container>
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '4.5rem',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <OfoqLogo lang={lang} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <StatusIndicator label={isRtl ? 'نظام التصميم نشط' : 'DESIGN SYSTEM ACTIVE'} />
              
              <Button 
                variant="secondary" 
                onClick={toggleLanguage}
                style={{ padding: '0.45rem 1rem', minHeight: '2.25rem', fontSize: 'var(--text-xs)' }}
              >
                {isRtl ? 'Switch to English (LTR)' : 'التبديل إلى العربية (RTL)'}
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* 2. Overview Banner */}
      <SectionWrapper style={{ paddingTop: '3.5rem', paddingBottom: '2.5rem' }}>
        <Container>
          <TechGrid coordinates="OFOQ // PHASE_2 // VISUAL_FOUNDATION">
            <SurfacePanel elevated style={{ padding: 'clamp(1.5rem, 4vw, 2.75rem)' }}>
              <SectionHeading
                badgeVariant="emerald"
                eyebrow={isRtl ? 'محرك الأفق — هوية هندسة البرمجيات' : 'THE HORIZON ENGINE // ARCHITECTURAL FOUNDATION'}
                title={isRtl ? 'نظام التصميم والهوية البصرية التقنية' : 'Software Engineering Visual Identity'}
                lead={
                  isRtl
                    ? 'الأساس البصري والتقني المعتمد لإعادة بناء منصة أفق. تم دمج ألوان العلامة التجارية الرسمية (الزمردي والذهبي) مع بيئة السيلفر والأوبسيديان المعمارية لتعزيز المصداقية الهندسية.'
                    : 'The visual and technical foundation for the Ofoq digital platform. Unifies the official trademark emerald (#1C5D4E) and gold (#CBA16A) with obsidian spatial depth to communicate sophisticated software architecture.'
                }
              />
              
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginTop: '1.5rem'
                }}
              >
                <Button variant="primary">
                  {isRtl ? 'زر إجراء أساسي (زمردي)' : 'Primary Action (Emerald)'}
                </Button>
                <Button variant="gold">
                  {isRtl ? 'باقة مميزة (ذهبي)' : 'Prestige Tier (Gold)'}
                </Button>
                <Button variant="secondary">
                  {isRtl ? 'زر ثانوي (زجاجي)' : 'Secondary Action'}
                </Button>
                <Button variant="link" href="#primitives">
                  {isRtl ? 'استكشف العناصر' : 'Explore Primitives'}
                </Button>
              </div>
            </SurfacePanel>
          </TechGrid>
        </Container>
      </SectionWrapper>

      <Container>
        <Divider label={isRtl ? 'لوحة الألوان المعتمدة // COLOR_PALETTE' : 'COLOR TOKENS & SYSTEM MATRIX'} />
      </Container>

      {/* 3. Color Token Matrix */}
      <SectionWrapper style={{ paddingBlock: '2rem' }}>
        <Container>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {/* Emerald Core */}
            <SurfacePanel interactive style={{ padding: '1.25rem' }}>
              <div 
                style={{
                  height: '64px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, var(--emerald-raw), #257c69)',
                  border: '1px solid var(--emerald-border)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)'
                }}
              >
                #1C5D4E
              </div>
              <h4 style={{ margin: 0, fontSize: 'var(--text-base)' }}>
                {isRtl ? 'الزمردي الرسمي' : 'Brand Emerald'}
              </h4>
              <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--emerald-text)' }}>
                --emerald-raw / --emerald-text
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <TechnicalLabel variant="emerald">
                  {isRtl ? 'الهوية الهيكلية' : 'BRAND ANCHOR'}
                </TechnicalLabel>
              </div>
            </SurfacePanel>

            {/* Gold Accent */}
            <SurfacePanel interactive style={{ padding: '1.25rem' }}>
              <div 
                style={{
                  height: '64px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, var(--gold-deep), var(--gold-raw))',
                  border: '1px solid var(--gold-border)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#060911',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600
                }}
              >
                #CBA16A
              </div>
              <h4 style={{ margin: 0, fontSize: 'var(--text-base)' }}>
                {isRtl ? 'الذهبي الرسمي' : 'Brand Amber Gold'}
              </h4>
              <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--gold-highlight)' }}>
                --gold-raw / --gold-highlight
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <TechnicalLabel variant="gold">
                  {isRtl ? 'تميز وتمكين' : 'PRESTIGE ACCENT'}
                </TechnicalLabel>
              </div>
            </SurfacePanel>

            {/* Signal Cyan */}
            <SurfacePanel interactive style={{ padding: '1.25rem' }}>
              <div 
                style={{
                  height: '64px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, var(--cyan-deep), var(--cyan-raw))',
                  border: '1px solid var(--cyan-border)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#041018',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600
                }}
              >
                #2EC7FF
              </div>
              <h4 style={{ margin: 0, fontSize: 'var(--text-base)' }}>
                {isRtl ? 'السيان التقني' : 'Technical Signal Cyan'}
              </h4>
              <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--cyan-text)' }}>
                --cyan-raw / --cyan-border
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <TechnicalLabel variant="cyan">
                  {isRtl ? 'إشارات البيانات' : 'DATA TELEMETRY'}
                </TechnicalLabel>
              </div>
            </SurfacePanel>

            {/* Obsidian Canvas */}
            <SurfacePanel interactive style={{ padding: '1.25rem' }}>
              <div 
                style={{
                  height: '64px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-canvas)',
                  border: '1px solid var(--border-elevated)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)'
                }}
              >
                #070B16
              </div>
              <h4 style={{ margin: 0, fontSize: 'var(--text-base)' }}>
                {isRtl ? 'الأوبسيديان المعماري' : 'Obsidian Canvas'}
              </h4>
              <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                --bg-canvas / --bg-elevated
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <TechnicalLabel variant="neutral">
                  {isRtl ? 'العمق المكاني' : 'SPATIAL DEPTH'}
                </TechnicalLabel>
              </div>
            </SurfacePanel>
          </div>
        </Container>
      </SectionWrapper>

      <Container>
        <Divider label={isRtl ? 'النماذج التقنية وتكامل الأنظمة // ARCHITECTURE' : 'TECHNICAL PRIMITIVES & VERIFIED ASSETS'} />
      </Container>

      {/* 4. Technical Architecture Surface & Project Frame Demonstration */}
      <SectionWrapper id="primitives" style={{ paddingBlock: '2rem' }}>
        <Container>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'start'
            }}
          >
            {/* Reusable Architecture Topology Surface */}
            <div>
              <h3 style={{ marginBottom: '1rem', fontSize: 'var(--text-xl)' }}>
                {isRtl ? 'سطح المخطط المعماري' : 'Architecture Substrate'}
              </h3>
              <ArchitectureSurface 
                title={isRtl ? 'طوبولوجيا النظام الرقمي // V2.4' : 'SYSTEM_TOPOLOGY // V2.4'}
                systemStatus={isRtl ? 'مستقر // استجابة سريعة' : 'OPTIMAL // 99.98% SLA'}
              >
                <div 
                  style={{
                    padding: '1.5rem',
                    border: '1px dashed var(--border-default)',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(7, 11, 22, 0.6)'
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                    <TechnicalLabel variant="emerald">
                      {isRtl ? 'تطبيقات الهاتف' : 'MOBILE APPS'}
                    </TechnicalLabel>
                    <TechnicalLabel variant="gold">
                      {isRtl ? 'الواجهات السحابية' : 'REST APIs'}
                    </TechnicalLabel>
                    <TechnicalLabel variant="cyan">
                      {isRtl ? 'قواعد البيانات' : 'DATA REPOSITORY'}
                    </TechnicalLabel>
                  </div>
                  
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0 }}>
                    {isRtl
                      ? 'مساحة هندسية مهيأة لاستضافة رسومات الهيكلية والتكاملات في المرحلة القادمة، مع مؤشرات حية لزمن الاستجابة وبروتوكولات الأمان.'
                      : 'An architectural substrate prepared to host live system topology, API integration flows, and security protocols in Phase 3.'}
                  </p>
                </div>
              </ArchitectureSurface>
            </div>

            {/* Verified Project Media Frame (Visgo) */}
            <div>
              <h3 style={{ marginBottom: '1rem', fontSize: 'var(--text-xl)' }}>
                {isRtl ? 'إطار عرض المشاريع الموثقة' : 'Verified Project Frame'}
              </h3>
              <ProjectMediaFrame
                src="/assets/work-visgo.png"
                alt="Visgo Project Showcase"
                title="Visgo"
                category={isRtl ? 'تطبيق موبايل + ويب' : 'Mobile App & Web'}
                status={isRtl ? 'منشور على المتاجر' : 'STORE_VERIFIED'}
              />
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '0.75rem',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-secondary)'
                }}
              >
                <span>GPS Audio Tour & Tourism Platform</span>
                <Button variant="link" href="https://visgo.app/" target="_blank" rel="noopener noreferrer">
                  {isRtl ? 'زيارة المشروع' : 'Live Platform'}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}
