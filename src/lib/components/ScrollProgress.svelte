<script lang="ts">
	import { writable } from 'svelte/store';
	import { clamp } from '$lib/utils/clamp';
	import { visible } from '$lib/utils/intersection';

	export let scrollDistance = 200;
	export let topPadding = 0;
	export let bottomPadding = 0;
	export let topInset = 0;
	const totalDistance = topPadding + scrollDistance + bottomPadding;
	const contentRatio = scrollDistance / totalDistance;
	const topRatio = topPadding / totalDistance;
	const bottomRatio = bottomPadding / totalDistance;

	let totalDistancePx: number | undefined;
	let scrollElement: HTMLDivElement | undefined;
	let scrollOffset = 0;
	let scrollerSize = 1;

	export let offsetPx: number = 0;
	$: offsetPx = scrollElement === undefined ? 0 : scrollOffset - scrollElement.offsetTop;
	export let offset: number = 0;
	$: offset = totalDistancePx === undefined ? 0 : offsetPx / totalDistancePx;
	$: progressRaw = totalDistancePx === undefined ? 0 : offsetPx / (totalDistancePx - scrollerSize);

	export let progress: number = 0;
	export let inProgress: number = 0;
	export let outProgress: number = 0;
	export let topProgress: number = 0;
	export let contentProgress: number = 0;
	export let bottomProgress: number = 0;

	$: progress = clamp(progressRaw);
	$: inProgress = clamp(1 + progressRaw);
	$: outProgress = clamp(progressRaw - 1);
	$: topProgress = topRatio === 0 ? 1 : clamp(progressRaw / topRatio);
	$: contentProgress = contentRatio === 0 ? 1 : clamp((progressRaw - topRatio) / contentRatio);
	$: bottomProgress =
		bottomRatio === 0 ? 1 : clamp((progressRaw - topRatio - contentRatio) / bottomRatio);

	const isVisible = writable(true);
</script>

<svelte:window bind:scrollY={scrollOffset} bind:innerHeight={scrollerSize} />

<div
	bind:this={scrollElement}
	bind:clientHeight={totalDistancePx}
	style:height="{scrollDistance + topPadding}vh"
	style:margin-top="{-topInset}vh"
	class="relative"
	use:visible={isVisible}
>
	{#if $isVisible}
		<slot {progress} {inProgress} {outProgress} {topProgress} {contentProgress} {bottomProgress} />
	{/if}
</div>
