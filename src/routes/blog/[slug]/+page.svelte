<script lang="ts">
	import { metadataFromProperties } from '../metadataFromProperties';
	import type { PageData } from './$types';

	export let data: PageData;

	const { page, content } = data;

	const { title, subtitle, formattedDate } = metadataFromProperties(page.properties!);
</script>

<svelte:head>
	<title>{title} | Bryan Lee</title>
</svelte:head>

<article class="prose p-8 max-w-[65ch] mx-auto">
	<h1>{title}</h1>
	<p class="leading-none">
		<sub class="text-base text-gray-700">{subtitle}</sub>
	</p>
	<p>
		<sub class="text-sm text-gray-500 font-medium">{formattedDate}</sub>
	</p>

	{#each content as block}
		{#if 'heading_1' in block}
			<h2>
				{#each block.heading_1.rich_text as text}
					{text.plain_text}
				{/each}
			</h2>
		{:else if 'heading_2' in block}
			<h3>
				{#each block.heading_2.rich_text as text}
					{text.plain_text}
				{/each}
			</h3>
		{:else if 'heading_3' in block}
			<h4>
				{#each block.heading_3.rich_text as text}
					{text.plain_text}
				{/each}
			</h4>
		{:else if 'paragraph' in block}
			<p>
				{#each block.paragraph.rich_text as text}
					<!-- TODO Handle annotations and hrefs -->
					{text.plain_text}
				{/each}
			</p>
		{/if}
	{/each}
</article>
