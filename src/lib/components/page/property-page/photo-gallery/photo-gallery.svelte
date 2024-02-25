<script>
    import * as Dialog from '$lib/components/ui/dialog';
    import { Button, buttonVariants } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    export let propertyPhoto;

</script>

<div class="mx-auto grid w-full max-w-6xl grid-cols-3 gap-4">
    <!-- Primary Photo -->
    <img
        alt="Primary"
        class="col-span-2 aspect-[3/2] max-h-[600px] w-full max-w-full overflow-hidden rounded-lg object-cover cursor-pointer"
        src={propertyPhoto.content.photos[0].url}
        width="400"
        height="600"
    />

    <!-- Secondary Photos -->
    <div class="grid h-full grid-rows-2 gap-4">
        {#each propertyPhoto.content.photos.slice(1, 3) as photo}
            <!-- Skipping the first photo -->
            <img
                alt="Secondary"
                class="row-span-1 aspect-[3/2] max-h-[300px] w-full max-w-full overflow-hidden rounded-lg object-cover cursor-pointer"
                src={photo.url}
                width="200"
                height="300"
            />
        {/each}
    </div>
</div>



   
