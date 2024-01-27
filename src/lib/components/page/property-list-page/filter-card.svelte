<script>

	import { Input } from "$lib/components/ui/input/";
    import { Checkbox } from "$lib/components/ui/checkbox/";
    import { Label } from "$lib/components/ui/label";

</script>



<h2 class="mb-4 text-2xl font-bold">Filter Options</h2>
<div class="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-950">
    <h3 class="mb-2 text-lg font-bold">Price Range</h3>
    <Input class="w-full" max="500" min="100" type="range" />
</div>
<div class="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-950">
    <h3 class="mb-2 text-lg font-bold">Star Rating</h3>
    <div class="flex items-center gap-2">
        <Checkbox id="star-5" name="star" value="5" />
        <Label class="text-sm" htmlFor="star-5">5 Stars</Label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox id="star-4" name="star" value="4" />
        <Label class="text-sm" htmlFor="star-4">4 Stars</Label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox id="star-3" name="star" value="3" />
        <Label class="text-sm" htmlFor="star-3">3 Stars</Label>
    </div>
</div>
<div class="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-950">
    <h3 class="mb-2 text-lg font-bold">Property Type</h3>
    <div class="flex items-center gap-2">
        <Checkbox id="type-villa" name="type" value="villa" />
        <Label class="text-sm" htmlFor="type-villa">Villa</Label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox id="type-resort" name="type" value="resort" />
        <Label class="text-sm" htmlFor="type-resort">Resort</Label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox id="type-lodge" name="type" value="lodge" />
        <Label class="text-sm" htmlFor="type-lodge">Lodge</Label>
    </div>
</div>