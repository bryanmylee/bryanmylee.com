import { NOTION_API_KEY } from '$env/static/private';
import { Client } from '@notionhq/client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { metadataFromProperties } from '../metadataFromProperties';

export const load: PageServerLoad = async ({ params }) => {
	const tokens = params.slug.split('-');
	const id = tokens[tokens.length - 1];
	const notion = new Client({ auth: NOTION_API_KEY });
	const [page, pageBlocks] = await Promise.all([
		notion.pages.retrieve({ page_id: id }),
		notion.blocks.children.list({
			block_id: id,
		}),
	]);
	if (!('properties' in page)) {
		throw error(500, {
			message: 'Could not load page properties',
		});
	}
	const { title, subtitle, formattedDate } = metadataFromProperties(page.properties);
	return {
		title,
		subtitle,
		formattedDate,
		content: pageBlocks.results,
	};
};
