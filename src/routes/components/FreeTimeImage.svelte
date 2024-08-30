<script lang="ts">
	import { tossStyle } from '$lib/transitions/toss';

	export let src: string;
	export let alt: string;
	export let aspect: string = '3/4';

	export let rotate: string;
	export let dx: string | undefined = undefined;
	export let dy: string | undefined = undefined;

	// Animation progress is set from the `--progress` CSS variable.
	const style = tossStyle({ x: dx, y: dy, rotate });
</script>

<div style:aspect-ratio={aspect} class="w-full" {style}>
	<img {src} {alt} loading="lazy" class="h-full rounded-2xl brightness-75" />
</div>
