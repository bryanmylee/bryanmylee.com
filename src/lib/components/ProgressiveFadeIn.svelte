<script lang="ts">
	import { useJsEnabled } from '$lib/utils/accessibility';
	import { onMount, tick } from 'svelte';

	let jsEnabled = useJsEnabled();
	let mounted = true;
	onMount(async () => {
		mounted = false;
		await tick();
		mounted = true;
	});

	let className = '';
	export { className as class };

	export let delay = 500;
</script>

<div style:--delay="{delay}ms" class:nojs-fade-in={!$jsEnabled} class={className}>
	{#if mounted}
		<slot {mounted} />
	{/if}
</div>

<style lang="postcss">
	.nojs-fade-in {
		opacity: 0;
		animation: 500ms ease-out var(--delay) normal forwards 1 fade-in;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
