import type { Logger } from '$lib/analytics';
import { paired } from '$lib/utils/context';
import type { Theme } from '$lib/utils/theme';
import type { Readable, Writable } from 'svelte/store';

export const [useTheme, provideTheme] = paired<Writable<Theme>>();
export const [useIsDark, provideIsDark] = paired<Readable<boolean>>();
export const [useBgPaperRatio, provideBgPaperRatio] = paired<Writable<number>>();
export const [useLogger, provideLogger] = paired<Readable<Logger | undefined>>();
