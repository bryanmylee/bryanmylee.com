<script lang="ts" context="module">
	const NUM_FRAMES = 322;

	const src = (index: number) => {
		return `/crashing_waves/${index.toString().padStart(3, '0')}.jpg`;
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { range } from '$lib/utils/range';
	import { preloadImage } from '$lib/utils/image';

	let images: Promise<HTMLImageElement[]>;

	onMount(() => {
		images = Promise.all(range(NUM_FRAMES).map(src).map(preloadImage));
	});
</script>

<ScrollProgress scrollDistance="200vh" let:progress let:outProgress>
	<div class="fixed inset-0 overflow-hidden">
		{#if images !== undefined}
			{#await images}
				<img
					src={src(0)}
					alt="crashing_waves"
					class="object-cover w-screen h-screen"
					style:opacity={cubicOut(1 - progress)}
					style:transform="scale({1 + 0.5 * cubicIn(progress)})"
				/>
			{:then images}
				<img
					src={images[Math.min(Math.round(progress * NUM_FRAMES), NUM_FRAMES - 1)].src}
					alt="crashing_waves"
					class="object-cover w-screen h-screen"
					style:opacity={cubicOut(1 - progress)}
					style:transform="scale({1 + 0.5 * cubicIn(progress)})"
				/>
			{/await}
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
