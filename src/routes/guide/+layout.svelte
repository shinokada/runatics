<script lang="ts">
  import { DocPage } from 'svelte-icon-webkit';
  import type { Snippet } from 'svelte';
  interface Props {
    children: Snippet;
  }
  let { children }: Props = $props();
</script>

<DocPage>
  {@render children()}
</DocPage>
