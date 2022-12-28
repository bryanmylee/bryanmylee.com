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
{:else if 'numbered_list_item' in block}
	<li>
		{#each block.numbered_list_item.rich_text as text}
			<NotionRichText {text} />
		{/each}
	</li>
{:else if 'bulleted_list_item' in block}
	<li>
		{#each block.bulleted_list_item.rich_text as text}
			<NotionRichText {text} />
		{/each}
	</li>
{:else if 'image' in block}
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
				{#each block.image.caption as text}
					<NotionRichText {text} />
				{/each}
			</figcaption>
		{/if}
	</figure>
{/if}
