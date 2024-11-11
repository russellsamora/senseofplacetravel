<script>
	let { email, phone } = $props();
</script>

<div class="c">
	<p><span>email:</span> <a href="mailto:{email}">{email}</a></p>
	<p><span>phone:</span> <a href="tel:{phone}">{phone}</a></p>
</div>

<style>
	.c {
		/* display: flex; */
		/* flex-direction: column; */
		/* align-items: center; */
		/* justify-content: center; */
	}

	p {
	}

	a {
		font-size: clamp(24px, 2.75vw, 36px);
		font-weight: bold;
	}
</style>
