<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getHeadingId } from '$lib/utils/heading';

	export let depth: 1 | 2 | 3;
	const tag = `h${depth}`;

	export let text: string;
	const id = getHeadingId(text);

	let className = '';
	export { className as class };
</script>

<svelte:element this={tag} {id} class={twMerge('scroll-mt-28', className)}>
	<a href="#{id}" class="{depth === 1 ? 'font-bold' : 'font-semibold'} no-underline">
		{#if $$slots.default}
			<slot />
		{:else}
			{text}
		{/if}
	</a>
</svelte:element>
