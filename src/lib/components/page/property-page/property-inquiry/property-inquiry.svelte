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

	const df = new DateFormatter('en-US', {
		dateStyle: 'medium'
	});
	let value: DateRange | undefined = {
		start: today(),
		end: today().add({ days: 1 })
	};
	let startValue: DateValue | undefined = undefined;
</script>

<Card.Root class="border-none shadow-none">
	<h2 class="mb-4 text-2xl font-bold">Book a Room</h2>
	<div class="grid grid-cols-1 gap-4">
		<div class="rounded-lg border p-4 shadow-lg">
			<div class="mb-2 text-lg font-bold">Select Dates</div>
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
		</div>
		<div class="flex rounded shadow-lg w-full justify-between items-center">
			<Card.Header>
				<Card.Title class="text-2xl font-bold">{propertyInquiry.price.room_name}</Card.Title>
				<Card.Description class="text-md"
					>{propertyInquiry.price.room_description}</Card.Description
				>
			</Card.Header>
			<Card.Content class="flex items-center">
				<div class="text-xl font-semibold">$200/night</div>
				<Button class="ml-4 bg-black text-white">Book Now</Button>
			</Card.Content>
		</div>
	</div>
</Card.Root>