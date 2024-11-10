<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import { getContext } from "svelte";
	import deburr from "lodash.deburr";
	const copy = getContext("copy");

	let scrollIndex = $state(0);

	function getImage(name) {
		const key = deburr(name).replace(/\s/g, "-").toLowerCase();
		// console.log(key);
	}
</script>

<ul>
	<Scrolly top={350} bind:value={scrollIndex}>
		{#each copy.places as name, i}
			{@const city = name.split(",")[0].trim()}
			{@const country = name.split(",")[1].trim()}
			{@const img = getImage(name)}
			<li class:active={i === scrollIndex}>
				<span class="city"
					><span class="text"
						>{city}<img src="assets/places/test.jpg" alt={name} /></span
					></span
				>
				<span class="country">{country}</span>
			</li>
		{/each}
	</Scrolly>
</ul>

<style>
	ul {
		list-style: none;
		padding: 0 16px;
		margin: 0;
	}

	li {
		display: flex;
		flex-direction: column;
		font-size: clamp(32px, 5vw, 128px);
		text-align: center;
		line-height: 1;
		margin: 1.25em 0;
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
		color: var(--color-fg);
		font-family: var(--serif);
		font-weight: bold;
		opacity: 1;

		color: var(--color-primary);
		opacity: 0.7;
		/* color: var(--color-fg);
		opacity: 1; */
		font-family: var(--sans-hed);
		font-weight: normal;

		/* color: var(--color-fg);
		font-family: var(--sans);
		font-weight: bold;
		opacity: 0.6; */
	}

	img {
		position: absolute;
		width: 3.5em;
		min-width: 3.5em;
		border-radius: 16px;
		filter: grayscale(1);
		opacity: 0.1;
		transform-origin: 50%;
		transform: scale(0.25);
		transition: all 0.5s ease-in-out;
	}

	.active img {
		opacity: 1;
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
</style>
