<script lang="ts">
	import { onMount, tick } from 'svelte';

	let jsEnabled = false;
	let mounted = true;
	onMount(async () => {
		jsEnabled = true;
		mounted = false;
		await tick();
		mounted = true;
	});
</script>

<div class:nojs-fade-in={!jsEnabled}>
	{#if mounted}
		<slot {mounted} />
	{/if}
</div>

<style lang="postcss">
	.nojs-fade-in {
		opacity: 0;
		animation: 500ms ease-out 500ms normal forwards 1 fade-in;
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
