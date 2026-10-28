import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { InquiryProvider } from './context/InquiryContext.jsx';
import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { HeroSection } from './components/sections/HeroSection.jsx';
import { TrustMetrics } from './components/sections/TrustMetrics.jsx';
import { ServicesSection } from './components/sections/ServicesSection.jsx';
import { ProjectsSection } from './components/sections/ProjectsSection.jsx';
import { ProcessSection } from './components/sections/ProcessSection.jsx';
import { PricingSection } from './components/sections/PricingSection.jsx';
import { AboutSection } from './components/sections/AboutSection.jsx';
import { ContactCta } from './components/sections/ContactCta.jsx';
import { InquiryDrawer } from './components/inquiry/InquiryDrawer.jsx';

function App() {
  // Support initial hash navigation in client-side rendered SPA
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        const timer = setTimeout(() => {
          const retryTarget = document.getElementById(id);
          if (retryTarget) {
            retryTarget.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <LanguageProvider>
      <InquiryProvider>
        <div className="horizon-ambient" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main id="main-content" style={{ flexGrow: 1, paddingTop: '4.75rem' }}>
            <HeroSection />
            <TrustMetrics />
            <ServicesSection />
            <ProjectsSection />
            <ProcessSection />
            <PricingSection />
            <AboutSection />
            <ContactCta />
          </main>
          <Footer />
          <InquiryDrawer />
        </div>
      </InquiryProvider>
    </LanguageProvider>
  );
}

export default App;
