<script>
	import '../app.css';
	import { page } from '$app/state';
	import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
	import { Footer } from 'runes-webkit';
	import { Runatics } from '$lib';
	import Nav from './utils/Nav.svelte';
	let { children, data } = $props();
	/* eslint-disable @typescript-eslint/no-unused-vars */
	let currentUrl = $state(page.url.pathname);
	const analyticsId = data.ANALYTICS_ID;
	let metaTags = $state(
		page.data.pageMetaTags
			? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
			: data.layoutMetaTags
	);

	$effect(() => {
		currentUrl = page.url.pathname;
		metaTags = page.data.pageMetaTags
			? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
			: data.layoutMetaTags;
	});

	const brand = {
		name: 'codewithshin.com',
		href: 'https://codewithshin.com'
	};
</script>

<RunesMetaTags {...metaTags} />
<Runatics {analyticsId} />

<Nav />
<div class="mx-auto max-w-4xl lg:flex mb-16">
	<div class="relative h-full w-full overflow-y-auto px-8">
		{@render children()}
	</div>
</div>
<Footer {brand} ulClass="dark:bg-stone-900" />
