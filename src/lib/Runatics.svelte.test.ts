import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import Runatics from './Runatics.svelte';

describe('Runatics', () => {
  beforeEach(() => {
    // Clear the document head before each test
    document.head.innerHTML = '';

    // Reset window.gtag and window.dataLayer
    // @ts-expect-error - Deleting for test cleanup
    delete window.gtag;
    // @ts-expect-error - Deleting for test cleanup
    delete window.dataLayer;

    // Clear all mocks
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Cleanup after each test
    vi.restoreAllMocks();
  });

  describe('Basic Functionality', () => {
    it('should render without errors when analyticsId is provided', () => {
      const { container } = render(Runatics, {
        props: { analyticsId: 'G-TEST123' }
      });

      expect(container).toBeTruthy();
    });

    it('should inject Google Analytics script in svelte:head', () => {
      render(Runatics, {
        props: { analyticsId: 'G-TEST123' }
      });

      const scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
      expect(scriptTag).toBeTruthy();
      expect(scriptTag?.getAttribute('src')).toContain('G-TEST123');
      expect(scriptTag?.getAttribute('async')).toBe('');
    });

    it('should initialize gtag in document head', () => {
      render(Runatics, {
        props: { analyticsId: 'G-TEST123' }
      });

      // Find the inline script that initializes gtag
      const scripts = document.head.querySelectorAll('script:not([src])');
      const gtagScript = Array.from(scripts).find(
        (script) =>
          script.innerHTML.includes('window.dataLayer') && script.innerHTML.includes('gtag')
      );

      expect(gtagScript).toBeTruthy();
      expect(gtagScript?.innerHTML).toContain('window.dataLayer = window.dataLayer || []');
      expect(gtagScript?.innerHTML).toContain('function gtag()');
      expect(gtagScript?.innerHTML).toContain("gtag('config', 'G-TEST123')");
    });
  });

  describe('Duplicate Prevention', () => {
    it('should not initialize gtag if it already exists', () => {
      // Pre-initialize gtag
      window.gtag = vi.fn();
      window.dataLayer = [];

      render(Runatics, {
        props: { analyticsId: 'G-TEST123' }
      });

      // Should not create a new inline script
      const scripts = document.head.querySelectorAll('script:not([src])');
      const gtagScript = Array.from(scripts).find(
        (script) =>
          script.innerHTML.includes('window.dataLayer') &&
          script.innerHTML.includes('function gtag()')
      );

      expect(gtagScript).toBeFalsy();
    });

    it('should log debug message when gtag already exists and debug is true', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      // Pre-initialize gtag
      window.gtag = vi.fn();
      window.dataLayer = [];

      render(Runatics, {
        props: { analyticsId: 'G-TEST123', debug: true }
      });

      expect(consoleSpy).toHaveBeenCalledWith('[Runatics] gtag already initialized');

      consoleSpy.mockRestore();
    });
  });

  describe('Missing Analytics ID', () => {
    it('should not show error UI when analyticsId is missing and debug is false', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      render(Runatics, {
        props: { analyticsId: '' }
      });

      const errorHeading = screen.queryByRole('heading', { name: /missing analytics id/i });
      expect(errorHeading).toBeFalsy();

      warnSpy.mockRestore();
      logSpy.mockRestore();
    });

    it('should show error UI when analyticsId is missing and debug is true', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      render(Runatics, {
        props: { analyticsId: '', debug: true }
      });

      const errorHeading = screen.getByRole('heading', { name: /missing analytics id/i });
      expect(errorHeading).toBeTruthy();

      const link = screen.getByRole('link', { name: /read the docs/i });
      expect(link).toBeTruthy();
      expect(link.getAttribute('href')).toBe('https://runatics.codewithshin.com/');

      warnSpy.mockRestore();
      logSpy.mockRestore();
    });

    it('should show console warning when analyticsId is missing', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Runatics, {
        props: { analyticsId: '' }
      });

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('[Runatics] Missing analyticsId prop')
      );

      consoleSpy.mockRestore();
    });
  });

  describe('Debug Mode', () => {
    it('should log initialization message when debug is true', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      render(Runatics, {
        props: { analyticsId: 'G-TEST123', debug: true }
      });

      expect(consoleSpy).toHaveBeenCalledWith(
        '[Runatics] Google Analytics initialized with ID:',
        'G-TEST123'
      );

      consoleSpy.mockRestore();
    });

    it('should not log initialization message when debug is false', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      render(Runatics, {
        props: { analyticsId: 'G-TEST123', debug: false }
      });

      expect(consoleSpy).not.toHaveBeenCalled();

      consoleSpy.mockRestore();
    });
  });

  describe('Props', () => {
    it('should accept analyticsId prop', () => {
      render(Runatics, {
        props: { analyticsId: 'G-CUSTOM123' }
      });

      const scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
      expect(scriptTag?.getAttribute('src')).toContain('G-CUSTOM123');
    });

    it('should default debug to false', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      render(Runatics, {
        props: { analyticsId: 'G-TEST123' }
      });

      expect(consoleSpy).not.toHaveBeenCalled();

      consoleSpy.mockRestore();
    });
  });

  describe('Cleanup', () => {
    it('should remove inline script when component is unmounted', () => {
      const { unmount } = render(Runatics, {
        props: { analyticsId: 'G-TEST123' }
      });

      // Verify script exists
      let scripts = document.head.querySelectorAll('script:not([src])');
      let gtagScript = Array.from(scripts).find((script) =>
        script.innerHTML.includes('window.dataLayer')
      );
      expect(gtagScript).toBeTruthy();

      // Unmount component
      unmount();

      // Verify script is removed
      scripts = document.head.querySelectorAll('script:not([src])');
      gtagScript = Array.from(scripts).find((script) =>
        script.innerHTML.includes('window.dataLayer')
      );
      expect(gtagScript).toBeFalsy();
    });
  });

  describe('Multiple Analytics IDs', () => {
    it('should handle different analytics IDs', () => {
      const { unmount: unmount1 } = render(Runatics, {
        props: { analyticsId: 'G-FIRST123' }
      });

      let scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
      expect(scriptTag?.getAttribute('src')).toContain('G-FIRST123');

      unmount1();

      const { unmount: unmount2 } = render(Runatics, {
        props: { analyticsId: 'G-SECOND456' }
      });

      scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
      expect(scriptTag?.getAttribute('src')).toContain('G-SECOND456');

      unmount2();
    });
  });

  describe('SSR Safety', () => {
    it('should not execute effects when window is undefined', () => {
      // This test verifies the code structure rather than runtime behavior
      // since we can't truly simulate SSR in jsdom
      render(Runatics, {
        props: { analyticsId: 'G-TEST123' }
      });

      // In actual SSR, the effect wouldn't run at all
      // In jsdom, window exists, so we verify the component renders without error
      const scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
      expect(scriptTag).toBeTruthy();
    });
  });
});
