<script>
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import logo from '$lib/images/grorental-_logo-white.webp';
	import { Sun, Moon } from 'lucide-svelte';
	import * as m from '$paraglide/messages';

	$: isActive = $page.route.id?.split('/')[1];
	let isMobileMenu = false;

	//  Checking via email is user logged in
</script>

<nav class="bg-[#0038A8] py-4">
	<div class="mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex">
			<div class="-ml-2 mr-2 flex items-center md:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-950 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => (isMobileMenu = !isMobileMenu)}
					data-sveltekit-preload-data="hover"
				>
					<span class="absolute -inset-0.5" />
					<span class="sr-only">Open main menu</span>
					<!--
                  Icon when menu is closed.
    
                  Menu open: "hidden", Menu closed: "block"
                -->
					<svg
						class="{isMobileMenu ? 'hidden' : 'block'} h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!--
                  Icon when menu is open.
    
                  Menu open: "block", Menu closed: "hidden"
                -->
					<svg
						class="{isMobileMenu ? 'block' : 'hidden'} h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex items-center justify-center">
				<a href="/" class="flex"> <img class="h-8 w-auto" src={logo} alt="Your Company" /> </a>
			</div>
			<div class="flex hidden flex-grow justify-end md:ml-6 md:flex md:space-x-8">
				<Button href="/property" class="my-auto bg-white text-black rounded-full hover:text-black hover:bg-white" variant="default"
					>{m.homepage_navbar_property()}</Button
				>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="md:hidden {isMobileMenu ? 'block' : 'hidden'}" id="mobile-menu">
		<div class="space-y-1 pb-3 pt-2">
			<a
				href="/property"
				class="{isActive
					? 'border-indigo-500 bg-indigo-50 text-indigo-700'
					: 'border-transparent text-white'} block border-l-4 py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6"
				>{m.homepage_navbar_property()}</a>
		</div>
	</div>
</nav>
