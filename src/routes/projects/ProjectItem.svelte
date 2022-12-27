<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Metadata } from './+page.server';
	import ImageLayout from './ImageLayout.svelte';

	export let html: string;

	export let metadata: Metadata;

	const imagesWidth =
		metadata.images?.map((image) => parseInt(image.width)).reduce((a, b) => a + b) ?? 0;
	const imagesHeight =
		metadata.images === undefined
			? 0
			: Math.max(...metadata.images.map((image) => parseInt(image.height)));
	const imagesAspectRatio = imagesWidth / imagesHeight;
	const insetLeftMargin =
		imagesAspectRatio > 1.8 ? 'lg:-ml-96' : imagesAspectRatio > 1.5 ? 'lg:-ml-64' : '';
</script>

<!-- Applying max-w constraints here instead of /projects/+page.svelte for more dynamic layouts -->
<div class="flex flex-col items-center gap-4 mx-auto lg:flex-row lg:justify-start">
	<ProjectCard {html} {metadata} class="lg:shadow-lg" />
	{#if metadata.images !== undefined}
		<ImageLayout images={metadata.images} class="-lg:max-w-[calc(65ch-4rem)] {insetLeftMargin}" />
	{/if}
</div>
