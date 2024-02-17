<script lang="ts">
	import Navbar from '$lib/components/page/main-page/Navbar.svelte';
	import '../../app.pcss';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n.js';
	let keywords =
		'Vacation rentals, Vacation rental in Indonesia, Best vacation rentals in Indonesia, Private vacation rental in Indonesia, home away, Holiday rentals, Budget hotel bandung';

</script>

<svelte:head>
	<title>GroRental - Maximize your property revenue potential</title>
	<meta name="description" content="We are a tech first, AI enabled revenue growth partner for independent rental property and vacation rental properties"/>
	<meta name="keywords" content={keywords} />
</svelte:head>

<div class="h-screen bg-background">
	<ParaglideJS {i18n}>
		<Navbar />
		<slot />
	</ParaglideJS>
</div>
