<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';

	const NUM_FRAMES = 322;

	const getImageSrc = (index: number) => {
		return `/crashing_waves/${index.toString().padStart(3, '0')}.jpg`;
	};

	onMount(() => {
		for (let i = 0; i < NUM_FRAMES; i++) {
			new Image().src = getImageSrc(i);
		}
	});
</script>

<ScrollProgress scrollDistance="200vh" let:progress let:outProgress>
	<div class="fixed inset-0 overflow-hidden">
		<img
			src={getImageSrc(Math.min(Math.round(progress * NUM_FRAMES), NUM_FRAMES - 1))}
			alt="crashing waves"
			class="object-cover w-screen h-screen"
			style:opacity={cubicOut(1 - progress)}
			style:transform="scale({1 + 0.5 * cubicIn(progress)})"
		/>
	</div>
	<div
		class="fixed top-0 flex flex-col items-center justify-center w-screen h-screen"
		style:opacity={1 - outProgress}
	>
		<h1 class="text-5xl font-bold text-center text-white md:text-6xl lg:text-8xl xl:text-9xl">
			Say hello to your next<br />
			<span class="text-[#B8F2FF]">creative</span> developer
		</h1>
	</div>
</ScrollProgress>
