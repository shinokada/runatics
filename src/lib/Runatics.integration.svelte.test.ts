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
    vi.clearAllMocks();
  });

  describe('Google Analytics Script Loading', () => {
    it('should create both external and inline scripts', () => {
      render(Runatics, {
        props: { analyticsId: 'G-TEST123' }
      });

      // Check external script (from svelte:head)
      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      expect(externalScript).toBeTruthy();
      expect(externalScript?.getAttribute('async')).toBe('');
      expect(externalScript?.getAttribute('src')).toBe(
        'https://www.googletagmanager.com/gtag/js?id=G-TEST123'
      );

      // Check inline initialization script
      const scripts = Array.from(document.head.querySelectorAll('script:not([src])'));
      const inlineScript = scripts.find(
        (script) => script.innerHTML.includes('dataLayer') && script.innerHTML.includes('gtag')
      );
      expect(inlineScript).toBeTruthy();
    });

    it('should initialize dataLayer array', () => {
      render(Runatics, {
        props: { analyticsId: 'G-TEST123' }
      });

      const scripts = Array.from(document.head.querySelectorAll('script:not([src])'));
      const inlineScript = scripts.find((script) => script.innerHTML.includes('dataLayer'));

      expect(inlineScript?.innerHTML).toContain('window.dataLayer = window.dataLayer || []');
    });

    it('should define gtag function', () => {
      render(Runatics, {
        props: { analyticsId: 'G-TEST123' }
      });

      const scripts = Array.from(document.head.querySelectorAll('script:not([src])'));
      const inlineScript = scripts.find((script) => script.innerHTML.includes('function gtag'));

      expect(inlineScript?.innerHTML).toContain('function gtag() { dataLayer.push(arguments); }');
    });

    it('should call gtag with js and config', () => {
      render(Runatics, {
        props: { analyticsId: 'G-TEST123' }
      });

      const scripts = Array.from(document.head.querySelectorAll('script:not([src])'));
      const inlineScript = scripts.find((script) => script.innerHTML.includes('gtag'));

      expect(inlineScript?.innerHTML).toContain("gtag('js', new Date())");
      expect(inlineScript?.innerHTML).toContain("gtag('config', 'G-TEST123')");
    });
  });

  describe('Real-world Scenarios', () => {
    it('should work with typical GA4 measurement ID format', () => {
      const measurementIds = ['G-XXXXXXXXXX', 'G-1234567890', 'G-ABC123DEF4', 'G-TESTID'];

      measurementIds.forEach((id) => {
        document.head.innerHTML = '';

        render(Runatics, {
          props: { analyticsId: id }
        });

        const scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
        expect(scriptTag?.getAttribute('src')).toContain(id);

        const inlineScripts = Array.from(document.head.querySelectorAll('script:not([src])'));
        const configScript = inlineScripts.find((s) => s.innerHTML.includes(`'${id}'`));
        expect(configScript).toBeTruthy();
      });
    });

    it('should handle production environment (no debug)', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Runatics, {
        props: { analyticsId: 'G-PRODUCTION' }
      });

      // Should not log in production mode (debug: false by default)
      expect(consoleSpy).not.toHaveBeenCalled();
      expect(warnSpy).not.toHaveBeenCalled();

      consoleSpy.mockRestore();
      warnSpy.mockRestore();
    });

    it('should handle development environment (with debug)', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      render(Runatics, {
        props: { analyticsId: 'G-DEVELOPMENT', debug: true }
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
      const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      expect(() => {
        render(Runatics, {
          props: { analyticsId: '' }
        });
      }).not.toThrow();

      warnSpy.mockRestore();
      logSpy.mockRestore();
    });

    it('should not throw when switching between valid IDs', () => {
      expect(() => {
        const { unmount } = render(Runatics, {
          props: { analyticsId: 'G-FIRST' }
        });
        unmount();

        render(Runatics, {
          props: { analyticsId: 'G-SECOND' }
        });
      }).not.toThrow();
    });
  });

  describe('Script Injection Timing', () => {
    it('should inject scripts immediately after render', () => {
      const { container } = render(Runatics, {
        props: { analyticsId: 'G-TIMING-TEST' }
      });

      // Scripts should be in the head immediately
      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      const inlineScripts = Array.from(document.head.querySelectorAll('script:not([src])'));
      const initScript = inlineScripts.find((s) => s.innerHTML.includes('dataLayer'));

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
          render(Runatics, {
            props: { analyticsId: id }
          });
        }).not.toThrow();

        const scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
        expect(scriptTag?.getAttribute('src')).toContain(id);
      });
    });

    it('should handle edge cases gracefully', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      const edgeCases = [
        '', // Empty string
        'G-', // Just prefix
        'INVALID' // No prefix
      ];

      edgeCases.forEach((id) => {
        document.head.innerHTML = '';

        expect(() => {
          render(Runatics, {
            props: { analyticsId: id }
          });
        }).not.toThrow();
      });

      warnSpy.mockRestore();
      logSpy.mockRestore();
    });
  });

  describe('Component Lifecycle', () => {
    it('should handle mount and unmount correctly', () => {
      const { unmount } = render(Runatics, {
        props: { analyticsId: 'G-LIFECYCLE' }
      });

      // Check scripts exist
      let inlineScripts = Array.from(document.head.querySelectorAll('script:not([src])'));
      let initScript = inlineScripts.find((s) => s.innerHTML.includes('dataLayer'));
      expect(initScript).toBeTruthy();

      // Unmount
      unmount();

      // Check inline script is removed
      inlineScripts = Array.from(document.head.querySelectorAll('script:not([src])'));
      initScript = inlineScripts.find((s) => s.innerHTML.includes('dataLayer'));
      expect(initScript).toBeFalsy();
    });

    it('should allow multiple mount/unmount cycles', () => {
      for (let i = 0; i < 3; i++) {
        const { unmount } = render(Runatics, {
          props: { analyticsId: `G-CYCLE-${i}` }
        });

        const scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
        expect(scriptTag?.getAttribute('src')).toContain(`G-CYCLE-${i}`);

        unmount();
      }
    });
  });
});
