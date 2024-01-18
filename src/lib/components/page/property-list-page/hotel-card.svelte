<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

<Card.Root class="flex w-full max-w-4xl rounded-xl bg-white shadow-lg">
	<div class="w-1/2">
		<img
			alt="Luxury Villa"
			class="h-full w-full rounded-l-xl object-cover"
			height="300"
			src="https://assets-news.housing.com/news/wp-content/uploads/2022/02/27121904/featured-compressed-67.jpg"
			style={{
				aspectRatio: '684/300',
				objectFit: 'cover'
			}}
			width="684"
		/>
	</div>
	<Card.Content class="w-1/2 p-6">
		<h2 class="text-2xl font-bold">Luxury Villa</h2>
		<p class="mt-2 text-sm text-gray-500">123 Main St, Anytown</p>
		<div class="mt-4">
			<Badge variant="secondary">review rating</Badge>
			<p class="mt-1">4 Star Hotel</p>
		</div>
		<p class="mt-4">Facilities: Pool, Gym, Free Wifi</p>
		<div class="flex items-center justify-between my-4">
			<div class="flex items-baseline">
				<span class="text-4xl font-bold">$299</span>
				<span class="ml-2 text-base text-gray-500">per night</span>
			</div>
			<Button class="self-end">Book Now</Button>
		</div>
	</Card.Content>
</Card.Root>
