<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	export let propertyPhoto: any;
	console.log(propertyPhoto);
</script>

<Carousel.Root class="mx-auto w-full max-w-4xl">
	<Carousel.Content>
		{#each propertyPhoto.content.photos as photo (photo.id)}
			<Carousel.Item>
				<div class="flex aspect-video items-center justify-center">
					<img
						src={photo.url}
						alt={`Photo ${photo.id}`}
						class="h-full w-full rounded-lg object-cover shadow-lg"
					/>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>

