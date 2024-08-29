<script lang="ts">
	import type { PageData } from './$types';
	import ProjectItem from './ProjectItem.svelte';

	export let data: PageData;
</script>

<header class="mx-auto flex max-w-[65ch] flex-col gap-4 p-4 text-ink lg:max-w-6xl xl:max-w-7xl">
	<h1 id="projects" class="px-4 text-3xl font-bold">{data.title}</h1>
	<p class="max-w-[calc(65ch-4rem)] px-4 text-sm">{data.subtitle}</p>
</header>

<!-- Instead of placing "max-w-[65ch]" here, apply it to each individual ProjectItem for more flexibility -->
<div class="mx-auto mt-4 space-y-8 px-4 lg:max-w-6xl xl:max-w-7xl">
	{#each data.content as { html, metadata }}
		<ProjectItem {html} {metadata} />
	{/each}

	<div class="h-40 w-full" />
</div>
