<!-- src/routes/[slug]/+page.svelte -->
<script>
	import { onMount } from 'svelte';
	import Prism from 'prismjs';

	import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
	export let data;
	onMount(() => {
		Prism.highlightAll();
		const pElements = document.querySelectorAll('p');

		pElements.forEach((p) => {
			const text = p.innerText;
			if (text.toLowerCase().startsWith('create')) {
				p.innerText = `🌱 ${text}`;
			}
		});

		pElements.forEach((p) => {
			const text = p.innerText;
			if (text.toLowerCase().startsWith('update')) {
				p.innerText = `✏️ ${text}`;
			}
		});
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
	:global(body) {
		& h2::after {
			content: '';
			display: block;
			height: 1px;
			width: 100%;
			margin-top: 8px;
		}
	}
	article {
		padding-top: 50px;
	}
</style>
