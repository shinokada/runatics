<script>
  import { Svelte } from 'svelte-supertiny';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
  };
  onMount(() => {
    const icon = new Svelte({ target: document.body, props });
  });
</script>
