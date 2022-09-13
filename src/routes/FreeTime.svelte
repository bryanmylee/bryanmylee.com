<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { toss } from '$lib/transitions/toss';
	import { useJsEnabled } from '$lib/utils/accessibility';
	import { clamp } from '$lib/utils/math';
	import FreeTimeImage from './FreeTimeImage.svelte';

	const duration = 600;

	const jsEnabled = useJsEnabled();
</script>

<ScrollProgress
	scrollDistance={100}
	topInset={100}
	topPadding={100}
	let:topProgress
	let:outProgress
>
	{@const tIn = $jsEnabled ? cubicOut(topProgress) : 1}
	{@const tOut = cubicIn(outProgress)}
	<div class="sticky top-0 flex items-center justify-center wh-screen">
		{#if !$jsEnabled || topProgress > 0.25}
			<figure role="group" aria-labelledby="photos taken in my free time" class="photos">
				<div style:transform="rotate(-14deg) translate(-30px, 0)" class="order-1">
					<FreeTimeImage
						src="/free-time/nature.webp"
						alt="a nature reserve"
						rotate="-30deg"
						dx="-80vw"
						dy="-80vh"
						delay={50}
					/>
				</div>
				<div style:transform="rotate(7deg)" class="order-2">
					<FreeTimeImage
						src="/free-time/concert.webp"
						alt="a man in a concert"
						rotate="20deg"
						dy="-80vh"
						delay={150}
					/>
				</div>
				<div style:transform="rotate(-8deg)" class="order-3">
					<FreeTimeImage
						src="/free-time/climb.webp"
						alt="a man climbing a cliff"
						rotate="-20deg"
						dx="-100vw"
						dy="20vh"
						delay={100}
					/>
				</div>
				<div style:transform="rotate(15deg)" class="order-4 w-full md:order-2">
					<FreeTimeImage
						src="/free-time/dogs.webp"
						alt="a beagle and a dachshund dog staring at the camera"
						aspect="1/1"
						rotate="20deg"
						dx="80vw"
						dy="-40vh"
						delay={200}
					/>
				</div>
				<div style:transform="rotate(-8deg) translate(0, -30px)" class="order-5">
					<FreeTimeImage
						src="/free-time/cafe.webp"
						alt="a diner"
						aspect="1/1"
						rotate="-20deg"
						dx="-80vw"
						dy="80vh"
						delay={0}
					/>
				</div>
				<div style:transform="rotate(10deg)" class="order-6">
					<FreeTimeImage
						src="/free-time/ocean.webp"
						alt="a rock along a dramatic ocean coast"
						rotate="-20deg"
						dx="80vw"
						dy="80vh"
						delay={250}
					/>
				</div>
			</figure>
		{/if}
		<h1
			class="font-bold leading-tight text-center text-white text-dyn-8 drop-shadow-xl"
			style:opacity={tIn * clamp(1 - tOut * 2)}
		>
			And still manage<br />to make free time.
		</h1>
	</div>
</ScrollProgress>

<style lang="postcss">
	.photos {
		@apply absolute z-[-1] wh-screen overflow-x-clip;
		@apply gap-4 p-4 md:gap-16 md:p-16;
		@apply grid grid-cols-2 content-center items-center md:grid-cols-3;
		@apply grid-flow-row-dense;
	}
</style>
