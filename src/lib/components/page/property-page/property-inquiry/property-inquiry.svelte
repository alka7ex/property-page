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
	import * as m from '$paraglide/messages';
	import Header from '../../main-page/header.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	export let propertyInquiry: any;

	// 	const df = new DateFormatter('en-US', {
	// 		dateStyle: 'medium'
	// 	});
	// 	let value: DateRange | undefined = {
	// 		start: today(),
	// 		end: today().add({ days: 1 })
	// 	};
	// 	let startValue: DateValue | undefined = undefined;
</script>

<Card.Root class="h-max border-none bg-[#FEF2F4] shadow-none">
	<Card.Header class="text-2xl font-bold ">{m.propertydetails_inqury_h2()}</Card.Header>
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
		{#each propertyInquiry.room_type as propertyInquiry}
			<Card.Content class="text-lg font-bold">
				{propertyInquiry.room_type_name || ''}
			</Card.Content>
			{#each propertyInquiry.rate_plans ?? [] as propertyList}
				<Card.Content class="flex justify-between">
					<Card.Description class="text-sm text-black"
						>{propertyList.rate_plan_name || ''}</Card.Description
					>
					<Card.Title class="text-sm"
						>{propertyInquiry.currency || ''}
						{Number(propertyList.price).toLocaleString('id-ID')}
						{m.propertydetails_inquiry_pernight()}</Card.Title
					>
				</Card.Content>
			{:else}
				<Card.Footer>No room at the moment</Card.Footer>
			{/each}
		{/each}

		<Button
			class="mb-8 mr-8 self-end"
			href="https://wa.me/6281395951495?text=Hi%20Kak!,%20Saya%20tertarik%20untuk%20booking%20di%20{propertyInquiry.property_name}!"
			>{m.propertydetails_inquiry_button_booknow()}</Button
		>
		<!-- <div class="flex w-full flex-col justify-between rounded shadow-lg">
			<Card.Header>
				<Card.Title class="text-2xl font-bold">{m.propertydetails_inquiry_google_maps()}</Card.Title>
			</Card.Header>
			<Card.Content class="flex flex-col items-center rounded shadow-lg">
				<iframe class="w-full rounded" src='https://maps.google.com/maps?q={propertyInquiry.latitude},{propertyInquiry.longitude}&hl=es;z=14&amp;output=embed' title="Google Maps"
				></iframe>
				<iframe class="w-full rounded" src='https://maps.google.com/maps?q=wallts-house&hl=es;z=14&amp;output=embed' title="Google Maps"
				></iframe>
			</Card.Content>
		</div> -->
	</div></Card.Root
>
