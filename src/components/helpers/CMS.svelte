<script>
	// components: an object of components that map to section names (e.g., { "Hero": Hero }) where Hero is a Svelte component
	// body: an array of objects that contain a {section, content} obj
	let { components, body } = $props();

	function getId(str) {
		if (!str) return;
		return str.toLowerCase().replace(/[^a-z0-9]/g, "");
	}
</script>

{#snippet s(content, C)}
	{#if C}
		<C {...content} />
	{:else}
		{#each content as { type, value }}
			{@const C = components[type]}
			{@const isString = typeof value === "string"}
			{#if C}
				<C {...value} />
			{:else if type === "text"}
				<p>{@html value}</p>
			{:else if isString}
				<svelte:element this={type}>
					{@html value}
				</svelte:element>
			{:else}
				<svelte:element this={type} {...value}></svelte:element>
			{/if}
		{/each}
	{/if}
{/snippet}

{#each body as { section, content }}
	<!-- replace all non alpha numeric characters with "" -->
	{@const id = getId(section)}
	{@const C = components[section]}
	{#if id}
		<section {id}>
			{@render s(content, C)}
		</section>
	{:else}
		<section>
			{@render s(content, C)}
		</section>
	{/if}
{/each}
