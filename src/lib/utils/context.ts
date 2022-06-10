import { getContext, setContext } from 'svelte';

export const paired = <T>(value: T) => {
	const key = Symbol();
	return [() => getContext<T>(key), () => setContext(key, value)];
};
