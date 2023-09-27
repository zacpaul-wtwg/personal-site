<!-- src/routes/blog/+page.svelte -->
<script>
	import { slugify } from '$lib/utils';
	export let data;
	let maxVisibleItems = 3;
	let loadedPosts = data.posts;
	$: limitedPosts = loadedPosts.slice(0, maxVisibleItems);
	let nextIndex = maxVisibleItems;

	// console.log(loadedPosts);
	// console.log(limitedPosts);

	function loadMore() {
		const nextItems = loadedPosts.slice(nextIndex.length, nextIndex.length + maxVisibleItems);
		limitedPosts = [...loadedPosts, ...nextItems];
	}
</script>

<h2>Posts about Code and Stuff</h2>
<div class="code-posts">
	<div>
		{#each limitedPosts as post}
			<div class="card">
				<h3>
					<a href="posts/{post.path}/{slugify(post.meta.title)}">
						{post.meta.title}
					</a>
				</h3>
				<span class="date">Published {post.meta.date}</span>
				<br />
				{#each post.meta.tags as tag}
					<a href="/posts/tags/{tag}"><span class="tags">{tag}&nbsp;</span></a>
				{/each}
			</div>
		{/each}
	</div>
	{#if limitedPosts.length < loadedPosts.length}
		<button on:click={loadMore}>Load More</button>
	{/if}
</div>

<style>
	h3 {
		margin-bottom: 5px;
		& a {
			text-decoration: none;
			color: black;
		}
		margin: 0px;
	}
	.date {
		font-style: italic;
	}
	.tags {
		display: inline-block;
		padding: 2px;
		background-color: lightgray;
		margin: 2px;
		cursor: pointer;
	}
	.card {
		margin: 5px;
		padding: 1px 10px 5px 10px;
		border-radius: 5px;
		background-color: var(--light-grey);
		max-width: 300px;
	}
</style>
