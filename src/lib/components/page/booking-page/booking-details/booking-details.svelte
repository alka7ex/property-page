<script lang="ts">
    import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label/index.js';
</script>


<Card.Root>
    <Card.Header>
      <Card.Title>Booking Details</Card.Title>
    </Card.Header>
    <Card.Content>
      <div class="grid gap-4 md:grid-cols-2">
        <div class="grid gap-2">
          <Label htmlFor="hotel-name">Hotel Name</Label>
          <p id="hotel-name">The Grand Hotel</p>
        </div>
        <div class="grid gap-2">
          <Label htmlFor="check-in-date">Check-in Date</Label>
          <p id="check-in-date">2024-01-20</p>
        </div>
        <div class="grid gap-2">
          <Label htmlFor="check-out-date">Check-out Date</Label>
          <p id="check-out-date">2024-01-25</p>
        </div>
        <div class="grid gap-2">
          <Label htmlFor="room-type">Room Type</Label>
          <p id="room-type">Suite</p>
        </div>
        <div class="grid gap-2">
          <Label htmlFor="number-of-rooms">Number of Rooms</Label>
          <p id="number-of-rooms">2</p>
        </div>
      </div>
    </Card.Content>
  </Card.Root>
<slot />