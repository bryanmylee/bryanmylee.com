const config = {
	plugins: {
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		'tailwindcss/nesting': {},
		tailwindcss: {},
		//But others, like autoprefixer, need to run after,
		autoprefixer: {},
	},
};

module.exports = config;
