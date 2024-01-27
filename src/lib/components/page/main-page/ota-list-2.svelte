<script lang="ts">
  import placeholder from '$lib/images/placeholder.svg.png';
</script>

<section class="w-full py-10 md:py-20 bg-[#0038A8] text-white">
  <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div class="">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet our Partners</h2>
          <p class="mx-auto max-w-[700px md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Trusted by the best teams in the world. We help teams of all sizes.
          </p>
      </div>
      <div class="grid w-full grid-cols-2 gap-y-4  md:gap-x-4 md:grid-cols-4 lg:grid-cols-5 place-items-center lg:gap-12">
          {#each Array(10) as _, index}
              <div class="mx-auto flex w-full items-center justify-center" key={index}>
                  <img
                      alt="Logo"
                      class="bg-green-200 overflow-hidden rounded-lg object-contain object-center"
                      height="200"
                      src="https://logowik.com/content/uploads/images/agoda7659.jpg"
                      width="200"
                  />
              </div>
          {/each}
      </div>
  </div>
</section>
