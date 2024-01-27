<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	export let propertyDetails: any;
</script>

<Card.Root class="border shadow-lg">
	<Card.Header class="border-none">
		<h1 class=" text-2xl font-bold">{propertyDetails.property_name}</h1>
	</Card.Header>
	<Card.Content class="border-none">
		<Card.Description class="border-none">
			<p class="my-2">
				{propertyDetails.content.description}
			</p>
			<h3 class="my-2 text-xl font-bold">Facilities</h3>
			{#each propertyDetails.content.facilities as facilitiesList}
			<ul class="my-1 list-inside list-disc">
				<li>{facilitiesList.facilities_name}</li>
			</ul>
			{/each}
			<h3 class="my-2 text-xl font-bold">Property Policy</h3>
			<p class="my-2">
				{propertyDetails.property_policy}
			</p>
			<h3 class="my-2 text-xl font-bold">Cancellation Policy</h3>
			<p class="my-2">
				{propertyDetails.cancllation_policy}
			</p>
			<h3 class="my-2 text-xl font-bold">Address</h3>
			<p class="my-2">
				<a href={propertyDetails.google_maps_url}>
					{propertyDetails.address}
				</a>
                
			</p>
            
		</Card.Description>
	</Card.Content>
</Card.Root>

<slot />
