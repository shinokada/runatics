<script lang="ts">
  interface Props {
    analyticsId: string;
    debug?: boolean;
  }
  let { analyticsId, debug = false }: Props = $props();

  $effect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Skip if gtag already exists
    if (typeof window.gtag === 'function') {
      if (debug) {
        console.log('[Runatics] gtag already initialized');
      }
      return;
    }

    const script = document.createElement('script');
    script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${analyticsId}');
    `;
    document.head.appendChild(script);

    if (debug) {
      console.log('[Runatics] Google Analytics initialized with ID:', analyticsId);
    }

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  });

  // Warn in development if analyticsId is missing
  $effect(() => {
    if (!analyticsId && typeof window !== 'undefined') {
      console.warn(
        '[Runatics] Missing analyticsId prop. Please provide your Google Analytics Measurement ID. See: https://runatics.codewithshin.com/'
      );
    }
  });
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id={analyticsId}"></script>
</svelte:head>

{#if !analyticsId && debug}
  <div
    role="alert"
    style="padding: 1rem; background: #fef2f2; border: 1px solid #fca5a5; border-radius: 0.375rem; margin: 1rem;"
  >
    <h2 style="color: #991b1b; margin: 0 0 0.5rem 0; font-size: 1.125rem; font-weight: 600;">
      Missing Analytics ID
    </h2>
    <p style="color: #7f1d1d; margin: 0;">
      You need to provide your Google Analytics Measurement ID via the <code>analyticsId</code>
      prop.
      <a
        href="https://runatics.codewithshin.com/"
        style="color: #dc2626; text-decoration: underline;">Read the docs</a
      > for setup instructions.
    </p>
  </div>
{/if}

<!--
@component
[Go to docs](https://runatics.codewithshin.com/)

A simple Google Analytics component for Svelte 5 projects using runes.

## Props
@prop analyticsId: string - Your Google Analytics Measurement ID (e.g., 'G-XXXXXXXXXX')
@prop debug?: boolean - Enable debug logging (default: false)

## Example
```svelte
<Runatics analyticsId="G-XXXXXXXXXX" />
```

## With debug mode
```svelte
<Runatics analyticsId="G-XXXXXXXXXX" debug={true} />
```
-->
