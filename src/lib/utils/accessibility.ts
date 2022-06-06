import { onMount } from 'svelte';
import { readable } from 'svelte/store';

export const isJsEnabled = () => {
	return readable(false, (set) => {
		onMount(() => set(true));
	});
};
