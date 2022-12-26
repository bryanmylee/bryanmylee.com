<script lang="ts">
	import type {
		BlockObjectResponse,
		PartialBlockObjectResponse,
	} from '@notionhq/client/build/src/api-endpoints';
	import NotionRichText from './NotionRichText.svelte';

	export let block: BlockObjectResponse | PartialBlockObjectResponse;
</script>

{#if 'heading_1' in block}
	<h2>
		{#each block.heading_1.rich_text as text}
			<NotionRichText {text} />
		{/each}
	</h2>
{:else if 'heading_2' in block}
	<h3>
		{#each block.heading_2.rich_text as text}
			<NotionRichText {text} />
		{/each}
	</h3>
{:else if 'heading_3' in block}
	<h4>
		{#each block.heading_3.rich_text as text}
			<NotionRichText {text} />
		{/each}
	</h4>
{:else if 'paragraph' in block}
	<p>
		{#each block.paragraph.rich_text as text}
			<NotionRichText {text} />
		{/each}
	</p>
{/if}
