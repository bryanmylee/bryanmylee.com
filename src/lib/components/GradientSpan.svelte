<script lang="ts" context="module">
	type ColorInput = string | number | chroma.Color;

	const getColors = (color: ColorInput): [chroma.Color, chroma.Color, chroma.Color] => {
		const base = chroma(color);
		const first = getShifted(base, 0);
		const second = getShifted(base, 30);
		const third = getShifted(base, -30);
		return [first, second, third];
	};

	const getShifted = (color: chroma.Color, shift = 0): chroma.Color => {
		const hue = color.get('hsl.h');
		return color.set('hsl.h', hue + shift);
	};
</script>

<script lang="ts">
	import chroma from 'chroma-js';

	export let color: ColorInput | [ColorInput, ColorInput, ColorInput];
	const colors = Array.isArray(color) ? color.map((c) => chroma(c)) : getColors(color);
	const colorsTo = colors.map((color) => getShifted(color, 30).darken(3).alpha(0));
</script>

<span
	style:--first={colors[0].hex()}
	style:--firstTo={colorsTo[0].hex()}
	style:--second={colors[1].hex()}
	style:--secondTo={colorsTo[1].hex()}
	style:--third={colors[2].hex()}
	style:--thirdTo={colorsTo[2].hex()}><slot /></span
>

<style>
	span {
		background-clip: text;
		color: transparent;
		background-size: 200% 200%;
		background-image: linear-gradient(240deg, var(--first), var(--firstTo) 70%),
			linear-gradient(120deg, var(--second), var(--secondTo) 70%),
			linear-gradient(0deg, var(--third), var(--thirdTo) 70%),
			linear-gradient(0deg, var(--first), var(--first) 100%);
		animation: move-background 4s infinite;
	}
</style>
