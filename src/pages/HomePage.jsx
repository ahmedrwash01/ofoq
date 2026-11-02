import { HeroSection } from '../components/sections/HeroSection.jsx';
import { TrustMetrics } from '../components/sections/TrustMetrics.jsx';
import { ProjectsSection } from '../components/sections/ProjectsSection.jsx';
import { ServicesSection } from '../components/sections/ServicesSection.jsx';
import { ContactCta } from '../components/sections/ContactCta.jsx';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustMetrics />
      <ProjectsSection />
      <ServicesSection />
      <ContactCta />
    </>
  );
}

