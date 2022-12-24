<script lang="ts">
	import { syncBackgroundWhite } from '$lib/utils/background';
	import { useWhite } from '../context';
	import Applications from './Applications.svelte';
	import Tooling from './Tooling.svelte';
	import University from './University.svelte';

	const white = useWhite();
	white.set(1);
	syncBackgroundWhite(white);
</script>

<div class="fixed inset-0 bg-gray-50 z-[-1]" />

<div class="contents projects">
	<h1 id="projects" class="text-3xl font-bold text-center">Projects</h1>
	<Applications />
	<Tooling />
	<University />
</div>

<div class="w-full h-40 bg-gray-50" />

<style lang="postcss">
	.projects :global(p) {
		@apply leading-7 text-gray-700;
	}
	.projects :global(p a) {
		@apply text-cyan-500 underline underline-offset-1;
		@apply hover:text-cyan-400;
	}
</style>
