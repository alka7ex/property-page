<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  export let propertyPhoto: any;
</script>

<Carousel.Root class="mx-auto w-full max-w-4xl">
  <Carousel.Content>
      {#each propertyPhoto.content.photos as photo (photo.id)}
          <Carousel.Item>
                      <Card.Content class="flex aspect-video items-center justify-center">
                          <img src={photo.url} alt={`Photo ${photo.id}`} class="w-full h-full object-cover rounded-lg shadow-lg" />
                      </Card.Content>
          </Carousel.Item>
      {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>
