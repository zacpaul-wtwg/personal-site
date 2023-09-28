<!-- src/routes/[slug]/+page.svelte -->
<script>
	import { onMount } from 'svelte';
	import Prism from 'prismjs';

	import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
	export let data;
	onMount(() => {
		Prism.highlightAll();
	});
</script>

<article>
	<h1>{data.title}</h1>
	<em>Published: {data.date}</em>
	<p>
		{#each data.tags as tag}
			{tag}&nbsp;
		{/each}
	</p>
	<div class="markdown-posts line-numbers">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	@import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
</style>
