<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Metadata } from './+page.server';
	import ImageLayout from './ImageLayout.svelte';

	export let html: string;

	export let metadata: Metadata;
</script>

<div class="flex flex-col items-center gap-4 mx-auto">
	<ProjectCard {html} {metadata} />
	{#if metadata.images !== undefined}
		<ImageLayout images={metadata.images} />
	{/if}
</div>
