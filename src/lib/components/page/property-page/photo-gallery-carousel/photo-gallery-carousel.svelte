<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  export let propertyPhoto: any;
</script>

<Carousel.Root class="mx-auto w-full max-w-6xl">
  <Carousel.Content>
      {#each propertyPhoto.content.photos as photo (photo.id)}
          <Carousel.Item>
              <div class="p-1">
                  <Card.Root>
                      <Card.Content class="flex aspect-video items-center justify-center p-6">
                          <img src={photo.url} alt={`Photo ${photo.id}`} class="w-full h-full object-cover" />
                      </Card.Content>
                  </Card.Root>
              </div>
          </Carousel.Item>
      {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>
