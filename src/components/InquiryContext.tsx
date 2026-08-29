import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type InquiryType = 'Project' | 'Certificate' | 'Internship Certificate';

export type InquiryTarget = {
  title: string;
  type: InquiryType;
  issuer?: string;
  date?: string;
  focus?: string;
  description?: string;
};

type ModalState =
  | { mode: 'detail'; target: InquiryTarget }
  | { mode: 'request'; target: InquiryTarget }
  | null;

type InquiryContextValue = {
  modal: ModalState;
  openDetail: (target: InquiryTarget) => void;
  openRequest: (target: InquiryTarget) => void;
  close: () => void;
};

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalState>(null);

  const openDetail = useCallback((target: InquiryTarget) => {
    setModal({ mode: 'detail', target });
  }, []);

  const openRequest = useCallback((target: InquiryTarget) => {
    setModal({ mode: 'request', target });
  }, []);

  const close = useCallback(() => setModal(null), []);

  return (
    <InquiryContext.Provider value={{ modal, openDetail, openRequest, close }}>
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error('useInquiry must be used within InquiryProvider');
  return ctx;
}
