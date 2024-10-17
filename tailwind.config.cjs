const INK_SHADES = ['DEFAULT', '900', '800', '700', '600', '500', '400', '300', '200'];
const PAPER_SHADES = ['DEFAULT', 'raised'];

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				ink: Object.fromEntries(
					INK_SHADES.map((shade) => [shade, `rgb(var(--ink-${shade}) / <alpha-value>)`]),
				),
				paper: Object.fromEntries(
					PAPER_SHADES.map((shade) => [shade, `rgb(var(--paper-${shade}) / <alpha-value>)`]),
				),
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			screens: {
				'-md': { max: '767px' },
				'-lg': { max: '1023px' },
			},
		},
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		require('./tailwindcss/size.cjs'),
		require('./tailwindcss/dynamicText.cjs'),
		require('@tailwindcss/typography'),
		require('tailwindcss-global-dark'),
	],
};

module.exports = config;
