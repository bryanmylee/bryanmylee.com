<script lang="ts">
	import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
	import NotionRichText from './NotionRichText.svelte';

	export let richText: RichTextItemResponse[];
</script>

{#each richText as text}
	<NotionRichText {text} />
{/each}
