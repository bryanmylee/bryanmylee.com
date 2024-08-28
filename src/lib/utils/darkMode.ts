import { writable } from 'svelte/store';
import type { Readable } from 'svelte/store';
import type { Theme } from './theme';

const IS_DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export const useDarkMode = (theme: Readable<Theme>): Readable<boolean> => {
	return writable(false, (set) => {
		const unsubscribeTheme = theme.subscribe(($theme) => {
			if ($theme === 'auto') {
				attachMediaListener();
			} else {
				detachMediaListener();
				set($theme === 'dark');
			}
		});

		function attachMediaListener() {
			if (typeof window === 'undefined') {
				return;
			}
			set(window.matchMedia(IS_DARK_MEDIA_QUERY).matches);
			window.matchMedia(IS_DARK_MEDIA_QUERY).addEventListener('change', changeHandler);
		}

		function detachMediaListener() {
			if (typeof window === 'undefined') {
				return;
			}
			window.matchMedia(IS_DARK_MEDIA_QUERY).removeEventListener('change', changeHandler);
		}

		function changeHandler(event: MediaQueryListEvent) {
			set(event.matches);
		}

		return () => {
			unsubscribeTheme();
		};
	});
};
