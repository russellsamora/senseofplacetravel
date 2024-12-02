<script>
	let { email, emailText } = $props();
</script>

<div id="info" class="c">
	<p><a href="mailto:{email}">{@html emailText}</a></p>
</div>

<style>
	.c {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 50svh;
	}

	a {
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
