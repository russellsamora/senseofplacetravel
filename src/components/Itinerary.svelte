<script>
	import loadJson from "$utils/loadJson.js";
	import CMS from "$components/helpers/CMS.svelte";
	import Ul from "$components/Ul.svelte";
	import circleX from "$svg/circle-x.svg";

	let { close, place } = $props();
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
	<button onclick={() => close()}>{@html circleX}</button>
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
	}

	:global(.itinerary section span) {
		display: block;
	}

	:global(.itinerary section aside) {
		border: 1px solid var(--color-fg);
		padding: 0.5em 0.75em;
		margin: 16px 0;
		font-size: clamp(14px, 2vw, 20px);
	}

	:global(.itinerary section > *) {
		font-size: clamp(18px, 2.25vw, 24px);
		margin: 0.5em auto;
		line-height: 1.5;
	}

	:global(.itinerary section h2) {
		font-size: clamp(28px, 3vw, 48px);
		margin: 0;
	}

	:global(.itinerary section span) {
		margin: 0;
	}

	:global(.itinerary section h3) {
		/* font-size: clamp(20px, 2.5vw, 32px); */
		/* border-bottom: 1px solid currentColor; */
		background: var(--color-fg);
		color: var(--color-bg);
		padding: 0 0.5em;
		margin: 2em 0 1em 0;
	}

	button {
		position: fixed;
		top: 16px;
		right: 28px;
		padding: 0;
		border: none;
		background: none;
		line-height: 1;
		z-index: var(--z-overlay);
		cursor: pointer;
	}

	:global(.itinerary button svg) {
		width: 48px;
		height: auto;
	}

	:global(.itinerary button svg path, .itinerary button svg circle) {
		stroke: var(--color-primary);
	}
</style>
