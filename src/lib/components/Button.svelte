<script lang="ts">
	type Color = 'primary' | 'secondary';
	type Size = 'base' | 'sm';

	interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLButtonElement>, 'size'> {
		class?: string;
		href?: string;
		color?: Color;
		size?: Size;
	}

	let _class = '';
	export { _class as class };

	export let href: string | undefined = undefined;
	const tag = href === undefined ? 'button' : 'a';

	export let color: Color = 'primary';
	export let size: Size = 'base';
</script>

<svelte:element
	this={tag}
	{...tag === 'button' ? {} : { href }}
	class="{_class} {color} {size} button"
	{...$$restProps}
	on:click
>
	<slot />
</svelte:element>

<style lang="postcss">
	.button {
		@apply rounded-lg p-4 font-medium;
		@apply transition-colors;
		&.primary {
			@apply bg-cyan-200 text-cyan-800 hover:bg-cyan-100 active:bg-cyan-200/30;
		}
		&.secondary {
			@apply bg-green-200 text-green-800 hover:bg-green-100 active:bg-green-200/30;
		}
		&.base {
			@apply p-4;
		}
		&.sm {
			@apply px-4 py-2 text-sm;
		}
	}
</style>
