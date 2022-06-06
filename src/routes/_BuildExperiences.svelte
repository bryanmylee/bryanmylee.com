<script lang="ts" context="module">
	interface Adjective {
		word: string;
		color: string;
		background: typeof SvelteComponent;
	}

	const ADJECTIVES: Adjective[] = [
		{ word: 'interactive', color: '#FFB8B8', background: NestedCubes },
		{ word: 'accessible', color: '#B8FFC7', background: NestedCubes },
		{ word: 'immersive', color: '#CAB8FF', background: NestedCubes },
	];
</script>

<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import NestedCubes from '$lib/components/NestedCubes.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import GradientSpan from '$lib/components/GradientSpan.svelte';
	import type { SvelteComponent } from 'svelte';
</script>

<ScrollProgress
	topInset={75}
	topPadding={25}
	scrollDistance={400}
	let:topProgress
	sections={[0.3, 0.7]}
	let:sectionIndex
	let:sectionProgress
>
	{@const { word, color, background } = ADJECTIVES[sectionIndex]}
	<div class="sticky top-0 w-screen h-screen" style:opacity={topProgress}>
		{#key word}
			<div class="absolute inset-0" transition:fade>
				<svelte:component this={background} progress={sectionProgress} />
			</div>
		{/key}
		<div class="absolute inset-0 flex items-center justify-center">
			<h1 class="text-[8vw] font-bold text-center text-white leading-tight">
				I build
				{#key word}
					<span class="inline-block" in:fly={{ y: 20, duration: 500 }}>
						<GradientSpan {color}>
							{word}
						</GradientSpan>
					</span>
				{/key}
				experiences.
			</h1>
		</div>
	</div>
</ScrollProgress>
