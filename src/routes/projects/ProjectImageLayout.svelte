<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import ExampleImage from './ExampleImage.svelte';
	import type { ProjectImage } from './content';

	export let images: ProjectImage[];

	let className = '';
	export { className as class };
</script>

<div
	class={twMerge('z-[-1] grid w-full flex-1 justify-center gap-4 lg:justify-end', className)}
	class:grid-cols-2={images.length >= 2}
	class:lg:grid-cols-3={images.length >= 3}
>
	{#each images as image, idx}
		<div class:-lg:hidden={idx >= 2}>
			<ExampleImage {...image} />
		</div>
	{/each}
</div>
