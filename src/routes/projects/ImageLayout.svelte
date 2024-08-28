<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Image } from './+page.server';
	import ExampleImage from './ExampleImage.svelte';

	export let images: Image[];

	let className = '';
	export { className as class };
</script>

<div
	class={twMerge('z-[-1] grid w-full flex-1 gap-4', className)}
	class:grid-cols-2={images.length >= 2}
	class:lg:grid-cols-3={images.length >= 3}
>
	{#each images as image, idx}
		<div class:-lg:hidden={idx >= 2}>
			<ExampleImage {...image} />
		</div>
	{/each}
</div>
