<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import Hero from "$components/Hero.svelte";
	import Places from "$components/Places.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";

	version();

	const preloadFont = [];

	setContext("copy", copy);
	// const { title, description, url, keywords } = copy;
</script>

<!-- <Meta {title} {description} {url} {preloadFont} {keywords} /> -->
<div class="c">
	<Hero />
	<section>
		<h2>What We Do</h2>
		{#each copy.what as { value }}
			<p>{@html value}</p>
		{/each}
	</section>

	<section>
		<h2>Where We Go</h2>
		{#each copy.where as { value }}
			<p>{@html value}</p>
		{/each}
	</section>
	<Places />
</div>

<style>
	/* .c {
		position: relative;
	}
	.texture {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url("assets/texture-grid.png");
		opacity: 0.2;
	} */

	section {
		max-width: 640px;
		margin: 32px auto;
	}

	section h2 {
		/* font-family: var(--serif); */
		/* text-transform: uppercase; */
		font-weight: bold;
		letter-spacing: 0.05em;
		color: var(--color-primary);
	}

	section p {
		font-size: clamp(16px, 2.25vw, 28px);
		margin: 16px auto;
	}
</style>
