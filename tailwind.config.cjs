const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},

	plugins: [require('./tailwindcss/size.cjs'), require('./tailwindcss/dynamicText.cjs')],
};

module.exports = config;
