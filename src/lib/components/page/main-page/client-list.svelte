<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import placeholder from '$lib/images/placeholder.svg.png';
	import * as m from "$paraglide/messages"
</script>

<section class="bg-[hsl(226,100%,90%)] py-20 text-slate-800">
	<div class="grid-row mx-10 lg:mx-20 grid">
		<div class="mx-auto mb-20 flex flex-col items-center justify-center text-center">
			<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{m.homepage_client_title()}</h2>
			<p
				class="mx-auto max-w-[700px] dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
			>
				{m.homepage_client_descriptions()}
			</p>
		</div>
		<div class="mx-auto flex flex-col lg:flex-row justify-center gap-8 border-none">
			<Card.Root class="">
				<img
					alt="Wallts House"
					class="w-full aspect-video overflow-hidden object-cover rounded-t-lg object-center"
					height="200"
					src="https://a0.muscache.com/im/pictures/miso/Hosting-754046645046468650/original/44e03f8f-2b8e-4206-867e-b3a1b2d75a56.jpeg?im_w=960"
					width="300"
				/>
				<Card.Content class="my-6">
					<h3 class="text-lg font-semibold">Wallts House</h3>
					<p class="text-sm text-gray-500">Jl. Kawaluyaan Indah Raya No.28, Jatisari, Kec. Buahbatu, Kota Bandung, Jawa Barat 40286</p>
					<div class="my-2 flex items-center">
						<Badge variant="">Villa Bintang 4</Badge>
					</div>
					<!-- <p class="my-2 text-sm">4 Star Apartment</p> -->
					<p class="my-2 text-sm">Fasilitas: Kolam Renang, Free Wifi, PS4, Netflix</p>
				<div class="flex justify-end w-full">
					<Button href="https://grorental.com/property/wallts-house">{m.homepage_clientlist_button_villaview()}</Button>
				</div>
				</Card.Content>
			</Card.Root>
			<Card.Root class="">
				<img
					alt="Cozy Studio-Sized Room at Galeri Ciumbuleuit Apt 2"
					class="w-full aspect-video overflow-hidden object-cover rounded-t-lg object-center"
					height="200"
					src="https://a0.muscache.com/im/pictures/b83d5452-ce96-43b0-8ce6-8e84a4a0dbb8.jpg?im_w=960"
					width="300"
				/>
				<Card.Content class="my-6">
					<h3 class="text-lg font-semibold">Cozy Studio-Sized Room at Galeri Ciumbuleuit Apt 2</h3>
					<p class="text-sm text-gray-500">Galeri Ciumbuleuit Apartment 2, Jl. Ciumbuleuit No.56, Hegarmanah, Kec. Cidadap, Kota Bandung, Jawa Barat 40141
					</p>
					<div class="my-2 flex items-center">
						<Badge variant="">Apartment Bintang 3</Badge>
					</div>
					<!-- <p class="my-2 text-sm">4 Star Apartment</p> -->
					<p class="my-2 text-sm">Fasilitas: Kolam Renang, View Gunung, Wifi, TV</p>
				<div class="flex justify-end w-full">
					<Button href="https://grorental.com/property/wallts-house">{m.homepage_clientlist_button_villaview()}</Button>
				</div>
				</Card.Content>
			</Card.Root>
			<Card.Root class="">
				<img
					alt="Villa Kubah Istana Bunga Lembang"
					class="w-full aspect-video overflow-hidden object-cover rounded-t-lg object-center"
					height="200"
					src="https://a0.muscache.com/im/pictures/miso/Hosting-1075295426470097626/original/864d8104-8417-435c-b5ea-6eb9013f8bf6.jpeg?im_w=960"
					width="300"
				/>
				<Card.Content class="my-6">
					<h3 class="text-lg font-semibold">Villa Kubah Istana Bunga Lembang</h3>
					<p class="text-sm text-gray-500">Jalan Buntu, Cihanjuang Rahayu, Parongpong, West Bandung Regency, West Java 40559</p>
					<div class="my-2 flex items-center">
						<Badge variant="">Villa Bintang 4</Badge>
					</div>
					<!-- <p class="my-2 text-sm">4 Star Apartment</p> -->
					<p class="my-2 text-sm">Fasilitas: Kolam Renang, View Gunung, Wifi, TV</p>
				<div class="flex justify-end w-full">
					<Button href="https://grorental.com/property/wallts-house">{m.homepage_clientlist_button_villaview()}</Button>
				</div>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</section>
