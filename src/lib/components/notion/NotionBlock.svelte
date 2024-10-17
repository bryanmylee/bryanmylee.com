<script lang="ts">
	import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
	import NotionCallout from './NotionCallout.svelte';
	import NotionCodeBlock from './NotionCodeBlock.svelte';
	import NotionHeading from './NotionHeading.svelte';
	import NotionImageBlock from './NotionImageBlock.svelte';
	import NotionRichTextArray from './NotionRichTextArray.svelte';
	import { getHeadingBlockOrNull } from '$lib/utils/notion';

	export let block: BlockObjectResponse;
	$: headingBlock = getHeadingBlockOrNull(block);
</script>

{#if headingBlock}
	<NotionHeading heading={headingBlock} />
{:else if block.type === 'paragraph'}
	<p>
		<NotionRichTextArray richText={block.paragraph.rich_text} />
	</p>
{:else if block.type === 'quote'}
	<blockquote>
		<NotionRichTextArray richText={block.quote.rich_text} />
	</blockquote>
{:else if block.type === 'callout'}
	<NotionCallout {block} />
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
