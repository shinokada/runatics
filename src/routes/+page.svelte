<script lang="ts">
	import {
		removeHyphensAndCapitalize,
		SupportBanner,
		TechInfo,
		HighlightCompo,
		H2
	} from 'runes-webkit';

	const modules = import.meta.glob('./md/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	});
	/*eslint no-undef: "off"*/
	const pkg = {
		pkgName: __NAME__,
		pkgVersion: __VERSION__,
		repoUrl: __GITHUBURL__,
		runesMetaTagsVersion: __RUNES_METATAGS_VERSION__,
		svelteVersion: __SVELTE_VERSION__,
		svelteKitVersion: __SVELTEKIT_VERSION__,
		svelte5uilibVersion: __SVELTE_5_UI_LIB_VERSION__,
		svelteRuneHighlight: __SVELTE_RUNE_HIGHLIGHT_VERSION__,
		viteVersion: __VITE_VERSION__
	};
</script>

<SupportBanner class="mt-8">
	To Keep It Going, Please Show Your Love.<a
		href="https://ko-fi.com/Z8Z2CHALG"
		target="_blank"
		aria-label="Buy Me a Coffee at ko-fi.com"
		><img
			height="40"
			style="border:0px;height:40px;"
			src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
			alt="Buy Me a Coffee at ko-fi.com"
		/></a
	>
</SupportBanner>

<h1 class="my-8 flex justify-center">{removeHyphensAndCapitalize(__NAME__)}</h1>

<p>
	A simple Google analyics component for Svelte Runes project. Please follow the following steps to
	set it up.
</p>

<H2>Installation</H2>

<HighlightCompo code={modules['./md/installation.md'] as string} />

<H2>.env</H2>

<p>Add your ANALYTICS_ID to .env</p>

<HighlightCompo code={modules['./md/env.md'] as string} />

<H2>+layout.server.js</H2>

<p>Add the following code to +layout.server.js</p>

<HighlightCompo code={modules['./md/layout-server-ts.md'] as string} />

<H2>+layout.svelte</H2>

<p>Add the following code to +layout.svelte</p>

<HighlightCompo code={modules['./md/layout-svelte.md'] as string} />

<TechInfo {...pkg} />
