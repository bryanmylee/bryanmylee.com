import { paired } from '$lib/utils/context';
import { writable } from 'svelte/store';

export const [useTheme, provideTheme] = paired(writable<'light' | 'dark'>('dark'));
