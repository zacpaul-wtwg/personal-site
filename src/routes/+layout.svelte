<script>
	import Nav from '$lib/components/Nav.svelte';
	import { headerHeight } from '../stores';
	import '../app.css';
</script>

<header>
	<Nav />
</header>
<div class="container">
	<div class="content">
		<div class="width">
			<slot />
		</div>
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

	.container {
		display: flex;
		justify-content: center;
	}
	/* File path: /path/to/your/styles.css */

	.content {
		max-width: 60vw;

		/* First breakpoint: max-width changes to 80vw when the viewport is under 1200px */
		@media (max-width: 1200px) {
			max-width: 80vw;
		}

		/* Second breakpoint: max-width changes to 90vw when the viewport is under 900px */
		@media (max-width: 900px) {
			max-width: 90vw;
		}

		/* Third breakpoint: max-width changes to 100vw when the viewport is under 600px */
		@media (max-width: 600px) {
			max-width: 100vw;
		}
	}
</style>
