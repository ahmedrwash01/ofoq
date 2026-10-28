import { createContext, useContext } from 'react';

export const InquiryContext = createContext(null);

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error('useInquiry must be used within an InquiryProvider');
  }
  return context;
}
