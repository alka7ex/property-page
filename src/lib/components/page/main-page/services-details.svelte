<!-- src/routes/index.svelte -->

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import { ReplaceIcon } from 'lucide-svelte';
	import * as m from '$paraglide/messages';
</script>

<section class="py-10">
	<div class="mx-4 md:mx-16">
		<!-- OTA Acceleration Card -->
		<Card.Root class="border-lg mb-10 shadow-lg">
			<Card.Header class="mb-4 text-2xl font-bold md:text-3xl"
				>{m.homepage_services_title1()}</Card.Header
			>
			<Card.Content class="flex flex-col md:flex-row">
				<div class="mb-4 md:mb-0 md:w-1/2">
					<img
						class="h-auto w-full rounded-lg object-cover"
						src="https://static.wixstatic.com/media/ee2605_a81a3852499b4126b06c87e1445d5936~mv2.png/v1/crop/x_0,y_162,w_2393,h_1543/fill/w_491,h_318,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bro.png"
						alt="deman-acceleration"
					/>
				</div>
				<div class="md:flex md:w-1/2 md:flex-col md:space-y-4 md:pl-8">
					<Card.Description>
						<p class="mb-6 text-lg font-bold">{m.homepage_services_subtitle1()}</p>
						<p>
							{m.homepage_services_descriptions1()}
						</p>
					</Card.Description>
					<Card.Description>
						<p class="mb-6 text-lg font-bold">{m.homepage_services_subtitle2()}</p>
						<p>
							{m.homepage_services_descriptions2()}
						</p>
					</Card.Description>
					<Card.Description>
						<p class="mb-6 text-lg font-bold">{m.homepage_services_subtitle3()}</p>
						<p>
							{m.homepage_services_descriptions3()}
						</p>
					</Card.Description>
				</div>
			</Card.Content>
		</Card.Root>

		<!-- Demand Acceleration Card -->

		<Card.Root class="border-lg shadow-lg">
			<Card.Header class="mb-4 justify-end text-2xl font-bold md:text-3xl"
				>{m.homepage_services_title2()}</Card.Header
			>
			<Card.Content class="flex flex-col md:flex-row">
				<div class="md:flex md:w-1/2 md:flex-col md:space-y-4 md:pr-8">
					<Card.Description>
						<p class="mb-6 text-lg font-bold">{m.homepage_services_subtitle2()}</p>
						<p>
							{m.homepage_services_descriptions4()}
						</p></Card.Description
					>
					<Card.Description>
						<p class="mb-6 text-lg font-bold">{m.homepage_services_subtitle5()}</p>
						<p>
							{m.homepage_services_descriptions5()}
						</p>
					</Card.Description>
					<Card.Description>
						<p class="mb-6 text-lg font-bold">{m.homepage_services_subtitle6()}</p>
						<p>
							{m.homepage_services_descriptions6()}
						</p>
					</Card.Description>
				</div>
				<div class="mb-4 md:mb-0 md:w-1/2">
					<img
						class="h-auto w-full rounded-lg object-cover"
						src="https://static.wixstatic.com/media/ee2605_e517d50ef06148af8ad36213332d40a2~mv2.png/v1/crop/x_0,y_0,w_2620,h_1696/fill/w_491,h_318,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4.png"
						alt="demand-acceleration"
					/>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</section>
