import { NOTION_API_KEY } from '$env/static/private';
import { Client } from '@notionhq/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const tokens = params.slug.split('-');
	const id = tokens[tokens.length - 1];
	const notion = new Client({ auth: NOTION_API_KEY });
	const page = await notion.pages.retrieve({ page_id: id });
	console.log(page);
	return page;
};
