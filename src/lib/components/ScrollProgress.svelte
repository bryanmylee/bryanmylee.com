<script lang="ts" context="module">
	type SectionStage = 'entering' | 'exiting' | 'active' | 'inactive';
	interface Section {
		progress: number;
		stage: SectionStage;
	}
</script>

<script lang="ts">
	import { writable } from 'svelte/store';
	import { clamp } from '$lib/utils/math';
	import { intersection } from '$lib/utils/intersection';
	import { frameSynced } from '$lib/utils/store';
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };

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
	const scrollOffset = frameSynced(0);
	let scrollerSize = 1;

	export let offsetPx: number = 0;
	$: offsetPx = scrollElement === undefined ? 0 : $scrollOffset - scrollElement.offsetTop;
	// We shouldn't read `scrollElement.offsetTop` naively as it may be updated
	// after `scrollElement` is set. Instead, schedule a task to update `offsetPx`
	// asynchronously after `scrollElement` is set.
	$: if (scrollElement !== undefined) updateOffsetPx();
	const updateOffsetPx = () => {
		setTimeout(() => {
			offsetPx = scrollElement === undefined ? 0 : $scrollOffset - scrollElement.offsetTop;
		}, 0);
	};

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

	const visible = writable(true);

	/**
	 * How much progress before/after a section should be considered the 'almost'
	 * stage.
	 */
	export let sectionMargin = 0.1;
	/**
	 * The thresholds between sections. Given `n` values, there will be `n+1`
	 * sections, with one section ending on each threshold and a last section
	 * ending at `1.0`.
	 */
	export let sectionThresholds: undefined | number[] = undefined;
	$: sections = getSections(contentProgress);
	$: activeSectionIndex = sections.findIndex((s) => s.stage === 'active');

	const getSections = (progress: number): Section[] => {
		if (sectionThresholds === undefined || sectionThresholds.length === 0) {
			return [];
		}
		const sections: Section[] = [];
		for (let i = 0; i <= sectionThresholds.length; i++) {
			const currThreshold = sectionThresholds[i] ?? 1;
			const prevThreshold = sectionThresholds[i - 1] ?? 0;
			const sectionProgress = (progress - prevThreshold) / (currThreshold - prevThreshold);
			let stage: SectionStage;
			if (sectionProgress >= 0 && sectionProgress <= 1) {
				stage = 'active';
			} else if (sectionProgress >= -sectionMargin && sectionProgress < 0) {
				stage = 'entering';
			} else if (sectionProgress >= 1 && sectionProgress <= 1 + sectionMargin) {
				stage = 'exiting';
			} else {
				stage = 'inactive';
			}
			sections.push({ progress: sectionProgress, stage });
		}
		return sections;
	};
</script>

<svelte:window bind:scrollY={$scrollOffset} bind:innerHeight={scrollerSize} />

<section
	bind:this={scrollElement}
	bind:clientHeight={totalDistancePx}
	style:height="{scrollDistance + topPadding + bottomPadding}vh"
	style:margin-top="{-topInset}vh"
	class={twMerge('relative z-auto', className)}
	use:intersection={visible}
>
	{#if $visible}
		<slot
			{progress}
			{inProgress}
			{outProgress}
			{topProgress}
			{contentProgress}
			{bottomProgress}
			{sections}
			{activeSectionIndex}
		/>
	{/if}
</section>
