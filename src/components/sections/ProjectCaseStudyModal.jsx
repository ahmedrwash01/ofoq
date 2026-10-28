/**
 * OFOQ ARCHITECTURAL CASE STUDY MODAL
 * In-depth technical architecture, system flow diagrams, metrics & engineering breakdown
 */

import { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/useLanguage.js';
import { useInquiry } from '../../context/useInquiry.js';
import { Button, TechnicalLabel } from '../ui/index.js';

export function ProjectCaseStudyModal({ project, onClose }) {
  const { isRtl, t } = useLanguage();
  const { openInquiry } = useInquiry();
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on mount
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 60);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const handleInquireFromProject = () => {
    onClose();
    openInquiry({ serviceId: project.serviceCategory || 'mobile' });
  };

  return (
    <div
      className="ofoq-modal-backdrop"
      onClick={onClose}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.75rem, 3vw, 2.5rem)',
        zIndex: 1050,
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="ofoq-case-study-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Native Drag Handle */}
        <div className="ofoq-modal-drag-handle" />

        {/* Modal Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.08))',
            background: 'rgba(14, 22, 40, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <h2
              id="case-study-title"
              style={{
                fontSize: 'var(--text-xl, 1.35rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: 0,
              }}
            >
              {project.title}
            </h2>
            <TechnicalLabel variant={project.statusVariant || 'emerald'}>
              {project.status || t('projects.verifiedBadge')}
            </TechnicalLabel>
            <span
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--text-muted)',
                borderInlineStart: '1px solid var(--border-default)',
                paddingInlineStart: '0.75rem',
              }}
            >
              {project.category}
            </span>
          </div>

          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label={t('projects.closeModal')}
            className="ofoq-drawer-close-btn"
          >
            ✕
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: 'clamp(1.25rem, 3vw, 2rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >
          {/* Tagline Banner */}
          <div
            style={{
              padding: '1rem 1.25rem',
              borderRadius: 'var(--radius-md, 8px)',
              background: 'linear-gradient(135deg, rgba(28, 93, 78, 0.15) 0%, rgba(203, 161, 106, 0.1) 100%)',
              border: '1px solid rgba(77, 224, 191, 0.25)',
              color: 'var(--text-primary)',
              fontSize: 'var(--text-sm)',
              lineHeight: 'var(--leading-relaxed)',
              fontWeight: 500,
            }}
          >
            {project.tagline || project.description}
          </div>

          {/* High-Impact Performance Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <div
                style={{
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  color: 'var(--gold-highlight, #cba16a)',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                  fontWeight: 600,
                }}
              >
                {t('projects.metricsTitle')}
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.08))',
                      borderRadius: 'var(--radius-md, 8px)',
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'var(--text-xl, 1.4rem)',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      {m.value}
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem vs Solution Split */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* Engineering Challenge */}
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.04)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: 'var(--radius-lg, 12px)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#f87171',
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                <span>⚠️</span>
                <span>{t('projects.challengeTitle')}</span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 'var(--text-sm)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'var(--text-secondary)',
                }}
              >
                {project.challenge}
              </p>
            </div>

            {/* Architecture Solution */}
            <div
              style={{
                background: 'rgba(28, 93, 78, 0.08)',
                border: '1px solid rgba(77, 224, 191, 0.25)',
                borderRadius: 'var(--radius-lg, 12px)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#4de0bf',
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                <span>🛡️</span>
                <span>{t('projects.solutionTitle')}</span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 'var(--text-sm)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'var(--text-secondary)',
                }}
              >
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architectural System Topology Flow Visual */}
          <div>
            <div
              style={{
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.08em',
                color: 'var(--gold-highlight, #cba16a)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                fontWeight: 600,
              }}
            >
              {t('projects.architectureFlow')}
            </div>

            <div
              style={{
                background: 'rgba(11, 18, 32, 0.9)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg, 12px)',
                padding: '1.25rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
                gap: '1rem',
                position: 'relative',
              }}
            >
              {/* Flow Stage 1: Client Layer */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(77, 224, 191, 0.2)',
                  borderRadius: 'var(--radius-md, 8px)',
                  padding: '0.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                <div style={{ fontSize: '10px', color: '#4de0bf', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  01 // CLIENT TIER
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-primary)', fontWeight: 600 }}>
                  {project.architectureLayers?.client || 'Mobile Apps & Responsive Web'}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  State Cache • 60 FPS UI
                </div>
              </div>

              {/* Flow Stage 2: Gateway */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(46, 199, 255, 0.2)',
                  borderRadius: 'var(--radius-md, 8px)',
                  padding: '0.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                <div style={{ fontSize: '10px', color: '#2ec7ff', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  02 // EDGE & GATEWAY
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-primary)', fontWeight: 600 }}>
                  {project.architectureLayers?.gateway || 'Reverse Proxy & Auth'}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Rate Limiting • JWT E2EE
                </div>
              </div>

              {/* Flow Stage 3: Services */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(203, 161, 106, 0.25)',
                  borderRadius: 'var(--radius-md, 8px)',
                  padding: '0.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                <div style={{ fontSize: '10px', color: '#cba16a', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  03 // CORE ENGINES
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-primary)', fontWeight: 600 }}>
                  {project.architectureLayers?.backend || 'Microservices & Worker Queues'}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Event-Driven • Async IO
                </div>
              </div>

              {/* Flow Stage 4: Data Layer */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  borderRadius: 'var(--radius-md, 8px)',
                  padding: '0.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                <div style={{ fontSize: '10px', color: '#c084fc', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  04 // STORAGE & CACHE
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-primary)', fontWeight: 600 }}>
                  {project.architectureLayers?.data || 'PostgreSQL & In-Memory Redis'}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  ACID Safe • Multi-Zone
                </div>
              </div>
            </div>
          </div>

          {/* Full Technology Stack Matrix */}
          <div>
            <div
              style={{
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.08em',
                color: 'var(--gold-highlight, #cba16a)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                fontWeight: 600,
              }}
            >
              {t('projects.stackTitle')}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tItem, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.35rem 0.85rem',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {tItem}
                </span>
              ))}
            </div>
          </div>

          {/* Live External Destination Links */}
          {project.links && project.links.length > 0 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                paddingTop: '0.5rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                {isRtl ? 'الروابط الإنتاجية الموثقة:' : 'Verified Public Links:'}
              </span>
              {project.links.map((link, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 'var(--text-xs)', padding: '0.4rem 1rem', minHeight: '2.25rem' }}
                >
                  ↗ {link.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderTop: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.08))',
            background: 'rgba(14, 22, 40, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--text-primary)' }}>
              {isRtl ? 'هل تخطط لإطلاق مشروع برمجي بنفس القوة؟' : 'Planning a system of similar architectural caliber?'}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              {isRtl ? 'فريقنا الهندسي جاهز لتحليل المتطلبات وتحديد النطاق الفني' : 'Our engineering team is ready to analyze your technical scope'}
            </span>
          </div>

          <Button
            variant="primary"
            onClick={handleInquireFromProject}
            style={{ fontSize: 'var(--text-xs)', minHeight: '2.5rem' }}
          >
            {t('projects.inquireBtn')}
          </Button>
        </div>
      </div>
    </div>
  );
}

