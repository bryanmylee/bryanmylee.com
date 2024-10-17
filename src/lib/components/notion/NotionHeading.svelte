<script lang="ts">
	import { getPlainText, type HeadingBlockObjectResponse } from '$lib/utils/notion';
	import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
	import LinkedHeading from '../LinkedHeading.svelte';
	import NotionRichTextArray from './NotionRichTextArray.svelte';

	export let heading: HeadingBlockObjectResponse;

	const richText = heading.heading.rich_text as RichTextItemResponse[];
	const plainText = getPlainText(richText);
</script>

<LinkedHeading depth={heading.depth} text={plainText}>
	<NotionRichTextArray {richText} />
</LinkedHeading>
