<script>
  import '../app.pcss';
  import { page } from '$app/stores';
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import { Footer, removeHyphensAndCapitalize } from 'runes-webkit';
  import { Runatics } from '$lib';
  import Nav from './utils/Nav.svelte';
  let { children, data } = $props();
  let currentUrl = $state($page.url.pathname);
  const analyticsId = data.ANALYTICS_ID;
  let metaTags = $state(
    $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags
  );

  $effect(() => {
    currentUrl = $page.url.pathname;
    metaTags = $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags;
  });
  // const lis = [
  //   { name: 'Guide', href: '/guide/svelte-4/getting-started' },
  //   { name: 'Icons', href: '/icons' },
  //   { name: 'Icon sets', href: 'https://svelte-svg-icons.codewithshin.com/' }
  // ];
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };
  // const urlsToIncludeSwitcherAndSidebar = ['/guide/', '/guide2/', '/how-to-use'];
  const siteName = removeHyphensAndCapitalize(__NAME__);
  const twitterUrl = 'https://twitter.com/shinokada';
  const githubUrl = `https://github.com/shinokada/${__NAME__}`;
</script>

<RunesMetaTags {...metaTags} />
<Runatics {analyticsId} />

<Nav {siteName} {twitterUrl} {githubUrl} />
<div class="mx-auto max-w-4xl lg:flex">
  <div class="relative h-full w-full overflow-y-auto px-8">
    {@render children()}
    <Footer {brand} ulClass="dark_bg_theme" />
  </div>
</div>
