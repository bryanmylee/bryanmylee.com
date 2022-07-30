/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	corePlugins: {
		container: false,
	},
	plugins: [require('./tailwindcss/size.cjs'), require('./tailwindcss/dynamicText.cjs')],
};

module.exports = config;
