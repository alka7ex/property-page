<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import placeholder from '$lib/images/placeholder.svg.png';
	import * as m from "$paraglide/messages"

	export let propertyList: any;

	// console.log(propertyList)
</script>

<Card.Root class="flex w-full max-w-4xl rounded-xl shadow-lg bg-[#F1F4FA]">
	<div class="w-1/2">
		<img
			alt="Luxury Villa"
			class="h-80 w-full rounded-l-xl object-cover"
			height="200"
			src={propertyList.content?.photos && propertyList.content.photos.length > 0 ? propertyList.content.photos[0].url : placeholder}
			style={{
				aspectRatio: '200/300',
				objectFit: 'cover'
			}}
			width="300"
		/>
	</div>
	<Card.Content class="w-1/2 p-2">
		<h2 class="text-lg lg:text-2xl font-bold">
			{propertyList.property_name ?? 'No property name'}
		</h2>
		<p class="mt-2 text-sm lg:text-base text-gray-500 line-clamp-3 whitespace-pre-line">
			<a href={propertyList.google_maps_url ?? 'No property google url'}>
				{propertyList.address ?? 'No property address'}
			</a>
		</p>

		<div class="my-2">
			<p class="my-1 text-sm lg:text-base font-bold">{propertyList.property_type ?? 'No property type'}</p>
		</div>

		<p class="mt-2 text-sm lg:text-base line-clamp-3 whitespace-pre-line">
			{propertyList?.content?.description ?? 'No property description'}
		</p>

		<p class="mt-4"></p>
		<div class="flex items-center justify-between my-4 flex-col md:flex-row gap-y-2">
			<div class="flex items-baseline gap-1 my-auto">
				<span class="text-md lg:text-2xl font-bold">{propertyList.currency ?? ''}</span>
				<span class="text-md lg:text-2xl font-bold">
					{Number(propertyList.room_type[0]?.rate_plans[0]?.price).toLocaleString('id-ID') ?? ''}
				</span>
				<span class="my-auto text-base text-gray-500">{m.propertylist_hotelcard_pernight()}</span>
			</div>
			<Button class="self-end text-sm lg:text-base" href={propertyList.slug ? `/property/${propertyList.slug}` : ''}>{m.propertylist_hotelcard_button_booknow()}</Button>
		</div>
	</Card.Content>
</Card.Root>
