<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as m from "$paraglide/messages"
	export let propertyDetails: any;
</script>

<Card.Root class="border shadow-lg bg-[#FEF2F4] border-none">
	<Card.Header class="">
		<h1 class=" text-2xl font-bold">{propertyDetails.property_name}</h1>
	</Card.Header>
	<Card.Content class="border-none">
		<Card.Description class="border-none text-black">
			<p class="my-2">
				{propertyDetails.content.description}
			</p>
			<h3 class="my-2 text-xl font-bold">{m.propertydetails_descriptions_facilities()}</h3>
			{#each propertyDetails.content.facilities as facilitiesList}
			<ul class="my-1 list-inside list-disc">
				<li>{facilitiesList.facilities_name}</li>
			</ul>
			{/each}
			<h3 class="my-2 text-xl font-bold">{m.propertydetails_descriptions_property_policy()}</h3>
			<p class="my-2">
				{propertyDetails.property_policy}
			</p>
			<h3 class="my-2 text-xl font-bold">{m.propertydetails_descriptions_cancellation_policy()}</h3>
			<p class="my-2">
				{propertyDetails.cancellation_policy}
			</p>
			<h3 class="my-2 text-xl font-bold">{m.propertydetails_descriptions_address()}</h3>
			<p class="my-2">
				<a href={propertyDetails.google_maps_url}>
					{propertyDetails.address}
				</a>
                
			</p>
            
		</Card.Description>
	</Card.Content>
</Card.Root>

<slot />
