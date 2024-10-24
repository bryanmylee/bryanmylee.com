<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import ProjectImageLayout from './ProjectImageLayout.svelte';
	import { sum } from '$lib/utils/math';
	import { PROJECT_CONTENT_IMAGES } from './content/images';
	import type { ProjectMetadata } from './content';

	export let html: string;

	export let metadata: ProjectMetadata;
	$: images = metadata.images;
	$: imageRatios =
		images === undefined
			? []
			: images.map((image) => {
					const imageData = PROJECT_CONTENT_IMAGES[image.src];
					return imageData.img.w / imageData.img.h;
				});
	$: imagesTotalRatio = sum(imageRatios);
	$: insetLeftMargin =
		imagesTotalRatio > 1.8 ? 'lg:-ml-96' : imagesTotalRatio > 1.5 ? 'lg:-ml-64' : '';
</script>

<!-- Applying max-w constraints here instead of /projects/+page.svelte for more dynamic layouts -->
<div class="mx-auto flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
	<ProjectCard {html} {metadata} class="lg:shadow-lg" />
	{#if images !== undefined}
		<ProjectImageLayout {images} class="-lg:max-w-[calc(65ch-4rem)] {insetLeftMargin}" />
	{/if}
</div>
