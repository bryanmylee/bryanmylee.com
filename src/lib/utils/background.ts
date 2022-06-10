import { onMount } from 'svelte';
import type { Writable } from 'svelte/store';

export const syncBackgroundWhite = (white: Writable<number>, levels: [number, number, number]) => {
	onMount(() => {
		return white.subscribe(($white) => {
			document.body.style.backgroundColor = `rgb(${levels.map((l) => l * $white).join(',')})`;
		});
	});
};
