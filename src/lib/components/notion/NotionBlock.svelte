<script lang="ts">
	import type {
		BlockObjectResponse,
		PartialBlockObjectResponse,
	} from '@notionhq/client/build/src/api-endpoints';
	import NotionCodeBlock from './NotionCodeBlock.svelte';
	import NotionImageBlock from './NotionImageBlock.svelte';
	import NotionRichTextArray from './NotionRichTextArray.svelte';

	export let block: BlockObjectResponse | PartialBlockObjectResponse;
</script>

{#if 'heading_1' in block}
	<h2>
		<NotionRichTextArray richText={block.heading_1.rich_text} />
	</h2>
{:else if 'heading_2' in block}
	<h3>
		<NotionRichTextArray richText={block.heading_2.rich_text} />
	</h3>
{:else if 'heading_3' in block}
	<h4>
		<NotionRichTextArray richText={block.heading_3.rich_text} />
	</h4>
{:else if 'paragraph' in block}
	<p>
		<NotionRichTextArray richText={block.paragraph.rich_text} />
	</p>
{:else if 'quote' in block}
	<blockquote>
		<NotionRichTextArray richText={block.quote.rich_text} />
	</blockquote>
{:else if 'code' in block}
	<NotionCodeBlock {block} />
{:else if 'numbered_list_item' in block}
	<li>
		<NotionRichTextArray richText={block.numbered_list_item.rich_text} />
	</li>
{:else if 'bulleted_list_item' in block}
	<li>
		<NotionRichTextArray richText={block.bulleted_list_item.rich_text} />
	</li>
{:else if 'image' in block}
	<NotionImageBlock {block} />
{/if}
