<script lang="ts">
	import type { PageData } from './$types.js';
    import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from '$lib/components/ui/card/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { ArrowLeftIcon } from 'lucide-svelte';

	export let data: PageData;
</script>

<div class="flex h-screen flex-col">
	<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
		<div class="flex items-center gap-4">
			<Button size="icon" variant="outline">
				<ArrowLeftIcon class="h-4 w-4" />
				<span class="sr-only">Back</span>
			</Button>
			<h1 class="text-lg font-semibold md:text-xl">Booking Details</h1>
		</div>
		<div class="flex flex-col gap-6 md:grid md:grid-cols-6">
			<div class="flex flex-col gap-6 md:col-span-4 lg:col-span-3 xl:col-span-4">
				<Card.Root>
                    <Card.Header>
                      <Card.Title>Property and Room Details</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <div class="grid gap-4 md:grid-cols-2">
                        <div class="grid gap-2">
                          <Label htmlFor="hotel-name">Hotel Name</Label>
                          <p id="hotel-name">The Grand Hotel</p>
                        </div>
                        <div class="grid gap-2">
                          <Label htmlFor="check-in-date">Check-in Date</Label>
                          <p id="check-in-date">2024-01-20</p>
                        </div>
                        <div class="grid gap-2">
                          <Label htmlFor="check-out-date">Check-out Date</Label>
                          <p id="check-out-date">2024-01-25</p>
                        </div>
                        <div class="grid gap-2">
                          <Label htmlFor="room-type">Room Type</Label>
                          <p id="room-type">Suite</p>
                        </div>
                        <div class="grid gap-2">
                          <Label htmlFor="number-of-rooms">Number of Rooms</Label>
                          <p id="number-of-rooms">2</p>
                        </div>
                      </div>
                    </Card.Content>
                  </Card.Root>
				<Card.Root>
					<Card.Header>
						<Card.Title>Guest Details</Card.Title>
					</Card.Header>
					<Card.Content>
						<div class="grid gap-4">
							<div class="grid gap-2">
								<Label htmlFor="guest-name">Guest's Name</Label>
								<Input id="guest-name" placeholder="Enter guest's name" />
							</div>
							<div class="grid gap-2">
								<Label htmlFor="guest-email">Guest's Email</Label>
								<Input id="guest-email" placeholder="Enter guest's email" type="email" />
							</div>
							<div class="grid gap-2">
								<Label htmlFor="guest-phone-number">Guest's Phone Number</Label>
								<Input id="guest-phone-number" placeholder="Enter guest's phone number" />
							</div>
							<div class="grid gap-2">
								<Label htmlFor="additional-comments">Special Request (optionals)</Label>
								<Input id="additional-comments" placeholder="Enter additional request" />
                                <Label htmlFor="additional-comments" class="italic">*We won't guarantee your special request but we will do our best to accommodate your request</Label>
							</div>
						</div>
					</Card.Content>
				</Card.Root>
			</div>
			<div class="flex flex-col gap-6 md:col-span-2 lg:col-span-3 xl:col-span-2">
				<Card.Root>
					<Card.Header>
						<Card.Title>Price Details</Card.Title>
					</Card.Header>
					<Card.Content class="text-sm">
						<div class="grid gap-4">
							<div class="flex items-center">
								<div>Subtotal</div>
								<div class="ml-auto">$169.00</div>
							</div>
							<div class="flex items-center">
								<div>Discount</div>
								<div class="ml-auto">-$19.00</div>
							</div>
							<Separator />
							<div class="flex items-center font-medium">
								<div>Total</div>
								<div class="ml-auto">$150.00</div>
							</div>
						</div>
					</Card.Content>
					<Card.Footer class="flex items-center gap-2">
						<Button size="sm">Collect payment</Button>
						<Button size="sm" variant="outline">Send invoice</Button>
					</Card.Footer>
				</Card.Root>
			</div>
		</div>
	</main>
</div>
