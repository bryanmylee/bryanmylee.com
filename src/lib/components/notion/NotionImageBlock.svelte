<script lang="ts">
	import { splitCaptionProperties } from '$lib/utils/notion';
	import type { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
	import NotionRichTextArray from './NotionRichTextArray.svelte';

	export let block: ImageBlockObjectResponse;

	const src = block.image.type === 'file' ? block.image.file.url : block.image.external.url;
	const { caption, properties } = splitCaptionProperties(block.image.caption);
	const [width, height] = properties.size?.split('x') ?? '';
</script>

<figure>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img {src} class="w-full rounded-lg" {...{ width, height }} />
	{#if caption.length > 0}
		<figcaption class="mt-2 block text-sm text-gray-400">
			<NotionRichTextArray richText={caption} />
		</figcaption>
	{/if}
</figure>
