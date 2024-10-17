import type {
	BlockObjectResponse,
	Heading1BlockObjectResponse,
	Heading2BlockObjectResponse,
	Heading3BlockObjectResponse,
	RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { isNonNullable } from './predicates';

export const getPlainText = (richText: RichTextItemResponse[]) => {
	return richText.map((text) => text.plain_text).reduce((a, b) => a + b);
};

/**
 * Caption-embedded properties are annotated as a code block in the caption
 * starting with `p:`. Each property is delimited by `;` and has the format
 * `name=value`
 *
 * e.g. `p:size=480x320;type=webp`A regular caption.
 */
const isCaptionProperty = (text: RichTextItemResponse) =>
	text.annotations.code && text.plain_text.startsWith('p:');

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
			.map((token) => token.split('=')),
	) as Record<string, string>;
	return { caption, properties };
};

export type HeadingBlockObjectResponse = (
	| Heading1BlockObjectResponse
	| Heading2BlockObjectResponse
	| Heading3BlockObjectResponse
) & {
	heading: Heading1BlockObjectResponse['heading_1'];
	depth: 1 | 2 | 3;
};

export const getHeadingBlocks = (blocks: BlockObjectResponse[]): HeadingBlockObjectResponse[] => {
	return blocks
		.map((block) => {
			if (block.type === 'heading_1') {
				return {
					...block,
					depth: 1 as const,
					heading: block.heading_1,
				};
			}
			if (block.type === 'heading_2') {
				return {
					...block,
					depth: 2 as const,
					heading: block.heading_2,
				};
			}
			if (block.type === 'heading_3') {
				return {
					...block,
					depth: 3 as const,
					heading: block.heading_3,
				};
			}
			return null;
		})
		.filter(isNonNullable);
};
