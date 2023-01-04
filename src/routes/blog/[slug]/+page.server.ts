import { NOTION_API_KEY } from '$env/static/private';
import { APIErrorCode, Client, isNotionClientError } from '@notionhq/client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { metadataFromProperties } from '../metadataFromProperties';
import { asyncTryResult } from '$lib/utils/error';
import type {
	BlockObjectResponse,
	ListBlockChildrenResponse,
	PartialBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export const load: PageServerLoad = async ({ params }) => {
	const notion = new Client({ auth: NOTION_API_KEY });
	const tokens = params.slug.split('-');
	const id = tokens[tokens.length - 1];

	const data = await asyncTryResult(() => {
		return Promise.all([notion.pages.retrieve({ page_id: id }), loadAllBlockResults(notion, id)]);
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

	const [page, content] = data.unwrap();

	if (!('properties' in page)) {
		throw error(500, {
			message: 'Could not load page properties',
		});
	}

	const { title, subtitle, formattedDate } = metadataFromProperties(page.properties);

	return {
		id,
		title,
		subtitle,
		formattedDate,
		content,
	};
};

const loadAllBlockResults = async (notion: Client, blockId: string) => {
	const results: (PartialBlockObjectResponse | BlockObjectResponse)[] = [];
	let startCursor: string | undefined = undefined;
	let hasMore = true;
	while (hasMore) {
		const block: ListBlockChildrenResponse = await notion.blocks.children.list({
			block_id: blockId,
			start_cursor: startCursor,
		});
		results.push(...block.results);
		startCursor = block.next_cursor ?? undefined;
		hasMore = block.has_more;
	}
	return results;
};
