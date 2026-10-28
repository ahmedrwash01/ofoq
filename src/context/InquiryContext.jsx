import { useState, useCallback } from 'react';
import { InquiryContext } from './useInquiry.js';

export function InquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null); // 'starter' | 'growth' | 'custom' | null
  const [selectedService, setSelectedService] = useState(''); // 'mobile' | 'web' ...

  const openInquiry = useCallback(({ packageId, serviceId } = {}) => {
    if (packageId !== undefined) {
      setSelectedPackage(packageId);
    }
    if (serviceId !== undefined) {
      setSelectedService(serviceId);
    }
    setIsOpen(true);
  }, []);

  const closeInquiry = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = {
    isOpen,
    selectedPackage,
    selectedService,
    setSelectedPackage,
    setSelectedService,
    openInquiry,
    closeInquiry,
  };

  return (
    <InquiryContext.Provider value={value}>
      {children}
    </InquiryContext.Provider>
  );
}
