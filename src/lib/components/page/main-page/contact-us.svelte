<script>
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import { LocateIcon, MailIcon, PhoneIcon } from 'lucide-svelte';
</script>

<section class="w-full py-12 md:py-24 lg:py-32">
	<div class="container px-4 md:px-6">
		<div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
			<div class="space-y-4">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
				<p
					class="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					We'd love to hear from you. Please fill out the form below and we'll get back to you as
					soon as possible.
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
			</div>
			<div class="space-y-4">
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
			</div>
		</div>
	</div>
</section>
