<script lang="ts" context="module">
	const NUM_FRAMES = 215;

	const getImageSrc = (index: number) => {
		return `/crashing_waves/${index.toString().padStart(3, '0')}.webp`;
	};

	const getImageIdx = (progress: number, totalFrames: number) =>
		Math.min(totalFrames - 1, Math.round(progress * totalFrames));
</script>

<script lang="ts">
	import { cubicIn } from 'svelte/easing';
	import FractalNoise from '$lib/components/FractalNoise.svelte';
	import { range } from '$lib/utils/range';
	import { progressivePreloadSequence } from '$lib/utils/image';

	export let progress = 0;

	let images = progressivePreloadSequence(range(NUM_FRAMES).map(getImageSrc));
</script>

<div class="absolute inset-0 overflow-hidden">
	<FractalNoise
		class="absolute w-screen h-screen"
		seed={progress * 1000}
		--brightness="25%"
		--contrast="200%"
	/>
	<img
		src={$images.length === 0 ? getImageSrc(0) : $images[getImageIdx(progress, $images.length)].src}
		alt="waves crashing against a coast"
		class="object-cover w-screen h-screen mix-blend-screen"
		style:transform="scale({1 + 0.5 * cubicIn(progress)})"
	/>
</div>
