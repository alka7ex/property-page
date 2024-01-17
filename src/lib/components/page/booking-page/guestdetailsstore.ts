import { writable } from 'svelte/store';

export let guestDetailsStore = writable({
  name: '',
  email: '',
  phoneNumber: '',
  additionalComments: '',
});