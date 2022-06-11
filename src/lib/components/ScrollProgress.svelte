<script lang="ts">
	import { writable } from 'svelte/store';
	import { clamp } from '$lib/utils/math';
	import { visible } from '$lib/utils/intersection';
	import { throttled } from '$lib/utils/store';

	let _class = '';
	export { _class as class };

	export let scrollDistance = 200;
	export let topPadding = 0;
	export let bottomPadding = 0;
	export let topInset = 0;
	const totalDistance = topPadding + scrollDistance + bottomPadding;
	const contentRatio = scrollDistance / totalDistance;
	const topRatio = topPadding / totalDistance;
	const bottomRatio = bottomPadding / totalDistance;

	let totalDistancePx: number | undefined;
	let scrollElement: HTMLElement | undefined;
	const scrollOffset = throttled(0);
	let scrollerSize = 1;

	export let offsetPx: number = 0;
	$: offsetPx = scrollElement === undefined ? 0 : $scrollOffset - scrollElement.offsetTop;
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

	export let sections: undefined | number[] = undefined;
	$: [sectionIndex, sectionProgress] = getSection(contentProgress);

	const getSection = (progress: number): [number, number] => {
		if (sections === undefined) return [0, progress];
		for (let i = 0; i <= sections.length; i++) {
			const curr = sections[i] ?? 1;
			const prev = sections[i - 1] ?? 0;
			if (progress <= curr) {
				const sectionProgress = (progress - prev) / (curr - prev);
				return [i, sectionProgress];
			}
		}
		return [sections.length, 1];
	};
</script>

<svelte:window bind:scrollY={$scrollOffset} bind:innerHeight={scrollerSize} />

<section
	bind:this={scrollElement}
	bind:clientHeight={totalDistancePx}
	style:height="{scrollDistance + topPadding + bottomPadding}vh"
	style:margin-top="{-topInset}vh"
	class="relative z-auto {_class}"
	use:visible={isVisible}
>
	{#if $isVisible}
		<slot
			{progress}
			{inProgress}
			{outProgress}
			{topProgress}
			{contentProgress}
			{bottomProgress}
			{sectionIndex}
			{sectionProgress}
		/>
	{/if}
</section>
