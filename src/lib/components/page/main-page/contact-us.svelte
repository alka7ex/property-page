<script>
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import { LocateIcon, MailIcon, PhoneIcon } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';
</script>

<section class="my-20 w-full">
	<div class="flex flex-col items-stretch pt-12">
		<div
		  class="flex-col fill-blue-800 overflow-hidden relative flex min-h-[927px] w-full items-center mt-14 pb-12 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5"
		>
		  <img
			loading="lazy"
			src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbbe4bbe310ae4c92a9135832f37bee185e80ad9e615f28d2f588f708b6d5dd8?apiKey=198bd7cf5c914c4daac64d257a0217fd&"
			class="absolute object-cover object-center inset-0 size-full"
		  />
		  <div
			class="relative z-10 mt-0 w-full max-w-[1680px] mb-12 max-md:max-w-full max-md:mb-10"
		  >
			<div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
			  <div
				class="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0"
			  >
				<div
				  class="relative flex grow flex-col items-stretch mt-48 max-md:max-w-full max-md:mt-10"
				>
				  <div
					class="text-black text-6xl font-bold max-md:max-w-full max-md:text-4xl"
				  >
					Contact us
				  </div>
				  <div
					class="flex items-stretch justify-between gap-5 mt-28 max-md:max-w-full max-md:flex-wrap max-md:mt-10"
				  >
					<img
					  loading="lazy"
					  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6e550649a8f0c0720a8065ac9723baa1be462d816933a8090afead4856efb9?apiKey=198bd7cf5c914c4daac64d257a0217fd&"
					  class="aspect-square object-contain object-center w-14 shrink-0 my-auto"
					/>
					<div
					  class="flex flex-col items-stretch text-black flex-1 max-md:max-w-full"
					>
					  <div class="text-4xl font-bold max-md:max-w-full">
						+91-1234 56789
					  </div>
					  <div class="text-3xl mt-5 max-md:max-w-full">
						Call us for assistance
					  </div>
					</div>
				  </div>
				  <div
					class="flex items-stretch justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10"
				  >
					<img
					  loading="lazy"
					  src="https://cdn.builder.io/api/v1/image/assets/TEMP/67639ffbc0388fe3ce3afd877f73c673d8b99f4ffe8eb6d921fd4130b85c64cb?apiKey=198bd7cf5c914c4daac64d257a0217fd&"
					  class="aspect-square object-contain object-center w-14 shrink-0 my-auto"
					/>
					<div
					  class="flex flex-col items-stretch text-black flex-1 max-md:max-w-full"
					>
					  <div class="text-4xl font-bold max-md:max-w-full">
						connect@grorental.com
					  </div>
					  <div class="text-3xl mt-3 max-md:max-w-full">
						Send us an email today
					  </div>
					</div>
				  </div>
				  <div
					class="text-black text-4xl font-bold mt-20 max-md:max-w-full max-md:mt-10"
				  >
					Send Us Your Details
				  </div>
				  <div class="mt-11 max-md:max-w-full max-md:mt-10">
					<div
					  class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
					>
					  <div
						class="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0"
					  >
						<div
						  class="flex flex-col self-stretch items-stretch text-3xl text-black whitespace-nowrap my-auto max-md:mt-10"
						>
						  <div class="">Name</div>
						  <div class="mt-9">Number</div>
						  <div class="mt-9">Mail</div>
						</div>
					  </div>
					  <div
						class="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0"
					  >
						<div class="flex grow flex-col items-stretch max-md:mt-10">
						  <div class="bg-zinc-300 flex shrink-0 h-10 flex-col"></div>
						  <div
							class="bg-zinc-300 flex shrink-0 h-10 flex-col mt-5"
						  ></div>
						  <div
							class="bg-zinc-300 flex shrink-0 h-10 flex-col mt-5"
						  ></div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			  <div
				class="flex flex-col items-stretch w-[68%] ml-5 max-md:w-full max-md:ml-0"
			  >
				<div
				  class="relative flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10"
				>
				  <div
					class="flex w-[120px] max-w-full flex-col justify-center items-center ml-44 px-9 py-10 rounded-full max-md:ml-2.5 max-md:px-5"
				  >
					<img
					  loading="lazy"
					  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a2ca907f4bb2d3464ef8ed3c12651fc760630c4bb13d2c3273be7c4c84b84a2?apiKey=198bd7cf5c914c4daac64d257a0217fd&"
					  class="aspect-[1.12] object-contain object-center w-full fill-stone-50"
					/>
				  </div>
				  <div
					class="bg-stone-50 flex flex-col items-stretch mt-16 px-9 py-7 rounded-[40px] max-md:max-w-full max-md:mt-10 max-md:px-5"
				  >
					<div class="text-black text-4xl font-semibold max-md:max-w-full">
					  Frequently Asked Questions?
					</div>
					<div
					  class="bg-blue-800 flex shrink-0 h-0.5 flex-col mt-3 max-md:max-w-full"
					></div>
					<div
					  class="flex items-stretch justify-between gap-5 mt-5 pr-5 max-md:max-w-full max-md:flex-wrap max-md:pr-5"
					>
					  <div
						class="text-black text-2xl grow shrink basis-auto max-md:max-w-full"
					  >
						Q1: Common Question line expand interactable
					  </div>
					  <img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/770267632702cf86e89d321b1508f59e63292c933be526d123d9320f9f340005?apiKey=198bd7cf5c914c4daac64d257a0217fd&"
						class="aspect-[1.14] object-contain object-center w-6 fill-blue-800 shrink-0 self-start"
					  />
					</div>
					<div
					  class="bg-blue-800 flex shrink-0 h-0.5 flex-col mt-3.5 max-md:max-w-full"
					></div>
					<div
					  class="flex items-stretch justify-between gap-5 mt-5 pr-5 max-md:max-w-full max-md:flex-wrap max-md:pr-5"
					>
					  <div
						class="text-black text-2xl grow shrink basis-auto max-md:max-w-full"
					  >
						Q2: Common Question line expand interactable
					  </div>
					  <img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/770267632702cf86e89d321b1508f59e63292c933be526d123d9320f9f340005?apiKey=198bd7cf5c914c4daac64d257a0217fd&"
						class="aspect-[1.14] object-contain object-center w-6 fill-blue-800 shrink-0 self-start"
					  />
					</div>
					<div
					  class="bg-blue-800 flex shrink-0 h-0.5 flex-col mt-3.5 max-md:max-w-full"
					></div>
					<div
					  class="flex items-stretch justify-between gap-5 mt-5 pr-5 max-md:max-w-full max-md:flex-wrap max-md:pr-5"
					>
					  <div
						class="text-black text-2xl grow shrink basis-auto max-md:max-w-full"
					  >
						Q3: Common Question line expand interactable
					  </div>
					  <img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/770267632702cf86e89d321b1508f59e63292c933be526d123d9320f9f340005?apiKey=198bd7cf5c914c4daac64d257a0217fd&"
						class="aspect-[1.14] object-contain object-center w-6 fill-blue-800 shrink-0 self-start"
					  />
					</div>
					<div
					  class="bg-blue-800 flex shrink-0 h-0.5 flex-col mt-3.5 max-md:max-w-full"
					></div>
					<div
					  class="flex items-stretch justify-between gap-5 mt-5 pr-5 max-md:max-w-full max-md:flex-wrap max-md:pr-5"
					>
					  <div
						class="text-black text-2xl grow shrink basis-auto max-md:max-w-full"
					  >
						Q4: Common Question line expand interactable
					  </div>
					  <img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/770267632702cf86e89d321b1508f59e63292c933be526d123d9320f9f340005?apiKey=198bd7cf5c914c4daac64d257a0217fd&"
						class="aspect-[1.14] object-contain object-center w-6 fill-blue-800 shrink-0 self-start"
					  />
					</div>
					<div
					  class="bg-blue-800 flex shrink-0 h-0.5 flex-col mt-3.5 max-md:max-w-full"
					></div>
					<div
					  class="flex items-stretch justify-between gap-5 mt-5 pr-5 max-md:max-w-full max-md:flex-wrap max-md:pr-5"
					>
					  <div
						class="text-black text-2xl grow shrink basis-auto max-md:max-w-full"
					  >
						Q5: Common Question line expand interactable
					  </div>
					  <img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/770267632702cf86e89d321b1508f59e63292c933be526d123d9320f9f340005?apiKey=198bd7cf5c914c4daac64d257a0217fd&"
						class="aspect-[1.14] object-contain object-center w-6 fill-blue-800 shrink-0 self-start"
					  />
					</div>
					<div
					  class="bg-blue-800 flex shrink-0 h-0.5 flex-col mt-3.5 max-md:max-w-full"
					></div>
				  </div>
				  <div
					class="flex w-full items-stretch justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10"
				  >
					<div class="flex items-stretch justify-between gap-5">
					  <div
						class="bg-blue-800 flex w-0.5 shrink-0 h-[239px] flex-col"
					  ></div>
					  <div
						class="flex flex-col items-stretch text-2xl text-black my-auto flex-1"
					  >
						<div class="font-bold">Home</div>
						<div class="whitespace-nowrap mt-20 max-md:mt-10">
						  Direct Link 1
						</div>
						<div class="mt-7">Link to 2</div>
						<div class="mt-7">Link to 2</div>
					  </div>
					</div>
					<div class="flex items-stretch justify-between gap-5">
					  <div
						class="bg-blue-800 flex w-0.5 shrink-0 h-[239px] flex-col"
					  ></div>
					  <div
						class="flex flex-col items-stretch text-2xl text-black my-auto flex-1"
					  >
						<div class="font-bold whitespace-nowrap">About Us</div>
						<div class="whitespace-nowrap mt-20 max-md:mt-10">
						  Direct Link 1
						</div>
						<div class="mt-7">Link to 2</div>
						<div class="mt-7">Link to 2</div>
					  </div>
					</div>
					<div class="flex items-stretch justify-between gap-5">
					  <div
						class="bg-blue-800 flex w-0.5 shrink-0 h-[239px] flex-col"
					  ></div>
					  <div
						class="flex flex-col items-stretch text-2xl text-black my-auto flex-1"
					  >
						<div class="font-bold">Services</div>
						<div class="whitespace-nowrap mt-20 max-md:mt-10">
						  Direct Link 1
						</div>
						<div class="mt-7">Link to 2</div>
						<div class="mt-7">Link to 2</div>
					  </div>
					</div>
					<div
					  class="bg-blue-800 flex w-0.5 shrink-0 h-[239px] flex-col"
					></div>
					<div
					  class="text-black text-5xl font-bold grow mt-48 self-end max-md:text-4xl max-md:mt-10"
					>
					  Logo
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	  
</section>
