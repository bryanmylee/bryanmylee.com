<script lang="ts" context="module">
	interface Section {
		word: string;
		color: string | [string, string, string];
		background: typeof SvelteComponent;
	}

	const SECTIONS: Section[] = [
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
	sections={[0.3, 0.6]}
	let:sectionIndex
	let:sectionProgress
>
	{#if $jsEnabled}
		{@const { word, color, background } = SECTIONS[sectionIndex]}
		<div class="sticky top-0 wh-screen" style:opacity={topProgress * (1 - bottomProgress)}>
			{#key word}
				<div class="absolute inset-0" transition:fade|local={{ duration: 800 }}>
					<svelte:component this={background} progress={sectionProgress} />
				</div>
			{/key}
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
		{#each SECTIONS as { background }}
			<div class="h-[200vh]">
				<svelte:component this={background} />
			</div>
		{/each}
		<div class="absolute inset-0">
			<div class="sticky top-0 flex items-center justify-center wh-screen">
				<h1 class="font-bold leading-tight text-center text-white text-dyn-8">
					I build<br />
					{#each SECTIONS as { word, color }}
						<GradientSpan {color}>{word}</GradientSpan><br />
					{/each}
					experiences
				</h1>
			</div>
		</div>
	{/if}
</ScrollProgress>
