import { NOTION_API_KEY } from '$env/static/private';
import notionPageToHtml from 'notion-page-to-html';
import { Client } from '@notionhq/client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { metadataFromProperties } from '../metadataFromProperties';

export const load: PageServerLoad = async ({ params }) => {
	const tokens = params.slug.split('-');
	const id = tokens[tokens.length - 1];
	const notion = new Client({ auth: NOTION_API_KEY });
	const page = await notion.pages.retrieve({ page_id: id });
	if (!('properties' in page)) {
		throw error(500, {
			message: 'Could not load page properties',
		});
	}
	const { title, subtitle, formattedDate } = metadataFromProperties(page.properties);
	const { html } = await notionPageToHtml.convert(page.url, {
		excludeCSS: true,
		excludeMetadata: true,
		excludeTitleFromHead: true,
		bodyContentOnly: true,
	});
	return {
		title,
		subtitle,
		formattedDate,
		html,
	};
};
