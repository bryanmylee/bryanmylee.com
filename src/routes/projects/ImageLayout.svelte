<script lang="ts">
	import type { Image } from './+page.server';
	import ExampleImage from './ExampleImage.svelte';

	export let images: Image[];
</script>

<div
	class="z-[-1] flex-1 gap-4 w-full grid"
	class:grid-cols-2={images.length >= 2}
	class:lg:grid-cols-3={images.length >= 3}
>
	{#each images as image, idx}
		<div class:-md:hidden={idx >= 2}>
			<ExampleImage {...image} />
		</div>
	{/each}
</div>
