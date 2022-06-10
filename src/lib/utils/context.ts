import { getContext, setContext } from 'svelte';

export const paired = <T>() => {
	const key = Symbol();
	return [() => getContext<T>(key), (value: T) => setContext(key, value)] as const;
};
