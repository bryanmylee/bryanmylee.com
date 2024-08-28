<script lang="ts">
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { syncBackgroundWhite } from '$lib/utils/background';
	import { initializeFirebase, initializeLogger, type Logger } from '$lib/analytics';
	import '../app.css';
	import '../hljs.css';
	import '../hljs';
	import { provideLogger, provideBgPaperRatio } from './context';
	import Nav from './components/Nav';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import { useDarkMode } from '$lib/utils/darkMode';

	export let data: LayoutData;
	const theme = writable(data.initialTheme);
	const dark = useDarkMode(theme);
	$: console.log({ $dark, $theme });

	const bgPaperRatio = writable<number>($page.route.id === '/' ? 0 : 1);
	provideBgPaperRatio(bgPaperRatio);
	syncBackgroundWhite(bgPaperRatio);

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

<Nav />
<main class="relative z-0" class:mt-24={!isFullscreen}>
	<slot />
</main>
