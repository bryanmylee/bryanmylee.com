<script lang="ts">
	import { fade } from 'svelte/transition';
	import { toss } from '$lib/transitions/toss';

	export let src: string;
	export let alt: string;
	export let aspect: string = '3/4';

	export let rotate: string;
	export let dx: string | undefined = undefined;
	export let dy: string | undefined = undefined;
	export let delay: number;
	export let duration = 600;
</script>

<div
	style:aspect-ratio={aspect}
	class="w-full"
	in:toss={{
		rotate,
		x: dx,
		y: dy,
		duration,
		delay,
	}}
	out:fade
>
	<img {src} {alt} loading="lazy" class="h-full rounded-2xl brightness-75" />
</div>
