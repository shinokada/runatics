 <script>
  import { Runatics } from 'runatics';
  let { children, data } = $props();
  const analyticsId = data.ANALYTICS_ID
</script>

<Runatics {analyticsId} />

{@render children()}
