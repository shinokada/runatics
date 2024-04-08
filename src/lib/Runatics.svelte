<script>
  let { analyticsId } = $props();

  $effect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${analyticsId}');
      `;
    document.head.appendChild(script);
  });
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id={analyticsId}"></script>
</svelte:head>
{#if !analyticsId}
  <h2>You need to provide your Google Analytics ID</h2>
  <p>Please read the docs how to set it up.</p>
{/if}

<!--
@component
[Go to docs](https://runatics.codewithshin.com/)
## Props
@props: 
-->
