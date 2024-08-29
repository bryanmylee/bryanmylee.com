import { derived, writable, type Updater, type Writable } from 'svelte/store';

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

export const frameSynced = <T>(initValue: T): Writable<T> => {
	const { subscribe, update } = writable(initValue);

	let currentRequest: number | undefined = undefined;
	const syncedUpdate = (fn: Updater<T>) => {
		if (currentRequest !== undefined) {
			cancelAnimationFrame(currentRequest);
		}
		currentRequest = requestAnimationFrame(() => {
			update(fn);
		});
	};
	const syncedSet = (value: T) => syncedUpdate(() => value);

	return {
		subscribe,
		update: syncedUpdate,
		set: syncedSet,
	};
};

export const transformed = <T, U>(
	source: Writable<T>,
	transform: (input: T) => U,
	untransform: (output: U) => T,
): Writable<U> => {
	const { subscribe } = derived(source, transform);
	const set = (output: U) => {
		source.set(untransform(output));
	};
	const update = (updater: Updater<U>) => {
		source.update((prev) => untransform(updater(transform(prev))));
	};
	return { subscribe, set, update };
};
