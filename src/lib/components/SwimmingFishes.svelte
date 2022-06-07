<script lang="ts" context="module">
	const SIZE = 40;
	const GAP = 15;
</script>

<script lang="ts">
	import { spring } from 'svelte/motion';
	import { Subscribe } from 'svelte-subscribe';
	import { Fish } from '$lib/model/Fish';
	import { frameTime } from '$lib/utils/frame';
	import { svgPointer, type Position } from '$lib/utils/pointer';
	import { range } from '$lib/utils/range';
	import { isJsEnabled } from '$lib/utils/accessibility';

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

	const [time, previousTime] = frameTime();
	$: $time, moveFishes();

	const moveFishes = () => {
		fishes.forEach((fish) => {
			fish.move($time - $previousTime, $pointer);
		});
		fishes = fishes;
	};

	const pointer = spring<Position>({ x: SIZE * 1.5, y: SIZE * 1.5 });

	const jsEnabled = isJsEnabled();
</script>

<div class="{$jsEnabled ? 'absolute inset-0' : 'sticky top-0 w-screen h-screen'} overflow-hidden">
	<!--
    Tile SIZE squares in a 3x3 grid to cover the screen.
    Therefore, set min-x and min-y to SIZE, then define width and height as SIZE.
  -->
	<svg viewBox="{SIZE} {SIZE} {SIZE} {SIZE}" width="100%" height="100%" use:svgPointer={pointer}>
		{#if $jsEnabled}
			<circle cx={$pointer.x} cy={$pointer.y} r={4} fill="#85D8FF" opacity={0.8} />
		{/if}
		{#each fishes as fish (fish.id)}
			<Subscribe curr={fish.curr} let:curr>
				<circle cx={curr.x} cy={curr.y} r={1.5} fill="#C46C66" />
			</Subscribe>
		{/each}
		<!-- The center of the grid is SIZE + 1/2 SIZE -->
		<circle cx={SIZE * 1.5} cy={SIZE * 1.5} r={progress * SIZE} fill="#FFFFFF" opacity={0.1} />
	</svg>
</div>
