<script lang="ts">
	export let label: string;
	export let as = 'span';
</script>

<svelte:element this={as} class="group relative" {...$$restProps}>
	<slot />
	<span
		class="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 whitespace-nowrap rounded-lg bg-paper-raised-high p-2 text-xs font-semibold text-ink shadow transition-transform group-hover:block group-hover:scale-100"
	>
		{label}
	</span>
</svelte:element>
