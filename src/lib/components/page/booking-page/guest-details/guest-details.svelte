<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Label } from '$lib/components/ui/label/index.js';
    import { Input } from '$lib/components/ui/input/index.js';
</script>

<Card.Root>
    <Card.Header>
        <Card.Title>Guest Details</Card.Title>
    </Card.Header>
    <Card.Content>
        <div class="grid gap-4">
            <div class="grid gap-2">
                <Label htmlFor="guest-name">Guest's Name</Label>
                <Input id="guest-name" placeholder="Enter guest's name" />
            </div>
            <div class="grid gap-2">
                <Label htmlFor="guest-email">Guest's Email</Label>
                <Input id="guest-email" placeholder="Enter guest's email" type="email" />
            </div>
            <div class="grid gap-2">
                <Label htmlFor="guest-phone-number">Guest's Phone Number</Label>
                <Input id="guest-phone-number" placeholder="Enter guest's phone number" />
            </div>
            <div class="grid gap-2">
                <Label htmlFor="additional-comments">Special Request (optionals)</Label>
                <Input id="additional-comments" placeholder="Enter additional request" />
                <Label htmlFor="additional-comments" class="italic">*We won't guarantee your special request but we will do our best to accommodate your request</Label>
            </div>
        </div>
    </Card.Content>
</Card.Root>

<slot />