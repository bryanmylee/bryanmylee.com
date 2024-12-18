const plugin = require('tailwindcss/plugin');

const dynamicTextPlugin = plugin(({ addUtilities, theme, e }) => {
	const utilityEntries = [8, 7, 6].map((size) => [
		'.' + e(`text-dyn-${size}`),
		{ fontSize: `min(${size}lvw, ${size}rem)` },
	]);
	addUtilities(Object.fromEntries(utilityEntries));
});

module.exports = dynamicTextPlugin;
