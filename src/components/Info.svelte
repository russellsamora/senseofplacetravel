<script>
	let { email, emailText, phone } = $props();
</script>

<div id="info" class="c">
	<p><a href="mailto:{email}">{@html emailText}</a></p>
	<p><a href="tel:{phone}">{phone}</a></p>
</div>

<style>
	.c {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 50svh;
	}

	span {
		display: none;
	}

	a {
		/* font-size: clamp(24px, 2.75vw, 36px); */
		font-size: clamp(20px, 3.5vw, 84px);
		text-align: center;
		line-height: 1;
		padding: 1.25em 0;
		text-decoration: none;
		text-transform: lowercase;
	}

	:global(a span) {
		font-family: var(--sans-hed);
	}
</style>
