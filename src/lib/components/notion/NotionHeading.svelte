<script lang="ts">
	import type {
		Heading1BlockObjectResponse,
		Heading2BlockObjectResponse,
		Heading3BlockObjectResponse,
	} from '@notionhq/client/build/src/api-endpoints';
	import NotionRichTextArray from './NotionRichTextArray.svelte';

	export let block:
		| Heading1BlockObjectResponse
		| Heading2BlockObjectResponse
		| Heading3BlockObjectResponse;

	const TAGS = {
		heading_1: 'h2',
		heading_2: 'h3',
		heading_3: 'h4',
	} as const;

	const tag = TAGS[block.type];

	const richText = (block as any)[block.type].rich_text;
</script>

<svelte:element this={tag}><NotionRichTextArray {richText} /></svelte:element>
