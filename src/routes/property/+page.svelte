<script lang="ts">
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IxhaEzAyfP3
 */
    import { Input } from "$lib/components/ui/input/index.js"
    import { Checkbox } from "$lib/components/ui/checkbox/index.js"
    import { Button } from "$lib/components/ui/button/index.js"
	import { Label } from "$lib/components/ui/label/index.js";

</script>

    <div class="flex flex-col md:flex-row gap-6 p-4 md:p-6">
      <div class="flex flex-col gap-4 md:w-1/4">
        <h2 class="font-bold text-2xl mb-4">Filter Options</h2>
        <div class="bg-white p-4 dark:bg-gray-950 rounded-lg shadow-lg">
          <h3 class="font-bold text-lg mb-2">Price Range</h3>
          <Input class="w-full" max="500" min="100" type="range" />
        </div>
        <div class="bg-white p-4 dark:bg-gray-950 rounded-lg shadow-lg">
          <h3 class="font-bold text-lg mb-2">Star Rating</h3>
          <div class="flex items-center gap-2">
            <Checkbox id="star-5" name="star" value="5" />
            <Label class="text-sm" htmlFor="star-5">
              5 Stars
            </Label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox id="star-4" name="star" value="4" />
            <Label class="text-sm" htmlFor="star-4">
              4 Stars
            </Label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox id="star-3" name="star" value="3" />
            <Label class="text-sm" htmlFor="star-3">
              3 Stars
            </Label>
          </div>
        </div>
        <div class="bg-white p-4 dark:bg-gray-950 rounded-lg shadow-lg">
          <h3 class="font-bold text-lg mb-2">Property Type</h3>
          <div class="flex items-center gap-2">
            <Checkbox id="type-villa" name="type" value="villa" />
            <Label class="text-sm" htmlFor="type-villa">
              Villa
            </Label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox id="type-resort" name="type" value="resort" />
            <Label class="text-sm" htmlFor="type-resort">
              Resort
            </Label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox id="type-lodge" name="type" value="lodge" />
            <Label class="text-sm" htmlFor="type-lodge">
              Lodge
            </Label>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6 md:w-3/4">
        <div class="flex items-center gap-4 mb-6">
          <Input class="w-full md:w-1/2" placeholder="Search..." type="text" />
          <div class="w-full md:w-1/2" />
        </div>
        <div class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 flex md:flex-row">
          <a class="absolute inset-0 z-10" href="#">
            <span class="sr-only">View</span>
          </a>
          <img
            alt="Property 1"
            class="object-cover w-48 h-64 md:w-64 md:h-64"
            height={400}
            src="https://media.istockphoto.com/id/506903162/id/foto/vila-mewah-dengan-kolam-renang.jpg?s=1024x1024&w=is&k=20&c=uU01JTpXhgM5A7K8ICim2OxDBnEK-EHbHHn70kRDM3I="
            style={{
              aspectRatio: "300/400",
              objectFit: "cover",
            }}
            width={300}
          />
          <div class="bg-slate-400 p-4 dark:bg-gray-950 flex flex-col justify-between">
            <div>
              <h3 class="font-bold text-xl">Luxury Villa</h3>
              <p class="text-sm text-gray-500 mt-2">123 Main St, Anytown</p>
              <div class="flex items-center gap-0.5 mt-2">
                review rating
              </div>
              <p class="text-sm text-gray-500 mt-2">4 Star Hotel</p>
              <p class="text-sm text-gray-500 mt-2">Facilities: Pool, Gym, Free Wifi</p>
            </div>
            <div class="flex justify-between items-end mt-4">
              <h4 class="font-semibold text-lg md:text-xl mt-2">$299 per night</h4>
              <Button class="mt-4">Book Now</Button>
            </div>
          </div>
        </div>
        <div class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 flex md:flex-row">
          <a class="absolute inset-0 z-10" href="#">
            <span class="sr-only">View</span>
          </a>
          <img
            alt="Property 2"
            class="object-cover w-48 h-64 md:w-64 md:h-64"
            height={400}
            src="https://media.istockphoto.com/id/506903162/id/foto/vila-mewah-dengan-kolam-renang.jpg?s=1024x1024&w=is&k=20&c=uU01JTpXhgM5A7K8ICim2OxDBnEK-EHbHHn70kRDM3I="
            style={{
              aspectRatio: "300/400",
              objectFit: "cover",
            }}
            width={300}
          />
          <div class="bg-white p-4 dark:bg-gray-950 flex flex-col justify-between">
            <div>
              <h3 class="font-bold text-xl">Beach Resort</h3>
              <p class="text-sm text-gray-500 mt-2">456 Beach Blvd, Seaside</p>
              <div class="flex items-center gap-0.5 mt-2">
                review rating

              </div>
              <p class="text-sm text-gray-500 mt-2">5 Star Hotel</p>
              <p class="text-sm text-gray-500 mt-2">Facilities: Beach View, Spa, Free Wifi</p>
            </div>
            <div class="flex justify-between items-end mt-4">
              <h4 class="font-semibold text-lg md:text-xl mt-2">$399 per night</h4>
              <Button class="mt-4">Book Now</Button>
            </div>
          </div>
        </div>
        <div class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 flex md:flex-row">
          <a class="absolute inset-0 z-10" href="#">
            <span class="sr-only">View</span>
          </a>
          <img
            alt="Property 3"
            class="object-cover w-48 h-64 md:w-64 md:h-64"
            height={400}
            src="https://media.istockphoto.com/id/506903162/id/foto/vila-mewah-dengan-kolam-renang.jpg?s=1024x1024&w=is&k=20&c=uU01JTpXhgM5A7K8ICim2OxDBnEK-EHbHHn70kRDM3I="
            style={{
              aspectRatio: "300/400",
              objectFit: "cover",
            }}
            width={300}
          />
          <div class="bg-white p-4 dark:bg-gray-950 flex flex-col justify-between">
            <div>
              <h3 class="font-bold text-xl">Mountain Lodge</h3>
              <p class="text-sm text-gray-500 mt-2">789 Peak Rd, Hillside</p>
              <div class="flex items-center gap-0.5 mt-2">
                review rating

              </div>
              <p class="text-sm text-gray-500 mt-2">3 Star Hotel</p>
              <p class="text-sm text-gray-500 mt-2">Facilities: Mountain View, Free Parking, Pet Friendly</p>
            </div>
            <div class="flex justify-between items-end mt-4">
              <h4 class="font-semibold text-lg md:text-xl mt-2">$199 per night</h4>
              <Button class="mt-4">Book Now</Button>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <Button class="mx-2">Prev</Button>
          <Button class="mx-2">1</Button>
          <Button class="mx-2">2</Button>
          <Button class="mx-2">3</Button>
          <Button class="mx-2">Next</Button>
        </div>
      </div>
    </div>