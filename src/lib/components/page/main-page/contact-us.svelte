<script>
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import { LocateIcon, MailIcon, PhoneIcon } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';
</script>

<section class="my-20 w-full">
	<div class="container px-16">
		<Card.Root class="grid gap-6 lg:grid-cols-2 lg:gap-12">
			<div class="space-y-4">
				<Card.Header>
					<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
				</Card.Header>
				<Card.Content>
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
				</Card.Content>
			</div>
			<div class="container my-auto space-y-4">
				<div class="flex items-center space-x-2">
					<PhoneIcon class="h-6 w-6" />
					<a href="https://wa.me/6281395951495?text=Halo%20Tim%20GroRental%0A%0ASaya%20ingin%20bertanya%20mengenai%20cara%20mengembangkan%20properti%20saya%20nih,%20kasih%20tau%20dong%20tips%20dan%20triknya">
						<span>WhatsApp</span>
						<span>+6281395951495</span>
					</a>
				</div>
				<div class="flex items-center space-x-2">
					<MailIcon class="h-6 w-6" />
					<a href="mailto:connect@grorental.com">
						<span>connect@grorental.com</span>
					</a>
				</div>
				<div class="flex items-center space-x-2">
					<LocateIcon class="h-6 w-6" />
					<span class=text-blue-700>
						<a href="https://www.google.com/maps/place/GroRental/@-6.2242605,106.8426129,15z/data=!4m2!3m1!1s0x0:0xd1cbf8b5cf8947f5?sa=X&ved=2ahUKEwicx6TUzuuDAxVhcGwGHVjfAikQ_BJ6BAhbEAA">
							Office Tower Eightyeight@Kasablanka Unit 9A Jl. Casablanka Kav.88, Menteng Dalam,
							Tebet Jakarta Selatan 12870
						</a>
					</span>
				</div>
			</div>
		</Card.Root>
	</div>
</section>
