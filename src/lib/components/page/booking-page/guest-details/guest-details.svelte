<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Label } from '$lib/components/ui/label/index.js';
    import { Input } from '$lib/components/ui/input/index.js';
    import { guestDetailsStore } from '$lib/components/page/booking-page/guestdetailsstore.js';
    

    let guestDetails = {
        name: '',
        email: '',
        phoneNumber: '',
        additionalComments: '',
    };

    function updateGuestDetails(field, value) {
        guestDetails = { ...guestDetails, [field]: value };
        guestDetailsStore.set(guestDetails);
    }

  </script>
  
  <Card.Root>
    <Card.Header>
        <Card.Title>Guest Details</Card.Title>
    </Card.Header>
    <Card.Content>
        <div class="grid gap-4">
            <div class="grid gap-2">
                <Label for="guest-name">Name</Label>
                <Input on:input={(e) => updateGuestDetails('name', e.currentTarget.value)} id="guest-name" placeholder="Enter guest's name" />
            </div>
            <div class="grid gap-2">
                <Label for="guest-email">Email</Label>
                <Input on:input={(e) => updateGuestDetails('email', e.currentTarget.value)} id="guest-email" placeholder="Enter guest's email" type="email" />
            </div>
            <div class="grid gap-2">
                <Label for="guest-phone-number">Phone Number (WhatsApp)</Label>
                <Input on:input={(e) => updateGuestDetails('phoneNumber', e.currentTarget.value)} id="guest-phone-number" placeholder="Enter guest's phone number" />
            </div>
            <div class="grid gap-2">
                <Label for="additional-comments">Special Request (Optionals)</Label>
                <Input on:input={(e) => updateGuestDetails('additionalComments', e.currentTarget.value)} id="additional-comments" placeholder="Enter additional request" />
                <Label for="additional-comments" class="italic">
                    *We won't guarantee your special request but we will do our best to accommodate your request
                </Label>
            </div>
        </div>
    </Card.Content>
</Card.Root>

<slot />