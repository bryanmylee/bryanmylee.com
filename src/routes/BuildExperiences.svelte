<script lang="ts" context="module">
	interface Content {
		word: string;
		color: string | [string, string, string];
	}

	const CONTENT: Content[] = [
		{ word: 'interactive', color: '#FFB8B8' },
		{ word: 'accessible', color: '#B8FFB8' },
		{ word: 'immersive', color: '#85D8FF' },
	];
</script>

<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import SwimmingFishes from '$lib/components/SwimmingFishes.svelte';
	import Accessibility from '$lib/components/Accessibility.svelte';
	import NestedCubes from '$lib/components/NestedCubes.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import GradientSpan from '$lib/components/GradientSpan.svelte';
	import { useJsEnabled } from '$lib/utils/accessibility';
	import { interpolate } from '$lib/utils/math';

	const jsEnabled = useJsEnabled();
</script>

<ScrollProgress
	topInset={50}
	topPadding={25}
	bottomPadding={25}
	scrollDistance={550}
	let:topProgress
	let:bottomProgress
	sectionThresholds={[0.3, 0.6]}
	let:sections
	let:activeSectionIndex
>
	{@const { word, color } = CONTENT[activeSectionIndex]}
	{#if $jsEnabled}
		<div class="sticky top-0 wh-screen" style:opacity={topProgress * (1 - bottomProgress)}>
			{#each sections as { progress, stage }, index}
				{#if index === 0 && stage !== 'inactive'}
					<div
						class="absolute inset-0"
						style:opacity={stage === 'active' ? interpolate([0, 0.8, 1], [1, 1, 0], progress) : 0}
					>
						<SwimmingFishes {progress} />
					</div>
				{:else if index === 1 && stage === 'active'}
					<div class="absolute inset-0" out:fade|local>
						<Accessibility {progress} />
					</div>
				{:else if index === 2}
					<div
						class="absolute inset-0"
						style:opacity={stage === 'active' ? interpolate([0, 0.2, 1], [0, 1, 1], progress) : 0}
					>
						<NestedCubes {progress} />
					</div>
				{/if}
			{/each}
			<div class="absolute inset-0 flex items-center justify-center">
				<h1 class="font-bold leading-tight text-center text-white text-dyn-8 drop-shadow-xl">
					I build
					{#key word}
						<span class="inline-block w-[7ch]" in:fly={{ y: 30, duration: 800 }}>
							<GradientSpan {color}>
								{word}
							</GradientSpan>
						</span><br />
					{/key}
					experiences
				</h1>
			</div>
		</div>
	{:else}
		<div class="h-[200vh]">
			<SwimmingFishes />
		</div>
		<div class="h-[200vh]">
			<Accessibility />
		</div>
		<div class="h-[200vh]">
			<NestedCubes />
		</div>
		<div class="absolute inset-0">
			<div class="sticky top-0 flex items-center justify-center wh-screen">
				<h1 class="font-bold leading-tight text-center text-white text-dyn-8">
					I build<br />
					{#each CONTENT as { word, color }}
						<GradientSpan {color}>{word}</GradientSpan><br />
					{/each}
					experiences
				</h1>
			</div>
		</div>
	{/if}
</ScrollProgress>
