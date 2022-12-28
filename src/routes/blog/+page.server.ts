import { NOTION_API_KEY, NOTION_DATABASE_ID } from '$env/static/private';
import { Client } from '@notionhq/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const notion = new Client({ auth: NOTION_API_KEY });
	const notionResponse = await notion.databases.query({
		database_id: NOTION_DATABASE_ID,
	});
	return {
		title: 'Blog',
		subtitle: 'I write about my technical process and other thoughts in between projects.',
		page: notionResponse,
	};
};
