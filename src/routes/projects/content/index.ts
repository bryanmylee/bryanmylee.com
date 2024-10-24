import type { Skill } from '$lib/skill';

export interface ProjectMetadata {
	title: string;
	subtitle: string;
	skills?: Skill[];
	links?: ProjectLink[];
	images?: ProjectImage[];
}

export interface ProjectLink {
	label: string;
	href: string;
}

export interface ProjectImage {
	src: string;
	alt: string;
}

export const SORTED_PROJECT_CONTENT_NAMES = [
	'natural-light',
	'svelte-headless-table',
	'audio-thumbnail-generator',
	'rust-multiplayer',
	'sere',
	'perfect-clear',
	'iot-timer',
	'wavefocus',
	'meetwhen',
	'helloworld',
	'rust-leptos-llama',
	'slipbox',
	'threejs-journey',
	'techtris',
	'ally-ui',
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
