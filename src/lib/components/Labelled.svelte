<script lang="ts">
	export let label: string;
	export let as = 'span';
</script>

<svelte:element this={as} class="group relative" {...$$restProps}>
	<slot />
	<span class="label">
		{label}
	</span>
</svelte:element>

<style lang="postcss">
	.label {
		@apply z-10 rounded-lg bg-gray-100 p-2 text-xs font-semibold shadow;
		@apply absolute bottom-full left-1/2 mb-2 -translate-x-1/2 scale-0;
		@apply group-hover:block group-hover:scale-100;
		@apply pointer-events-none whitespace-nowrap;
		@apply transition-transform;
	}
</style>
