<script>
	import { getContext } from "svelte";

	import Viewport from "$runes/Viewport.svelte.js";
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import Itinerary from "$components/Itinerary.svelte";
	import Document from "$svg/document.svg";
	import slugify from "$utils/slugify.js";

	let { content, onView } = $props();
	const viewport = new Viewport();

	let scrollIndex = $state();
	let liHeight = $state(0);
	let top = $derived((viewport.height - liHeight) / 2);
	let bottom = $derived(top);
	let hasSample = $derived(scrollIndex !== undefined);
	let currentPlace = $derived.by(() => {
		const place = content[scrollIndex];
		return slugify(place);
	});
	let highlight = $state(false);
	let showItinerary = $state(false);

	function getImage(name) {
		const a = slugify(name);
		return `assets/places/${a}.jpg`;
	}
</script>

<div class="c">
	<div class="images" class:highlight>
		{#each content as name, i}
			{@const src = getImage(name)}
			{@const active = i <= scrollIndex}
			<img class:active {src} alt="test" />
		{/each}
	</div>

	<ul>
		<Scrolly {top} {bottom} bind:value={scrollIndex}>
			{#each content as name, i}
				{@const city = name.split(",")[0].trim()}
				{@const country = name.split(",")[1].trim()}
				{@const img = getImage(name)}
				{@const active = i === scrollIndex}
				<li class:active bind:offsetHeight={liHeight}>
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<span
						class="city"
						onmouseenter={() => {
							if (active) highlight = true;
						}}
						onmouseleave={() => {
							if (active) highlight = false;
						}}><span class="text text-outline">{city}</span></span
					>
					<span class="country text-outline">{country}</span>
					<!-- <button class="xx" class:visible={hasSample}>
						<span class="icon">{@html Document}</span>
						<span class="text text-outline"> View Sample Itinerary </span>
					</button> -->
				</li>
			{/each}
		</Scrolly>
	</ul>

	<button
		class="sample"
		class:visible={hasSample}
		onclick={() => (showItinerary = true)}
	>
		<span class="bg"></span>
		<span class="icon">{@html Document}</span>
		<span class="text"> View Itinerary </span>
	</button>
</div>

{#if showItinerary}
	<Itinerary place={currentPlace} />
{/if}

<style>
	.c {
		position: relative;
	}

	ul {
		list-style: none;
		padding: 0 16px;
		margin: 25svh auto;
	}

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: clamp(36px, 5vw, 128px);
		text-align: center;
		line-height: 1;
		padding: 1.25em 0;
		opacity: 0.5;
		letter-spacing: 0.05em;
	}

	li:last-of-type {
		padding-bottom: 0;
	}

	li.active {
		opacity: 1;
	}

	span.city {
		font-family: var(--sans-hed);
		font-weight: 900;
		color: var(--color-primary);
		cursor: pointer;
	}

	span {
		position: relative;
	}

	span.country {
		font-size: clamp(16px, 0.4em, 64px);

		/* color: var(--color-fg);
		font-family: var(--serif);
		font-weight: bold;
		opacity: 1; */

		color: var(--color-primary);
		opacity: 0.8;
		font-family: var(--sans-hed);
		font-weight: normal;

		/* color: var(--color-fg);
		font-family: var(--sans);
		font-weight: bold;
		opacity: 0.6; */
	}

	li img {
		position: absolute;
		width: 3.5em;
		min-width: 3.5em;
		border-radius: 16px;
		filter: grayscale(1);
		opacity: 0;
		transform-origin: 50%;
		transform: scale(0.25);
		transition: all 0.25s ease-in-out;
	}

	.active img {
		/* opacity: 1; */
		transform: translate(-100%, -0.15em) scale(1);
	}

	li:nth-of-type(even) img {
		bottom: 0%;
		left: -32px;
		transform: translate(-100%, -0.15em) scale(0.25em);
	}

	li:nth-of-type(odd) img {
		bottom: 0%;
		right: -32px;
		transform: translate(100%, -0.15em) scale(0.25em);
	}

	.images {
		position: fixed;
		/* top: 50%;
		left: 50%;
		transform: translate(-50%, -50%); */
		pointer-events: none;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		/* height: 100svh; */
		/* width: 640px; */
		/* height: 480px; */
	}

	.images img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		filter: grayscale(1);
		left: 0;
		transition: all 0.5s ease-in-out;
	}

	.images img.active {
		opacity: 1;
		top: 0;
		left: 0;
	}

	.highlight img.active {
		filter: grayscale(0.33);
	}

	button.sample {
		position: fixed;
		width: 8em;
		height: 8em;
		border-radius: 50%;
		bottom: 16px;
		right: 16px;
		border: none;
		background: none;
		overflow: hidden;
		/* border: 1px solid var(--color-primary); */
		/* background: var(--color-primary); */
		/* background: rgba(255, 255, 255, 0.1); */
		color: var(--color-primary);
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		line-height: 1.2;
		opacity: 0;
		pointer-events: none;
		transition: all 0.25s ease-in-out;
		cursor: pointer;
		z-index: var(--z-top);
		border: 1px solid var(--color-primary);
		/* box-shadow: 4px 4px 0 2px red; */
	}

	button.sample:hover {
		border-radius: 40%;
	}

	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--color-bg);
		opacity: 0.75;
	}

	button.sample .icon {
		margin-bottom: 8px;
	}

	button.sample .text {
		--color-text-outline: var(--color-fg);
	}

	button.sample.visible {
		opacity: 1;
		pointer-events: auto;
	}

	:global(button.sample svg) {
		display: block;
		width: 2em;
		height: auto;
	}

	/* button.xx {
		display: none;
		font-size: var(--16px);
		color: var(--color-bg);
		background: none;
		border: none;
		font-weight: bold;
		font-family: var(--mono);
		justify-content: center;
		align-items: center;
		line-height: 1;
		--color-text-outline: var(--color-fg);
	} */

	/* :global(button.xx svg) {
		display: block;
		width: 2em;
		height: 2em;
	} */
</style>
