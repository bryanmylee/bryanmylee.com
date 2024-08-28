const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				paper: Object.fromEntries(
					SHADES.map((shade) => [shade, `rgb(var(--paper-${shade}) / <alpha-value>)`]),
				),
				ink: Object.fromEntries(
					SHADES.map((shade) => [shade, `rgb(var(--ink-${shade}) / <alpha-value>)`]),
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
	],
};

module.exports = config;
