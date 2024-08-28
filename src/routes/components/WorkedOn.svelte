<script lang="ts" context="module">
	interface Content {
		word: string;
		color: string | [string, string, string];
	}

	const CONTENT: Content[] = [
		{ word: 'the web', color: '#A3FFFF' },
		{ word: 'mobile', color: '#6392EC' },
	];
</script>

<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { useJsEnabled } from '$lib/utils/accessibility';
	import { clamp, interpolate } from '$lib/utils/math';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import GradientSpan from '$lib/components/GradientSpan.svelte';
	import WebProjects from './WebProjects.svelte';
	import MobileProjects from './MobileProjects.svelte';
	import { useWhite } from '../context';

	const jsEnabled = useJsEnabled();

	const white = useWhite();
	let contentProgress = 0;
	$: fadeOutProgress = contentProgress < 0.5 ? 0 : clamp((contentProgress - 0.9) / (1 - 0.95));
	$: $white = fadeOutProgress;
</script>

<ScrollProgress
	topPadding={25}
	bottomPadding={25}
	scrollDistance={300}
	let:topProgress
	bind:contentProgress
	sectionThresholds={[0.5]}
	let:sections
	let:activeSectionIndex
>
	{@const { word, color } = CONTENT[activeSectionIndex]}
	{#if $jsEnabled}
		{#each sections as { progress, stage }, index}
			{#if index === 0}
				<div class="absolute left-0 right-0 h-[200vh]">
					<WebProjects />
				</div>
			{:else if index === 1}
				<div
					class="absolute left-0 right-0 h-[200vh]"
					style:opacity={stage === 'active' ? interpolate([0, 0.2, 1], [0, 1, 1], progress) : 0}
				>
					<MobileProjects {progress} />
				</div>
			{/if}
		{/each}
		{#if topProgress > 0}
			<div class="sticky top-0 h-screen" in:fade>
				<div
					class="absolute inset-0 flex items-center justify-center"
					style:opacity={1 - fadeOutProgress}
				>
					<p class="text-center font-bold leading-tight text-white drop-shadow-xl text-dyn-8">
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
					</p>
				</div>
			</div>
		{/if}
	{:else}
		<div class="relative h-[125vh]">
			<WebProjects />
		</div>
		<div class="relative h-[200vh]">
			<MobileProjects />
		</div>
		<div class="absolute inset-0">
			<div class="sticky top-0 flex h-screen items-center justify-center">
				<p class="text-center font-bold leading-tight text-white text-dyn-8">
					I worked on<br />
					<GradientSpan color={CONTENT[0].color}>{CONTENT[0].word}</GradientSpan><br />
					&
					<GradientSpan color={CONTENT[1].color}>{CONTENT[1].word}</GradientSpan><br />
				</p>
			</div>
		</div>
	{/if}
</ScrollProgress>
