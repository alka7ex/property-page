<script lang="ts">

	import PhotoGallery from '$lib/components/ui/photo-gallery/photo-gallery.svelte';
	import PropertyDescriptions from '$lib/components/ui/property-descriptions/property-descriptions.svelte';
	import PropertyRoomType from '$lib/components/ui/property-room-type/property-room-type.svelte';

	export let data: PageData;

</script>
<div class="flex h-screen w-full flex-col">
	<main class="flex-1 overflow-auto p-4">
    <PhotoGallery/>
		<div class="container my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
			<PropertyDescriptions />
			<PropertyRoomType />
		</div>
	</main>
</div>
