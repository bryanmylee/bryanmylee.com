<script lang="ts" context="module">
	const LINE_Y = [40, 28, 20, 15, 12, 11, 11];
	const Y_GAP = 15;
</script>

<script lang="ts">
	let _class = '';
	export { _class as class };

	export let progress = 0;
	const getActiveWeight = (index: number, progress: number): number => {
		const normIndex = index / LINE_Y.length;
		return 1 - (normIndex - progress);
	};
</script>

<svg viewBox="-50 -1 100 {LINE_Y.length * Y_GAP}" class={_class}>
	<g stroke="white" fill="none" stroke-width="2px">
		{#each LINE_Y as line, index}
			{@const x = line + Math.max(0, (50 - line) * getActiveWeight(index, progress * 2 - 1))}
			{@const y = index * Y_GAP}
			<path d="M-{x} {y} L{x} {y}" class="animate-pulse" style:animation-delay="{index * 100}ms" />
		{/each}
	</g>
</svg>

<style lang="postcss">
	@keyframes pulse {
		50% {
			opacity: 0.25;
		}
	}
	.animate-pulse {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
</style>
