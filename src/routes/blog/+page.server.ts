import { NOTION_API_KEY, NOTION_DATABASE_ID } from '$env/static/private';
import { Client } from '@notionhq/client';
import type { PageServerLoad } from './$types';
import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export const load: PageServerLoad = async () => {
	const notion = new Client({ auth: NOTION_API_KEY });
	const pagesResponse: QueryDatabaseResponse = {
		has_more: false,
		next_cursor: null,
		object: 'list',
		page: {},
		results: [],
		type: 'page',
	};
	/*await notion.databases.query({
		database_id: NOTION_DATABASE_ID,
	});*/
	return {
		title: 'Blog',
		subtitle: 'I write about my technical process and other thoughts in between projects.',
		pagesResponse,
	};
};
