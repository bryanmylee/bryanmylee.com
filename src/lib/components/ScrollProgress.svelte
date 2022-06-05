<script lang="ts" context="module">
	const scrollOffset = readable(0, (set) => {
		const handleScroll = () => {
			set(window.scrollY);
		};
		onMount(() => {
			handleScroll();
			window.addEventListener('scroll', handleScroll, { passive: true });
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		});
	});

	const scrollerSize = readable(1, (set) => {
		const handleResize = () => {
			set(window.innerHeight);
		};
		onMount(() => {
			handleResize();
			window.addEventListener('resize', handleResize, { passive: true });
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		});
	});
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { readable, writable } from 'svelte/store';
	import { clamp } from '$lib/utils/clamp';
	import { visible } from '$lib/utils/intersection';

	export let scrollDistance: number = 200;
	export let inPadding: number = 0;
	const inRatio = inPadding / (inPadding + scrollDistance);

	let totalDistancePx: number | undefined;
	let scrollElement: HTMLDivElement | undefined;

	export let offsetPx: number = 0;
	$: offsetPx = scrollElement === undefined ? 0 : $scrollOffset - scrollElement.offsetTop;
	export let offset: number = 0;
	$: offset = totalDistancePx === undefined ? 0 : offsetPx / totalDistancePx;
	$: progressRaw = totalDistancePx === undefined ? 0 : offsetPx / (totalDistancePx - $scrollerSize);

	export let progress: number = 0;
	export let inProgress: number = 0;
	export let outProgress: number = 0;

	$: progress = clamp(progressRaw, 0, 1);
	$: inProgress = clamp(1 + progressRaw, 0, 1);
	$: outProgress = clamp(progressRaw - 1, 0, 1);

	const isVisible = writable(true);
</script>

<svelte:window />

<div
	bind:this={scrollElement}
	bind:clientHeight={totalDistancePx}
	style:height="{scrollDistance + inPadding}vh"
	class="relative"
	use:visible={isVisible}
>
	{#if $isVisible}
		<slot {progress} {inProgress} {outProgress} />
	{/if}
</div>
