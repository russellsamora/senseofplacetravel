<script>
	let { sources } = $props();
</script>

<picture>
	{#each sources as { srcset, media }}
		<source {srcset} {media} />
	{/each}

	<source
		srcset="img-desktop@2x.jpg 2x"
		media="(min-width: 600px) and (max-width: 1199px)"
	/>
	<source srcset="img-large-desktop@2x.jpg 2x" media="(min-width: 1200px)" />
	<!-- <img
		src="{sources[0].srcset.split(" ")}"
		alt="Responsive example image"
		loading="lazy"
		width="600"
		height="400"
	/> -->
</picture>
