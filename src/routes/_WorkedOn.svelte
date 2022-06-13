<script lang="ts" context="module">
	interface Section {
		word: string;
		color: string | [string, string, string];
		background: typeof SvelteComponent;
	}

	const SECTIONS: Section[] = [
		{ word: 'the web', color: '#A3FFFF', background: WebProjects },
		{ word: 'mobile', color: '#6392EC', background: MobileProjects },
	];
</script>

<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import GradientSpan from '$lib/components/GradientSpan.svelte';
	import { isJsEnabled } from '$lib/utils/accessibility';
	import WebProjects from '$lib/components/WebProjects.svelte';
	import MobileProjects from '$lib/components/MobileProjects.svelte';

	const jsEnabled = isJsEnabled();
</script>

<ScrollProgress
	topPadding={25}
	bottomPadding={25}
	scrollDistance={350}
	let:topProgress
	sections={[0.5]}
	let:sectionIndex
	let:sectionProgress
>
	{#if $jsEnabled}
		{@const { word, color, background } = SECTIONS[sectionIndex]}
		<div class="sticky top-0 wh-screen" style:opacity={topProgress}>
			{#key word}
				<div class="absolute inset-0" transition:fade|local={{ duration: 800 }}>
					<svelte:component this={background} progress={sectionProgress} />
				</div>
			{/key}
			<div class="absolute inset-0 flex items-center justify-center">
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
	{:else}
		{#each SECTIONS as { background }}
			<div class="h-[200vh] relative">
				<svelte:component this={background} />
			</div>
		{/each}
		<div class="absolute inset-0">
			<div class="sticky top-0 flex items-center justify-center wh-screen">
				<h1 class="font-bold leading-tight text-center text-white text-dyn-8">
					I worked on<br />
					{#each SECTIONS as { word, color }}
						<GradientSpan {color}>{word}</GradientSpan><br />
					{/each}
				</h1>
			</div>
		</div>
	{/if}
</ScrollProgress>
