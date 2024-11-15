<script>
	let { items } = $props();
</script>

<ul>
	{#each items as item}
		<li>{@html item}</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0 1.25em;
	}
	li {
		list-style-type: disc;
	}
</style>
