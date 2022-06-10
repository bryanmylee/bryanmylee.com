import { onMount } from 'svelte';
import type { Writable } from 'svelte/store';
import { WHITE_LEVELS } from './color';

export const syncBackgroundWhite = (
	white: Writable<number>,
	levels: [number, number, number] = WHITE_LEVELS,
) => {
	onMount(() => {
		return white.subscribe(($white) => {
			document.body.style.backgroundColor = `rgb(${levels.map((l) => l * $white).join(',')})`;
		});
	});
};
