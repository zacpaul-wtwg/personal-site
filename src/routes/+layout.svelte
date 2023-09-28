<script>
	import Nav from '$lib/components/Nav.svelte';
	import { headerHeight } from '../stores';
	import '../app.css';

	let header;

	$: if (header) {
		headerHeight.set(header.offsetHeight);
	}
</script>

<header bind:this={header}>
	<Nav />
</header>
<div class="container-main">
	<div class="container">
		<slot />
	</div>
</div>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 1000;
		height: auto;
		display: block;
		padding: 1px;
		background-color: white;
	}
	.container-main {
		display: flex;
		justify-content: center;
	}
	.container {
		max-width: 900px;
	}
</style>
