<div class="c">
	<div class="bg">
		<img src="assets/lake-inline--burma@2x.jpg" alt="lake" />
		<div class="fg"></div>
	</div>
	<h1><span>Sense</span> <span>of</span> <span>Place</span></h1>
</div>

<p>
	Thoughtful, seamless trip planning to spark your curiosity and open new
	worlds.
</p>

<style>
	.c {
		margin: 0 auto;
		margin-top: 48px;
		aspect-ratio: 6 /4;
		overflow: hidden;
		position: relative;
		border-radius: 16px;
		max-width: 640px;
	}

	img {
		opacity: 0.75;

		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.bg {
		max-width: 640px;
		margin: 0 auto;
		position: relative;
	}

	div.fg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	div.fg:before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 10%;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0) 0%,
			var(--color-bg) 50%
		);
	}

	h1 {
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, 0);
		color: var(--color-primary);
		font-size: clamp(48px, 4vw, 96px);
		line-height: 1;
		font-family: var(--sans-hed);
		display: flex;
		/* flex-direction: column; */
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 100%;
		opacity: 0.8;
	}

	span:nth-of-type(2) {
		font-size: clamp(16px, 2vw, 64px);
		margin: 0 0.5em;
	}

	p {
		font-size: clamp(16px, 5vw, 32px);
		text-align: center;
		padding: 16px;
		color: var(--color-fg);
		line-height: 1.2;
		max-width: 640px;
		margin: 0 auto;
		/* font-weight: 700; */
	}
</style>
