<script lang="ts">
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { syncBgInkRatio } from '$lib/utils/background';
	import { initializeFirebase, initializeLogger, type Logger } from '$lib/analytics';
	import '../app.css';
	import '../hljs.css';
	import '../hljs';
	import { provideLogger, provideBgInkRatio, provideTheme, provideIsDark } from './context';
	import Nav from './components/Nav';
	import { onMount } from 'svelte';
	import { useDarkMode } from '$lib/utils/darkMode';
	import { transformed } from '$lib/utils/store';
	import { useLocalStorage } from '$lib/utils/storage';
	import { parseTheme } from '$lib/utils/theme';

	const theme = transformed(
		useLocalStorage('theme'),
		(input) => parseTheme(input) ?? 'auto',
		(output) => output,
	);
	provideTheme(theme);

	const isDark = useDarkMode(theme);
	provideIsDark(isDark);

	/**
	 * The background ink ratio determines how much the background should be
	 * filled by the ink color. This is set to 0 for the landing page's black UI.
	 */
	const bgInkRatio = writable<number>($page.route.id === '/' ? 0 : 1);
	provideBgInkRatio(bgInkRatio);
	syncBgInkRatio(isDark, bgInkRatio);

	$: isFullscreen = $page.url.pathname === '/';

	const loggerStore = writable<Logger | undefined>(undefined);
	provideLogger(loggerStore);
	onMount(function setLoggerContext() {
		const app = initializeFirebase();
		const logger = initializeLogger(app);
		loggerStore.set(logger);
	});
</script>

<svelte:head>
	<title>{$page.data.title ? $page.data.title + ' | ' : ''}Bryan Lee</title>
	<meta name="description" content={$page.data.subtitle ?? 'Meet your next creative developer.'} />
	<script>
		(function () {
			try {
				const theme = localStorage.getItem('theme');
				const dark =
					theme === 'dark' ||
					(theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
				if (dark) {
					document.documentElement.classList.add('dark');
				}
			} catch (e) {}
		})();
	</script>
</svelte:head>

<div class="contents">
	<Nav />
	<main class="relative z-0" class:mt-24={!isFullscreen}>
		<slot />
	</main>
</div>
