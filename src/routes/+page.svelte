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
</style>
