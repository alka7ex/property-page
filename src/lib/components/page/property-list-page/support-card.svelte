<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { MailIcon, PhoneIcon, TextIcon } from 'lucide-svelte';
</script>

<Card.Root class="mt-24 w-full max-w-md shadow-lg border-none">
	<Card.Header>
		<Card.Title>Need Help? Contact Us</Card.Title>
		<Card.Description>We're here ready to help you. Reach out to us via WhatsApp, or email.</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-col items-center space-y-4">
		<Button href="https://wa.me/6281395951495?text=Halo%20GroRental%20Team,%20I%20need%20your%20help" variant="outline">
			<div class="flex items-center space-x-2">
				<PhoneIcon class="h-6 w-6 dark:text-white" />
				<span class="text-sm dark:text-white">WhatsApp Support</span>
			</div>
		</Button>
		<Button href="mailto:connect@grorental.com" variant="outline">
			<div class="flex items-center space-x-2">
				<MailIcon class="h-6 w-6 dark:text-white" />
				<span class="text-sm dark:text-white">Email Support</span>
			</div>
		</Button>
	</Card.Content>
</Card.Root>
