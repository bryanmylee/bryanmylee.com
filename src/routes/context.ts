import type { Logger } from '$lib/analytics';
import { paired } from '$lib/utils/context';
import type { Theme } from '$lib/utils/theme';
import type { Readable, Writable } from 'svelte/store';

export const [useTheme, provideTheme] = paired<Writable<Theme>>();
export const [useIsDark, provideIsDark] = paired<Readable<boolean>>();
/**
 * The background fill ratio determines how much the background should be
 * filled. This is set to 0 for the landing page's black UI.
 */
export const [useBgFillRatio, provideBgFillRatio] = paired<Writable<number>>();
export const [useLogger, provideLogger] = paired<Readable<Logger | undefined>>();
