<script lang="ts">
	interface $$Props extends svelte.JSX.HTMLAttributes<HTMLButtonElement> {
		class?: string;
		href?: string;
	}

	let _class = '';
	export { _class as class };

	export let href: string | undefined = undefined;
	const tag = href === undefined ? 'button' : 'a';
</script>

<svelte:element
	this={tag}
	{...tag === 'button' ? {} : { href, target: '_blank', rel: 'noopener noreferrer' }}
	class="{_class} button"
	{...$$restProps}
	on:click
>
	<slot />
</svelte:element>

<style lang="postcss">
	.button {
		@apply text-cyan-800 bg-cyan-200 p-4 font-medium rounded-lg;
		@apply transition-colors;
		&:hover {
			@apply bg-cyan-100;
		}
		&:active {
			@apply bg-cyan-200/30;
		}
	}
</style>
