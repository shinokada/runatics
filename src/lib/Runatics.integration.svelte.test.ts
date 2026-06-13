import { render } from '@testing-library/svelte';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Runatics from './Runatics.svelte';

describe('Runatics - Integration Tests', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
    // @ts-expect-error - Deleting for test cleanup
    delete window.gtag;
    // @ts-expect-error - Deleting for test cleanup
    delete window.dataLayer;
    // @ts-expect-error - Deleting for test cleanup
    delete window.__runaticsInitialized;
    vi.clearAllMocks();
  });

  describe('Google Analytics Script Loading', () => {
    it('should create both external and inline scripts', () => {
      render(Runatics, { props: { analyticsId: 'G-TEST123', enableInDevelopment: true } });

      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      expect(externalScript).toBeTruthy();
      expect(externalScript?.getAttribute('async')).toBe('');
      expect(externalScript?.getAttribute('src')).toBe(
        'https://www.googletagmanager.com/gtag/js?id=G-TEST123'
      );

      const inlineScript = Array.from(document.head.querySelectorAll('script:not([src])')).find(
        (s) => s.innerHTML.includes('dataLayer') && s.innerHTML.includes('gtag')
      );
      expect(inlineScript).toBeTruthy();
    });

    it('should initialize dataLayer array', () => {
      render(Runatics, { props: { analyticsId: 'G-TEST123', enableInDevelopment: true } });

      const inlineScript = Array.from(document.head.querySelectorAll('script:not([src])')).find(
        (s) => s.innerHTML.includes('dataLayer')
      );
      expect(inlineScript?.innerHTML).toContain('window.dataLayer=window.dataLayer||[]');
    });

    it('should define gtag function', () => {
      render(Runatics, { props: { analyticsId: 'G-TEST123', enableInDevelopment: true } });

      const inlineScript = Array.from(document.head.querySelectorAll('script:not([src])')).find(
        (s) => s.innerHTML.includes('function gtag')
      );
      expect(inlineScript?.innerHTML).toContain(
        'function gtag(){window.dataLayer.push(arguments);}'
      );
    });

    it('should call gtag with js and config', () => {
      render(Runatics, { props: { analyticsId: 'G-TEST123', enableInDevelopment: true } });

      const inlineScript = Array.from(document.head.querySelectorAll('script:not([src])')).find(
        (s) => s.innerHTML.includes('gtag')
      );
      expect(inlineScript?.innerHTML).toContain("gtag('js',new Date())");
      expect(inlineScript?.innerHTML).toContain("gtag('config','G-TEST123')");
    });

    it('should not inject scripts when analyticsId is empty', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: '', enableInDevelopment: true } });

      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      expect(externalScript).toBeFalsy();

      warnSpy.mockRestore();
    });
  });

  describe('Real-world Scenarios', () => {
    it('should work with typical GA4 measurement ID format', () => {
      const measurementIds = ['G-XXXXXXXXXX', 'G-1234567890', 'G-ABC123DEF4', 'G-TESTID'];

      measurementIds.forEach((id) => {
        document.head.innerHTML = '';

        render(Runatics, { props: { analyticsId: id, enableInDevelopment: true } });

        const scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
        expect(scriptTag?.getAttribute('src')).toContain(id);

        const configScript = Array.from(document.head.querySelectorAll('script:not([src])')).find(
          (s) => s.innerHTML.includes(`'${id}'`)
        );
        expect(configScript).toBeTruthy();
      });
    });

    it('should handle production environment (no debug)', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: 'G-PRODUCTION', enableInDevelopment: true } });

      expect(consoleSpy).not.toHaveBeenCalled();
      expect(warnSpy).not.toHaveBeenCalled();

      consoleSpy.mockRestore();
      warnSpy.mockRestore();
    });

    it('should skip GA in development by default (with debug)', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: 'G-DEVELOPMENT', debug: true } });

      expect(consoleSpy).toHaveBeenCalledWith(
        '[Runatics] Skipping GA in development. Pass enableInDevelopment to override.'
      );

      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      expect(externalScript).toBeFalsy();

      consoleSpy.mockRestore();
    });

    it('should load GA in development when enableInDevelopment is true (with debug)', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      render(Runatics, {
        props: { analyticsId: 'G-DEVELOPMENT', debug: true, enableInDevelopment: true }
      });

      expect(consoleSpy).toHaveBeenCalledWith(
        '[Runatics] Google Analytics initialized with ID:',
        'G-DEVELOPMENT'
      );

      consoleSpy.mockRestore();
    });
  });

  describe('Error Prevention', () => {
    it('should not throw when analyticsId is empty string', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      expect(() => {
        render(Runatics, { props: { analyticsId: '', enableInDevelopment: true } });
      }).not.toThrow();

      warnSpy.mockRestore();
    });

    it('should not throw when switching between valid IDs', () => {
      expect(() => {
        const { unmount } = render(Runatics, {
          props: { analyticsId: 'G-FIRST', enableInDevelopment: true }
        });
        unmount();
        document.head.innerHTML = '';
        render(Runatics, { props: { analyticsId: 'G-SECOND', enableInDevelopment: true } });
      }).not.toThrow();
    });
  });

  describe('Script Injection Timing', () => {
    it('should inject scripts immediately after render (not deferred via $effect)', () => {
      const { container } = render(Runatics, {
        props: { analyticsId: 'G-TIMINGTEST', enableInDevelopment: true }
      });

      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      const initScript = Array.from(document.head.querySelectorAll('script:not([src])')).find((s) =>
        s.innerHTML.includes('dataLayer')
      );

      expect(container).toBeTruthy();
      expect(externalScript).toBeTruthy();
      expect(initScript).toBeTruthy();
    });
  });

  describe('Analytics ID Validation', () => {
    it('should accept various valid GA4 measurement ID formats', () => {
      const validIds = ['G-XXXXXXXXXX', 'G-1234567890', 'G-ABC123', 'G-TEST', 'G-12345'];

      validIds.forEach((id) => {
        document.head.innerHTML = '';

        expect(() => {
          render(Runatics, { props: { analyticsId: id, enableInDevelopment: true } });
        }).not.toThrow();

        const scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
        expect(scriptTag?.getAttribute('src')).toContain(id);
      });
    });

    it('should handle edge cases gracefully', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      ['', 'G-', 'INVALID'].forEach((id) => {
        document.head.innerHTML = '';
        expect(() => {
          render(Runatics, { props: { analyticsId: id, enableInDevelopment: true } });
        }).not.toThrow();
      });

      warnSpy.mockRestore();
    });
  });

  describe('Component Lifecycle', () => {
    it('should allow multiple mount/unmount cycles', () => {
      for (let i = 0; i < 3; i++) {
        document.head.innerHTML = '';

        const id = `G-CYCLE${i}`;
        const { unmount } = render(Runatics, {
          props: { analyticsId: id, enableInDevelopment: true }
        });

        const scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
        expect(scriptTag?.getAttribute('src')).toContain(id);

        unmount();
      }
    });
  });
});
