<script lang="ts">
	import Applications from './Applications.svelte';
	import Tooling from './Tooling.svelte';
	import University from './University.svelte';
</script>

<div class="mx-auto max-w-[65ch] p-8 space-y-4">
	<h1 id="projects" class="text-3xl font-bold px-4">Projects</h1>
	<p class="px-4 text-sm">
		A list of my technical projects ranging from applications, open source tooling, and experiments
		explored in University.
	</p>
</div>
<div class="contents projects">
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
