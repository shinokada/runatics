<script>
  import '../app.css';
  import { page } from '$app/state';
  import { MetaTags, deepMerge } from 'runes-meta-tags';
  import { Footer } from 'runes-webkit';
  import { Runatics } from '$lib';
  import Nav from './utils/Nav.svelte';

  let { children, data } = $props();

  const analyticsId = $derived(data.ANALYTICS_ID);
  let metaTags = $derived(
    page.data.pageMetaTags
      ? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
      : data.layoutMetaTags
  );

  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };
</script>

<MetaTags {...metaTags} />
<Runatics {analyticsId} />

<Nav />
<div class="mx-auto mb-16 max-w-4xl lg:flex">
  <div class="relative h-full w-full overflow-y-auto px-8">
    {@render children()}
  </div>
</div>
<Footer {brand} footerClass="dark:bg-stone-900" />
