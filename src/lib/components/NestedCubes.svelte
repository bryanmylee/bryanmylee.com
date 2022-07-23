<script lang="ts" context="module">
	const DEFAULT_SIZE = 720;
	const size = writable(DEFAULT_SIZE);
</script>

<script lang="ts">
	import { writable } from 'svelte/store';
	import * as SC from 'svelte-cubed';
	import * as THREE from 'three';
	import { range } from '$lib/utils/range';
	import { clamp } from '$lib/utils/math';
	import { isJsEnabled } from '$lib/utils/accessibility';
	import { frameTime } from '$lib/utils/frame';
	import { cubicIn, cubicOut } from 'svelte/easing';

	let innerWidth = DEFAULT_SIZE;
	let innerHeight = DEFAULT_SIZE;
	$: $size = Math.min(innerWidth, innerHeight);
	export let progress = 0;

	let spin: [number, number, number] = [0, 0, 0];

	const [time] = frameTime();
	$: $time, onFrame();
	const onFrame = () => {
		spin[0] += 0.0025;
		spin[1] += 0.002;
		spin[2] += 0.0005;
	};

	$: distance = clamp((1 / ($size / DEFAULT_SIZE)) * 9, 3, 9);
	$: progressDistance = Math.max(distance - cubicIn(progress) * 8, 0);

	const jsEnabled = isJsEnabled();
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if $jsEnabled}
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
		<SC.PerspectiveCamera position={[progressDistance, 0, progressDistance]} />
		<SC.AmbientLight intensity={1} />
	</SC.Canvas>
{:else}
	<img
		src="/fallback/NestedCubes.webp"
		alt="nested cubes"
		class="wh-screen object-cover sticky top-0"
		loading="lazy"
	/>
{/if}
