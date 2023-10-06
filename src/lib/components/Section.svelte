<script>
	import { headerHeight } from '../../stores';
	/**
	 * @type {any}
	 */
	export let navId;
</script>

<section class="container" id={navId}>
	<slot />
</section>

<style>
	/* styles.css */
	.container {
		min-height: 110vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
