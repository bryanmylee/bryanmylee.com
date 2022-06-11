import { writable, type Updater, type Writable } from 'svelte/store';

export interface ThrottledParams {
	interval?: number;
	includeTail?: boolean;
}

type Timeout = ReturnType<typeof setTimeout>;

export const throttled = <T>(
	initValue: T,
	{ interval = 16, includeTail = true }: ThrottledParams = {},
): Writable<T> => {
	let lastUpdate = Date.now();
	let timer: Timeout | undefined = undefined;

	const { subscribe, update } = writable(initValue);
	const throttledUpdate = (fn: Updater<T>) => {
		const now = Date.now();
		if (timer !== undefined) {
			clearTimeout(timer);
		}
		if (now - lastUpdate > interval) {
			update(fn);
			lastUpdate = now;
		} else if (includeTail) {
			timer = setTimeout(() => update(fn), interval);
		}
	};
	const throttledSet = (value: T) => throttledUpdate(() => value);
	return {
		subscribe,
		update: throttledUpdate,
		set: throttledSet,
	};
};
