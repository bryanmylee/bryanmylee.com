<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { useJsEnabled } from '$lib/utils/accessibility';
	import { clamp } from '$lib/utils/math';
	import FreeTimeImage from './FreeTimeImage.svelte';

	const jsEnabled = useJsEnabled();
</script>

<ScrollProgress
	scrollDistance={75}
	topInset={100}
	topPadding={100}
	let:topProgress
	let:outProgress
	let:progress
>
	{@const tIn = $jsEnabled ? cubicOut(topProgress) : 1}
	{@const tOut = cubicIn(outProgress)}
	<div
		class="sticky top-0 flex h-screen items-center justify-center"
		style={`--progress: ${progress}`}
	>
		{#if !$jsEnabled || topProgress > 0.25}
			<figure
				role="group"
				aria-label="six photos taken in my free time sliding into the screen"
				class="photos"
			>
				<div style:transform="rotate(-14deg) translate(-30px, 0)" class="order-1">
					<FreeTimeImage
						src="/free-time/nature.webp"
						alt="my partner in a nature reserve"
						rotate="-30deg"
						dx="-80lvw"
						dy="-80lvh"
					/>
				</div>
				<div style:transform="rotate(7deg)" class="order-2">
					<FreeTimeImage
						src="/free-time/concert.webp"
						alt="a side profile silhouette of an artist holding a microphone in a concert"
						rotate="20deg"
						dx="0lvw"
						dy="-80lvh"
					/>
				</div>
				<div style:transform="rotate(-8deg)" class="order-3">
					<FreeTimeImage
						src="/free-time/climb.webp"
						alt="me bouldering a cliff feature"
						rotate="-20deg"
						dx="-100lvw"
						dy="20lvh"
					/>
				</div>
				<div style:transform="rotate(15deg)" class="order-4 w-full md:order-2">
					<FreeTimeImage
						src="/free-time/dogs.webp"
						alt="my beagle and dachshund staring at the camera"
						aspect="1/1"
						rotate="20deg"
						dx="80lvw"
						dy="-40lvh"
					/>
				</div>
				<div style:transform="rotate(-8deg) translate(0, -30px)" class="order-5">
					<FreeTimeImage
						src="/free-time/cafe.webp"
						alt="my partner and I in the mirror of a diner"
						aspect="1/1"
						rotate="-20deg"
						dx="-80lvw"
						dy="80lvh"
					/>
				</div>
				<div style:transform="rotate(10deg)" class="order-6">
					<FreeTimeImage
						src="/free-time/ocean.webp"
						alt="my partner walking along a rock feature alongside the ocean"
						rotate="-20deg"
						dx="80lvw"
						dy="80lvh"
					/>
				</div>
			</figure>
		{/if}
		<p
			class="text-center font-bold leading-tight text-white drop-shadow-xl text-dyn-8"
			style:opacity={tIn * clamp(1 - tOut * 2)}
		>
			And still manage<br />to make free time.
		</p>
	</div>
</ScrollProgress>

<style lang="postcss">
	.photos {
		@apply absolute z-[-1] h-screen w-full overflow-x-clip;
		@apply gap-4 p-4 md:gap-16 md:p-16;
		@apply grid grid-cols-2 content-center items-center md:grid-cols-3;
		@apply grid-flow-row-dense;
	}
</style>
