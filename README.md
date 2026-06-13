# Runatics

A lightweight Google Analytics 4 component for Svelte 5 (Runes). Drop it into any SvelteKit project and GA starts tracking — no boilerplate required.

[Documentation](https://runatics.codewithshin.com) · [Issues](https://github.com/shinokada/runatics/issues)

## Features

- Single component, zero configuration beyond your Measurement ID
- Duplicate-init guard — safe across hot reloads and multiple mounts
- SSR-safe: scripts injected via `<svelte:head>` so they appear in server-rendered HTML
- Dev-mode protection: GA is skipped in development by default
- Built-in debug logging and invalid-ID warnings

## Installation

```sh
pnpm add runatics      # pnpm
npm install runatics   # npm
```

## Quick start

```svelte
<script>
  import { Runatics } from 'runatics';
</script>

<Runatics analyticsId="G-XXXXXXXXXX" />
```

That's it. Two scripts are injected into `<head>`: the external `gtag/js` loader and the inline initializer.

## Props

| Prop                  | Type      | Default | Description                                                 |
| --------------------- | --------- | ------- | ----------------------------------------------------------- |
| `analyticsId`         | `string`  | —       | **Required.** Your GA4 Measurement ID, e.g. `G-XXXXXXXXXX`  |
| `debug`               | `boolean` | `false` | Log init messages and show error UI for missing/invalid IDs |
| `enableInDevelopment` | `boolean` | `false` | Load GA even when `import.meta.env.DEV` is `true`           |

## Usage examples

### Production setup (recommended)

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import { Runatics } from 'runatics';
</script>

<Runatics analyticsId="G-XXXXXXXXXX" />
```

GA is automatically skipped in development and loaded in production.

### Enable in development for testing

```svelte
<Runatics analyticsId="G-XXXXXXXXXX" enableInDevelopment={true} />
```

### Debug mode

Shows console logs and renders an error UI when the ID is missing or malformed:

```svelte
<Runatics analyticsId="G-XXXXXXXXXX" debug={true} />
```

### Environment variable (SvelteKit)

```svelte
<script>
  import { Runatics } from 'runatics';
  import { PUBLIC_GA_ID } from '$env/static/public';
</script>

<Runatics analyticsId={PUBLIC_GA_ID} />
```

Add `PUBLIC_GA_ID=G-XXXXXXXXXX` to your `.env` file.

## How it works

When `analyticsId` is valid and `shouldLoad` is true, Runatics injects two scripts into `<svelte:head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.__runaticsInitialized = window.__runaticsInitialized || {};
  if (!window.__runaticsInitialized['G-XXXXXXXXXX']) {
    window.__runaticsInitialized['G-XXXXXXXXXX'] = true;
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  }
</script>
```

The `__runaticsInitialized` guard ensures `gtag('config', ...)` is called exactly once per Measurement ID, even if the component mounts multiple times (e.g. during SvelteKit navigation or HMR).

## Measurement ID format

IDs must match `G-[A-Z0-9]+`. Examples of valid IDs:

```text
G-XXXXXXXXXX
G-1234567890
G-ABC123DEF4
```

If the ID is missing or malformed, Runatics logs a `console.warn` and skips script injection. With `debug={true}` it also renders a visible error block.

## Development vs production

| Condition                                                     | Scripts injected? |
| ------------------------------------------------------------- | ----------------- |
| `import.meta.env.DEV === true` (default)                      | No                |
| `import.meta.env.DEV === true` + `enableInDevelopment={true}` | Yes               |
| Production build                                              | Yes               |

## Requirements

- Svelte 5 (Runes mode)
- SvelteKit (any adapter)

## License

MIT © [Shinichi Okada](https://blog.codewithshin.com)
