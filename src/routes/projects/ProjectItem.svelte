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
</script>

<!-- Applying max-w constraints here instead of /projects/+page.svelte for more dynamic layouts -->
<div class="flex flex-col items-center gap-4 mx-auto lg:flex-row lg:justify-center">
	<ProjectCard
		{html}
		{metadata}
		class={metadata.images !== undefined ? 'lg:shadow-lg' : undefined}
	/>
	{#if metadata.images !== undefined}
		<ImageLayout
			images={metadata.images}
			class="-lg:max-w-[calc(65ch-4rem)] {imagesAspectRatio > 1.8
				? 'lg:-ml-96'
				: imagesAspectRatio > 1.5
				? 'lg:-ml-64'
				: ''}"
		/>
	{/if}
</div>
