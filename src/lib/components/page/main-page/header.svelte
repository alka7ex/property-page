<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<div class="min-h-screen bg-[#2c3e50] text-white">
	<header class="container mx-auto px-4 py-20">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<div>
				<h1 class="mb-6 text-6xl font-bold leading-tight">TURNING RENTALS INTO PROFITS</h1>
				<p class="mb-6 text-xl">
					We are a tech first, AI enabled revenue growth partner for independent hotels and vacation
					rental properties
				</p>
				<Button class="bg-[#e74c3c] text-white hover:bg-[#c0392b]">Connect with us</Button>
				<div class="mt-12">
					<h2 class="mb-3 text-3xl font-bold">OUR COMMITMENT</h2>
					<p>Customer centric, growth of rental property personalized lorem ipsum</p>
				</div>
			</div>
			<div class="flex justify-center">
				<img
					alt="Rental Property"
					class="max-w-xs md:max-w-sm lg:max-w-full"
					height="400"
					src="/placeholder.svg"
					style={{
						aspectRatio: '400/400',
						objectFit: 'cover'
					}}
					width="400"
				/>
			</div>
		</div>
	</header>
</div>
