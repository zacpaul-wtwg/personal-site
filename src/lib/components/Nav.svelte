<script>
	const item = function (/** @type {string} */ label, /** @type {string} */ link) {
		return { label: label, link: link };
	};

	const navItems = [
		item('Posts', '#posts'),
		item('Resume', '#resume'),
		item('Hobbies', '#hobbies'),
		item('Contact', '#contact')
	];
</script>

<nav>
	<ul>
		{#each navItems as item}
			<li>
				<a href={item.link}>{item.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		padding: 0px;
		justify-content: space-evenly;
	}
	a {
		text-decoration: none;
		font-family: 'Besley';
		font-weight: 900;
	}
</style>
