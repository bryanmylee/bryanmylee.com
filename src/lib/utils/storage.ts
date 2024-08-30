import { writable, type Updater, type Writable } from 'svelte/store';

export const useLocalStorage = (
	key: string,
	initialValue: string | null = null,
): Writable<string | null> => {
	const store = writable(initialValue, (set) => {
		if (typeof window === 'undefined' || typeof localStorage === 'undefined') return;
		set(localStorage.getItem(key));
		const handler = (ev: StorageEvent) => {
			if (ev.key !== key) return;
			set(ev.newValue);
		};
		window.addEventListener('storage', handler);
		return () => window.removeEventListener('storage', handler);
	});

	const setLocalStorage = (value: string | null) => {
		if (typeof localStorage === 'undefined') return;
		if (value === null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, value);
		}
	};

	const set = (value: string | null) => {
		store.set(value);
		setLocalStorage(value);
	};

	const update = (updater: Updater<string | null>) => {
		store.update((value) => {
			const newValue = updater(value);
			setLocalStorage(newValue);
			return newValue;
		});
	};

	return { subscribe: store.subscribe, set, update };
};
