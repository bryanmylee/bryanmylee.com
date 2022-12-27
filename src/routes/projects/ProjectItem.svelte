<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Metadata } from './+page.server';
	import ImageLayout from './ImageLayout.svelte';
	import ExampleImage from './ExampleImage.svelte';

	export let html: string;

	export let metadata: Metadata;
</script>

<div class="flex flex-col items-center gap-4 mx-auto">
	<ProjectCard {html} {metadata} />
	{#if metadata.images !== undefined}
		<ImageLayout>
			{#each metadata.images as image}
				<ExampleImage {...image} />
			{/each}
		</ImageLayout>
	{/if}
</div>
