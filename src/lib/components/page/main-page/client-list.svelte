<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import placeholder from '$lib/images/placeholder.svg.png';
</script>
<div class="grid-row grid mx-20">
    <div class="mx-auto mb-20 flex flex-col items-center justify-center text-center">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet our Clients</h2>
        <p class="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Trusted by the best teams in the world. We help teams of all sizes.
        </p>
    </div>    
    <div class="mx-auto flex justify-center gap-8">
        <Card.Root class="max-w-xl">
			<img
				alt="Luxury Villa"
				class="w-full"
				height="200"
				src={placeholder}
				style={{
					aspectRatio: '384/200',
					objectFit: 'cover'
				}}
				width="300"
			/>
			<Card.Content>
				<h3 class="text-lg font-semibold">Luxury Villa</h3>
				<p class="text-sm text-gray-500">123 Main St, Anytown</p>
				<div class="mt-2 flex items-center">
					<Badge variant="secondary">review rating</Badge>
				</div>
				<p class="mt-1 text-sm">4 Star Hotel</p>
				<p class="mt-1 text-sm">Facilities: Pool, Gym, Free Wifi</p>
				<div class="mt-4 flex items-baseline">
					<span class="text-2xl font-semibold">$299</span>
					<span class="ml-1 text-sm text-gray-500">per night</span>
				</div>
			</Card.Content>
			<Card.Footer class="flex justify-end">
				<Button>Book Now</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root class="max-w-xl">
			<img
				alt="Luxury Villa"
				class="w-full"
				height="200"
				src={placeholder}
				style={{
					aspectRatio: '384/200',
					objectFit: 'cover'
				}}
				width="300"
			/>
			<Card.Content>
				<h3 class="text-lg font-semibold">Luxury Villa</h3>
				<p class="text-sm text-gray-500">123 Main St, Anytown</p>
				<div class="mt-2 flex items-center">
					<Badge variant="secondary">review rating</Badge>
				</div>
				<p class="mt-1 text-sm">4 Star Hotel</p>
				<p class="mt-1 text-sm">Facilities: Pool, Gym, Free Wifi</p>
				<div class="mt-4 flex items-baseline">
					<span class="text-2xl font-semibold">$299</span>
					<span class="ml-1 text-sm text-gray-500">per night</span>
				</div>
			</Card.Content>
			<Card.Footer class="flex justify-end">
				<Button>Book Now</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root class="max-w-xl">
			<img
				alt="Luxury Villa"
				class="w-full"
				height="200"
				src={placeholder}
				style={{
					aspectRatio: '384/200',
					objectFit: 'cover'
				}}
				width="300"
			/>
			<Card.Content>
				<h3 class="text-lg font-semibold">Luxury Villa</h3>
				<p class="text-sm text-gray-500">123 Main St, Anytown</p>
				<div class="mt-2 flex items-center">
					<Badge variant="secondary">review rating</Badge>
				</div>
				<p class="mt-1 text-sm">4 Star Hotel</p>
				<p class="mt-1 text-sm">Facilities: Pool, Gym, Free Wifi</p>
				<div class="mt-4 flex items-baseline">
					<span class="text-2xl font-semibold">$299</span>
					<span class="ml-1 text-sm text-gray-500">per night</span>
				</div>
			</Card.Content>
			<Card.Footer class="flex justify-end">
				<Button>Book Now</Button>
			</Card.Footer>
		</Card.Root>
    </div>
</div>
