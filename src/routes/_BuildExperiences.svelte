<script lang="ts" context="module">
	interface Adjective {
		word: string;
		color: string | [string, string, string];
		background: typeof SvelteComponent;
	}

	const ADJECTIVES: Adjective[] = [
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
	import { isJsEnabled } from '$lib/utils/accessibility';

	const jsEnabled = isJsEnabled();
</script>

<ScrollProgress
	topInset={50}
	topPadding={25}
	scrollDistance={575}
	let:topProgress
	sections={[0.25, 0.55]}
	let:sectionIndex
	let:sectionProgress
>
	{#if $jsEnabled}
		{@const { word, color, background } = ADJECTIVES[sectionIndex]}
		<div class="sticky top-0 w-screen h-screen" style:opacity={topProgress}>
			{#key word}
				<div class="absolute inset-0" transition:fade={{ duration: 800 }}>
					<svelte:component this={background} progress={sectionProgress} />
				</div>
			{/key}
			<div class="absolute inset-0 flex items-center justify-center">
				<h1 class="text-[8vw] font-bold text-center text-white leading-tight">
					I build
					{#key word}
						<span class="inline-block w-[7ch]" in:fly={{ y: 30, duration: 800 }}>
							<GradientSpan {color}>
								{word}
							</GradientSpan>
						</span>
					{/key}
					experiences.
				</h1>
			</div>
		</div>
	{:else}
		{#each ADJECTIVES as { background }}
			<div class="h-[200vh]">
				<svelte:component this={background} />
			</div>
		{/each}
		<div class="absolute inset-0">
			<div class="sticky top-0 w-screen h-screen flex items-center justify-center">
				<h1 class="text-[8vw] font-bold text-center text-white leading-tight">
					I build<br />
					{#each ADJECTIVES as { word, color }}
						<GradientSpan {color}>{word}</GradientSpan><br />
					{/each}
					experiences.
				</h1>
			</div>
		</div>
	{/if}
</ScrollProgress>
