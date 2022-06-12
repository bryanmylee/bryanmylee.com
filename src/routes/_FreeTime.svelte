<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { toss } from '$lib/transitions/toss';
	import { isJsEnabled } from '$lib/utils/accessibility';
	import { clamp, lerp } from '$lib/utils/math';

	const duration = 600;

	const jsEnabled = isJsEnabled();
</script>

<ScrollProgress scrollDistance={100} topInset={75} topPadding={125} let:topProgress let:outProgress>
	{@const tIn = $jsEnabled ? cubicOut(topProgress) : 1}
	{@const tOut = cubicIn(outProgress)}
	<div
		class="{$jsEnabled
			? 'fixed'
			: 'sticky'} top-0 w-screen h-screen flex items-center justify-center"
	>
		{#if topProgress > 0.5}
			<figure
				role="group"
				aria-labelledby="photos taken in my free time"
				class="photos"
				style:opacity={clamp(1 - tOut * 2)}
			>
				<div style:transform="rotate(-14deg) translate(-30px, 0)" class="order-1">
					<img
						src="/free-time/nature.webp"
						alt="a nature reserve"
						loading="lazy"
						class="aspect-[3/4]"
						transition:toss={{
							rotate: '-30deg',
							x: '-80vw',
							y: '-80vh',
							duration,
						}}
					/>
				</div>
				<div style:transform="rotate(7deg)" class="order-2">
					<img
						src="/free-time/concert.webp"
						alt="a man in a concert"
						loading="lazy"
						class="aspect-[3/4]"
						transition:toss={{
							rotate: '20deg',
							y: '-80vh',
							duration,
						}}
					/>
				</div>
				<div style:transform="rotate(-8deg)" class="order-3">
					<img
						src="/free-time/climb.webp"
						alt="climbing cliff features"
						loading="lazy"
						class="aspect-[3/4]"
						transition:toss={{
							rotate: '-20deg',
							x: '-100vw',
							y: '20vh',
							duration,
						}}
					/>
				</div>
				<div style:transform="rotate(15deg)" class="order-4 md:order-2">
					<img
						src="/free-time/dogs.webp"
						alt="a beagle and a dachshund"
						loading="lazy"
						class="aspect-square"
						transition:toss={{
							rotate: '20deg',
							x: '80vw',
							y: '-40vh',
							duration,
						}}
					/>
				</div>
				<div style:transform="rotate(-8deg) translate(0, -30px)" class="order-5">
					<img
						src="/free-time/cafe.webp"
						alt="a diner"
						loading="lazy"
						class="aspect-square"
						transition:toss={{
							rotate: '-20deg',
							x: '-80vw',
							y: '80vh',
							duration,
						}}
					/>
				</div>
				<div style:transform="rotate(10deg)" class="order-6">
					<img
						src="/free-time/ocean.webp"
						alt="on a rock along the ocean"
						loading="lazy"
						class="aspect-[3/4]"
						transition:toss={{
							rotate: '-20deg',
							x: '80vw',
							y: '80vh',
							duration,
						}}
					/>
				</div>
			</figure>
		{/if}
		<h1
			class="font-bold leading-tight text-center text-white text-dyn-8 drop-shadow-xl"
			style:opacity={tIn * clamp(1 - tOut * 2)}
			style:transform="scale({lerp(0.95, 1, tIn)}) translate(0, {tOut * -20}vh)"
		>
			And still manage<br />to make free time.
		</h1>
	</div>
</ScrollProgress>

<style lang="postcss">
	.photos {
		@apply absolute z-[-1] h-screen w-screen;
		@apply gap-4 p-4 md:gap-16 md:p-16;
		@apply grid grid-cols-2 content-center items-center md:grid-cols-3;
		@apply grid-flow-row-dense;

		& img {
			@apply rounded-2xl;
			filter: brightness(80%);
		}
	}
</style>
