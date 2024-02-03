<script lang="ts">
	import placeholder from '$lib/images/placeholder.svg.png';
    import agoda from '$lib/images/logo_ota/agoda.jpg';
    import booking from '$lib/images/logo_ota/bookingcom.jpg';
    import expedia from '$lib/images/logo_ota/expedia.jpg';
    import airbnb from '$lib/images/logo_ota/airbnb.jpg';
    import instagram from '$lib/images/logo_ota/instagram.jpg';
    import facebook from '$lib/images/logo_ota/facebook.jpg';
    import google from '$lib/images/logo_ota/google.jpg';
    import trip from '$lib/images/logo_ota/trip.jpg';
    import tiket from '$lib/images/logo_ota/tiket_edited.jpg';
    import traveloka from '$lib/images/logo_ota/traveloka.jpg';
	import * as m from '$paraglide/messages';
</script>

<section class="w-full bg-[#0038A8] py-10 text-white md:py-20">
	<div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
		<div class="">
			<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
				{m.homepage_otalist_title()}
			</h2>
			<p class="max-w-[700px mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
				{m.homepage_otalist_descriptions()}
			</p>
		</div>
		<div
			class="grid w-full grid-cols-2 place-items-center gap-y-4 md:grid-cols-4 md:gap-x-4 lg:grid-cols-5 lg:gap-12"
		>
			<div class="mx-auto flex w-full items-center justify-center">
				<img
					alt="Logo"
					class="overflow-hidden rounded-lg bg-green-200 object-contain object-center h-32 w-32 lg:h-40 lg:w-40"
					
					src={airbnb}
					
				/>
			</div>
            <div class="mx-auto flex w-full items-center justify-center">
				<img
					alt="Logo"
					class="overflow-hidden rounded-lg bg-green-200 object-contain object-center h-32 w-32 lg:h-40 lg:w-40"
					
					src={agoda}
					
				/>
			</div>
            <div class="mx-auto flex w-full items-center justify-center">
				<img
					alt="Logo"
					class="overflow-hidden rounded-lg bg-green-200 object-contain object-center h-32 w-32 lg:h-40 lg:w-40"
					
					src={booking}
					
				/>
			</div>
            <div class="mx-auto flex w-full items-center justify-center">
				<img
					alt="Logo"
					class="overflow-hidden rounded-lg bg-green-200 object-contain object-center h-32 w-32 lg:h-40 lg:w-40"
					
					src={tiket}
					
				/>
			</div>
            <div class="mx-auto flex w-full items-center justify-center">
				<img
					alt="Logo"
					class="overflow-hidden rounded-lg bg-green-200 object-contain object-center h-32 w-32 lg:h-40 lg:w-40"
					
					src={traveloka}
					
				/>
			</div>
            <div class="mx-auto flex w-full items-center justify-center">
				<img
					alt="Logo"
					class="overflow-hidden rounded-lg bg-green-200 object-contain object-center h-32 w-32 lg:h-40 lg:w-40"
					
					src={trip}
					
				/>
			</div>
            <div class="mx-auto flex w-full items-center justify-center">
				<img
					alt="Logo"
					class="overflow-hidden rounded-lg bg-green-200 object-contain object-center h-32 w-32 lg:h-40 lg:w-40"
					
					src={google}
					
				/>
			</div>
            <div class="mx-auto flex w-full items-center justify-center">
				<img
					alt="Logo"
					class="overflow-hidden rounded-lg bg-green-200 object-contain object-center h-32 w-32 lg:h-40 lg:w-40"
					
					src={instagram}
					
				/>
			</div>
            <div class="mx-auto flex w-full items-center justify-center">
				<img
					alt="Logo"
					class="overflow-hidden rounded-lg bg-green-200 object-contain object-center h-32 w-32 lg:h-40 lg:w-40"
					
					src={facebook}
					
				/>
			</div>
            <div class="mx-auto flex w-full items-center justify-center">
				<img
					alt="Logo"
					class="overflow-hidden rounded-lg bg-green-200 object-contain object-center h-32 w-32 lg:h-40 lg:w-40"
					
					src={expedia}
					
				/>
			</div>
		</div>
	</div>
</section>
