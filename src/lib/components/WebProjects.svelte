<script lang="ts">
	import { isJsEnabled } from '$lib/utils/accessibility';

	import { clamp } from '$lib/utils/math';

	export let progress = 0;

	const jsEnabled = isJsEnabled();
	$: t = $jsEnabled ? progress : 0.5;
</script>

<div>
	<figure
		role="group"
		aria-labelledby="screenshots of web projects"
		style:opacity={clamp(1 - 16 * Math.pow(t - 0.5, 4))}
	>
		<img
			src="/the-web/kopi_time--listings.webp"
			alt="kopi time listings page"
			loading="lazy"
			style:top="35%"
			style:left="5%"
			class="tall"
		/>
		<img
			src="/the-web/techtris.webp"
			alt="techtris profile page"
			loading="lazy"
			style:top="25%"
			style:left="8%"
			class="wide"
		/>
		<img
			src="/the-web/woknroll.webp"
			alt="wok n roll homepage"
			loading="lazy"
			style:top="60%"
			style:right="8%"
			class="tall"
		/>
		<img
			src="/the-web/meetwhen--meet.webp"
			alt="meetwhen.io meeting"
			loading="lazy"
			style:top="55%"
			style:right="53%"
			class="tall"
		/>
		<img
			src="/the-web/kopi_time--inventory.webp"
			alt="kopie time inventory page"
			loading="lazy"
			style:top="30%"
			style:left="50%"
			class="tall"
		/>
		<img
			src="/the-web/meetwhen--home.webp"
			alt="meetwhen.io homepage"
			loading="lazy"
			style:top="50%"
			style:left="53%"
			class="wide"
		/>
	</figure>
</div>

<style lang="postcss">
	img {
		@apply absolute bottom-0 drop-shadow-2xl;
		border-radius: min(1vw, 10px);
		&.wide {
			width: min(40%, 700px);
		}
		&.tall {
			width: min(35%, 600px);
		}
	}
</style>
