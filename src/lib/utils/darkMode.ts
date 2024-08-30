import { readable } from 'svelte/store';
import type { Readable } from 'svelte/store';
import type { Theme } from './theme';

const IS_DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export const useDarkMode = (theme: Readable<Theme>): Readable<boolean> => {
	return readable(false, (set) => {
		const setIsDark = (isDark: boolean) => {
			set(isDark);
			if (typeof document !== 'undefined') {
				if (isDark) {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			}
		};

		const handleMediaChange = (ev: MediaQueryListEvent) => {
			setIsDark(ev.matches);
		};

		const attachMediaListener = () => {
			if (typeof window === 'undefined') return;
			setIsDark(window.matchMedia(IS_DARK_MEDIA_QUERY).matches);
			window.matchMedia(IS_DARK_MEDIA_QUERY).addEventListener('change', handleMediaChange);
		};

		const detachMediaListener = () => {
			if (typeof window === 'undefined') return;
			window.matchMedia(IS_DARK_MEDIA_QUERY).removeEventListener('change', handleMediaChange);
		};

		const unsubscribeTheme = theme.subscribe(($theme) => {
			if ($theme === 'auto') {
				attachMediaListener();
			} else {
				detachMediaListener();
				setIsDark($theme === 'dark');
			}
		});

		return () => {
			unsubscribeTheme();
			detachMediaListener();
		};
	});
};
