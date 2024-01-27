<script lang="ts">
	/**
	 * v0 by Vercel.
	 * @see https://v0.dev/t/iwOlWKNU3Rj
	 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
	 */
	import { Input } from '$lib/components/ui/input';
	import { PhoneIcon, MailboxIcon, ChevronDownIcon} from 'lucide-svelte';
</script>

<div class="bg-[hsl(226,100%,90%)] text-black">
	<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<div>
				<h2 class="text-3xl font-bold mb-8">Contact us</h2>
				<div class="space-y-6">
					<div class="flex items-center space-x-4">
						<PhoneIcon class="text-black" />
						<div>
							<p class="font-semibold">+91-1234 56789</p>
							<p class="text-sm">Call us for assistance</p>
						</div>
					</div>
					<div class="flex items-center space-x-4">
						<MailboxIcon class="text-black" />
						<div>
							<p class="font-semibold">connect@grorental.com</p>
							<p class="text-sm">Send us an email today</p>
						</div>
					</div>
				</div>
				<div class="mt-12">
					<h3 class="text-2xl font-bold mb-4">Send Us Your Details</h3>
					<Input class="mb-4" placeholder="Name" type="text" />
					<Input class="mb-4" placeholder="Number" type="text" />
					<Input placeholder="Mail" type="email" />
				</div>
			</div>
			<div class="lg:col-span-2">
				<div class="bg-white text-gray-800 rounded-lg shadow overflow-hidden">
					<div class="p-8">
						<h3 class="text-2xl font-bold mb-4">Frequently Asked Questions?</h3>
						<div class="space-y-4">
							<details class="group">
								<summary
									class="flex justify-between items-center p-4 rounded-lg bg-gray-100 cursor-pointer group-open:bg-gray-200"
								>
									<span>Q1: Common Question line expand interactable</span>
									<!-- svelte-ignore missing-declaration -->
									<ChevronDownIcon class="text-gray-500" />
								</summary>
								<p class="px-4 pb-4 text-sm">Answer to the question goes here.</p>
							</details>
							<details class="group">
								<summary
									class="flex justify-between items-center p-4 rounded-lg bg-gray-100 cursor-pointer group-open:bg-gray-200"
								>
									<span>Q2: Common Question line expand interactable</span>
									<ChevronDownIcon class="text-gray-500" />
								</summary>
								<p class="px-4 pb-4 text-sm">Answer to the question goes here.</p>
							</details>
							<details class="group">
								<summary
									class="flex justify-between items-center p-4 rounded-lg bg-gray-100 cursor-pointer group-open:bg-gray-200"
								>
									<span>Q3: Common Question line expand interactable</span>
									<ChevronDownIcon class="text-gray-500" />
								</summary>
								<p class="px-4 pb-4 text-sm">Answer to the question goes here.</p>
							</details>
							<details class="group">
								<summary
									class="flex justify-between items-center p-4 rounded-lg bg-gray-100 cursor-pointer group-open:bg-gray-200"
								>
									<span>Q4: Common Question line expand interactable</span>
									<ChevronDownIcon class="text-gray-500" />
								</summary>
								<p class="px-4 pb-4 text-sm">Answer to the question goes here.</p>
							</details>
							<details class="group">
								<summary
									class="flex justify-between items-center p-4 rounded-lg bg-gray-100 cursor-pointer group-open:bg-gray-200"
								>
									<span>Q5: Common Question line expand interactable</span>
									<ChevronDownIcon class="text-gray-500" />
								</summary>
								<p class="px-4 pb-4 text-sm">Answer to the question goes here.</p>
							</details>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer class="mt-12 border-t border-white/10 pt-8">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
					<h4 class="text-lg font-semibold mb-4">Home</h4>
					<ul class="space-y-2">
						<li>
							<a class="hover:underline" href="#">Direct a 1</a>
						</li>
						<li>
							<a class="hover:underline" href="#">a to 2</a>
						</li>
						<li>
							<a class="hover:underline" href="#">a to 2</a>
						</li>
					</ul>
				</div>
				<div>
					<h4 class="text-lg font-semibold mb-4">About Us</h4>
					<ul class="space-y-2">
						<li>
							<a class="hover:underline" href="#">Direct a 1</a>
						</li>
						<li>
							<a class="hover:underline" href="#">a to 2</a>
						</li>
						<li>
							<a class="hover:underline" href="#">a to 2</a>
						</li>
					</ul>
				</div>
				<div>
					<h4 class="text-lg font-semibold mb-4">Services</h4>
					<ul class="space-y-2">
						<li>
							<a class="hover:underline" href="#">Direct a 1</a>
						</li>
						<li>
							<a class="hover:underline" href="#">a to 2</a>
						</li>
						<li>
							<a class="hover:underline" href="#">a to 2</a>
						</li>
					</ul>
				</div>
				<div class="flex justify-end">
					<h4 class="text-4xl font-bold">Logo</h4>
				</div>
			</div>
		</footer>
	</div>
</div>
