import { NOTION_API_KEY, NOTION_DATABASE_ID } from '$env/static/private';
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
	const slug = params.slug;
	const notion = new Client({ auth: NOTION_API_KEY });
	const pageResponse = await notion.databases.query({
		database_id: NOTION_DATABASE_ID,
		filter: {
			property: "Slug",
			rich_text: { equals: slug }
		}
	});
	if (pageResponse.results.length === 0) {
		throw error(404, "Page not found");
	}
	
	const pageId = pageResponse.results[0].id;

	const pageData = await asyncTryResult(() => {
		return Promise.all([notion.pages.retrieve({ page_id: pageId }), loadAllBlockResults(notion, pageId)]);
	});

	if (pageData.isErr()) {
		const err = pageData.unwrapErr();
		if (isNotionClientError(err)) {
			switch (err.code) {
				case APIErrorCode.ValidationError:
					error(400, err.message);
				case APIErrorCode.ObjectNotFound:
					error(404, err.message);
				default:
					error(500, err.message);
			}
		} else if (err instanceof Error) {
			error(500, err.message);
		}
	}

	const [page, content] = pageData.unwrap();

	if (!('properties' in page)) {
		error(500, {
			message: 'Could not load page properties',
		});
	}

	const { title, subtitle, formattedDate } = metadataFromProperties(page.properties);

	return {
		pageId,
		slug,
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
