<script>
  import { setContext } from 'svelte';
  import { Svelte } from 'svelte-supertiny';
  const iconCtx = {
    size: '30'
  };
  setContext('iconCtx', iconCtx);
</script>

<Svelte transform="rotate(90)" />
