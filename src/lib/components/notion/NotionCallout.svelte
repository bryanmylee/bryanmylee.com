<script lang="ts">
	import type { CalloutBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
	import NotionRichTextArray from './NotionRichTextArray.svelte';

	export let block: CalloutBlockObjectResponse;
	const { icon } = block.callout;
</script>

<div class="flex items-start rounded-lg border border-ink-200 bg-paper-raised p-4">
	{#if icon?.type === 'emoji'}
		<span class="mr-4 text-lg">{icon.emoji}</span>
	{/if}
	<p class="m-0">
		<NotionRichTextArray richText={block.callout.rich_text} />
	</p>
</div>
