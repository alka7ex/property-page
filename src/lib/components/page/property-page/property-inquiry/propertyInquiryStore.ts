import { writable } from 'svelte/store';

export let propertyInquiryStore = writable({
    start: '',
    end: '',
});