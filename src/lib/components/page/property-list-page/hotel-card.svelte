<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import placeholder from '$lib/images/placeholder.svg.png';
	import type { PageData } from '../../../../routes/property/$types.js';
	import * as m from "$paraglide/messages"

	export let propertyList:any ;
	// console.log(propertyList)
</script>

<Card.Root class="flex w-full max-w-4xl rounded-xl bg-white shadow-lg">
	<div class="w-1/2">
		<img
			alt="Luxury Villa"
			class="h-full w-full rounded-l-xl object-cover"
			height="200"
			src= {propertyList.content.photos[0].url}
			style={{
				aspectRatio: '200/300',
				objectFit: 'cover'
			}}
			width="300"
		/>
	</div>
	<Card.Content class="w-1/2 p-6">
		<h2 class="text-2xl font-bold">
			{propertyList.property_name}
		</h2>
		<p class="mt-2 text-sm text-gray-500">
			{propertyList.address}
		</p>

		<div class="my-2">
			<!-- <Badge variant="">4.9</Badge> -->
			<p class="my-1 font-bold">{propertyList.property_type}</p>
		</div>
		<p class="mt-2 text-sm line-clamp-3">
			{propertyList.content.description}
		</p>
		<p class="mt-4"></p>
		<div class="flex items-center justify-between my-4 flex-col md:flex-row">
			<div class="flex items-baseline gap-1 my-auto">
				<span class="text-2xl font-bold">{propertyList.currency}</span>
				<span class="text-2xl font-bold">
					{Number(propertyList.room_type.rate_plans[0].price).toLocaleString('id-ID')}
				  </span>
				  <span class="my-auto text-base text-gray-500">{m.propertylist_hotelcard_pernight()}</span>
			</div>
			<Button class="self-end" href='/property/{propertyList.slug}'>{m.propertylist_hotelcard_button_booknow()}</Button>
		</div>
	</Card.Content>
</Card.Root>
