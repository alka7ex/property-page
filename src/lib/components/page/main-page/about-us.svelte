<!-- src/routes/index.svelte -->

<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
    import * as m from "$paraglide/messages"
</script>

<section class="py-10 md:py-20">
	<Card.Root class="mx-4 flex flex-col p-6 shadow-lg md:mx-20 md:flex-row">
		<Card.Content class="md:w-1/2 md:flex-none md:rounded-lg">
			<img
				alt="Rental Property"
				class="h-full w-full rounded-lg object-cover"
				src="https://static.wixstatic.com/media/ee2605_ee17348838c14d408dca5ea9a71aab4e~mv2.png/v1/crop/x_0,y_170,w_2000,h_1630/fill/w_657,h_536,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ee2605_ee17348838c14d408dca5ea9a71aab4e~mv2.png"
			/>
		</Card.Content>
		<Card.Content class="md:flex md:w-1/2 md:flex-col md:space-y-4">
			<Card.Title class="mb-2 text-2xl font-bold md:text-3xl">{m.homepage_about_us_title2()}</Card.Title>
			<Card.Description class="mb-4 text-lg font-bold">
				{m.homepage_about_us_title()}
			</Card.Description>
			<div class="space-y-2">
				<Card.Description class="text-md">
					{m.homepage_about_us_description()}
				</Card.Description>
			</div>
		</Card.Content>
	</Card.Root>
</section>
