<script lang="ts">
  import { MetaTag } from 'svelte-icon-webkit';
  interface Props {
    title: string;
  }
  let { title }: Props = $props();

  const meta = {
    title: title,
    description: '340+ SVG logos for popular brands from SuperTinyIcons for Svelte.',
    keywords: 'SuperTinyIcons, Svelte 5, Svelte 4, Runes, SvelteKit, SVG icons',
    url: 'https://svelte-supertiny.codewithshin.com/',
    image: `https://open-graph-vercel.vercel.app/api/svelte-supertiny?title=${title}`,
    imageAlt: 'Svelte Supertiny',
    creator: '@shinokada'
  };
</script>

<MetaTag {...meta} />
