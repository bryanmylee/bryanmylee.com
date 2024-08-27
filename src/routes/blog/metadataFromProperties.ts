import dayjs from 'dayjs';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const metadataFromProperties = (properties: PageObjectResponse['properties']) => {
	const title = properties.Title.type === 'title' ? properties.Title.title[0].plain_text : '';
	const subtitle =
		properties.Subtitle.type === 'rich_text' ? properties.Subtitle.rich_text[0].plain_text : '';
	const slug = properties.Slug.type === 'rich_text' ? properties.Slug.rich_text[0].plain_text : '';
	const rawDate = properties.Date.type === 'date' ? properties.Date.date?.start ?? '' : '';
	const formattedDate = dayjs(rawDate).format('DD MMM YYYY');
	return {
		title,
		subtitle,
		slug,
		formattedDate,
	};
};
