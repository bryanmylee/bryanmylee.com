import { onMount } from 'svelte';
import { derived, type Readable } from 'svelte/store';
import { getPaper } from './color';

export const syncBgFillRatio = (isDark: Readable<boolean>, bgFillRatio: Readable<number>) => {
	onMount(() => {
		return derived([isDark, bgFillRatio], (pair) => pair).subscribe(([$isDark, $bgFillRatio]) => {
			const adjustedRgb = getPaper($isDark)
				.DEFAULT.map((l) => l * $bgFillRatio)
				.join(',');
			document.body.style.backgroundColor = `rgb(${adjustedRgb})`;
		});
	});
};
