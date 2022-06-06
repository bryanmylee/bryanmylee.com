import { onMount } from 'svelte';
import type { Readable, Subscriber } from 'svelte/store';
import { withPrevious } from 'svelte-previous';

export const frameTime = () => {
	const [time, previousTime] = withPrevious(0, {
		initPrevious: [0],
	});
	onMount(() => {
		const start = Date.now();
		updateTime(start, time.set);
	});
	return [time, previousTime] as [Readable<number>, Readable<number>];
};

const updateTime = (start: number, set: Subscriber<number>) => {
	window.requestAnimationFrame(() => {
		set(Date.now() - start);
		updateTime(start, set);
	});
};
