<script lang="ts">
	import type { LayoutData } from './$types.js';
	import '../../../app.pcss';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n.js';
	import Footer from '$lib/components/page/footer.svelte';
</script>

<ParaglideJS {i18n}>
	<main class="">
		<slot />
	</main>
		<Footer />
</ParaglideJS>
