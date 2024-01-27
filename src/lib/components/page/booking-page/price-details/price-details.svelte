<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
    import { guestDetailsStore } from '$lib/components/page/booking-page/guestdetailsstore.js';
	import { onMount } from 'svelte';
    

    const bookingdetails = {
        property_name: 'haikal homey',
        checkInDate: '01-28-2024',
        checkOutDate: '01-29-2024',
        room_type: 'Villa',
    };


    let guestDetail: any

    onMount(() => {
        return guestDetailsStore.subscribe(value => {
            guestDetail = value
        })
    })
    
    function openWhatsAppChat() {
        // Assuming you have a valid WhatsApp number in the guestDetails.phoneNumber
        const whatsappNumber = guestDetail.phoneNumber;

        if (whatsappNumber) {
            const whatsappUrl = `https://wa.me/6289608674394?text=Halo%20Tim%20GroRental!%0A%0ASaya%20${guestDetail.name}%20ingin%20booking%20villa%20${bookingdetails.property_name}%20dengan%20detail:%0ANama%20Villa:%20${bookingdetails.property_name}%0ACheckIn:%20${bookingdetails.checkInDate}%0ACheckOut:%20${bookingdetails.checkOutDate}%0ATipe%20Kamar:%20${bookingdetails.room_type}%0A%0AAtas%20nama:%0ANama:%20${guestDetail.name}%0AEmail:%20${guestDetail.email}%0ANomor%20Telepon:%20${guestDetail.phoneNumber}%0ASpesial%20Request:%20Ingin%20yang%20ada%20kolam%20renang`;
            window.open(whatsappUrl, '_blank');
        } else {
            console.error('Invalid WhatsApp number');
        }
    }

</script>

<Card.Root class="shadow-lg border">
    <Card.Header>
        <Card.Title>Price Details</Card.Title>
    </Card.Header>
    <Card.Content class="text-sm">
        <div class="grid gap-4">
            <div class="flex items-center">
                <div>Price</div>
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
        <Button size="sm" on:click={openWhatsAppChat}>Book</Button>
    </Card.Footer>
</Card.Root>

<slot />