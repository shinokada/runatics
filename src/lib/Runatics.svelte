<script lang="ts">
  interface Props {
    analyticsId: string;
    debug?: boolean;
    enableInDevelopment?: boolean;
  }
  let { analyticsId, debug = false, enableInDevelopment = false }: Props = $props();

  const isDev = import.meta.env.DEV;
  const idFormatPattern = /^G-[A-Z0-9]+$/;
  let isValidId = $derived(idFormatPattern.test(analyticsId));
  let shouldLoad = $derived(analyticsId && isValidId && (!isDev || enableInDevelopment));

  $effect(() => {
    if (!analyticsId) {
      console.warn(
        '[Runatics] Missing analyticsId prop. Please provide your Google Analytics Measurement ID. See: https://runatics.codewithshin.com/'
      );
      return;
    }

    if (!isValidId) {
      console.warn(
        `[Runatics] analyticsId "${analyticsId}" does not match the expected format "G-XXXXXXXXXX" and will not be loaded.`
      );
      return;
    }

    if (isDev && !enableInDevelopment && debug) {
      console.log('[Runatics] Skipping GA in development. Pass enableInDevelopment to override.');
    } else if (shouldLoad && debug) {
      console.log('[Runatics] Google Analytics initialized with ID:', analyticsId);
    }
  });
</script>

<svelte:head>
  {#if shouldLoad}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html `<script async src="https://www.googletagmanager.com/gtag/js?id=${analyticsId}"></script>`}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html `<script>window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}window.__runaticsInitialized=window.__runaticsInitialized||{};if(!window.__runaticsInitialized['${analyticsId}']){window.__runaticsInitialized['${analyticsId}']=true;gtag('js',new Date());gtag('config','${analyticsId}');}</script>`}
  {/if}
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

{#if analyticsId && !isValidId && debug}
  <div
    role="alert"
    style="padding: 1rem; background: #fef2f2; border: 1px solid #fca5a5; border-radius: 0.375rem; margin: 1rem;"
  >
    <h2 style="color: #991b1b; margin: 0 0 0.5rem 0; font-size: 1.125rem; font-weight: 600;">
      Invalid Analytics ID
    </h2>
    <p style="color: #7f1d1d; margin: 0;">
      The provided <code>analyticsId</code> ("{analyticsId}") does not match the expected format
      <code>G-XXXXXXXXXX</code>. Google Analytics will not be loaded.
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
@prop enableInDevelopment?: boolean - Load GA even when import.meta.env.DEV is true (default: false)

## Example
```svelte
<Runatics analyticsId="G-XXXXXXXXXX" />
```

## With debug mode
```svelte
<Runatics analyticsId="G-XXXXXXXXXX" debug={true} />
```

## Force-enable in development
```svelte
<Runatics analyticsId="G-XXXXXXXXXX" enableInDevelopment={true} debug={true} />
```
-->
