import { paired } from '$lib/utils/context';
import type { Writable } from 'svelte/store';

export const [useWhite, provideWhite] = paired<Writable<number>>();
