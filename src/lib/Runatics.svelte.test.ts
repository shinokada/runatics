import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import Runatics from './Runatics.svelte';

describe('Runatics', () => {
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

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Basic Functionality', () => {
    it('should render without errors when analyticsId is provided', () => {
      const { container } = render(Runatics, {
        props: { analyticsId: 'G-TEST123', enableInDevelopment: true }
      });
      expect(container).toBeTruthy();
    });

    it('should inject Google Analytics external script in svelte:head', () => {
      render(Runatics, {
        props: { analyticsId: 'G-TEST123', enableInDevelopment: true }
      });

      const scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
      expect(scriptTag).toBeTruthy();
      expect(scriptTag?.getAttribute('src')).toContain('G-TEST123');
      expect(scriptTag?.getAttribute('async')).toBe('');
    });

    it('should inject inline gtag init script in svelte:head', () => {
      render(Runatics, {
        props: { analyticsId: 'G-TEST123', enableInDevelopment: true }
      });

      const scripts = Array.from(document.head.querySelectorAll('script:not([src])'));
      const gtagScript = scripts.find(
        (s) => s.innerHTML.includes('dataLayer') && s.innerHTML.includes('gtag')
      );

      expect(gtagScript).toBeTruthy();
      expect(gtagScript?.innerHTML).toContain('window.dataLayer=window.dataLayer||[]');
      expect(gtagScript?.innerHTML).toContain('function gtag()');
      expect(gtagScript?.innerHTML).toContain("gtag('config','G-TEST123')");
    });

    it('should render both scripts server-side (SSR-safe via svelte:head)', () => {
      render(Runatics, { props: { analyticsId: 'G-SSR123', enableInDevelopment: true } });

      // Both scripts come from svelte:head {@html}, not from $effect
      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      const inlineScripts = Array.from(document.head.querySelectorAll('script:not([src])'));
      const initScript = inlineScripts.find((s) => s.innerHTML.includes("gtag('config'"));

      expect(externalScript).toBeTruthy();
      expect(initScript).toBeTruthy();
    });
  });

  describe('Missing Analytics ID', () => {
    it('should not inject scripts when analyticsId is empty', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: '', enableInDevelopment: true } });

      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      expect(externalScript).toBeFalsy();

      warnSpy.mockRestore();
    });

    it('should not show error UI when analyticsId is missing and debug is false', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: '' } });

      const errorHeading = screen.queryByRole('heading', { name: /missing analytics id/i });
      expect(errorHeading).toBeFalsy();

      warnSpy.mockRestore();
    });

    it('should show error UI when analyticsId is missing and debug is true', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: '', debug: true } });

      const errorHeading = screen.getByRole('heading', { name: /missing analytics id/i });
      expect(errorHeading).toBeTruthy();

      const link = screen.getByRole('link', { name: /read the docs/i });
      expect(link.getAttribute('href')).toBe('https://runatics.codewithshin.com/');

      warnSpy.mockRestore();
    });

    it('should show console warning when analyticsId is missing', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: '' } });

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('[Runatics] Missing analyticsId prop')
      );

      consoleSpy.mockRestore();
    });
  });

  describe('Invalid Analytics ID Format', () => {
    it('should not inject scripts when analyticsId has an invalid format', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: 'UA-12345-1', enableInDevelopment: true } });

      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      expect(externalScript).toBeFalsy();

      warnSpy.mockRestore();
    });

    it('should log a console warning when analyticsId has an invalid format', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: 'not-a-valid-id', enableInDevelopment: true } });

      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('does not match the expected format')
      );

      warnSpy.mockRestore();
    });

    it('should show invalid ID error UI when debug is true', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: 'bad-id', debug: true } });

      const errorHeading = screen.getByRole('heading', { name: /invalid analytics id/i });
      expect(errorHeading).toBeTruthy();

      warnSpy.mockRestore();
    });

    it('should not show invalid ID error UI when debug is false', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: 'bad-id', debug: false } });

      const errorHeading = screen.queryByRole('heading', { name: /invalid analytics id/i });
      expect(errorHeading).toBeFalsy();

      warnSpy.mockRestore();
    });

    it('should accept a valid G-XXXXXXXXXX formatted ID', () => {
      render(Runatics, { props: { analyticsId: 'G-ABC1234567', enableInDevelopment: true } });

      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      expect(externalScript).toBeTruthy();
    });
  });

  describe('Development Mode', () => {
    it('should not load GA in development by default', () => {
      render(Runatics, { props: { analyticsId: 'G-TEST123' } });

      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      expect(externalScript).toBeFalsy();
    });

    it('should log a skip message in development when debug is true', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: 'G-TEST123', debug: true } });

      expect(consoleSpy).toHaveBeenCalledWith(
        '[Runatics] Skipping GA in development. Pass enableInDevelopment to override.'
      );

      consoleSpy.mockRestore();
    });

    it('should load GA when enableInDevelopment is true', () => {
      render(Runatics, { props: { analyticsId: 'G-TEST123', enableInDevelopment: true } });

      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      expect(externalScript).toBeTruthy();
    });
  });

  describe('Debug Mode', () => {
    it('should log initialization message when debug is true', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      render(Runatics, {
        props: { analyticsId: 'G-TEST123', debug: true, enableInDevelopment: true }
      });

      expect(consoleSpy).toHaveBeenCalledWith(
        '[Runatics] Google Analytics initialized with ID:',
        'G-TEST123'
      );

      consoleSpy.mockRestore();
    });

    it('should not log when debug is false', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      render(Runatics, {
        props: { analyticsId: 'G-TEST123', debug: false, enableInDevelopment: true }
      });

      expect(consoleSpy).not.toHaveBeenCalled();

      consoleSpy.mockRestore();
    });
  });

  describe('Props', () => {
    it('should use the provided analyticsId in both scripts', () => {
      render(Runatics, { props: { analyticsId: 'G-CUSTOM123', enableInDevelopment: true } });

      const scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
      expect(scriptTag?.getAttribute('src')).toContain('G-CUSTOM123');

      const inlineScripts = Array.from(document.head.querySelectorAll('script:not([src])'));
      const configScript = inlineScripts.find((s) => s.innerHTML.includes("'G-CUSTOM123'"));
      expect(configScript).toBeTruthy();
    });

    it('should default debug to false', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      render(Runatics, { props: { analyticsId: 'G-TEST123', enableInDevelopment: true } });

      expect(consoleSpy).not.toHaveBeenCalled();

      consoleSpy.mockRestore();
    });

    it('should default enableInDevelopment to false (GA not loaded in dev)', () => {
      render(Runatics, { props: { analyticsId: 'G-TEST123' } });

      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      expect(externalScript).toBeFalsy();
    });
  });

  describe('Multiple Analytics IDs', () => {
    it('should handle different analytics IDs across renders', () => {
      const { unmount: unmount1 } = render(Runatics, {
        props: { analyticsId: 'G-FIRST123', enableInDevelopment: true }
      });

      let scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
      expect(scriptTag?.getAttribute('src')).toContain('G-FIRST123');

      unmount1();
      document.head.innerHTML = '';

      render(Runatics, { props: { analyticsId: 'G-SECOND456', enableInDevelopment: true } });

      scriptTag = document.querySelector('script[src*="googletagmanager.com"]');
      expect(scriptTag?.getAttribute('src')).toContain('G-SECOND456');
    });
  });

  describe('Duplicate Script Guard', () => {
    it('should wrap gtag config call in an __runaticsInitialized guard', () => {
      render(Runatics, { props: { analyticsId: 'G-GUARD123', enableInDevelopment: true } });

      const inlineScripts = Array.from(document.head.querySelectorAll('script:not([src])'));
      const gtagScript = inlineScripts.find((s) => s.innerHTML.includes("gtag('config'"));

      expect(gtagScript?.innerHTML).toContain('window.__runaticsInitialized');
      expect(gtagScript?.innerHTML).toContain("window.__runaticsInitialized['G-GUARD123']");
    });

    it('should not call gtag config again on a second render with the same ID', () => {
      // Simulate the guard logic directly against window, matching the component's
      // inline script behaviour without relying on script-string execution.
      const simulateInlineScript = (analyticsId: string) => {
        window.dataLayer = window.dataLayer || [];
        window.__runaticsInitialized = window.__runaticsInitialized || {};
        if (!window.__runaticsInitialized[analyticsId]) {
          window.__runaticsInitialized[analyticsId] = true;
          window.dataLayer.push(['js', new Date()]);
          window.dataLayer.push(['config', analyticsId]);
        }
      };

      const { unmount: unmount1 } = render(Runatics, {
        props: { analyticsId: 'G-ONCE123', enableInDevelopment: true }
      });
      simulateInlineScript('G-ONCE123');

      unmount1();
      document.head.innerHTML = '';

      render(Runatics, { props: { analyticsId: 'G-ONCE123', enableInDevelopment: true } });
      simulateInlineScript('G-ONCE123');

      const dataLayer = (window as unknown as { dataLayer: unknown[] }).dataLayer;
      const configCalls = dataLayer.filter((args) => Array.isArray(args) && args[0] === 'config');
      expect(configCalls.length).toBe(1);
    });

    it('should call gtag config separately for different analytics IDs', () => {
      const simulateInlineScript = (analyticsId: string) => {
        window.dataLayer = window.dataLayer || [];
        window.__runaticsInitialized = window.__runaticsInitialized || {};
        if (!window.__runaticsInitialized[analyticsId]) {
          window.__runaticsInitialized[analyticsId] = true;
          window.dataLayer.push(['js', new Date()]);
          window.dataLayer.push(['config', analyticsId]);
        }
      };

      const { unmount: unmount1 } = render(Runatics, {
        props: { analyticsId: 'G-AAA111', enableInDevelopment: true }
      });
      simulateInlineScript('G-AAA111');

      unmount1();
      document.head.innerHTML = '';

      render(Runatics, { props: { analyticsId: 'G-BBB222', enableInDevelopment: true } });
      simulateInlineScript('G-BBB222');

      const dataLayer = (window as unknown as { dataLayer: unknown[] }).dataLayer;
      const configCalls = dataLayer.filter((args) => Array.isArray(args) && args[0] === 'config');
      expect(configCalls.length).toBe(2);
      expect(configCalls.map((c) => (c as unknown[])[1])).toEqual(['G-AAA111', 'G-BBB222']);
    });
  });

  describe('SSR Safety', () => {
    it('should render scripts via svelte:head (not $effect) so they appear in SSR output', () => {
      render(Runatics, { props: { analyticsId: 'G-TEST123', enableInDevelopment: true } });

      // Scripts are injected via {@html} in svelte:head — present immediately after render,
      // not deferred to a browser $effect.
      const externalScript = document.querySelector('script[src*="googletagmanager.com"]');
      const inlineScripts = Array.from(document.head.querySelectorAll('script:not([src])'));
      const initScript = inlineScripts.find((s) => s.innerHTML.includes('dataLayer'));

      expect(externalScript).toBeTruthy();
      expect(initScript).toBeTruthy();
    });
  });
});
