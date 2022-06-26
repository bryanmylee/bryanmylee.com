import { onMount } from 'svelte';
import type { Readable } from 'svelte/store';
import { withPrevious } from 'svelte-previous';

export const frameTime = () => {
	const [time, previousTime] = withPrevious(0, {
		initPrevious: [0],
	});

	let isMounted = false;

	const updateTime = (start: number) => {
		window.requestAnimationFrame(() => {
			time.set(Date.now() - start);
			if (isMounted) {
				updateTime(start);
			}
		});
	};

	onMount(() => {
		isMounted = true;
		const start = Date.now();
		updateTime(start);
		return () => {
			isMounted = false;
		};
	});

	return [time, previousTime] as [Readable<number>, Readable<number>];
};
