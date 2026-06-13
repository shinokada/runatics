declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __runaticsInitialized: Record<string, boolean>;
  }
}

export {};
