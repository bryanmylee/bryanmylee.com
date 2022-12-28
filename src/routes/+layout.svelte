<script lang="ts">
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { syncBackgroundWhite } from '$lib/utils/background';
	import '../app.css';
	import '../hljs.css';
	import { provideWhite } from './context';
	import Nav from './Nav.svelte';

	const white = writable<number>(0);
	provideWhite(white);
	syncBackgroundWhite(white);

	$: isFullscreen = $page.url.pathname === '/';
</script>

<svelte:head>
	<title>{$page.data.title ? $page.data.title + ' | ' : ''}Bryan Lee</title>
	<meta name="description" content={$page.data.subtitle ?? 'Meet your next creative developer.'} />
</svelte:head>

<Nav />
<main class="relative z-0" class:mt-24={!isFullscreen}>
	<slot />
</main>
