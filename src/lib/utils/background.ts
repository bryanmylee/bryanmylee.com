import { onMount } from 'svelte';
import { derived, type Readable } from 'svelte/store';
import { getPaper } from './color';

export const syncBgInkRatio = (isDark: Readable<boolean>, bgInkRatio: Readable<number>) => {
	onMount(() => {
		return derived([isDark, bgInkRatio], (pair) => pair).subscribe(([$isDark, $bgInkRatio]) => {
			const adjustedRgb = getPaper($isDark)
				.DEFAULT.map((l) => l * $bgInkRatio)
				.join(',');
			document.body.style.backgroundColor = `rgb(${adjustedRgb})`;
		});
	});
};
