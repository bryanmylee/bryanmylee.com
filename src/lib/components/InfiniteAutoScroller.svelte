<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { useJsEnabled } from '$lib/utils/accessibility';

	export let as: string;
	let className = '';
	export { className as class };
	export let speed = 0;

	const jsEnabled = useJsEnabled();

	let element: HTMLElement | undefined;
	onMount(async () => {
		await tick();
		if (element === undefined) {
			return;
		}
		const { padding } = getComputedStyle(element);
		const width = element.scrollWidth - parseFloat(padding);
		element.scrollLeft = Math.ceil(width / 3);
	});

	const handleScroll = (event: UIEvent) => {
		const element = event.target;
		if (!(element instanceof HTMLElement)) {
			return;
		}
		const { padding } = getComputedStyle(element);
		const width = element.scrollWidth - parseInt(padding);
		if (element.scrollLeft > (width * 2) / 3) {
			element.scrollLeft -= width / 3;
		} else if (element.scrollLeft < width / 3) {
			element.scrollLeft += width / 3;
		}
	};

	let previousTime = 0;
	const autoScroll = (time: number) => {
		const deltaTime = (time - previousTime) / 1000;
		const deltaPx = speed * deltaTime;
		// Scroll updates smaller than 0.5px do not have an effect.
		if (deltaPx < 0.5) {
			requestAnimationFrame(autoScroll);
			return;
		}
		element!.scrollLeft += deltaPx;
		previousTime = time;
		requestAnimationFrame(autoScroll);
	};
	onMount(() => {
		if (speed === 0) {
			return;
		}
		requestAnimationFrame(autoScroll);
	});
</script>

<svelte:element
	this={as}
	bind:this={element}
	class="{className} overflow-x-auto"
	class:no-scrollbar={$jsEnabled}
	on:scroll={handleScroll}
>
	<slot />
	<!-- repeat scroll content twice for padding -->
	{#if $jsEnabled}
		<slot />
		<slot />
	{/if}
</svelte:element>
