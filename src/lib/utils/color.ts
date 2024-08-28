import type { Vec3 } from './math';

export const SHADES = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000] as const;
export type Shade = (typeof SHADES)[number];

export const INK_LIGHT: Record<Shade, Vec3> = {
	0: [255, 255, 255],
	50: [249, 250, 251],
	100: [243, 244, 246],
	200: [229, 231, 235],
	300: [209, 213, 219],
	400: [156, 163, 175],
	500: [107, 114, 128],
	600: [75, 85, 99],
	700: [55, 65, 81],
	800: [31, 41, 55],
	900: [17, 24, 39],
	950: [3, 7, 18],
	1000: [0, 0, 0],
};
export const INK_DARK: Record<Shade, Vec3> = {
	0: [0, 0, 0],
	50: [10, 10, 10],
	100: [23, 23, 23],
	200: [38, 38, 38],
	300: [64, 64, 64],
	400: [82, 82, 82],
	500: [115, 115, 115],
	600: [163, 163, 163],
	700: [212, 212, 212],
	800: [229, 229, 229],
	900: [245, 245, 245],
	950: [250, 250, 250],
	1000: [255, 255, 255],
};
export const getInk = (isDark: boolean) => (isDark ? INK_DARK : INK_LIGHT);

export const getInkCssVars = (isDark: boolean): Record<string, string> => {
	return Object.fromEntries(
		SHADES.map((shade) => {
			const color = isDark ? INK_DARK : INK_LIGHT;
			return [`--ink-${shade}`, color[shade].join(' ')];
		}),
	);
};
