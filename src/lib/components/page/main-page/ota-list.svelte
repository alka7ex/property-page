<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
  </script>
  
  <Carousel.Root class="w-full mx-auto my-20 max-w-sm">
    <Carousel.Content class="-ml-1 w-full bg-green-200">
      {#each Array(20) as _, i (i)}
        <Carousel.Item class="pl-1 basis-60">
          <div class="p-1">
            <Card.Root>
              <Card.Content
                class="flex aspect-square items-center justify-center p-6"
              >
                <span class="text-2xl font-semibold">{i + 1}</span>
              </Card.Content>
            </Card.Root>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>