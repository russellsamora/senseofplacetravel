<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import CMS from "$components/helpers/CMS.svelte";
	import Meta from "$components/Meta.svelte";
	import Hero from "$components/Hero.svelte";
	import Places from "$components/Places.svelte";
	import Info from "$components/Info.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";

	version();

	const preloadFont = [
		"https://senseofplacetravel.com/assets/fonts/sao-torpes.woff2",
		"https://senseofplacetravel.com/assets/fonts/optima-400.woff2",
		"https://senseofplacetravel.com/assets/fonts/optima-700.woff2",
		"https://senseofplacetravel.com/assets/fonts/figtree-v6-latin-900.woff2"
	];
	const components = { Places, Info };
	const { body } = copy;

	setContext("copy", copy);
	const { title, description, url, keywords, email, tagline } = copy;
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />

<div>
	<Hero {email} {tagline} />
	<CMS {body} {components} />
</div>
