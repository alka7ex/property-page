<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as m from '$paraglide/messages';
	export let propertyDetails: any;
</script>

	<Card.Root class="border border-none bg-[#F1F4FA] shadow-lg">
		<Card.Header class="">
			<h1 class="text-2xl font-bold">{propertyDetails.property_name}</h1>
		</Card.Header>
		<Card.Content class="border-none">
			<Card.Description class="border-none text-black">
				<p class="mt-2 text-sm whitespace-pre-line">
					{propertyDetails.description ?? 'No property description'}
				</p>
				<h3 class="my-2 text-xl font-bold">{m.propertydetails_descriptions_property_policy()}</h3>
				<p class="my-2">
					{propertyDetails.property_policy ?? 'No property policy'}
				</p>

				<h3 class="my-2 text-xl font-bold">{m.propertydetails_descriptions_cancellation_policy()}</h3>
				<p class="my-2">
					{propertyDetails.cancellation_policy ?? 'No cancellation policy'}
				</p>

				<h3 class="my-2 text-xl font-bold">{m.propertydetails_descriptions_address()}</h3>
				<p class="my-2">
						<a href={propertyDetails.google_maps_url ?? 'No address google url'}>{propertyDetails.address ?? 'No property address'}</a>
				</p>
			</Card.Description>
		</Card.Content>
	</Card.Root>