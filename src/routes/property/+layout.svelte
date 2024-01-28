<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import '../../app.pcss';
	import { i18n } from '$lib/i18n.js';
</script>

<div class="bg-background h-screen">
	<ParaglideJS {i18n}>
		<slot />
	</ParaglideJS>
</div>