<script lang="ts">
	import { tossCss } from '$lib/transitions/toss';

	export let src: string;
	export let alt: string;
	export let aspect: string = '3/4';

	export let rotate: string;
	export let dx: string | undefined = undefined;
	export let dy: string | undefined = undefined;

	export let progress: number;
	$: tossStyle = tossCss(
		{
			x: dx,
			y: dy,
			rotate,
		},
		progress,
	);
</script>

<div style:aspect-ratio={aspect} class="w-full" style={tossStyle}>
	<img {src} {alt} loading="lazy" class="h-full rounded-2xl brightness-75" />
</div>
