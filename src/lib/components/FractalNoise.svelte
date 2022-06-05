<script lang="ts">
	let _class = '';
	export { _class as class };

	export let baseFrequency = 0.65;
	export let numOctaves = 3;
	export let seed: string | number | undefined = undefined;
</script>

<svg class={_class}>
	<filter id="noiseFilter">
		<feTurbulence type="fractalNoise" {baseFrequency} {numOctaves} {seed} stitchTiles="stitch" />
	</filter>

	<rect width="100%" height="100%" filter="url(#noiseFilter)" />
</svg>

<style>
	svg {
		filter: contrast(var(--contrast, 100%)) brightness(var(--brightness, 100%));
	}
</style>
