<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

	type Variant = 'primary' | 'secondary' | 'white';
	type Size = 'base' | 'sm';
	
	type BaseProps = {
		variant?: Variant;
		size?: Size;
	};

	type $$Props = BaseProps & ({
		href: string
	} & HTMLAnchorAttributes | {
		href?: undefined
	} & HTMLButtonAttributes);

	let className: string | undefined | null = '';
	export { className as class };

	export let href: string | undefined = undefined;
	const tag = href === undefined ? 'button' : 'a';

	export let variant: Variant = 'primary';
	export let size: Size = 'base';
</script>

<svelte:element
	this={tag}
	{...tag === 'button' ? {} : { href }}
	class={twMerge(className, variant, size, 'button')}
	{...$$restProps}
	role={tag === 'a' ? 'link' : 'button'}
	on:click
>
	<slot />
</svelte:element>

<style lang="postcss">
	.button {
		@apply rounded-lg p-4 font-medium;
		@apply transition-all;
		&.primary {
			@apply bg-cyan-200 text-cyan-800 hover:bg-cyan-100 active:bg-cyan-200/30;
		}
		&.secondary {
			@apply bg-green-200 text-green-800 hover:bg-green-100 active:bg-green-200/30;
		}
		&.white {
			@apply bg-transparent text-white ring-2 ring-white hover:ring-4 active:opacity-50;
		}
		&.base {
			@apply p-4;
		}
		&.sm {
			@apply px-4 py-2 text-sm;
		}
	}
</style>
