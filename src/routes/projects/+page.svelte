<script lang="ts">
	import type { PageData } from './$types';
	import ProjectItem from './ProjectItem.svelte';

	export let data: PageData;
</script>

<header class="mx-auto lg:max-w-6xl xl:max-w-7xl max-w-[65ch] p-4 space-y-4">
	<h1 id="projects" class="text-3xl font-bold px-4">Projects</h1>
	<p class="px-4 text-sm max-w-[calc(65ch-4rem)]">
		A list of my technical projects ranging from applications, open source tooling, and experiments
		explored in University.
	</p>
</header>

<!-- Instead of placing "max-w-[65ch]" here, apply it to each individual ProjectItem for more flexibility -->
<div class="mx-auto px-4 [&_p]:leading-7 [&_p]:text-gray-800 space-y-8 lg:max-w-6xl xl:max-w-7xl">
	{#each data.content as { html, metadata }}
		<ProjectItem {html} {metadata} />
	{/each}

	<div class="w-full h-40 bg-gray-50" />
</div>
