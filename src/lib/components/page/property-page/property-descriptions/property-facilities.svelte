<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as m from '$paraglide/messages';
	export let propertyDetails: any;
</script>

<Card.Root class="border border-none bg-[#FEF2F4] shadow-lg">
	<Card.Header class="">
		<h1 class=" text-2xl font-bold">Facilities</h1>
	</Card.Header>
	<Card.Content class="border-none">
		<Card.Description class="border-none text-black">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0">
			  {#each propertyDetails.content.facilities as facilitiesList}
				<ul class="my-1 list-inside list-disc">
				  <li>{facilitiesList.facilities_name}</li>
				</ul>
			  {/each}
			</div>
		  </Card.Description>
	</Card.Content>
</Card.Root>

<slot />
