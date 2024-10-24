import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import svgr from 'vite-plugin-svelte-svgr';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		svgr({
			svgo: {
				plugins: [
					{
						name: 'cleanupIds',
						params: {
							minify: false,
						},
					},
				],
			},
		}),
	],
});
