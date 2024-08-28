import { onMount } from 'svelte';
import type { Readable } from 'svelte/store';
import { GRAY_50 } from './color';

export const syncBgPaperRatio = (bgPaperRatio: Readable<number>) => {
	onMount(() => {
		return bgPaperRatio.subscribe(($ratio) => {
			document.body.style.backgroundColor = `rgb(${GRAY_50.map((l) => l * $ratio).join(',')})`;
		});
	});
};
