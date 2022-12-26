<script lang="ts">
	import NotionBlock from '$lib/components/NotionBlock.svelte';
	import { metadataFromProperties } from '../metadataFromProperties';
	import type { PageData } from './$types';

	export let data: PageData;

	const { page, content } = data;

	const { title, subtitle, formattedDate } = metadataFromProperties(page.properties!);
</script>

<svelte:head>
	<title>{title} | Bryan Lee</title>
</svelte:head>

<article class="prose p-8 max-w-[65ch] mx-auto prose-h1:text-3xl">
	<p>
		<sub class="text-sm text-gray-500 font-medium">{formattedDate}</sub>
	</p>

	<h1>{title}</h1>

	<p class="leading-none -mt-4">
		<sub class="text-base text-gray-700">{subtitle}</sub>
	</p>

	{#each content as block}
		<NotionBlock {block} />
	{/each}
</article>

<style lang="postcss">
	article :global(p a) {
		@apply text-cyan-500 underline underline-offset-1;
		@apply hover:text-cyan-400;
	}
</style>
