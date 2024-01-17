<script>
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Edit Profile</Dialog.Trigger>
	<Dialog.Content class="">
		<div class="flex justify-center items-center bg-gray-100">
			<div class="w-auto mx-auto p-4 space-y-4">
				<div class="w-full aspect-[3/2]">
					<img
						alt="Gallery"
						class="w-full h-auto"
						height="200"
						src="https://as2.ftcdn.net/v2/jpg/03/70/64/43/1000_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg"
						style={{
							aspectRatio: '300/200',
							objectFit: 'cover'
						}}
						width="300"
					/>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="aspect-[3/2]">
						<img
							alt="Gallery"
							class="w-full h-auto"
							height="150"
							src="https://as2.ftcdn.net/v2/jpg/03/70/64/43/1000_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg"
							style={{
								aspectRatio: '225/150',
								objectFit: 'cover'
							}}
							width="225"
						/>
					</div>
					<div class="aspect-[3/2]">
						<img
							alt="Gallery"
							class="w-full h-auto"
							height="150"
							src="https://as2.ftcdn.net/v2/jpg/03/70/64/43/1000_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg"
							style={{
								aspectRatio: '225/150',
								objectFit: 'cover'
							}}
							width="225"
						/>
					</div>
				</div>
				
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
