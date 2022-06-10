<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { isJsEnabled } from '$lib/utils/accessibility';
	import { clamp, lerp } from '$lib/utils/math';

	const jsEnabled = isJsEnabled();
</script>

<ScrollProgress scrollDistance={100} topInset={75} topPadding={125} let:topProgress let:outProgress>
	{@const tIn = $jsEnabled ? cubicOut(topProgress) : 1}
	{@const uIn = 1 - tIn}
	{@const tOut = cubicIn(outProgress)}
	{@const uOut = 1 - tOut}
	<div
		class="{$jsEnabled
			? 'fixed'
			: 'sticky'} top-0 w-screen h-screen flex items-center justify-center"
	>
		<figure
			role="group"
			aria-labelledby="photos taken in my free time"
			class="photos"
			style:opacity={clamp(1 - tOut * 2)}
			style="--tIn:{tIn};--uIn:{uIn};--tOut:{tOut};--uOut:{uOut}"
		>
			<img src="/free-time/nature.webp" alt="a nature reserve" class="nature" />
			<img src="/free-time/concert.webp" alt="a man in a concert" class="concert" />
			<img src="/free-time/climb.webp" alt="climbing cliff features" class="climb" />
			<img src="/free-time/dogs.webp" alt="a beagle and a dachshund" class="dogs" />
			<img src="/free-time/cafe.webp" alt="a diner" class="cafe" />
			<img src="/free-time/ocean.webp" alt="on a rock along the ocean" class="ocean" />
		</figure>
		<h1
			class="text-dyn-8 font-bold text-center text-white leading-tight drop-shadow-2xl"
			style:opacity={tIn * clamp(1 - tOut * 2)}
			style:transform="scale({lerp(0.95, 1, tIn)}) translate(0, {tOut * -20}vh)"
		>
			And still manage<br />to make free time.
		</h1>
	</div>
</ScrollProgress>

<style lang="postcss">
	.photos {
		@apply z-[-1] absolute;
		width: 100vw;
		height: 100vh;
		@apply p-4 md:p-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-16 items-center content-center;

		& img {
			@apply rounded-2xl;
			filter: brightness(80%);
		}

		& .nature {
			transform: rotate(calc(-14deg + var(--uIn) * -30deg))
				translate(calc(-30px - var(--uIn) * 80vw), calc(var(--uIn) * -80vh));
			@apply order-1;
		}

		& .concert {
			transform: rotate(calc(7deg + var(--uIn) * 20deg)) translate(0, calc(var(--uIn) * -80vh));
			@apply order-2;
		}

		& .climb {
			transform: rotate(calc(-8deg + var(--uIn) * -20deg))
				translate(calc(var(--uIn) * -100vw), calc(var(--uIn) * 20vh));
			@apply order-3;
		}

		& .dogs {
			transform: rotate(calc(15deg + var(--uIn) * 20deg))
				translate(calc(var(--uIn) * 80vw), calc(var(--uIn) * -40vh));
			@apply order-4 md:order-2;
		}

		& .cafe {
			transform: rotate(calc(-8deg + var(--uIn) * -20deg))
				translate(calc(var(--uIn) * -80vw), calc(-30px + var(--uIn) * 80vh));
			@apply order-5;
		}

		& .ocean {
			transform: rotate(calc(10deg + var(--uIn) * -20deg))
				translate(calc(var(--uIn) * 80vw), calc(var(--uIn) * 80vh));
			@apply order-6;
		}
	}
</style>
