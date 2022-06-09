<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { isJsEnabled } from '$lib/utils/accessibility';
	import { lerp } from '$lib/utils/math';

	const jsEnabled = isJsEnabled();

	let topProgress = 1;
	$: t = $jsEnabled ? cubicOut(topProgress) : 1;
	$: u = 1 - t;
</script>

<ScrollProgress scrollDistance={100} topInset={75} topPadding={125} bind:topProgress>
	<div
		class="{$jsEnabled
			? 'fixed'
			: 'sticky'} top-0 w-screen h-screen flex items-center justify-center"
	>
		<figure
			role="group"
			aria-labelledby="photos taken in my free time"
			class="photos"
			style="--t: {t}; --u: {u};"
		>
			<img src="/free-time/nature.webp" alt="a nature reserve" class="nature" />
			<img src="/free-time/concert.webp" alt="a man in a concert" class="concert" />
			<img src="/free-time/climb.webp" alt="climbing cliff features" class="climb" />
			<img src="/free-time/dogs.webp" alt="a beagle and a dachshund" class="dogs" />
			<img src="/free-time/cafe.webp" alt="a diner" class="cafe" />
			<img src="/free-time/ocean.webp" alt="on a rock along the ocean" class="ocean" />
		</figure>
		<h1
			class="text-[8vw] font-bold text-center text-white leading-tight drop-shadow-2xl"
			style:opacity={t}
			style:transform="scale({lerp(0.95, 1, topProgress)})"
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
			transform: rotate(calc(-14deg + var(--u) * -30deg))
				translate(calc(-30px - var(--u) * 80vw), calc(var(--u) * -80vh));
			@apply order-1;
		}

		& .concert {
			transform: rotate(calc(7deg + var(--u) * 20deg)) translate(0, calc(var(--u) * -80vh));
			@apply order-2;
		}

		& .climb {
			transform: rotate(calc(-8deg + var(--u) * -20deg))
				translate(calc(var(--u) * -100vw), calc(var(--u) * 20vh));
			@apply order-3;
		}

		& .dogs {
			transform: rotate(calc(15deg + var(--u) * 20deg))
				translate(calc(var(--u) * 80vw), calc(var(--u) * -40vh));
			@apply order-4 md:order-2;
		}

		& .cafe {
			transform: rotate(calc(-8deg + var(--u) * -20deg))
				translate(calc(var(--u) * -80vw), calc(-30px + var(--u) * 80vh));
			@apply order-5;
		}

		& .ocean {
			transform: rotate(calc(10deg + var(--u) * -20deg))
				translate(calc(var(--u) * 80vw), calc(var(--u) * 80vh));
			@apply order-6;
		}
	}
</style>
