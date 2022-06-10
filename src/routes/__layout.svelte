<script lang="ts">
	import { syncBackgroundWhite } from '$lib/utils/background';

	import { writable } from 'svelte/store';
	import '../app.css';
	import { provideWhite } from './_context';
	import Nav from './_Nav.svelte';

	const white = writable<number>(0);
	provideWhite(white);
	syncBackgroundWhite(white, [249, 250, 251]);
</script>

<svelte:head>
	<title>Bryan Lee</title>
</svelte:head>

<Nav />
<main class="relative z-0">
	<slot />
</main>
