<script script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import HotelCard from '$lib/components/page/property-list-page/hotel-card.svelte';
	import type { PageData } from './$types.js';
	import SupportCard from '$lib/components/page/property-list-page/support-card.svelte';
	export let data: PageData;
	console.log(data)
</script>

<div class="flex flex-col gap-6 p-4 md:flex-row md:p-6">
	<div class="flex flex-col gap-4 md:w-1/4">
		<SupportCard />
	</div>
	<div class="flex flex-col gap-6 md:w-3/4">
		<div class="mb-6 flex items-center gap-4">
			<Input class="w-full md:w-1/2" placeholder="Search..." type="text" />
			<div class="w-full md:w-1/2" />
		</div>
		{#each data.data as propertyList}
		<HotelCard propertyList={propertyList} />
		{/each}
			<div class="mt-6 flex justify-center">
			<!-- <Button class="mx-2">Prev</Button>
			<Button class="mx-2">1</Button>
			<Button class="mx-2">2</Button>
			<Button class="mx-2">3</Button>
			<Button class="mx-2">Next</Button> -->
		</div>
	</div>
</div>
