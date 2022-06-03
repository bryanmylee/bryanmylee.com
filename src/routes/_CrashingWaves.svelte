<script lang="ts" context="module">
	const NUM_FRAMES = 215;

	const src = (index: number) => {
		return `/crashing_waves/${index.toString().padStart(3, '0')}.jpg`;
	};
</script>

<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { range } from '$lib/utils/range';
	import { progressivePreloadSequence } from '$lib/utils/image';
	import type { Readable } from 'svelte/store';

	let images: Readable<HTMLImageElement[]> = progressivePreloadSequence(range(NUM_FRAMES).map(src));
</script>

<ScrollProgress scrollDistance="200vh" let:progress let:outProgress>
	<div class="fixed inset-0 overflow-hidden">
		{#if $images.length !== 0}
			{@const currentImageIdx = Math.min($images.length - 1, Math.round(progress * $images.length))}
			<img
				src={$images[currentImageIdx].src}
				alt="crashing_waves"
				class="object-cover w-screen h-screen"
				style:opacity={cubicOut(1 - progress)}
				style:transform="scale({1 + 0.5 * cubicIn(progress)})"
			/>
		{:else}
			<img
				src={src(0)}
				alt="crashing_waves"
				class="object-cover w-screen h-screen"
				style:opacity={cubicOut(1 - progress)}
				style:transform="scale({1 + 0.5 * cubicIn(progress)})"
			/>
		{/if}
	</div>
	<div
		class="fixed top-0 flex flex-col items-center justify-center w-screen h-screen"
		style:opacity={1 - outProgress}
	>
		<h1 class="text-4xl font-bold text-center text-white md:text-6xl lg:text-8xl xl:text-9xl">
			Say hello to your next<br />
			<span class="text-[#B8F2FF]">creative</span> developer
		</h1>
	</div>
</ScrollProgress>
