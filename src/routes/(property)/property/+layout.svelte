<script lang="ts">
    import type { LayoutData } from './$types.js';
    import '../../../app.pcss';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n.js';

    
    export let data: LayoutData;
</script>
<ParaglideJS {i18n}>
    <slot />
</ParaglideJS>
