import { NOTION_API_KEY } from '$env/static/private';
import { APIErrorCode, Client, isNotionClientError } from '@notionhq/client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { metadataFromProperties } from '../metadataFromProperties';
import { asyncTryResult } from '$lib/utils/error';

export const load: PageServerLoad = async ({ params }) => {
	const notion = new Client({ auth: NOTION_API_KEY });
	const tokens = params.slug.split('-');
	const id = tokens[tokens.length - 1];

	const data = await asyncTryResult(() => {
		return Promise.all([
			notion.pages.retrieve({ page_id: id }),
			notion.blocks.children.list({
				block_id: id,
			}),
		]);
	});

	if (data.isErr()) {
		const err = data.unwrapErr();
		if (isNotionClientError(err)) {
			switch (err.code) {
				case APIErrorCode.ValidationError:
					throw error(400, err.message);
				case APIErrorCode.ObjectNotFound:
					throw error(404, err.message);
				default:
					throw error(500, err.message);
			}
		} else if (err instanceof Error) {
			throw error(500, err.message);
		}
	}

	const [page, pageBlocks] = data.unwrap();

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
