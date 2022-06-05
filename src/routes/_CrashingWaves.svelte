<script lang="ts" context="module">
	const NUM_FRAMES = 215;

	const getImageSrc = (index: number) => {
		return `/crashing_waves/${index.toString().padStart(3, '0')}.jpg`;
	};

	const getImageIdx = (progress: number, totalFrames: number) =>
		Math.min(totalFrames - 1, Math.round(progress * totalFrames));
</script>

<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import ScrollDownIndicator from '$lib/components/ScrollDownIndicator.svelte';
	import GradientSpan from '$lib/components/GradientSpan.svelte';
	import TransitionOnMount from '$lib/components/TransitionOnMount.svelte';
	import { range } from '$lib/utils/range';
	import { progressivePreloadSequence } from '$lib/utils/image';

	let images = progressivePreloadSequence(range(NUM_FRAMES).map(getImageSrc));
</script>

<ScrollProgress let:progress let:outProgress>
	<div class="sticky top-0 w-screen h-screen">
		<TransitionOnMount>
			<div class="absolute inset-0 overflow-hidden" in:fade={{ delay: 100, duration: 500 }}>
				<img
					src={$images.length === 0
						? getImageSrc(0)
						: $images[getImageIdx(progress, $images.length)].src}
					alt="waves crashing against the coast"
					class="object-cover w-screen h-screen"
					style:opacity={cubicOut(1 - progress)}
					style:transform="scale({1 + 0.5 * cubicIn(progress)})"
				/>
			</div>
			<div
				class="absolute inset-0 flex items-center justify-center"
				style:opacity={1 - outProgress}
			>
				<h1 class="text-[8vw] font-bold text-center text-white leading-tight">
					{#each 'Meet your next creative developer.'.split(' ') as word, wordIdx}
						{@const isCreative = wordIdx === 3}
						{#if isCreative}
							<br />
						{/if}
						<span
							class="inline-block"
							in:fly={{ y: 20, delay: wordIdx * 125 + 500, duration: 1250, easing: cubicOut }}
						>
							{#if isCreative}
								<GradientSpan color="#85D8FF">{word}</GradientSpan>
							{:else}
								{word}
							{/if}
						</span>
					{/each}
				</h1>
			</div>
			<div
				class="absolute left-0 right-0 translate-y-[16vw] top-1/2"
				style:opacity={1 - outProgress}
				in:fade={{ delay: 1750, duration: 1000 }}
			>
				<ScrollDownIndicator {progress} class="w-4/5 2xl:w-1/2 mx-auto" />
			</div>
		</TransitionOnMount>
	</div>
</ScrollProgress>
