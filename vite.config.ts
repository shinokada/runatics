import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import pkg from './package.json' assert { type: 'json' };
import Svelte5UiLibPackage from './node_modules/svelte-5-ui-lib/package.json' assert { type: 'json' };
import sveltePackage from 'svelte/package.json' assert { type: 'json' };
import svelteKitPackage from '@sveltejs/kit/package.json' assert { type: 'json' };
import svelteIconWebkit from 'svelte-icon-webkit/package.json' assert { type: 'json' };
import svelteRuneHighlight from 'svelte-rune-highlight/package.json' assert { type: 'json' };
import vitePackage from 'vite/package.json' assert { type: 'json' };

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  define: {
    __NAME__: `"${pkg.name}"`,
    __VERSION__: `"${pkg.version}"`,
    __GITHUBURL__: `"${pkg.repository.url}"`,
    __SVELTE_5_UI_LIB_VERSION__: `"${Svelte5UiLibPackage.version}"`,
    __SVELTE_ICON_WEBKIT_VERSION__: `"${svelteIconWebkit.version}"`,
    __SVELTE_VERSION__: `"${sveltePackage.version}"`,
    __SVELTEKIT_VERSION__: `"${svelteKitPackage.version}"`,
    __SVELTE_RUNE_HIGHLIGHT_VERSION__: `"${svelteRuneHighlight.version}"`,
    __VITE_VERSION__: `"${vitePackage.version}"`
  }
});
