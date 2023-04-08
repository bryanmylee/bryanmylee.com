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
	width: string;
	height: string;
}

const CONTENT_NAMES = [
	'audio-thumbnail-generator',
	'perfect-clear',
	'wavefocus',
	'meetwhen',
	'helloworld',
	'techtris',
	'ally-ui',
	'svelte-headless-table',
	'svelte-popperjs',
	'svelte-previous',
	'svelte-keyed',
	'svelte-subscribe',
	'svelte-render',
	'vim-colorscheme-icons',
	'tailwindcss-global-dark',
	'tailwindcss-extrude',
	'tex-er-diagram',
	'sequence-crdt',
	'govtech',
	'kopi-time',
	'como-club',
	'woknroll',
	'ryver-bank',
	'voting',
	'network-emulation',
	'hotel-bookings',
];

export const load: PageServerLoad = async () => {
	const contentImports = await Promise.all(
		CONTENT_NAMES.map((name) => import(`./content/${name}.svx`)),
	);

	const contentItems = contentImports.map((content) => ({
		html: content.default.render().html,
		metadata: content.metadata,
	})) as ContentItem[];

	return {
		title: 'Projects',
		subtitle:
			'A list of my technical projects ranging from applications, open source tooling, and experiments in University.',
		content: contentItems,
	};
};
