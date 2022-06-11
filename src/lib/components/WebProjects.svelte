<script lang="ts">
	import { clamp, lerp } from '$lib/utils/math';

	export let progress = 0;
</script>

<figure
	role="group"
	aria-labelledby="screenshots of web projects"
	class="projects"
	style:opacity={clamp(progress * 5)}
>
	<div class="absolute inset-0" style:transform="translateY({lerp(0, -100, progress)}vh)">
		<img
			src="/the-web/kopi_time--listings.webp"
			alt="kopi time listings page"
			loading="lazy"
			style:top="40%"
			style:left="5%"
			class="tall"
		/>
		<img
			src="/the-web/techtris.webp"
			alt="techtris profile page"
			loading="lazy"
			style:top="20%"
			style:right="8%"
			class="wide"
		/>
	</div>
	<div class="absolute inset-0" style:transform="translateY({lerp(5, -105, progress)}vh)">
		<img
			src="/the-web/woknroll.webp"
			alt="wok n roll homepage"
			loading="lazy"
			style:top="70%"
			style:right="8%"
			class="tall"
		/>
	</div>
	<div class="absolute inset-0" style:transform="translateY({lerp(10, -110, progress)}vh)">
		<img
			src="/the-web/meetwhen--meet.webp"
			alt="meetwhen.io meeting"
			loading="lazy"
			style:top="70%"
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
	</div>
</figure>

<style lang="postcss">
	.projects {
		@apply absolute inset-0;
	}

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
