import { NOTION_API_KEY, NOTION_DATABASE_ID } from '$env/static/private';
import { Client } from '@notionhq/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const notion = new Client({ auth: NOTION_API_KEY });
	const notionResponse = await notion.databases.query({
		database_id: NOTION_DATABASE_ID,
	});
	console.log(notionResponse);
	return notionResponse;
};
