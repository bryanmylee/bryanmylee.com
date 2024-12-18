<script lang="ts">
	import NestedCubes from './NestedCubes.svelte';
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
		<div class="sticky top-0 h-screen" style:opacity={topProgress * (1 - bottomProgress)}>
			<NestedCubes {progress} />
		</div>
	{:else}
		<div class="h-[200lvh]">
			<NestedCubes />
		</div>
	{/if}
	<div
		class="absolute inset-0 flex items-center justify-center"
		style:transform={$jsEnabled ? '' : 'translateY(-50lvh)'}
	>
		<p class="text-center font-bold leading-tight text-white drop-shadow-xl text-dyn-8">
			I build
			<GradientSpan class="inline-block" color="#85D8FF">immersive</GradientSpan>
			<br />
			experiences
		</p>
	</div>
</ScrollProgress>
