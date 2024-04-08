<script>
  import '../app.pcss';
  import { page } from '$app/stores';
  import {
    Footer,
    MetaTag,
    OnThisPage,
    extract,
    Sidebar,
    removeHyphensAndCapitalize
  } from 'svelte-icon-webkit';
  import Nav from './utils/Nav.svelte';
  let { children } = $props();
  let currentUrl = $state($page.url.pathname);
  $effect(() => {
    currentUrl = $page.url.pathname;
  });
  const lis = [
    { name: 'Guide', href: '/guide/svelte-4/getting-started' },
    { name: 'Icons', href: '/icons' },
    { name: 'Icon sets', href: 'https://svelte-svg-icons.codewithshin.com/' }
  ];
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };
  const urlsToIncludeSwitcherAndSidebar = ['/guide/', '/guide2/', '/how-to-use'];
  const siteName = removeHyphensAndCapitalize(__NAME__);
  const twitterUrl = 'https://twitter.com/shinokada';
  const githubUrl = `https://github.com/shinokada/${__NAME__}`;
  const meta = {
    description:
      'A collection of reusable Svelte components for building icon-based user interfaces in web applications.',
    keywords: 'Svelte 5, Runes, SvelteKit, UI, icons'
  };
</script>

<MetaTag {...meta} />
<Nav
  {lis}
  {siteName}
  {twitterUrl}
  {githubUrl}
  urlsToIncludeSwitcher={urlsToIncludeSwitcherAndSidebar}
/>
<div class="lg:flex">
  {#if urlsToIncludeSwitcherAndSidebar.some((path) => currentUrl.startsWith(path))}
    <Sidebar />
    <div class="relative">
      <OnThisPage {extract} headingSelector="#mainContent > :where(h2, h3)" />
    </div>
  {/if}
  <div class="relative h-full w-full overflow-y-auto px-8">
    {@render children()}
    <Footer {brand} {lis} ulClass="dark_bg_theme" />
  </div>
</div>
