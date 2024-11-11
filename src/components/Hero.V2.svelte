<div class="c">
	<img class="bg" src="assets/lake-inline--burma@2x.jpg" alt="lake" />
	<!-- <img class="lake" src="assets/lake.png" alt="lake" /> -->
	<!-- <img class="boat" src="assets/boat.png" alt="boat" /> -->
	<img class="logo" src="assets/logo@2x.png" alt="logo" />
	<div class="texture"></div>
	<h1 class="text-outline">
		<span>Sense</span> <span>of</span> <span>Place</span>
	</h1>
</div>

<p>
	Thoughtful, seamless trip planning to spark your curiosity and open new
	worlds.
</p>

<style>
	.c {
		position: relative;
		height: calc(100svh - 150px);
		overflow: hidden;
		margin-bottom: 0;
	}

	img.bg {
		opacity: 0.8;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 20% 50%;
	}

	img.logo {
		position: absolute;
		top: 16px;
		left: 16px;
		width: clamp(48px, 5vw, 96px);
	}

	/* img.lake {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	} */

	/* img.boat {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		animation: bob 4s ease-in-out infinite;
		transform-origin: 50% 50%;
		opacity: 1;
	} */

	.texture {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url("assets/texture-dust.png");
		opacity: 0.25;
	}

	.c:after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 33%;

		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0) 0%,
			var(--color-bg) 90%
		);
	}

	h1 {
		margin: 0;
		position: absolute;
		top: 33%;
		left: 0;
		transform: translate(0, -50%);
		color: var(--color-primary);
		font-size: clamp(48px, 12vw, 128px);
		line-height: 1;
		font-family: var(--sans-hed);
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 100%;
		opacity: 0.9;
		flex-direction: column;
		letter-spacing: 0.05em;
	}

	span:nth-of-type(2) {
		font-size: clamp(24px, 6vw, 64px);
		margin: 0 0.5em;
	}

	p {
		font-size: clamp(20px, 4vw, 40px);
		text-align: center;
		padding: 16px;
		color: var(--color-fg);
		line-height: 1.2;
		max-width: 20em;
		margin: 0 auto;
		transform: translateY(-0.5em);
		/* font-weight: 700; */
		/* font-family: var(--sans); */
	}

	@keyframes bob {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(8px) rotate(2deg);
		}
		100% {
			transform: translateY(0);
		}
	}

	@media (min-width: 600px) {
		h1 {
			font-size: clamp(48px, 8vw, 128px);
			flex-direction: row;
		}

		span:nth-of-type(2) {
			font-size: clamp(24px, 4vw, 64px);
			margin: 0 0.5em;
		}

		img.bg {
			object-position: 33% 50%;
		}
	}
</style>
