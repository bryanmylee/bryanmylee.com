<script lang="ts" context="module">
	interface Content {
		word: string;
		color: string | [string, string, string];
		background: typeof SvelteComponent;
	}

	const CONTENT: Content[] = [
		{ word: 'the web', color: '#A3FFFF', background: WebProjects },
		{ word: 'mobile', color: '#6392EC', background: MobileProjects },
	];
</script>

<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { useJsEnabled } from '$lib/utils/accessibility';
	import { clamp } from '$lib/utils/math';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import GradientSpan from '$lib/components/GradientSpan.svelte';
	import WebProjects from '$lib/components/WebProjects.svelte';
	import MobileProjects from '$lib/components/MobileProjects.svelte';
	import { useWhite } from './_context';

	const jsEnabled = useJsEnabled();

	const white = useWhite();
	let contentProgress = 0;
	$: fadeOutProgress = contentProgress < 0.5 ? 0 : clamp((contentProgress - 0.9) / (1 - 0.95));
	$: $white = fadeOutProgress;
</script>

<ScrollProgress
	topPadding={25}
	bottomPadding={25}
	scrollDistance={350}
	let:topProgress
	bind:contentProgress
	sectionThresholds={[0.5]}
	let:sections
	let:activeSectionIndex
>
	{@const { word, color } = CONTENT[activeSectionIndex]}
	{#if $jsEnabled}
		{#each sections as { progress, stage }, index}
			{@const { background } = CONTENT[index]}
			<div class="absolute left-0 right-0 h-[200vh]" style:opacity={stage === 'active' ? 1 : 0}>
				<svelte:component this={background} {progress} />
			</div>
		{/each}
		{#if topProgress > 0}
			<div class="sticky top-0 wh-screen" in:fade>
				<div
					class="absolute inset-0 flex items-center justify-center"
					style:opacity={1 - fadeOutProgress}
				>
					<h1 class="font-bold leading-tight text-center text-white text-dyn-8 drop-shadow-xl">
						I worked on
						{#key word}
							<span
								class="inline-block w-[6ch] whitespace-nowrap text-left"
								in:fly={{ y: 30, duration: 800 }}
							>
								<GradientSpan {color}>
									{word}
								</GradientSpan>
							</span>
						{/key}
					</h1>
				</div>
			</div>
		{/if}
	{:else}
		{#each CONTENT as { background }}
			<div class="h-[200vh] relative">
				<svelte:component this={background} />
			</div>
		{/each}
		<div class="absolute inset-0">
			<div class="sticky top-0 flex items-center justify-center wh-screen">
				<h1 class="font-bold leading-tight text-center text-white text-dyn-8">
					I worked on<br />
					{#each CONTENT as { word, color }}
						<GradientSpan {color}>{word}</GradientSpan><br />
					{/each}
				</h1>
			</div>
		</div>
	{/if}
</ScrollProgress>
