import { writable } from 'svelte/store';
import type { Updater, Writable } from 'svelte/store';

export const useCookie = (
	name: string,
	initialValue: string | null = null,
): Writable<string | null> => {
	const store = writable(initialValue);
	const setCookie = (value: string | null) => {
		if (typeof document === 'undefined') return;
		if (value === null) {
			document.cookie = `${name}=;path=/;samesite=lax;max-age=0`;
		} else {
			document.cookie = `${name}=${value};path=/;samesite=lax`;
		}
	};
	const set = (value: string | null) => {
		store.set(value);
		setCookie(value);
	};
	const update = (updater: Updater<string | null>) => {
		store.update((value) => {
			const newValue = updater(value);
			setCookie(newValue);
			return newValue;
		});
	};
	return { subscribe: store.subscribe, set, update };
};
