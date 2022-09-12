<script lang="ts" context="module">
	const SIZE = 40;
	const GAP = 15;
</script>

<script lang="ts">
	import { writable } from 'svelte/store';
	import { spring } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import { Subscribe } from 'svelte-subscribe';
	import { Fish } from '$lib/models/Fish';
	import { frameTime } from '$lib/utils/frame';
	import { svgPointer, type Position } from '$lib/utils/pointer';
	import { range } from '$lib/utils/range';
	import { useJsEnabled } from '$lib/utils/accessibility';

	export let progress = 0;

	let id = 0;
	let fishes = range(0, SIZE * 3, GAP).flatMap((x) =>
		range(0, SIZE * 3, GAP).map((y) => {
			const randX = Math.random() * GAP * 0.4;
			const randY = Math.random() * GAP * 0.4;
			return new Fish({
				id: id++,
				initX: x + randX,
				initY: y + randY,
				speedPerMs: 0.005,
				maxX: SIZE * 3,
				maxY: SIZE * 3,
			});
		}),
	);

	const pointer = spring<Position>({ x: SIZE * 1.5, y: SIZE * 1.5 });
	const active = writable(false);

	const [time, previousTime] = frameTime();
	$: $time, moveFishes();
	const moveFishes = () => {
		fishes.forEach((fish) => {
			fish.move($time - $previousTime, $pointer, $active);
		});
		fishes = fishes;
	};

	const jsEnabled = useJsEnabled();
</script>

<div class="{$jsEnabled ? 'absolute inset-0' : 'sticky top-0 wh-screen'} overflow-hidden">
	<!--
    Tile SIZE squares in a 3x3 grid to cover the screen.
    Therefore, set min-x and min-y to SIZE, then define width and height as SIZE.
  -->
	<svg viewBox="{SIZE} {SIZE} {SIZE} {SIZE}" use:svgPointer={{ pointer, active }}>
		{#if $jsEnabled && $active}
			<circle
				in:fade
				class="cursor"
				cx={$pointer.x}
				cy={$pointer.y}
				r={4}
				fill="#85D8FF"
				opacity={0.8}
			/>
		{/if}
		{#each fishes as fish (fish.id)}
			<Subscribe curr={fish.curr} let:curr>
				<circle
					class="fish"
					cx={curr.x}
					cy={curr.y}
					r={1.5}
					fill={fish.isPushed ? '#85D8FF' : '#C46C66'}
				/>
			</Subscribe>
		{/each}
		<defs>
			<filter id="fluid">
				<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
				<feColorMatrix
					in="blur"
					mode="matrix"
					values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
					result="fluid"
				/>
			</filter>
		</defs>
	</svg>
	<svg viewBox="{SIZE} {SIZE} {SIZE} {SIZE}">
		<!-- The center of the grid is SIZE + 1/2 SIZE -->
		<circle cx={SIZE * 1.5} cy={SIZE * 1.5} r={progress * SIZE} fill="#FFFFFF" opacity={0.1} />
	</svg>
</div>

<style lang="postcss">
	svg {
		@apply wh-full absolute inset-0;
	}

	.fish {
		transition: fill 500ms ease-in-out;
	}
</style>
