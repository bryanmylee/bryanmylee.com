import type { PageServerLoad } from './$types';
import { SORTED_PROJECT_CONTENT_NAMES, type ProjectMetadata } from './content';

export interface ContentItem {
	html: string;
	metadata: ProjectMetadata;
}

export const load: PageServerLoad = async () => {
	const contentImports = await Promise.all(
		SORTED_PROJECT_CONTENT_NAMES.map((name) => import(`./content/${name}.svx`)),
	);

	const contentItems = contentImports.map((content) => ({
		html: content.default.render().html,
		metadata: content.metadata,
	})) as ContentItem[];

	return {
		title: 'Projects',
		subtitle:
			'A list of my technical projects ranging from applications, open source tooling, and experiments.',
		content: contentItems,
	};
};
