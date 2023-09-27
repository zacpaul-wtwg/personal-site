<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<em>Published: {data.date}</em>
	<p>
		{#each data.tags as tag}
			{tag}&nbsp;
		{/each}
	</p>
	<svelte:component this={data.content} />
</article>
