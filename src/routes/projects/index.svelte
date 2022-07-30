<script lang="ts">
	import { syncBackgroundWhite } from '$lib/utils/background';
	import { useWhite } from '../_context';
	import Applications from './_Applications.svelte';
	import OpenSource from './_OpenSource.svelte';
	import University from './_University.svelte';

	const white = useWhite();
	white.set(1);
	syncBackgroundWhite(white);
</script>

<div class="fixed inset-0 bg-gray-50 z-[-1]" />

<div class="contents projects">
	<OpenSource />
	<Applications />
	<University />
</div>

<div class="h-40 w-full bg-gray-50" />

<style lang="postcss">
	.projects :global(p a) {
		@apply text-cyan-500 underline underline-offset-1;
		@apply hover:text-cyan-400;
	}
</style>
