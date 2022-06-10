<script lang="ts">
	import { draw } from 'svelte/transition';
	import chroma from 'chroma-js';
	import { quintOut } from 'svelte/easing';

	export let color: string;
	const desat = chroma(color).desaturate(1);
</script>

<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
	<g
		style="fill: none; stroke: {color}; stroke-width: 16px; stroke-linejoin: round; stroke-linecap: round;"
	>
		<path
			d="M 103.272 274.99 C 103.272 274.99 162.754 195.724 250.653 195.724 C 339.605 195.724 396.728 274.213 396.728 274.213 C 396.728 274.213 336.424 352.449 250.338 352.449 C 164.221 352.449 103.272 274.99 103.272 274.99 Z"
			in:draw={{ duration: 3000, easing: quintOut }}
		/>
		<ellipse
			cx="250"
			cy="275.088"
			rx="52.056"
			ry="52.056"
			in:draw={{ duration: 3000, easing: quintOut }}
		/>
		<g
			style="stroke: {desat.hex()}; opacity: 0.5;"
			transform="matrix(1, 0, 0, 1, 2.004392, 20.333458)"
		>
			<line
				x1="83.021"
				y1="223.934"
				x2="65.596"
				y2="201.4"
				class="animate-pulse"
				style:animation-delay="100ms"
			/>
			<line
				x1="137.654"
				y1="176.646"
				x2="124.727"
				y2="152.135"
				class="animate-pulse"
				style:animation-delay="100ms"
			/>
			<line
				x1="209.402"
				y1="146.441"
				x2="203.462"
				y2="123.497"
				class="animate-pulse"
				style:animation-delay="200ms"
			/>
			<line
				x1="430.74"
				y1="201.401"
				x2="413.315"
				y2="223.934"
				transform="matrix(-1, 0, 0, -1, 844.054993, 425.335007)"
				class="animate-pulse"
				style:animation-delay="300ms"
			/>
			<line
				x1="371.609"
				y1="152.134"
				x2="358.682"
				y2="176.645"
				transform="matrix(-1, 0, 0, -1, 730.291016, 328.779007)"
				class="animate-pulse"
				style:animation-delay="400ms"
			/>
			<line
				x1="296.358"
				y1="123.465"
				x2="290.598"
				y2="146.441"
				transform="matrix(-1, 0, 0, -1, 586.955994, 269.905991)"
				class="animate-pulse"
				style:animation-delay="500ms"
			/>
		</g>
	</g>
</svg>
