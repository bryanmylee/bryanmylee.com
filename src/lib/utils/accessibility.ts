import { onMount } from 'svelte';
import { readable } from 'svelte/store';

export const useJsEnabled = () => {
	return readable(false, (set) => {
		onMount(() => set(true));
	});
};
