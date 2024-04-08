<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: "xl",
  };
  import { Icon } from 'svelte-supertiny';
  // for Svelte 4/5
  export let icon: ComponentType;
  // for Svelte 5:Runes
  let { icon } = $props();
</script>

<Icon {...config} {icon} />
