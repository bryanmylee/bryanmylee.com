<script lang="ts">
	import { getPlainText } from '$lib/utils/notion';
	import type {
		Heading1BlockObjectResponse,
		Heading2BlockObjectResponse,
		Heading3BlockObjectResponse,
		RichTextItemResponse,
	} from '@notionhq/client/build/src/api-endpoints';
	import LinkedHeading from '../LinkedHeading.svelte';
	import NotionRichTextArray from './NotionRichTextArray.svelte';

	export let block:
		| Heading1BlockObjectResponse
		| Heading2BlockObjectResponse
		| Heading3BlockObjectResponse;

	const DEPTHS = {
		heading_1: 1,
		heading_2: 2,
		heading_3: 3,
	} as const;

	const depth = DEPTHS[block.type];

	const richText = (block as any)[block.type].rich_text as RichTextItemResponse[];
	const plainText = getPlainText(richText);
</script>

<LinkedHeading {depth} text={plainText}>
	<NotionRichTextArray {richText} />
</LinkedHeading>
