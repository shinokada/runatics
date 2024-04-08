<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'svelte-icon-webkit';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Props: Svelte Supertiny v1</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Size</H2>

<p>
  To change the size of an icon, use the <Code>size</Code> prop and specify the desired size. For example:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/size.md'] as string} />

<p>
  If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by
  including the desired classes in the `class` prop. For example:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/size-2.md'] as string} />

<H2>CSS frameworks suport</H2>

<p>
  You can apply CSS framework directly to the icon component or its parent tag using the <Code
    >class</Code
  > prop.
</p>

<H3>Tailwind CSS example:</H3>

<HighlightCompo codeLang="ts" code={modules['./md/tailwind.md'] as string} />

<H3>Bootstrap examples:</H3>

<HighlightCompo codeLang="ts" code={modules['./md/bootstrap.md'] as string} />

<H2>Events</H2>

<p>All icons have the following event forwardings:</p>

<HighlightCompo codeLang="ts" code={modules['./md/events.md'] as string} />

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...$$restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-attributes.md'] as string} />
