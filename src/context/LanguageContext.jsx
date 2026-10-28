import { useState, useEffect, useCallback } from 'react';
import { translations } from '../content/translations.js';
import { LanguageContext } from './useLanguage.js';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const stored = localStorage.getItem('ofoq-lang');
      return stored === 'en' || stored === 'ar' ? stored : 'ar';
    } catch {
      return 'ar';
    }
  });

  const isRtl = lang === 'ar';

  const t = useCallback((key) => {
    const dict = translations[lang] || translations.ar;
    return dict[key] !== undefined ? dict[key] : key;
  }, [lang]);

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Dynamically synchronize document title and meta descriptions for SEO & tab readability
    const titleText = t('meta.title');
    const descText = t('meta.desc');

    if (titleText) {
      document.title = titleText;
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && descText) {
      metaDesc.setAttribute('content', descText);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && titleText) {
      ogTitle.setAttribute('content', titleText);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && descText) {
      ogDesc.setAttribute('content', descText);
    }

    try {
      localStorage.setItem('ofoq-lang', lang);
    } catch {
      // Storage unavailable
    }
  }, [lang, isRtl, t]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
