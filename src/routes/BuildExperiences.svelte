<script lang="ts">
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
	scrollDistance={150}
	let:progress
	let:topProgress
	let:bottomProgress
>
	{#if $jsEnabled}
		<div class="sticky top-0 wh-screen" style:opacity={topProgress * (1 - bottomProgress)}>
			<NestedCubes {progress} />
		</div>
	{:else}
		<div class="h-[200vh]">
			<NestedCubes />
		</div>
	{/if}
	<div
		class="absolute inset-0 flex items-center justify-center"
		style:transform={$jsEnabled ? '' : 'translateY(-50vh)'}
	>
		<h1 class="font-bold leading-tight text-center text-white text-dyn-8 drop-shadow-xl">
			I build
			<GradientSpan class="inline-block" color="#85D8FF">immersive</GradientSpan>
			<br />
			experiences
		</h1>
	</div>
</ScrollProgress>
