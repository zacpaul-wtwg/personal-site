<script>
	import Nav from '$lib/components/Nav.svelte';
	import { headerHeight } from '../stores';
	import '../app.css';

	import { onMount } from 'svelte';
	let theme = 'light'; // default theme

	onMount(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			theme = storedTheme;
		}
	});

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
	}
</script>

<svelte:head>
	{#if theme === 'light'}
		<link rel="stylesheet" href="/light-mode.css" />
	{:else}
		<link rel="stylesheet" href="/dark-mode.css" />
	{/if}
</svelte:head>

<header>
	<Nav />
</header>
<div class="container">
	<div class="content">
		<div class="width">
			<button class="mode-toggle" on:click={toggleTheme}>
				{#if theme === 'light'}
					<div class="toggle-icon">🌛</div>
				{:else}
					<div class="toggle-icon">🌞</div>
				{/if}
			</button>

			<slot />
		</div>
	</div>
</div>

<style>
	header {
		position: fixed;
		top: 0;
		z-index: 1000;
		height: auto;
		display: block;
		padding: 1px;
		width: 100%;
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

	.width {
		padding: 20px;
		color: var(--);
	}

	.mode-toggle {
		position: fixed;
		left: 0px;
		border-radius: 0px 5px 5px 0px;
		width: fit-content;
		font-size: 2em;
		padding: 5px;
		z-index: 9999;
		@media only screen and (max-width: 904px) {
			bottom: 75px;
		}
		@media only screen and (min-width: 905px) {
			top: 75px;
			/* Your CSS here */
		}
	}
	.toggle-icon {
		transform: rotate(45deg);
	}
</style>
