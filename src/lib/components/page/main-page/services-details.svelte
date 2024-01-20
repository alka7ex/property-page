<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import { ReplaceIcon } from 'lucide-svelte';
</script>

<div class="bg-white mx-20">
	<Card.Root class="mt-20 h-full">
		<Card.Header class="mb-4 text-3xl font-bold">OTA Acceleration</Card.Header>
		<Card.Content class="grid grid-cols-3 gap-10">
			<div class="flex flex-col gap-8">
				<Card.Description>
					<p class="mb-6 text-lg font-bold">OTA Accelerators for Property Success</p>
					<p>
						Discover property success with GroRental's OTA Accelerators. Boost listings, manage
						pricing, and dominate property searches within a 3km radius.
					</p>
				</Card.Description>
				<Card.Description>
					<p class="mb-6 text-lg font-bold">Digital Strategy Transformation</p>
					<p>
						Transform your organization with GroRental. I can help develop and implement a digital
						strategy aligning with your business objectives. Stay ahead of the competition with our
						collaboration.
					</p>
				</Card.Description>
			</div>
			<img
				class="my-auto flex items-center justify-center object-cover"
				src="https://static.wixstatic.com/media/ee2605_a81a3852499b4126b06c87e1445d5936~mv2.png/v1/crop/x_0,y_162,w_2393,h_1543/fill/w_491,h_318,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bro.png"
				alt="deman-acceleration"
			/>
			<div class="my-auto">
				<Card.Description>
					<p class="mb-6 text-lg font-bold">We are technology first and use AI to solidify online</p>
					<p>
						Our journey began with a clear mission: to empower owners to unlock full potential of
						their property, harnessing every growth opportunity and maximizing profitability.
					</p>
				</Card.Description>
			</div>
		</Card.Content>
	</Card.Root>
	<Card.Root class="mt-20">
		<Card.Header class="mx-full mb-4 justify-end text-3xl font-bold"
			>Demand acceleration</Card.Header
		>
		<Card.Content class="grid grid-cols-3 gap-10">
			<div class="my-auto">
				<Card.Description>
					<p class="mb-6 text-lg font-bold">Your Booking Partner - GroRental</p>
					<p>
						When it comes to bookings, trust GroRental as your dedicated partner. We take charge of
						your property's digital presence, ensuring optimal visibility on Google Maps.
					</p>
				</Card.Description>
			</div>
			<img
				class="my-auto flex items-center justify-center object-cover"
				src="https://static.wixstatic.com/media/ee2605_e517d50ef06148af8ad36213332d40a2~mv2.png/v1/crop/x_0,y_0,w_2620,h_1696/fill/w_491,h_318,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4.png"
				alt="deman-acceleration"
			/>

			<div class="container flex flex-col gap-8">
				<Card.Description>
					<p class="mb-6 text-lg font-bold">Boosting Organic Traffic and Sales</p>
					<p>
						Elevate your property's success with GroRental. We specialize in enhancing organic
						traffic and boosting offline sales through strategic measures and an expert internal
						sales team.
					</p>
				</Card.Description>
				<Card.Description>
					<p class="mb-6 text-lg font-bold">Guiding Growth Strategies</p>
					<p>
						Let GroRental guide you to increased customer bases and heightened demand. With our
						expert guidance, we'll develop and implement strategies to transform your property's
						growth trajectory
					</p>
				</Card.Description>
			</div>
		</Card.Content>
	</Card.Root>
</div>
