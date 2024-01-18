<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ReplaceIcon } from 'lucide-svelte';
</script>

<div class="bg-white p-10">
	<div class="grid grid-cols-2 gap-10">
		<div>
			<h2 class="mb-4 text-3xl font-bold">OTA Acceleration</h2>
			<p class="mb-6 text-lg">We are technology first and use AI to solidify online</p>
			<p class="mb-6">
				Our journey began with a clear mission: to empower owners to unlock full potential of their
				property, harnessing every growth opportunity and maximizing profitability.
			</p>
			<Button class="bg-blue-600 text-white">Learn More</Button>
		</div>
		<div class="flex h-48 items-center justify-center bg-gray-200">
			<ReplaceIcon class="text-gray-400" />
		</div>
	</div>
	<div class="mt-20">
		<h2 class="mb-4 text-3xl font-bold">Demand acceleration</h2>
		<div class="grid grid-cols-3 gap-10">
			<div>
				<p class="mb-6 text-lg">We are technology first and use AI to solidify online</p>
				<p>
					Our journey began with a clear mission: to empower owners to unlock full potential of
					their property, harnessing every growth opportunity and maximizing profitability.
				</p>
			</div>
			<div class="flex h-48 items-center justify-center bg-gray-200">
				<ReplaceIcon class="text-gray-400" />
			</div>
			<div>
				<p class="mb-6 text-lg">We are technology first and use AI to solidify online</p>
				<p>
					Our journey began with a clear mission: to empower owners to unlock full potential of
					their property, harnessing every growth opportunity and maximizing profitability.
				</p>
			</div>
		</div>
	</div>
</div>
