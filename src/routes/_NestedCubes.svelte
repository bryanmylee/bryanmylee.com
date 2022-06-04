<script lang="ts">
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import * as SC from 'svelte-cubed';
	import * as THREE from 'three';
	import { range } from '$lib/utils/range';

	let spin: [number, number, number] = [0, 0, 0];

	SC.onFrame(() => {
		spin[0] += 0.0025;
		spin[1] += 0.0025;
		spin[2] += 0.0005;
	});
</script>

<ScrollProgress scrollDistance="200vh" let:inProgress>
	<div class="fixed inset-0" style:opacity={inProgress}>
		<SC.Canvas antialias background={new THREE.Color('white')}>
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
			<SC.PerspectiveCamera position={[3, 0, 3]} />
			<SC.AmbientLight intensity={0.5} />
		</SC.Canvas>
	</div>
</ScrollProgress>
