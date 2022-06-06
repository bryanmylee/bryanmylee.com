<script lang="ts" context="module">
	const SIZE = 120;
	const GAP = 5;
</script>

<script lang="ts">
	import { Fish } from '$lib/model/Fish';
	import { frameTime } from '$lib/utils/frame';
	import { range } from '$lib/utils/range';

	let fishes = range(0, SIZE, GAP).flatMap((x) =>
		range(0, SIZE, GAP).map((y) => {
			const randX = Math.random() * GAP * 0.4;
			const randY = Math.random() * GAP * 0.4;
			return new Fish({ initX: x + randX, initY: y + randY, gridWidth: SIZE, gridHeight: SIZE });
		}),
	);

	const [time, previousTime] = frameTime();
	$: fishes.forEach((fish) => {
		fish.move($time - $previousTime);
	}),
		(fishes = fishes);
</script>

<div class="absolute inset-0 overflow-hidden">
	<svg viewBox="{SIZE / 2} {SIZE / 2} {SIZE / 8} {SIZE / 8}" width="100%" height="100%">
		{#each fishes as fish (fish.id)}
			<circle cx={fish.x} cy={fish.y} r="0.5" fill="#c46c66" />
		{/each}
	</svg>
</div>
