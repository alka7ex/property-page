<script context="module" lang="ts">
	import { Button } from '$lib/components/ui/button';
	import logo from '$lib/images/beach-house-bro.svg';
	import * as m from '$paraglide/messages';
</script>

<main>
	<div class="container py-10 bg-[#0038A8] text-white mb-10">
		<header class="container mx-auto">
			<div class="grid grid-cols-1 items-center lg:grid-cols-2">
				<div class="">
					<h1 class="my-4 text-4xl font-bold leading-tight lg:text-6xl">
						{m.homepage_header_h1()}
					</h1>
					<p class="my-4 text-base lg:text-xl">
						{m.homepage_header_p()}
					</p>
					<Button class="my-4 h-16 w-56 rounded-full bg-[#FB607F]"
						>{m.homepage_header_button_contact_us()}</Button
					>
				</div>
				<div class="flex justify-center">
					<img
						alt="Rental Property"
						class="max-w-full"
						style={{
							maxWidth: '100%',
							height: 'auto',
							objectFit: 'cover'
						}}
						src={logo}
					/>
				</div>
			</div>
		</header>
	</div>
</main>
