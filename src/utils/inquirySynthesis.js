/**
 * OFOQ INQUIRY SYNTHESIS UTILITY
 * Composes natural, human-readable WhatsApp and Mailto inquiries in Arabic and English
 * THE HORIZON ENGINE — محرك الأفق
 */

export const OFOQ_WHATSAPP_PHONE = '201115077582';
export const OFOQ_CONTACT_EMAIL = 'hello@ofoq.dev';

/**
 * Builds structured plain text, WhatsApp URL, and mailto URL from inquiry fields
 */
export function composeInquiryMessage({
  lang = 'ar',
  packageLabel,
  packagePrice,
  serviceLabel,
  projectDescription,
  budgetLabel,
  contactName,
  t,
}) {
  const isAr = lang === 'ar';
  const lines = [];

  // 1. Polite Greeting
  const greeting = t ? t('msg.greeting') : (isAr ? 'السلام عليكم فريق أفق، أود الاستفسار بخصوص مشروع جديد:' : 'Hello OFOQ Team, I would like to inquire about a new project:');
  lines.push(greeting);
  lines.push('');

  // 2. Selected Package (if provided)
  if (packageLabel) {
    const pkgText = packagePrice ? `${packageLabel} (${packagePrice})` : packageLabel;
    const prefix = t ? t('msg.package') : (isAr ? '• الباقة المختارة: ' : '• Selected Package: ');
    lines.push(`${prefix}${pkgText}`);
  }

  // 3. Requested Service
  if (serviceLabel) {
    const prefix = t ? t('msg.service') : (isAr ? '• نوع الخدمة: ' : '• Requested Service: ');
    lines.push(`${prefix}${serviceLabel}`);
  }

  // 4. Budget Range (if provided)
  if (budgetLabel) {
    const prefix = t ? t('msg.budget') : (isAr ? '• الميزانية التقديرية: ' : '• Estimated Budget: ');
    lines.push(`${prefix}${budgetLabel}`);
  }

  // 5. Contact Name / Organization (if provided)
  if (contactName && contactName.trim()) {
    const prefix = t ? t('msg.name') : (isAr ? '• الاسم / جهة التواصل: ' : '• Contact Name / Organization: ');
    lines.push(`${prefix}${contactName.trim()}`);
  }

  // 6. Project Details Description
  if (projectDescription && projectDescription.trim()) {
    const prefix = t ? t('msg.desc') : (isAr ? '• تفاصيل المشروع:\n' : '• Project Details:\n');
    lines.push('');
    lines.push(`${prefix}${projectDescription.trim()}`);
  }

  const plainMessage = lines.join('\n');
  const encodedMessage = encodeURIComponent(plainMessage);
  const whatsappUrl = `https://wa.me/${OFOQ_WHATSAPP_PHONE}?text=${encodedMessage}`;

  const emailSubject = t ? t('msg.emailSubject') : (isAr ? 'استفسار مشروع جديد — أفق للبرمجيات' : 'New Project Inquiry — OFOQ Software Studio');
  const mailtoUrl = `mailto:${OFOQ_CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodedMessage}`;

  return {
    plainMessage,
    whatsappUrl,
    mailtoUrl,
  };
}
