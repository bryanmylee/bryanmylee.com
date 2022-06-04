<script lang="ts" context="module">
	const DEFAULT_WIDTH = 720;
	const width = writable(DEFAULT_WIDTH);
</script>

<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import * as SC from 'svelte-cubed';
	import * as THREE from 'three';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { range } from '$lib/utils/range';
	import { clamp } from 'three/src/math/MathUtils';
	import { writable } from 'svelte/store';

	let spin: [number, number, number] = [0, 0, 0];

	SC.onFrame(() => {
		spin[0] += 0.0025;
		spin[1] += 0.0025;
		spin[2] += 0.0005;
	});

	$: distanceRaw = clamp(3, (1 / ($width / DEFAULT_WIDTH)) * 5, 5);
	const distance = tweened(distanceRaw, {
		duration: 1000,
		easing: cubicOut,
	});
	$: $distance = distanceRaw;
</script>

<svelte:window bind:innerWidth={$width} />

<ScrollProgress scrollDistance={300} let:progress>
	<div class="sticky top-0 w-screen h-screen" style:opacity={clamp(0, progress * 4, 1)}>
		<SC.Canvas antialias>
			{#each range(15).map((x) => x * 0.25) as unit}
				{@const size = unit + 0.25}
				{@const color = Math.round((unit / 3.75) * 255)}
				<SC.Mesh
					geometry={new THREE.BoxGeometry(size, size, size)}
					material={new THREE.MeshPhongMaterial({
						color: `rgb(${Math.round(color * 0.6)}, ${Math.round(color * 0.8)}, ${color})`,
						opacity: 0.1,
						transparent: true,
					})}
					rotation={spin}
				/>
			{/each}
			<SC.PerspectiveCamera position={[$distance, 0, $distance]} />
			<SC.AmbientLight intensity={1} />
		</SC.Canvas>
	</div>
</ScrollProgress>
