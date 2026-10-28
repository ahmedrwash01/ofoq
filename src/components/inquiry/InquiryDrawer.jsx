import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/useLanguage.js';
import { useInquiry } from '../../context/useInquiry.js';
import { composeInquiryMessage } from '../../utils/inquirySynthesis.js';
import { TechnicalLabel } from '../ui/index.js';

function InquiryDrawerContent() {
  const { lang, isRtl, t } = useLanguage();
  const { closeInquiry, selectedPackage, setSelectedPackage, selectedService } = useInquiry();

  // Form local state initialized cleanly from context upon mount
  const [formPkg, setFormPkg] = useState(selectedPackage || '');
  const [formService, setFormService] = useState(selectedService || '');
  const [formDesc, setFormDesc] = useState('');
  const [formBudget, setFormBudget] = useState('');
  const [formName, setFormName] = useState('');

  // Validation state
  const [serviceError, setServiceError] = useState('');
  const [descError, setDescError] = useState('');

  // Fallback direct links
  const [generatedLinks, setGeneratedLinks] = useState(null);

  // Focus management references
  const drawerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const previousActiveElementRef = useRef(null);

  useEffect(() => {
    previousActiveElementRef.current = document.activeElement;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus first element on mount
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
      if (previousActiveElementRef.current && typeof previousActiveElementRef.current.focus === 'function') {
        previousActiveElementRef.current.focus();
      }
    };
  }, []);

  // Handle Escape key and focus trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeInquiry();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = drawerRef.current?.querySelectorAll(
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
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeInquiry]);

  // 6 Services List
  const serviceOptions = [
    { id: 'mobile', label: t('services.mobileTitle') },
    { id: 'web', label: t('services.webTitle') },
    { id: 'desktop', label: t('services.desktopTitle') },
    { id: 'uiux', label: t('services.uiuxTitle') },
    { id: 'systems', label: t('services.systemsTitle') },
    { id: 'support', label: t('services.supportTitle') },
  ];

  // 5 Budget Guidance Ranges
  const budgetOptions = [
    { id: 'under500', label: t('inquiry.budgetOpt1') },
    { id: '500-1500', label: t('inquiry.budgetOpt2') },
    { id: '1500-3500', label: t('inquiry.budgetOpt3') },
    { id: '3500plus', label: t('inquiry.budgetOpt4') },
    { id: 'flexible', label: t('inquiry.budgetOpt5') },
  ];

  // Package lookup helpers
  const getPackageDetails = (pkgId) => {
    if (pkgId === 'starter') {
      return { label: t('pricing.starter.name'), price: t('pricing.starter.price') };
    }
    if (pkgId === 'growth') {
      return { label: t('pricing.growth.name'), price: t('pricing.growth.price') };
    }
    if (pkgId === 'custom') {
      return { label: t('pricing.custom.name'), price: t('pricing.custom.price') };
    }
    return { label: t('inquiry.packageGeneral'), price: '' };
  };

  const validateForm = () => {
    let isValid = true;
    if (!formService) {
      setServiceError(t('inquiry.valServiceRequired'));
      isValid = false;
    } else {
      setServiceError('');
    }

    if (!formDesc || formDesc.trim().length < 10) {
      setDescError(t('inquiry.valDescRequired'));
      isValid = false;
    } else {
      setDescError('');
    }

    return isValid;
  };

  const handleSelectPackage = (pkgId) => {
    setFormPkg(pkgId);
    setSelectedPackage(pkgId);
  };

  const generateInquiryData = () => {
    const pkgDetails = getPackageDetails(formPkg);
    const matchedService = serviceOptions.find((s) => s.id === formService);
    const matchedBudget = budgetOptions.find((b) => b.id === formBudget);

    return composeInquiryMessage({
      lang,
      packageLabel: formPkg ? pkgDetails.label : null,
      packagePrice: formPkg ? pkgDetails.price : null,
      serviceLabel: matchedService ? matchedService.label : formService,
      projectDescription: formDesc,
      budgetLabel: matchedBudget ? matchedBudget.label : null,
      contactName: formName,
      t,
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = generateInquiryData();
    setGeneratedLinks(data);

    // Open WhatsApp in a new tab safely
    window.open(data.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = generateInquiryData();
    setGeneratedLinks(data);

    // Launch mailto handler
    window.location.href = data.mailtoUrl;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="ofoq-modal-backdrop"
        onClick={closeInquiry}
        aria-hidden="true"
      />

      {/* Drawer Dialog */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
        className="ofoq-drawer"
      >
        {/* Header */}
        <div className="ofoq-drawer-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <TechnicalLabel variant="emerald">
                {isRtl ? 'استفسار مشروع جديد' : 'PROJECT INQUIRY • V1.0'}
              </TechnicalLabel>
            </div>
            <h3
              id="inquiry-title"
              style={{
                margin: 0,
                fontSize: 'var(--text-lg)',
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
              }}
            >
              {t('inquiry.title')}
            </h3>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            className="ofoq-drawer-close-btn focus-ring"
            onClick={closeInquiry}
            aria-label={t('inquiry.close')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form className="ofoq-drawer-body" onSubmit={handleWhatsAppSubmit}>
          <p
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              margin: 0,
            }}
          >
            {t('inquiry.subtitle')}
          </p>

          {/* 1. Selected Package Chip Switcher */}
          <div className="ofoq-form-group">
            <label className="ofoq-form-label">
              <span>{t('inquiry.packageSection')}</span>
              <span className="ofoq-form-opt">{t('inquiry.optional')}</span>
            </label>

            <div className="ofoq-package-chips" role="radiogroup" aria-label={t('inquiry.packageSection')}>
              <button
                type="button"
                role="radio"
                aria-checked={formPkg === 'starter'}
                className={`ofoq-package-chip focus-ring ${formPkg === 'starter' ? 'ofoq-package-chip--active' : ''}`}
                onClick={() => handleSelectPackage('starter')}
              >
                <strong>{t('pricing.starter.name')}</strong>
                <span className="ofoq-package-chip-price">{t('pricing.starter.price')}</span>
              </button>

              <button
                type="button"
                role="radio"
                aria-checked={formPkg === 'growth'}
                className={`ofoq-package-chip ofoq-package-chip--gold focus-ring ${formPkg === 'growth' ? 'ofoq-package-chip--active' : ''}`}
                onClick={() => handleSelectPackage('growth')}
              >
                <strong>{t('pricing.growth.name')}</strong>
                <span className="ofoq-package-chip-price">{t('pricing.growth.price')}</span>
              </button>

              <button
                type="button"
                role="radio"
                aria-checked={formPkg === 'custom'}
                className={`ofoq-package-chip focus-ring ${formPkg === 'custom' ? 'ofoq-package-chip--active' : ''}`}
                onClick={() => handleSelectPackage('custom')}
              >
                <strong>{t('pricing.custom.name')}</strong>
                <span className="ofoq-package-chip-price">{t('pricing.custom.price')}</span>
              </button>

              <button
                type="button"
                role="radio"
                aria-checked={formPkg === ''}
                className={`ofoq-package-chip focus-ring ${formPkg === '' ? 'ofoq-package-chip--active' : ''}`}
                onClick={() => handleSelectPackage('')}
              >
                <strong>{t('inquiry.packageGeneral')}</strong>
                <span className="ofoq-package-chip-price">—</span>
              </button>
            </div>
          </div>

          {/* 2. Service Type (Required) */}
          <div className="ofoq-form-group">
            <label htmlFor="inquiry-service" className="ofoq-form-label">
              <span>
                {t('inquiry.serviceSection')} <span className="ofoq-form-req">{t('inquiry.required')}</span>
              </span>
            </label>

            <select
              id="inquiry-service"
              value={formService}
              onChange={(e) => {
                setFormService(e.target.value);
                if (serviceError) setServiceError('');
              }}
              className={`ofoq-form-select focus-ring ${serviceError ? 'ofoq-form-select--error' : ''}`}
              aria-required="true"
              aria-invalid={!!serviceError}
              aria-describedby={serviceError ? 'service-error-msg' : undefined}
            >
              <option value="" disabled>
                {t('inquiry.servicePlaceholder')}
              </option>
              {serviceOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>

            {serviceError && (
              <span id="service-error-msg" className="ofoq-form-error-msg" role="alert">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                </svg>
                {serviceError}
              </span>
            )}
          </div>

          {/* 3. Project Overview / Details (Required) */}
          <div className="ofoq-form-group">
            <label htmlFor="inquiry-desc" className="ofoq-form-label">
              <span>
                {t('inquiry.descSection')} <span className="ofoq-form-req">{t('inquiry.required')}</span>
              </span>
            </label>

            <textarea
              id="inquiry-desc"
              rows={4}
              value={formDesc}
              onChange={(e) => {
                setFormDesc(e.target.value);
                if (descError && e.target.value.trim().length >= 10) setDescError('');
              }}
              placeholder={t('inquiry.descPlaceholder')}
              className={`ofoq-form-textarea focus-ring ${descError ? 'ofoq-form-textarea--error' : ''}`}
              aria-required="true"
              aria-invalid={!!descError}
              aria-describedby={descError ? 'desc-error-msg' : 'desc-hint'}
            />

            <span id="desc-hint" className="ofoq-form-hint">
              {t('inquiry.descHint')}
            </span>

            {descError && (
              <span id="desc-error-msg" className="ofoq-form-error-msg" role="alert">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {descError}
              </span>
            )}
          </div>

          {/* 4. Budget Planning Range (Optional) */}
          <div className="ofoq-form-group">
            <label htmlFor="inquiry-budget" className="ofoq-form-label">
              <span>{t('inquiry.budgetSection')}</span>
              <span className="ofoq-form-opt">{t('inquiry.optional')}</span>
            </label>

            <select
              id="inquiry-budget"
              value={formBudget}
              onChange={(e) => setFormBudget(e.target.value)}
              className="ofoq-form-select focus-ring"
            >
              <option value="">
                {t('inquiry.budgetPlaceholder')}
              </option>
              {budgetOptions.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.label}
                </option>
              ))}
            </select>

            <span className="ofoq-form-hint">
              {t('inquiry.budgetNotice')}
            </span>
          </div>

          {/* 5. Contact Name / Entity (Optional) */}
          <div className="ofoq-form-group">
            <label htmlFor="inquiry-name" className="ofoq-form-label">
              <span>{t('inquiry.nameSection')}</span>
              <span className="ofoq-form-opt">{t('inquiry.optional')}</span>
            </label>

            <input
              id="inquiry-name"
              type="text"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              placeholder={t('inquiry.namePlaceholder')}
              className="ofoq-form-input focus-ring"
              autoComplete="name"
            />
          </div>
        </form>

        {/* Fixed Drawer Footer Actions */}
        <div className="ofoq-drawer-footer">
          {/* Primary Action: WhatsApp Synthesis */}
          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            className="ofoq-btn ofoq-btn--primary focus-ring"
            style={{ width: '100%', minHeight: '3rem', fontSize: 'var(--text-base)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>{t('inquiry.submitWhatsApp')}</span>
          </button>

          {/* Secondary Action: Mailto Fallback */}
          <button
            type="button"
            onClick={handleEmailSubmit}
            className="ofoq-btn ofoq-btn--secondary focus-ring"
            style={{ width: '100%' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>{t('inquiry.submitEmail')}</span>
          </button>

          {/* Reassuring Note */}
          <div className="ofoq-drawer-notice">
            {t('inquiry.whatsAppNote')}
          </div>

          {/* Popup blocker fallback link if triggered */}
          {generatedLinks && (
            <a
              href={generatedLinks.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ofoq-drawer-fallback focus-ring"
            >
              {t('inquiry.directLinkFallback')}
            </a>
          )}
        </div>
      </aside>
    </>
  );
}

export function InquiryDrawer() {
  const { isOpen } = useInquiry();
  if (!isOpen) return null;
  return <InquiryDrawerContent />;
}
