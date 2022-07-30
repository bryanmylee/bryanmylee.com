<script lang="ts">
	import { onMount } from 'svelte';
	import { useJsEnabled } from '$lib/utils/accessibility';

	export let as: string;
	let className = '';
	export { className as class };
	export let speed = 0;

	const jsEnabled = useJsEnabled();

	let scrollContainer: HTMLElement | undefined;
	let scrollElements: HTMLElement | undefined;

	let childrenWidth = 0;
	const updateChildrenWidth = (container: HTMLElement, elements: HTMLElement) => {
		const containerStyle = getComputedStyle(container);
		const gap = parseInt(containerStyle.rowGap);
		let width = 0;
		for (let i = 0; i < elements.children.length; i++) {
			const child = elements.children.item(i);
			if (child === null) {
				continue;
			}
			const { borderLeft, borderRight } = getComputedStyle(child);
			width += child.clientWidth + gap + parseInt(borderLeft) + parseInt(borderRight);
		}
		childrenWidth = width;
	};

	let repeatCount = 1;
	const updateRepeatCount = (container: HTMLElement, elements: HTMLElement) => {
		updateChildrenWidth(container, elements);
		repeatCount = Math.ceil(container.clientWidth / childrenWidth);
	};

	const handleResize = () => {
		updateRepeatCount(scrollContainer!, scrollElements!);
	};

	onMount(() => {
		if (scrollContainer === undefined || scrollElements === undefined) {
			return;
		}
		updateRepeatCount(scrollContainer, scrollElements);
		scrollContainer.scrollLeft = childrenWidth;
	});

	const handleScroll = () => {
		if (scrollContainer === undefined || scrollElements === undefined) {
			return;
		}
		if (scrollContainer.scrollLeft < childrenWidth * 0.5) {
			scrollContainer.scrollLeft += childrenWidth;
		} else if (scrollContainer.scrollLeft >= childrenWidth * 1.5) {
			scrollContainer.scrollLeft -= childrenWidth;
		}
	};

	let previousTime = 0;
	const autoScroll = (time: number) => {
		const deltaTime = (time - previousTime) / 1000;
		const deltaPx = speed * deltaTime;
		// Scroll updates smaller than 1px are inconsistent on different browsers.
		if (deltaPx < 1) {
			requestAnimationFrame(autoScroll);
			return;
		}
		scrollContainer!.scrollLeft += deltaPx;
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

<svelte:window on:resize={handleResize} />

<svelte:element
	this={as}
	bind:this={scrollContainer}
	class="{className} overflow-x-auto"
	class:no-scrollbar={$jsEnabled}
	on:scroll={handleScroll}
>
	{#if $jsEnabled}
		<slot />
	{/if}
	<div bind:this={scrollElements} class="contents">
		<slot />
	</div>
	{#if $jsEnabled}
		{#each { length: repeatCount } as _}
			<slot />
		{/each}
	{/if}
</svelte:element>
