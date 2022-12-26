import { onMount } from 'svelte';
import type { Writable } from 'svelte/store';
import { GRAY_50 } from './color';

export const syncBackgroundWhite = (
	white: Writable<number>,
	levels: [number, number, number] = GRAY_50,
) => {
	onMount(() => {
		return white.subscribe(($white) => {
			document.body.style.backgroundColor = `rgb(${levels.map((l) => l * $white).join(',')})`;
		});
	});
};
