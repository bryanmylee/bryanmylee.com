<script lang="ts">
	import type {
		ImageBlockObjectResponse,
		RichTextItemResponse,
	} from '@notionhq/client/build/src/api-endpoints';
	import NotionRichTextArray from './NotionRichTextArray.svelte';

	export let block: ImageBlockObjectResponse;

	const src = block.image.type === 'file' ? block.image.file.url : block.image.external.url;

	/**
	 * Image properties are annotated as a code block in the image caption
	 * starting with `p=`. Each property is delimited by `;` and has the format
	 * `name:value`
	 *
	 * e.g. `p=size:480x320;type:webp`A regular image caption.
	 */
	const isImageProperty = (text: RichTextItemResponse) =>
		text.annotations.code && text.plain_text.startsWith('p=');

	const caption = block.image.caption.filter((text) => !isImageProperty(text));

	const rawProperties = block.image.caption.filter(isImageProperty)[0]?.plain_text ?? '';
	const properties = Object.fromEntries(
		rawProperties
			.slice(2)
			.split(';')
			.map((token) => token.split(':')),
	) as Record<string, string>;
	const [width, height] = properties.size?.split('x') ?? '';
</script>

<figure>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img {src} class="w-full rounded-lg" {...{ width, height }} />
	{#if caption.length > 0}
		<figcaption class="block text-gray-400 text-sm mt-2">
			<NotionRichTextArray richText={caption} />
		</figcaption>
	{/if}
</figure>
