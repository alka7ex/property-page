<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { MailIcon, PhoneIcon, TextIcon } from 'lucide-svelte';
	import * as m from "$paraglide/messages"
</script>
<!-- Your other Svelte imports and code here -->

<div class="flex items-center justify-center mt-0">
	<Card.Root class="items-center justify-center w-full max-w-4xl rounded-xl bg-[#FEF2F4] shadow-lg border-none">
		<Card.Header>
			<Card.Title>{m.propertylist_support_title()}</Card.Title>
			<Card.Description>{m.propertylist_support_message()}</Card.Description>
		</Card.Header>
		<Card.Content class="flex flex-col items-center space-y-4">
			<Button href="https://wa.me/6281395951495?text=Halo%20GroRental%20Team,%20I%20need%20your%20help" variant="outline" class="bg-[#275abf] text-white hover:bg-[#0038A8] hover:text-white">
				<div class="flex items-center space-x-2">
					<PhoneIcon class="h-6 w-6 dark:text-white" />
					<span class="text-sm dark:text-white">{m.propertylist_support_whatsapp()}</span>
				</div>
			</Button>
			<Button href="mailto:connect@grorental.com" variant="outline" class="bg-[#275abf] text-white hover:bg-[#0038A8] hover:text-white">
				<div class="flex items-center space-x-2">
					<MailIcon class="h-6 w-6 dark:text-white" />
					<span class="text-sm dark:text-white">{m.propertylist_support_email()}</span>
				</div>
			</Button>
		</Card.Content>
	</Card.Root>
</div>
