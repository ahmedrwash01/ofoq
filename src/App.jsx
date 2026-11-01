import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { InquiryProvider } from './context/InquiryContext.jsx';
import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { ScrollToTop } from './components/layout/ScrollToTop.jsx';
import { InquiryDrawer } from './components/inquiry/InquiryDrawer.jsx';

import { HomePage } from './pages/HomePage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { ProjectsPage } from './pages/ProjectsPage.jsx';
import { ProcessPage } from './pages/ProcessPage.jsx';
import { PricingPage } from './pages/PricingPage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <InquiryProvider>
          <ScrollToTop />
          <div className="horizon-ambient" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main id="main-content" style={{ flexGrow: 1, paddingTop: '4.75rem' }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/work" element={<ProjectsPage />} />
                <Route path="/projects" element={<Navigate to="/work" replace />} />
                <Route path="/process" element={<ProcessPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/packages" element={<Navigate to="/pricing" replace />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
            <InquiryDrawer />
          </div>
        </InquiryProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
