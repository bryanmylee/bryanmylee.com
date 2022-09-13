<script lang="ts" context="module">
	interface Content {
		word: string;
		color: string | [string, string, string];
		background: typeof SvelteComponent;
	}

	const CONTENT: Content[] = [
		{ word: 'interactive', color: '#FFB8B8', background: SwimmingFishes },
		{ word: 'accessible', color: '#B8FFB8', background: Accessibility },
		{ word: 'immersive', color: '#85D8FF', background: NestedCubes },
	];
</script>

<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import SwimmingFishes from '$lib/components/SwimmingFishes.svelte';
	import Accessibility from '$lib/components/Accessibility.svelte';
	import NestedCubes from '$lib/components/NestedCubes.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import GradientSpan from '$lib/components/GradientSpan.svelte';
	import { useJsEnabled } from '$lib/utils/accessibility';

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
				{@const { background } = CONTENT[index]}
				<div class="absolute inset-0" style:opacity={stage === 'active' ? 1 : 0}>
					<svelte:component this={background} {progress} />
				</div>
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
		{#each CONTENT as { background }}
			<div class="h-[200vh]">
				<svelte:component this={background} />
			</div>
		{/each}
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
