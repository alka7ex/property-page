<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as m from '$paraglide/messages';
	export let propertyDetails: any;
</script>

<Card.Root class="border border-none bg-[#FEF2F4] shadow-lg">
	<Card.Header class="">
		<h1 class=" text-2xl font-bold">{propertyDetails.property_name}</h1>
	</Card.Header>
	<Card.Content class="border-none">
		<Card.Description class="border-none text-black">
			<p class="mt-2 text-sm">
				{@html propertyDetails.content.description.split('\n').map((line, index) => (
					`<span key=${index}>${line}<br /></span>`
				)).join('')}
			</p>
		  
			<h3 class="my-2 text-xl font-bold">{m.propertydetails_descriptions_facilities()}</h3>
		  
			
		  
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
