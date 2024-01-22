<script lang="ts">
	import type { PageData } from './$types.js';
	import PhotoGallery from '$lib/components/page/property-page/photo-gallery/photo-gallery.svelte';
	import PropertyDescriptions from '$lib/components/page/property-page/property-descriptions/property-descriptions.svelte';
	import PropertyRoomType from '$lib/components/page/property-page/property-room-type/property-room-type.svelte';
	import PhotoGalleryCarousel from '$lib/components/page/property-page/photo-gallery-carousel/photo-gallery-carousel.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { ArrowLeftIcon } from 'lucide-svelte';
	import PropertyInquiry from '$lib/components/page/property-page/property-inquiry/property-inquiry.svelte';

	export let data: PageData;

</script>


<div class="flex h-screen flex-col">
	<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
		<div class="flex items-center gap-4">
			<Button data-sveltekit-preload-data="hover" size="icon" variant="outline" href="/property">
				<ArrowLeftIcon class="h-4 w-4" />
				<span class="sr-only">Back</span>
			</Button>
			<h1 class="text-2xl font-bold md:text-xl">Haikal Homey</h1>
		</div>
		<PhotoGalleryCarousel/>

    <!-- <PhotoGallery/> -->
		<div class="container px-2 lg:px-10 my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
			<PropertyDescriptions />
			<!-- <PropertyRoomType /> -->
			<PropertyInquiry />
		</div>
	</main>
</div>
