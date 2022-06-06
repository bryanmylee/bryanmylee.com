<script lang="ts" context="module">
	const SIZE = 120;
	const GAP = 15;
</script>

<script lang="ts">
	import { Fish } from '$lib/model/Fish';
	import { frameTime } from '$lib/utils/frame';
	import { range } from '$lib/utils/range';

	export let progress = 0;

	let fishes = range(0, SIZE, GAP).flatMap((x) =>
		range(0, SIZE, GAP).map((y) => {
			const randX = Math.random() * GAP * 0.4;
			const randY = Math.random() * GAP * 0.4;
			return new Fish({
				initX: x + randX,
				initY: y + randY,
				speedPerMs: 0.005,
				gridWidth: SIZE,
				gridHeight: SIZE,
			});
		}),
	);

	const [time, previousTime] = frameTime();
	$: fishes.forEach((fish) => {
		fish.move($time - $previousTime);
	}),
		(fishes = fishes);
</script>

<div class="absolute inset-0 overflow-hidden">
	<svg viewBox="{SIZE / 3} {SIZE / 3} {SIZE / 3} {SIZE / 3}" width="100%" height="100%">
		{#each fishes as fish (fish.id)}
			<circle cx={fish.x} cy={fish.y} r={1.5} fill="#C46C66" />
		{/each}
		<circle cx={SIZE / 2} cy={SIZE / 2} r={(progress * SIZE) / 3} fill="#FFFFFF" opacity={0.1} />
	</svg>
</div>
