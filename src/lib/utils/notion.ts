import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export const getPlainText = (richText: RichTextItemResponse[]) => {
	return richText.map((text) => text.plain_text).reduce((a, b) => a + b);
};
