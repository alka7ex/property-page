<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
  </script>
  
  <Carousel.Root class="mx-auto w-full max-w-4xl">
    <Carousel.Content>
      {#each Array(25) as _, i (i)}
        <Carousel.Item>
          <div class="p-1">
            <Card.Root>
              <Card.Content
                class="flex aspect-video items-center justify-center p-6"
              >
                <span class="text-4xl font-semibold">{i + 1}</span>
              </Card.Content>
            </Card.Root>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>