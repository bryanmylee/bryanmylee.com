<script lang="ts">
	import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
	import NotionCodeBlock from './NotionCodeBlock.svelte';
	import NotionHeading from './NotionHeading.svelte';
	import NotionImageBlock from './NotionImageBlock.svelte';
	import NotionRichTextArray from './NotionRichTextArray.svelte';

	export let block: BlockObjectResponse;
</script>

{#if block.type === 'heading_1' || block.type === 'heading_2' || block.type === 'heading_3'}
	<NotionHeading {block} />
{:else if block.type === 'paragraph'}
	<p>
		<NotionRichTextArray richText={block.paragraph.rich_text} />
	</p>
{:else if block.type === 'quote'}
	<blockquote>
		<NotionRichTextArray richText={block.quote.rich_text} />
	</blockquote>
{:else if block.type === 'code'}
	<NotionCodeBlock {block} />
{:else if block.type === 'numbered_list_item'}
	<li>
		<NotionRichTextArray richText={block.numbered_list_item.rich_text} />
	</li>
{:else if block.type === 'bulleted_list_item'}
	<li>
		<NotionRichTextArray richText={block.bulleted_list_item.rich_text} />
	</li>
{:else if block.type === 'image'}
	<NotionImageBlock {block} />
{/if}
