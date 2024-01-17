<script lang="ts">
	import type { PageData } from './$types.js';
	import PhotoGallery from '$lib/components/page/property-page/photo-gallery/photo-gallery.svelte';
	import PropertyDescriptions from '$lib/components/page/property-page/property-descriptions/property-descriptions.svelte';
	import PropertyRoomType from '$lib/components/page/property-page/property-room-type/property-room-type.svelte';
	import PhotoGalleryCarousel from '$lib/components/page/property-page/photo-gallery-carousel/photo-gallery-carousel.svelte';

	export let data: PageData;

</script>
<div class="flex h-screen w-full flex-col">
	<main class="flex-1 overflow-auto p-4">
    <!-- <PhotoGallery/> -->
	<PhotoGalleryCarousel/>
		<div class="container my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
			<PropertyDescriptions />
			<PropertyRoomType />
		</div>
	</main>
</div>
