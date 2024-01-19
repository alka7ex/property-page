<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { PageData } from './$types';
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
		<div class="rounded-lg p-4 shadow-lg border">
			<h3 class="mb-2 text-lg font-bold">Select Dates</h3>
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
		<Card.Content class="rounded-lg shadow-lg border p-4">
			<h2 class="mb-2 text-lg font-bold">Deluxe Room</h2>
			<p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			<div class="container my-auto flex flex-row justify-end gap-4">
				<h2 class="my-auto text-right text-lg font-bold">$200/night</h2>
				<Button class="my-auto rounded px-4 py-2 text-white">Book Now</Button>
			</div>
		</Card.Content>
        <Card.Content class="rounded-lg shadow-lg border p-4">
			<h2 class="mb-2 text-lg font-bold">Deluxe Room</h2>
			<p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			<div class="container my-auto flex flex-row justify-end gap-4">
				<h2 class="my-auto text-right text-lg font-bold">$200/night</h2>
				<Button class="my-auto rounded px-4 py-2 text-white">Book Now</Button>
			</div>
		</Card.Content>
        <Card.Content class="rounded-lg shadow-lg border p-4">
			<h2 class="mb-2 text-lg font-bold">Deluxe Room</h2>
			<p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			<div class="container my-auto flex flex-row justify-end gap-4">
				<h2 class="my-auto text-right text-lg font-bold">$200/night</h2>
				<Button class="my-auto rounded px-4 py-2 text-white">Book Now</Button>
			</div>
		</Card.Content>
	</div>
</Card.Root>
