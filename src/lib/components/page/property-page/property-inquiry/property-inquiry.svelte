<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { PageData } from './$types.js';
	import { Calendar as CalendarIcon } from 'lucide-svelte';
	import {
		CalendarDate,
		DateFormatter,
		getLocalTimeZone,
		today,
		type DateValue
	} from '@internationalized/date';
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import { Calendar } from '$lib/components/ui/calendar';
	import * as Popover from '$lib/components/ui/popover';
	import type { DateRange } from 'bits-ui';
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js';
	export let propertyInquiry: any;

	// 	const df = new DateFormatter('en-US', {
	// 		dateStyle: 'medium'
	// 	});
	// 	let value: DateRange | undefined = {
	// 		start: today(),
	// 		end: today().add({ days: 1 })
	// 	};
	// 	let startValue: DateValue | undefined = undefined;

	function handleButtonClick() {
		const url = `https://wa.me/6281395951495?text=Hi%20Kak!,%20Saya%20tertarik%20untuk%20booking%20di%20${propertyInquiry.property_name}!`; // Construct the URL with date parameters
		window.open(url, '_blank');
	}
</script>

<Card.Root class="border-none shadow-none">
	<h2 class="mb-4 text-2xl font-bold">Book a Room</h2>
	<div class="grid grid-cols-1 gap-4">
		<!-- <Card.Content class="rounded-lg border p-4 shadow-lg">
			<Card.Header class="mb-2 text-lg font-bold">Select Dates</Card.Header>
			<div class="flex space-x-4">
				<Popover.Root openFocus>
					<Popover.Trigger asChild let:builder>
						<Button
							variant="outline"
							class={cn(
								'w-[300px] justify-start text-left font-normal',
								!value && 'text-muted-foreground'
							)}
							builders={[builder]}
						>
							<CalendarIcon class="mr-2 h-4 w-4" />
								{#if value && value.start}
									{#if value.end}
										{df.format(value.start.toDate(getLocalTimeZone()))} - {df.format(
											value.end.toDate(getLocalTimeZone())
										)}
									{:else}
										{df.format(value.start.toDate(getLocalTimeZone()))}
									{/if}
								{:else if startValue}
									{df.format(startValue.toDate(getLocalTimeZone()))}
								{:else}
									Pick a date
								{/if}
						</Button>
					</Popover.Trigger>
					<Popover.Content class="w-auto p-0" align="start">
						<RangeCalendar
							bind:value
							bind:startValue
							initialFocus
							numberOfMonths={2}
							placeholder={value?.start}
						/>
					</Popover.Content>
				</Popover.Root>
			</div>
		</Card.Content> -->
		<div class="flex w-full flex-col justify-between rounded shadow-lg">
			<Card.Header>
				<Card.Title class="text-2xl font-bold"
					>{propertyInquiry.room_type.room_type_name}</Card.Title
				>
			</Card.Header>

			{#each propertyInquiry.room_type.rate_plans as propertyList}
				<Card.Content class="flex justify-between">
					<Card.Description class="text-sm text-black"
						>{propertyList.rate_plan_name}</Card.Description
					>
					<Card.Title class="text-sm"
						>{propertyInquiry.currency}
						{Number(propertyList.price).toLocaleString('id-ID')} /night</Card.Title
					>
				</Card.Content>
			{/each}
			<Button class="mb-8 mr-8 self-end">Book Now</Button>
		</div>

		<div class="flex w-full flex-col justify-between rounded shadow-lg">
			<Card.Header>
				<Card.Title class="text-2xl font-bold">Google Maps</Card.Title>
			</Card.Header>
			<Card.Content class="flex flex-col items-center rounded shadow-lg">
				<iframe class="w-full rounded" src='https://maps.google.com/maps?q={propertyInquiry.latitude},{propertyInquiry.longitude}&hl=es;z=14&amp;output=embed' title="Google Maps"
				></iframe>
				<!-- <iframe class="w-full rounded" src='https://maps.google.com/maps?q=wallts-house&hl=es;z=14&amp;output=embed' title="Google Maps"
				></iframe> -->
			</Card.Content>
		</div>
	</div>
</Card.Root>
