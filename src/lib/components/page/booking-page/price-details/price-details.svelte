<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
</script>

<Card.Root>
    <Card.Header>
        <Card.Title>Price Details</Card.Title>
    </Card.Header>
    <Card.Content class="text-sm">
        <div class="grid gap-4">
            <div class="flex items-center">
                <div>Subtotal</div>
                <div class="ml-auto">$169.00</div>
            </div>
            <div class="flex items-center">
                <div>Discount</div>
                <div class="ml-auto">-$19.00</div>
            </div>
            <Separator />
            <div class="flex items-center font-medium">
                <div>Total</div>
                <div class="ml-auto">$150.00</div>
            </div>
        </div>
    </Card.Content>
    <Card.Footer class="flex items-center gap-2">
        <Button size="sm">Collect payment</Button>
        <Button size="sm" variant="outline">Send invoice</Button>
    </Card.Footer>
</Card.Root>

<slot />