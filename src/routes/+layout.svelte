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
	import type { LayoutData } from './$types';
	import { useDarkMode } from '$lib/utils/darkMode';
	import { getInkCssVars } from '$lib/utils/color';
	import { stringifyStyleObject } from '$lib/utils/style';

	export let data: LayoutData;

	const theme = writable(data.initialTheme);
	provideTheme(theme);

	const isDark = useDarkMode(theme);
	provideIsDark(isDark);
	$: inkCssVars = getInkCssVars($isDark);

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
</svelte:head>

<div class:dark={$isDark} class="contents" style={stringifyStyleObject(inkCssVars)}>
	<Nav />
	<main class="relative z-0" class:mt-24={!isFullscreen}>
		<slot />
	</main>
</div>
