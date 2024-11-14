<script>
	let { value } = $props();
</script>

<ul>
	{#each value as item}
		<li>{@html item}</li>
	{/each}
</ul>
