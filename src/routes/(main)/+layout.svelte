<script lang="ts">
	import Navbar from '$lib/components/page/main-page/Navbar.svelte';
	import '../../app.pcss';
</script>

<div class="bg-background h-screen">
	<Navbar/>

	<slot />
</div>