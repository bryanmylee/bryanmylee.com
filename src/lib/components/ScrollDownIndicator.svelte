<script lang="ts" context="module">
	const WIDTH = 80;
	const Y_GAP = 15;
	const LINE_Y = [60, 38, 20, 12, 7, 4, 3, 2.5, 2, 2, 1, 1];
</script>

<script lang="ts">
	let className = '';
	export { className as class };

	export let progress = 0;
	const getActiveWeight = (index: number, progress: number): number => {
		const normIndex = index / LINE_Y.length;
		return 1 - (normIndex - progress);
	};
</script>

<svg viewBox="-{WIDTH} -1 {WIDTH * 2} {LINE_Y.length * Y_GAP}" class={className}>
	<g stroke="white" fill="none" stroke-width="1px">
		{#each LINE_Y as line, index}
			{@const x = line + Math.max(0, (WIDTH - line) * getActiveWeight(index, progress * 2 - 1))}
			{@const y = index * Y_GAP}
			<path d="M-{x} {y} L{x} {y}" class="animate-pulse" style:animation-delay="{index * 100}ms" />
		{/each}
	</g>
</svg>

<style lang="postcss">
	@keyframes pulse {
		50% {
			opacity: 0.1;
		}

		75% {
			opacity: 0.1;
		}
	}
	.animate-pulse {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
</style>
