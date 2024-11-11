<script>
	import { getContext } from "svelte";
	import deburr from "lodash.deburr";
	import Viewport from "$runes/Viewport.svelte.js";
	import inView from "$actions/inView.js";
	import Scrolly from "$components/helpers/Scrolly.svelte";

	const viewport = new Viewport();
	const copy = getContext("copy");

	let scrollIndex = $state();
	let liHeight = $state(0);
	let top = $derived((viewport.height - liHeight) / 2);
	let bottom = $derived(top);

	// function onEnter(i) {
	// 	scrollIndex = i;
	// }

	// function onExit(i) {
	// 	scrollIndex = undefined;
	// }

	function getImage(name) {
		const a = deburr(name).toLowerCase();

		const b = a
			.replace(", ", "-")
			.replace(/ /g, "_")
			.replace(/[^a-z\-\_]/g, "")
			.toLowerCase();
		return `assets/places/${b}.jpg`;
	}

	$inspect({ liHeight, top });
</script>

<div class="c">
	<div class="images">
		{#each copy.places as name, i}
			{@const src = getImage(name)}
			{@const active = i <= scrollIndex}
			<!-- {@const transform = `translate(${i * 8}px, ${i * 8}px)`} -->
			<img class:active {src} alt="test" />
		{/each}
		<div class="texture"></div>
	</div>

	<!-- use:inView={{ bottom: viewport.height / 2 }}
			onenter={() => onEnter(i)}
			onexit={() => onExit(i)} -->
	<ul>
		<Scrolly {top} {bottom} bind:value={scrollIndex}>
			{#each copy.places as name, i}
				{@const city = name.split(",")[0].trim()}
				{@const country = name.split(",")[1].trim()}
				{@const img = getImage(name)}
				<li class:active={i === scrollIndex} bind:offsetHeight={liHeight}>
					<span class="city"
						><span class="text text-outline"
							>{city}<img src="assets/places/test.jpg" alt={name} /></span
						></span
					>
					<span class="country text-outline">{country}</span>
					<button>View Itinerary</button>
				</li>
			{/each}
		</Scrolly>
	</ul>
</div>

<style>
	.c {
		position: relative;
	}

	ul {
		list-style: none;
		padding: 0 16px;
		margin: 0;
		margin-top: 25svh;
		/* margin-top: -75svh; */
	}

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: clamp(32px, 5vw, 128px);
		line-height: 1;
		padding: 1.25em 0;
		opacity: 0.5;
		letter-spacing: 0.05em;
	}

	li:last-of-type {
		/* padding-bottom: 50vh; */
		padding-bottom: 0;
	}

	li.active {
		opacity: 1;
	}

	span.city {
		font-family: var(--sans-hed);
		font-weight: 900;
		color: var(--color-primary);
	}

	span.text {
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
		transition: all 0.5s ease-in-out;
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
		/* border-radius: 16px; */
		/* border: 1px solid var(--color-primary); */
		/* top: 20%; */
		left: 0;
		transition: all 0.5s ease-in-out;
	}

	.images img.active {
		opacity: 1;
		top: 0;
		left: 0;
	}

	button {
		font-size: clamp(16px, 0.25em, 48px);
		width: 10em;
		position: relative;
		border: none;
		background: transparent;
		border-bottom: 2px solid currentColor;
		font-family: var(--sans);
		text-transform: uppercase;
		font-weight: bold;
		margin-top: 1em;
		display: none;
	}
</style>
