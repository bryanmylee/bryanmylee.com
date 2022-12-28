<script lang="ts">
	import type { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
	import NotionRichTextArray from './NotionRichTextArray.svelte';

	export let block: ImageBlockObjectResponse;
</script>

<figure>
	{#if block.image.type === 'file'}
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={block.image.file.url} class="w-full rounded-lg" />
	{:else if block.image.type === 'external'}
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={block.image.external.url} class="w-full rounded-lg" />
	{/if}
	{#if block.image.caption.length > 0}
		<figcaption class="block text-gray-400 text-sm mt-2">
			<NotionRichTextArray richText={block.image.caption} />
		</figcaption>
	{/if}
</figure>
