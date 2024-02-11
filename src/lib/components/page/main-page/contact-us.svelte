<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { PhoneIcon, MailboxIcon, ChevronDownIcon, MailIcon, LocateIcon } from 'lucide-svelte';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as m from '$paraglide/messages';

	export let name = '';
	export let email = '';
	export let message = '';
	
$: console.log(name, email, message);
</script>

<section class="w-full bg-[#0038A8] py-10 text-black my-10" id="contact-us">
	<Card.Root class="mx-5 lg:mx-16">
		<Card.Content class="container">
			<div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
				<div class="space-y-4">
					<Card.Header class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
						>{m.homepage_contactus_h1()}</Card.Header
					>
					<Card.Content>
						<p
							class="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							{m.homepage_contactus_p()}
						</p>
						<div class="space-y-4">
							<div class="space-y-2">
								<Label htmlFor="name">{m.homepage_contactus_name()}</Label>
								<Input id="name" placeholder="Enter your name" type="text" bind:value={name} />
							</div>
							<div class="space-y-2">
								<Label htmlFor="email">{m.homepage_contactus_email()}</Label>
								<Input id="email" placeholder="Enter your email" type="email" bind:value={email} />
							</div>
							<div class="space-y-2">
								<Label htmlFor="message">{m.homepage_contactus_message()}</Label>
								<Textarea class="min-h-[100px]" id="message" placeholder="Enter your message" bind:value={message} />
							</div>
							<Button href='https://wa.me/6281395951495?text=Halo%20tim%20GroRental%0ASaya:%20{name}%0ASaya%20punya%20pertanyaan%20:%20{message}'>Send message</Button>
						</div>
						
					</Card.Content>
				</div>
				<Card.Content class="space-y-4 mt-10 ">
					<div class="flex items-center space-x-2">
						<PhoneIcon class="h-6 w-6" />
						<a href="https://wa.me/6281395951495?text=Halo%20tim%20GroRental,%20Saya%20ingin%20tau%20cara%20untuk%20mengembangkan%20properti%20saya">
							<span>+62 813 9595 1495</span>
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
						<a href="https://maps.app.goo.gl/cZGrn1kMdnv6uoee8">

							<span>Office Tower Eightyeight@Kasablanka Unit 9A
								Jl. Casablanka Kav.88, Menteng Dalam, Tebet
								Jakarta Selatan 12870</span>
						</a>
					</div>
				</Card.Content>
			</div>
		</Card.Content>
	</Card.Root>
</section>
