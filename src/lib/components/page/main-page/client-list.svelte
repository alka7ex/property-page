<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import placeholder from '$lib/images/placeholder.svg.png';
	import * as m from "$paraglide/messages"
</script>

<section class="bg-slate-700 py-20 text-white">
	<div class="grid-row mx-20 grid">
		<div class="mx-auto mb-20 flex flex-col items-center justify-center text-center">
			<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{m.homepage_client_title()}</h2>
			<p
				class="mx-auto max-w-[700px] dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
			>
				{m.homepage_client_descriptions()}
			</p>
		</div>
		<div class="mx-auto flex flex-col lg:flex-row justify-center gap-8">
			<Card.Root class="max-w-xl">
				<img
					alt="Luxury Villa"
					class="w-full overflow-hidden rounded-t-lg object-contain object-center"
					height="200"
					src="https://img.freepik.com/free-psd/panorama-luxury-living-room-generative-ai_587448-1919.jpg?w=1060&t=st=1706332194~exp=1706332794~hmac=c7532e6237ef7e1e370b307f4b2df9a5d51c8c76a665dc31515850e45e0c37f7"
					width="300"
				/>
				<Card.Content class="my-6">
					<h3 class="text-lg font-semibold">Luxury Villa</h3>
					<p class="text-sm text-gray-500">123 Main St, Anytown</p>
					<div class="my-2 flex items-center">
						<Badge variant="">review rating</Badge>
					</div>
					<p class="my-2 text-sm">4 Star Apartment</p>
					<p class="my-2 text-sm">Facilities: Pool, Gym, Free Wifi</p>
				</Card.Content>
			</Card.Root>
			<Card.Root class="max-w-xl">
				<img
					alt="Luxury Villa"
					class="w-full overflow-hidden rounded-t-lg object-contain object-center"
					height="200"
					src="https://img.freepik.com/free-psd/panorama-luxury-living-room-generative-ai_587448-1919.jpg?w=1060&t=st=1706332194~exp=1706332794~hmac=c7532e6237ef7e1e370b307f4b2df9a5d51c8c76a665dc31515850e45e0c37f7"
					width="300"
				/>
				<Card.Content class="my-6">
					<h3 class="text-lg font-semibold">Luxury Villa</h3>
					<p class="text-sm text-gray-500">123 Main St, Anytown</p>
					<div class="my-2 flex items-center">
						<Badge variant="">review rating</Badge>
					</div>
					<p class="my-2 text-sm">4 Star Apartment</p>
					<p class="my-2 text-sm">Facilities: Pool, Gym, Free Wifi</p>
				</Card.Content>
			</Card.Root>
			<Card.Root class="max-w-xl">
				<img
					alt="Luxury Villa"
					class="w-full overflow-hidden rounded-t-lg object-contain object-center"
					height="200"
					src="https://img.freepik.com/free-psd/panorama-luxury-living-room-generative-ai_587448-1919.jpg?w=1060&t=st=1706332194~exp=1706332794~hmac=c7532e6237ef7e1e370b307f4b2df9a5d51c8c76a665dc31515850e45e0c37f7"
					width="300"
				/>
				<Card.Content class="my-6">
					<h3 class="text-lg font-semibold">Luxury Villa</h3>
					<p class="text-sm text-gray-500">123 Main St, Anytown</p>
					<div class="my-2 flex items-center">
						<Badge variant="">review rating</Badge>
					</div>
					<p class="my-2 text-sm">4 Star Apartment</p>
					<p class="my-2 text-sm">Facilities: Pool, Gym, Free Wifi</p>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</section>
