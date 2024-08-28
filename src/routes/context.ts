import type { Logger } from '$lib/analytics';
import { paired } from '$lib/utils/context';
import type { Readable, Writable } from 'svelte/store';

export const [useBgPaperRatio, provideBgPaperRatio] = paired<Writable<number>>();
export const [useLogger, provideLogger] = paired<Readable<Logger | undefined>>();
