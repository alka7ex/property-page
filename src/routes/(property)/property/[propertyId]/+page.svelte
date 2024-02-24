<script lang="ts">
	import type { PageData } from './$types.js';
	import PhotoGallery from '$lib/components/page/property-page/photo-gallery/photo-gallery.svelte';
	import PropertyDescriptions from '$lib/components/page/property-page/property-descriptions/property-descriptions.svelte';
	import PropertyRoomType from '$lib/components/page/property-page/property-room-type/property-room-type.svelte';
	import PhotoGalleryCarousel from '$lib/components/page/property-page/photo-gallery-carousel/photo-gallery-carousel.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { ArrowLeftIcon } from 'lucide-svelte';
	import PropertyInquiry from '$lib/components/page/property-page/property-inquiry/property-inquiry.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as m from '$paraglide/messages';
	import PropertyFacilities from '$lib/components/page/property-page/property-descriptions/property-facilities.svelte';

	export let data: PageData;
	console.log(data);
	let keywords =
		'Vacation rentals, Vacation rental in Indonesia, Best vacation rentals in Indonesia, Private vacation rental in Indonesia, home away, Holiday rentals, Budget hotel bandung';
</script>

<svelte:head>
	<title
		>Experience the Remarkable Beauty of Vacation Rental in Indonesia: Your Ultimate Escape</title
	>
	<meta
		name="description"
		content="Looking for a vacation rental in Indonesia that will leave you speechless? Look no further. Our stunning accommodations offer breathtaking views, top-notch amenities, and a truly unforgettable experience. Don't miss out, book now!"
	/>
	<meta name="keywords" content={keywords} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<main class="flex-1">
		<div class="p-4 flex h-16 items-center justify-between gap-4 bg-[#FEF2F4] shadow-md">
			<!-- <Button data-sveltekit-preload-data="hover" size="icon" variant="outline" href="/property">
				<ArrowLeftIcon class="h-4 w-4" />
				<span class="sr-only">Back</span>
			</Button> -->
			<h1 class="text-2xl font-bold">
				<a href="/property/{data.data?.slug}">{data.data?.property_name}</a>
			</h1>
		</div>
		<div class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
			<!-- <PhotoGalleryCarousel propertyPhoto={data?.data} /> -->
			<PhotoGallery propertyPhoto={data?.data}/>

			<div class="container grid grid-cols-1 gap-4 px-2 md:grid-cols-2 lg:px-10">
				<PropertyDescriptions propertyDetails={data?.data} />
				<!-- <PropertyRoomType /> -->
				<div class="flex flex-col gap-y-4">
					<PropertyInquiry propertyInquiry={data?.data} />
					<PropertyFacilities propertyDetails={data?.data} />
				</div>
			</div>
			<div class="container px-2 md:grid-cols-2 lg:px-10">
				<Card.Root class="border-none bg-[#F1F4FA] shadow-lg">
					<Card.Header>
						<Card.Title class="text-2xl font-bold"
							>{m.propertydetails_inquiry_google_maps()}</Card.Title
						>
					</Card.Header>
					<Card.Content class="flex flex-col items-center">
						<iframe
							class="w-full rounded"
							src="https://maps.google.com/maps?q={data.data?.latitude},{data.data
								?.longitude}&hl=es;z=14&amp;output=embed"
							title="Google Maps"
						></iframe>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</main>
</div>
