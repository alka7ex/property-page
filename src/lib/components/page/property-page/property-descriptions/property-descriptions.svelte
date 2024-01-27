<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
    export let propertyDetails:any
</script>

<Card.Root class="shadow-lg border">
    <Card.Header class="border-none">
        <h1 class="mb-4 text-2xl font-bold">{propertyDetails.property_name}</h1>
    </Card.Header>
    <Card.Content class="border-none">
        <Card.Description class="border-none">
            <p class="mb-4">
                {propertyDetails.content.description}
            </p>
            <h3 class="mb-2 text-xl font-bold">Facilities</h3>
            <ul class="mb-4 list-inside list-disc">
                <li>Free Wi-Fi</li>
                <li>24/7 Room Service</li>
                <li>Outdoor Pool</li>
                <li>Gym</li>
            </ul>
            <h3 class="mb-2 text-xl font-bold">Address</h3>
            <p class="mb-4">{propertyDetails.address}</p>
        </Card.Description>
    </Card.Content>
</Card.Root>

<slot />