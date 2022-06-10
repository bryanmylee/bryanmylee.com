import { onMount } from 'svelte';
import type { Writable } from 'svelte/store';
import { gray50 } from './color';

export const syncBackgroundWhite = (
	white: Writable<number>,
	levels: [number, number, number] = gray50,
) => {
	onMount(() => {
		return white.subscribe(($white) => {
			document.body.style.backgroundColor = `rgb(${levels.map((l) => l * $white).join(',')})`;
		});
	});
};
