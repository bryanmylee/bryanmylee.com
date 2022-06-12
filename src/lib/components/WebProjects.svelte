<script lang="ts">
	import { isJsEnabled } from '$lib/utils/accessibility';

	import { clamp, lerp } from '$lib/utils/math';

	export let progress = 0;

	const jsEnabled = isJsEnabled();
	$: t = $jsEnabled ? progress : 0.5;
</script>

<figure
	role="group"
	aria-labelledby="screenshots of web projects"
	class="absolute inset-0 {$jsEnabled ? '' : 'top-1/3 h-screen'}"
	style:opacity={clamp(1 - 16 * Math.pow(t - 0.5, 4))}
>
	<div class="absolute inset-0" style:transform="translateY({lerp(0, -100, t)}vh)">
		<img
			src="/the-web/kopi_time--listings.webp"
			alt="kopi time listings page"
			loading="lazy"
			style:top="70%"
			style:left="5%"
			class="tall"
		/>
		<img
			src="/the-web/techtris.webp"
			alt="techtris profile page"
			loading="lazy"
			style:top="50%"
			style:right="8%"
			class="wide"
		/>
	</div>
	<div class="absolute inset-0" style:transform="translateY({lerp(5, -105, t)}vh)">
		<img
			src="/the-web/woknroll.webp"
			alt="wok n roll homepage"
			loading="lazy"
			style:top="100%"
			style:right="8%"
			class="tall"
		/>
	</div>
	<div class="absolute inset-0" style:transform="translateY({lerp(10, -110, t)}vh)">
		<img
			src="/the-web/meetwhen--meet.webp"
			alt="meetwhen.io meeting"
			loading="lazy"
			style:top="100%"
			style:right="53%"
			class="tall"
		/>
		<img
			src="/the-web/kopi_time--inventory.webp"
			alt="kopie time inventory page"
			loading="lazy"
			style:top="60%"
			style:left="50%"
			class="tall"
		/>
	</div>
</figure>

<style lang="postcss">
	img {
		@apply absolute bottom-0 rounded-md;
		&.wide {
			width: min(45%, 700px);
		}
		&.tall {
			width: min(40%, 600px);
		}
	}
</style>
