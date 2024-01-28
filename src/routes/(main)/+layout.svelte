<script lang="ts">
	import Navbar from '$lib/components/page/main-page/Navbar.svelte';
	import '../../app.pcss';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n.js';
</script>

<div class="bg-background h-screen">
<ParaglideJS {i18n}>
	<Navbar/>
	<slot />
</ParaglideJS>
</div>