<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'svelte-icon-webkit';
  import { A } from 'svelte-5-ui-lib';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Svelte Supertiny: v2</h1>

<div class="my-8 flex gap-2">
  <a href="https://github.com/sponsors/shinokada" target="_blank"
    ><img
      src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86"
      alt="sponsor"
    /></a
  >
  <a href="https://www.npmjs.com/package/svelte-supertiny" rel="nofollow" target="_blank"
    ><img src="https://img.shields.io/npm/v/svelte-supertiny/next" alt="npm" /></a
  >
  <a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"
    ><img src="https://img.shields.io/github/license/shinokada/svelte-supertiny" alt="License" /></a
  >
  <a href="https://www.npmjs.com/package/svelte-supertiny" rel="nofollow" target="_blank"
    ><img src="https://img.shields.io/npm/dw/svelte-supertiny.svg" alt="npm" /></a
  >
</div>

<h2>Requirements</h2>

<HighlightCompo codeLang="ts" code={modules['./md/requirement.md'] as string} />

<h2>Installation</h2>

<p>Install Svelte and Svelte Supertiny:</p>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

<p>
  Replace <Code>2.0.0-next.x</Code> with the latest <Code>v2</Code> version. Check the latest version
  at the <A href="https://github.com/shinokada/svelte-supertiny/releases">GitHub Releases</A>.
</p>

<p>Enable Runes in <Code>svelte.config.js</Code>:</p>

<HighlightCompo codeLang="ts" code={modules['./md/runes.md'] as string} />
<h2>Basic Usage</h2>

<p>In a svelte file:</p>

<HighlightCompo codeLang="ts" code={modules['./md/basic-usage.md'] as string} />

<h2>Faster compiling</h2>

<p>
  If you need only a few icons from this library in your Svelte app, import them directly. This can
  optimize compilation speed and improve performance by reducing the amount of code processed during
  compilation.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/faster-compiling.md'] as string} />

<h2>Passing down other attributes</h2>

<p>Since all icons have "...$$restProps", you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />

<h2>Using svelte:component</h2>

<HighlightCompo codeLang="ts" code={modules['./md/using-svelte-component.md'] as string} />

<h2>Import all</h2>

<p>Use <Code>import * as Icon from 'svelte-supertiny'</Code>:</p>

<HighlightCompo codeLang="ts" code={modules['./md/import-all.md'] as string} />
