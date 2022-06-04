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

	export let scrollDistance: string = '100vh';

	let scrollDistancePx: number | undefined;
	let scrollElement: HTMLDivElement | undefined;

	export let offsetPx: number = 0;
	$: offsetPx = scrollElement === undefined ? 0 : $scrollOffset - scrollElement.offsetTop;
	export let offset: number = 0;
	$: offset = scrollDistancePx === undefined ? 0 : offsetPx / scrollDistancePx;
	$: progressRaw =
		scrollDistancePx === undefined ? 0 : offsetPx / (scrollDistancePx - $scrollerSize);
	export let progress: number = 0;
	$: progress = clamp(0, progressRaw, 1);
	export let inProgress: number = 0;
	$: inProgress = clamp(0, 1 + progressRaw, 1);
	export let outProgress: number = 0;
	$: outProgress = clamp(0, progressRaw - 1, 1);

	const isVisible = writable(true);
</script>

<svelte:window />

<div
	bind:this={scrollElement}
	bind:clientHeight={scrollDistancePx}
	style:height={scrollDistance}
	class="relative"
	use:visible={isVisible}
>
	{#if $isVisible}
		<slot {offsetPx} {offset} {progress} {inProgress} {outProgress} />
	{/if}
</div>
