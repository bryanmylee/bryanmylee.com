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
		@apply p-4 font-medium rounded-lg;
		@apply transition-colors;
		&.primary {
			@apply text-cyan-800 bg-cyan-200 hover:bg-cyan-100 active:bg-cyan-200/30;
		}
		&.secondary {
			@apply text-green-800 bg-green-200 hover:bg-green-100 active:bg-green-200/30;
		}
		&.base {
			@apply p-4;
		}
		&.sm {
			@apply px-4 py-2 text-sm;
		}
	}
</style>
