<!-- File path: src/components/CodeBlock.svelte -->

<script>
	import Prism from 'prismjs';
	import 'prismjs/plugins/toolbar/prism-toolbar.min.js';
	import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
	import { onMount, afterUpdate } from 'svelte';

	export let code, language;

	function highlight() {
		Prism.highlightAll();
	}

	onMount(highlight);
	afterUpdate(highlight);
</script>

<pre class="line-numbers">
  <code class={`language-${language}`}>
    {@html code}
  </code>
</pre>

<style>
	@import 'prismjs/plugins/toolbar/prism-toolbar.css';
	@import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
</style>
