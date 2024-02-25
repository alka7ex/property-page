<script lang="ts">
	import type { LayoutData } from './(property)/property/$types.js';
	import '../app.pcss';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n.js';
	import Footer from '$lib/components/page/footer.svelte';
</script>

<svelte:head>
	<title>Property Lsit</title>
	<meta name="description" content="We are a tech first, AI enabled revenue growth partner for independent rental property and vacation rental properties"/>
</svelte:head>


<ParaglideJS {i18n}>
	<main class="">
		<slot />
	</main>
		<Footer />
</ParaglideJS>
