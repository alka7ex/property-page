<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import logo from '$lib/images/beach-house-bro.svg'
</script>

<div class="container min-h-screen bg-[#0038A8] text-white">
	<header class="container mx-auto px-4 py-20">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<div>
				<h1 class="mb-6 text-6xl font-bold leading-tight">Maximize your property revenue potential</h1>
				<p class="mb-6 text-xl">
					We are a tech first, AI enabled revenue growth partner for independent hotels and vacation
					rental properties
				</p>
				<Button class="flex flex-col items-center justify-center w-60 h-16 rounded-full flex-shrink-0 bg-[#FB607F]">Connect with us</Button>
				<div class="mt-12">
					<h2 class="mb-3 text-3xl font-bold"></h2>
					<p></p>
				</div>
			</div>
			<div class="flex justify-center">
				<img
					alt="Rental Property"
					class="max-w-xs md:max-w-sm lg:max-w-full"
					height="400"
					src={logo}
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
