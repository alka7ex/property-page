<!-- src/routes/index.svelte -->

<script lang="ts">
    import { Badge } from '$lib/components/ui/badge';
    import { Button } from '$lib/components/ui/button';
    import * as Card from '$lib/components/ui/card';
</script>

<section class="py-10 md:py-20">
    <Card.Root class="p-6 mx-4 md:mx-20 flex flex-col md:flex-row shadow-lg">
        <Card.Content class="md:flex-none md:rounded-lg md:w-1/2">
            <img
                alt="Rental Property"
                class="h-full w-full rounded-lg object-cover"
                src="https://static.wixstatic.com/media/ee2605_ee17348838c14d408dca5ea9a71aab4e~mv2.png/v1/crop/x_0,y_170,w_2000,h_1630/fill/w_657,h_536,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ee2605_ee17348838c14d408dca5ea9a71aab4e~mv2.png"
            />
        </Card.Content>
        <Card.Content class="md:flex md:flex-col md:space-y-4 md:w-1/2">
            <Card.Title class="text-2xl md:text-3xl font-bold mb-2">About us</Card.Title>
            <Card.Description class="text-lg font-bold mb-4">
                Welcome to GroRental, your trusted growth partner for independent rental properties.
            </Card.Description>
            <div class="space-y-2">
                <Card.Description class="text-md">
                    Welcome to GroRental, your trusted growth partner for independent hotels and vacation rental
                    properties. Our journey began with a clear mission: to empower owners to unlock the full
                    potential of their property, harnessing every growth opportunity and maximizing
                    profitability. We are technology-first and use AI to solidify online presence, manage
                    pricing and inventory, build offline demand, and manage multiple OTAs.
                </Card.Description>
            </div>
        </Card.Content>
    </Card.Root>
</section>
