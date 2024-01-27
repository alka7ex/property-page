<script context="module" lang="ts">
    import { Button } from '$lib/components/ui/button';
    import logo from '$lib/images/beach-house-bro.svg';
</script>

<main>
    <div class="container min-h-screen bg-[#0038A8] text-white">
        <header class="container mx-auto px-4 py-10">
            <div class="grid grid-cols-1 items-center lg:grid-cols-2">
                <div class="py-10">
                    <h1 class="mb-4 text-4xl lg:text-6xl font-bold leading-tight">Maximize your property revenue potential</h1>
                    <p class="mb-4 text-base lg:text-xl">
                        We are a tech-first, AI-enabled revenue growth partner for independent hotels and vacation rental properties.
                    </p>
                    <Button class="w-56 h-16 rounded-full bg-[#FB607F]">Connect with us</Button>
                    <div class="mt-8">
                    </div>
                </div>
                <div class="flex justify-center">
                    <img
                        alt="Rental Property"
                        class="max-w-full"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'cover'
                        }}
                        src={logo}
                    />
                </div>
            </div>
        </header>
    </div>
</main>

<style>
    /* Add your styles here */
</style>
