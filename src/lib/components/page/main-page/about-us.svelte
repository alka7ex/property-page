<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="mx-auto my-8 flex max-w-4xl space-x-8">
	<div class="h-64 w-64 flex-none rounded-lg bg-gray-200" />
	<div class="flex flex-col space-y-4">
		<h2 class="text-3xl font-bold">About us</h2>
		<p class="text-lg">
			GroRental, your trusted growth partner for independent hotels and vacation rental properties.
		</p>
		<div class="flex space-x-2">
			<Badge variant="secondary">Growth</Badge>
			<Badge variant="secondary">Volume</Badge>
			<Badge variant="secondary">Trend</Badge>
		</div>
		<div class="space-y-2">
			<Button variant="secondary">About 1</Button>
			<p class="text-sm">
				We are technology first and use AI to solidify online presence, manage pricing and
				inventory, build offline demand, and manage multiple OTAs.
			</p>
			<p class="text-sm">
				Our journey began with a clear mission: to empower owners to unlock full potential of their
				property, harnessing every growth opportunity and maximizing profitability.
			</p>
		</div>
	</div>
</div>
