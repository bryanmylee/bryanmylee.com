import type { Skill } from '$lib/skill';
import type { PageServerLoad } from './$types';

export interface ContentItem {
	html: string;
	metadata: Metadata;
}

export interface Metadata {
	title: string;
	subtitle: string;
	skills?: Skill[];
	links?: Link[];
	images?: Image[];
}

export interface Link {
	label: string;
	href: string;
}

export interface Image {
	src: string;
	alt: string;
	width: number;
	height: number;
}

const CONTENT_NAMES = ['perfect-clear', 'wavefocus'];

export const load: PageServerLoad = async () => {
	const contentImports = await Promise.all(
		CONTENT_NAMES.map((name) => import(`./content/${name}.svx`)),
	);

	const contentItems = contentImports.map((content) => ({
		html: content.default.render().html,
		metadata: content.metadata,
	})) as ContentItem[];

	return {
		content: contentItems,
	};
};
