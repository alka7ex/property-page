<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { PhoneIcon, MailboxIcon, ChevronDownIcon, MailIcon, LocateIcon } from 'lucide-svelte';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

<section class="w-full bg-[hsl(226,100%,90%)] py-10 text-black my-10" id="contact-us">
	<Card.Root class="mx-5 lg:mx-10">
		<Card.Content class="container">
			<div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
				<div class="space-y-4">
					<Card.Header class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
						>Contact Us</Card.Header
					>
					<Card.Content>
						<p
							class="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							We'd love to hear from you. Please fill out the form below and we'll get back to you
							as soon as possible.
						</p>
						<div class="space-y-4">
							<div class="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="Enter your name" />
							</div>
							<div class="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" placeholder="Enter your email" type="email" />
							</div>
							<div class="space-y-2">
								<Label htmlFor="message">Message</Label>
								<Textarea class="min-h-[100px]" id="message" placeholder="Enter your message" />
							</div>
							<Button>Send message</Button>
						</div>
					</Card.Content>
				</div>
				<Card.Content class="space-y-4 mt-10 ">
					<div class="flex items-center space-x-2">
						<PhoneIcon class="h-6 w-6" />
						<span>+1 (123) 456-7890</span>
					</div>
					<div class="flex items-center space-x-2">
						<MailIcon class="h-6 w-6" />
						<span>info@acme.com</span>
					</div>
					<div class="flex items-center space-x-2">
						<LocateIcon class="h-6 w-6" />
						<span>123 Main St, Anytown, USA</span>
					</div>
				</Card.Content>
			</div>
		</Card.Content>
	</Card.Root>
</section>
