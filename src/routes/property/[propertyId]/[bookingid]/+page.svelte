<script lang="ts">
	import type { PageData } from './$types.js';
    import { Button } from "$lib/components/ui/button/index.js";
	import { ArrowLeftIcon } from 'lucide-svelte';
	import GuestDetails from '$lib/components/page/booking-page/guest-details/guest-details.svelte';
	import BookingDetails from '$lib/components/page/booking-page/booking-details/booking-details.svelte';
	import PriceDetails from '$lib/components/page/booking-page/price-details/price-details.svelte';

	export let data: PageData;
</script>

<div class="flex h-screen flex-col">
	<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
		<div class="flex items-center gap-4">
			<Button size="icon" variant="outline">
				<ArrowLeftIcon class="h-4 w-4" />
				<span class="sr-only">Back</span>
			</Button>
			<h1 class="text-lg font-semibold md:text-xl">Booking Details</h1>
		</div>
		<div class="flex flex-col gap-6 md:grid md:grid-cols-6">
			<div class="flex flex-col gap-6 md:col-span-4 lg:col-span-3 xl:col-span-4">
				<BookingDetails />
				<GuestDetails />
			</div>
			<div class="flex flex-col gap-6 md:col-span-2 lg:col-span-3 xl:col-span-2">
				<PriceDetails />
			</div>
		</div>
	</main>
</div>
