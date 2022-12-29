import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export const getPlainText = (richText: RichTextItemResponse[]) => {
	return richText.map((text) => text.plain_text).reduce((a, b) => a + b);
};

/**
 * Caption-embedded properties are annotated as a code block in the caption
 * starting with `p=`. Each property is delimited by `;` and has the format
 * `name:value`
 *
 * e.g. `p=size:480x320;type:webp`A regular caption.
 */
const isCaptionProperty = (text: RichTextItemResponse) =>
	text.annotations.code && text.plain_text.startsWith('p=');

interface CaptionProperties {
	caption: RichTextItemResponse[];
	properties: Record<string, string>;
}

export const splitCaptionProperties = (
	originalCaption: RichTextItemResponse[],
): CaptionProperties => {
	const caption = originalCaption.filter((text) => !isCaptionProperty(text));
	const rawProperties = originalCaption.filter(isCaptionProperty)[0]?.plain_text ?? '';
	const properties = Object.fromEntries(
		rawProperties
			.slice(2)
			.split(';')
			.map((token) => token.split(':')),
	) as Record<string, string>;
	return { caption, properties };
};
