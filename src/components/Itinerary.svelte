<script>
	let { place } = $props();
	import loadJson from "$utils/loadJson.js";
	import CMS from "$components/helpers/CMS.svelte";
	import Ul from "$components/Ul.svelte";

	const components = { Ul };

	// $effect(async () => {
	// 	copy = await loadJson(`assets/itineraries/${place}.json`);
	// })
</script>

<div class="c itinerary">
	{#await loadJson(`assets/itineraries/${place}.json`) then copy}
		<CMS body={[copy]} {components} />
	{:catch error}
		<p>Sorry! We had trouble loading the itinerary.</p>
	{/await}
</div>

<style>
	.c {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100svh;
		z-index: var(--z-overlay);
		background: var(--color-bg);
		opacity: 0.95;
		overflow: auto;
		padding: 16px;
	}

	:global(.itinerary span) {
		display: block;
	}

	:global(.itinerary aside) {
		border: 1px solid var(--color-fg);
		padding: 12px 16px;
		margin: 16px 0;
	}
</style>
