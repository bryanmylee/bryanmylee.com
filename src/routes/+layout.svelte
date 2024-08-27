<script lang="ts">
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { syncBackgroundWhite } from '$lib/utils/background';
	import { initializeFirebase, initializeLogger, type Logger } from '$lib/analytics';
	import '../app.css';
	import '../hljs.css';
	import '../hljs';
	import { provideLogger, provideWhite } from './context';
	import Nav from './Nav.svelte';
	import { onMount } from 'svelte';

	const white = writable<number>(0);
	provideWhite(white);
	syncBackgroundWhite(white);

	$: isFullscreen = $page.url.pathname === '/';
	$: isBlogPost = $page.route.id === "/blog/[slug]"

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

<Nav showBlogLink={isBlogPost} />
<main class="relative z-0" class:mt-24={!isFullscreen}>
	<slot />
</main>
