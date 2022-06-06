<script lang="ts" context="module">
	const SIZE = 1250;
	const GAP = 50;
</script>

<script lang="ts">
	import { Fish } from '$lib/model/Fish';
	import { range } from '$lib/utils/range';
	import { onMount } from 'svelte';

	let fishes = range(0, SIZE, GAP).flatMap((x) =>
		range(0, SIZE, GAP).map((y) => {
			const randX = Math.random() * GAP * 0.3;
			const randY = Math.random() * GAP * 0.3;
			return new Fish({ initX: x + randX, initY: y + randY, gridWidth: SIZE, gridHeight: SIZE });
		}),
	);

	onMount(() => {
		setInterval(() => {
			fishes.forEach((fish) => {
				fish.next();
			});
			fishes = fishes;
		}, 16.7);
	});
</script>

<div class="absolute inset-0 overflow-hidden">
	<svg viewBox="{SIZE / 2} {SIZE / 2} {SIZE / 8} {SIZE / 8}" width="100%" height="100%">
		{#each fishes as fish (fish.id)}
			<circle cx={fish.x} cy={fish.y} r="5" fill="#c46c66" />
		{/each}
	</svg>
</div>
