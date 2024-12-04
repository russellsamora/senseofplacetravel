<script>
	let { value } = $props();
</script>

<div id="info" class="c">
	<p>{@html value}</p>
</div>

<style>
	.c {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 50svh;
	}

	p {
		font-size: clamp(28px, 5vw, 48px);
		text-align: center;
		padding: 16px;
		line-height: 1.2;
		margin: 0 auto;
		transform: translateY(-0.5em);
	}

	:global(#info a) {
		text-align: center;
		text-transform: lowercase;
	}
</style>
