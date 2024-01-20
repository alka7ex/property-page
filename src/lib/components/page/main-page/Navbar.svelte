<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Button } from "$lib/components/ui/button";
	import logo from '$lib/images/grorental-_logo-white.webp';
	import { Sun, Moon } from "lucide-svelte";
	// import { toggleMode } from "mode-watcher";
	import grorentallogo2 from '$lib/images/grorental-_logo-white.webp';

	// const logoutHandler = () => {
	// 	supabase.auth.signOut();
	// 	goto('/login');
	// };

	// export let data;
	// $: ({ session, supabase } = data);
	// console.log(data)
	let nav = {
		title: 'Svelte Tailwinds',
		img: logo,
		listnavs: [
			{
				name: 'Home',
				link: '/'
			},
			{
				name: 'Property',
				link: '/property'
			},
			{
				name: 'Booking',
				link: '/booking'
			},
			{
				name: 'Calendar',
				link: '/calendar'
			},
			{
				name: 'User',
				link: '/user'
			},
			// {
			// 	name: 'Profile',
			// 	link: `/user/${data.session?.user.id}`
			// }
		]
	};
	$: isActive = $page.route.id?.split('/')[1];

	let profileNavs = [
		{
			name: 'Your Profile',
			link: '/'
		},
		{
			name: 'Settings',
			link: '/'
		},
		{
			name: 'Sign out',
			link: '/'
		}
	];

	let isProfileMenu = false;
	let isMobileMenu = false;

	//  Checking via email is user logged in
</script>

<nav class="bg-[#0038A8] py-4">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex">
				<div class="-ml-2 mr-2 flex items-center md:hidden">
					<!-- Mobile menu button -->
					<button
						type="button"
						class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
				<div class="flex flex-shrink-0 items-center">
					<img class="h-8 w-auto" src={nav.img} alt="Your Company" />
				</div>
				<div class="hidden md:ml-6 md:flex md:space-x-8">
					<!-- {#if session }
						{#each nav.listnavs as item}
							<Button
								href={item.link} class="my-auto" variant="link"
								>{item.name}</Button>
						{/each}
					{/if} -->
				</div>
			</div>
			<div class="flex item-center">
				<div class="flex items-center justify-between flex-shrink-0 gap-4">
					<div class="flex items-center ml-auto">
						<!-- <Button on:click={toggleMode} variant="outline" size="icon">
							<Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span class="sr-only">Toggle theme</span>
						</Button> -->
					</div>
					<div class="flex items-center m-auto">
						<div class="flex-shrink-0">
							<!-- {#if session != null}
							<Button on:click={logoutHandler}>Sign out</Button>
							{:else}
							<Button href="/login">Log In</Button>
							{/if} -->
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="md:hidden {isMobileMenu ? 'block' : 'hidden'}" id="mobile-menu">
		<div class="space-y-1 pb-3 pt-2">
			<!-- {#each nav.listnavs as item}
				<a
					href={item.link}
					class="{isActive === item.link.split('/')[1]
						? 'border-indigo-500 bg-indigo-50 text-indigo-700'
						: 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'} block border-l-4 py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6"
					>{item.name}</a
				>
			{/each} -->
		</div>
	</div>
</nav>
