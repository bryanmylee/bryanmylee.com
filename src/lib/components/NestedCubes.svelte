<script lang="ts" context="module">
	const DEFAULT_SIZE = 720;
	const size = writable(DEFAULT_SIZE);
</script>

<script lang="ts">
	import { writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import * as SC from 'svelte-cubed';
	import * as THREE from 'three';
	import { range } from '$lib/utils/range';
	import { clamp } from '$lib/utils/clamp';
	import { isJsEnabled } from '$lib/utils/accessibility';

	let innerWidth = DEFAULT_SIZE;
	let innerHeight = DEFAULT_SIZE;
	$: $size = Math.min(innerWidth, innerHeight);
	export let progress = 0;

	let spin: [number, number, number] = [0, 0, 0];

	SC.onFrame(() => {
		spin[0] += 0.0025;
		spin[1] += 0.0025;
		spin[2] += 0.0005;
	});

	$: distanceRaw = clamp((1 / ($size / DEFAULT_SIZE)) * 8, 3, 8);
	const distance = tweened(distanceRaw, {
		duration: 1000,
		easing: cubicOut,
	});
	$: $distance = distanceRaw;
	$: progressDistance = Math.max($distance - cubicIn(progress) * 8, 0);

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
		class="w-screen h-screen object-cover sticky top-0"
	/>
{/if}
