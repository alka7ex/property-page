<script lang="ts">
	import Navbar from '$lib/components/page/main-page/Navbar.svelte';
	import AboutUs from '$lib/components/page/main-page/about-us.svelte';
	import ContactUs from '$lib/components/page/main-page/contact-us.svelte';
	import Header from '$lib/components/page/main-page/header.svelte';
	import ServicesDetails from '$lib/components/page/main-page/services-details.svelte';
	import Services from '$lib/components/page/main-page/services.svelte';
	import '../app.pcss';
</script>

<div class="bg-background h-screen">
	<Navbar/>
	<Header/>
	<AboutUs/>
	<Services/>
	<ServicesDetails/>
	<ContactUs/>
	<slot />
</div>