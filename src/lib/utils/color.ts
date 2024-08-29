import type { Vec3 } from './math';

const INK_SHADES = ['DEFAULT', '900', '800', '700', '600', '500'] as const;
const PAPER_SHADES = ['DEFAULT', 'raised'] as const;

export type InkShade = (typeof INK_SHADES)[number];
export type PaperShade = (typeof PAPER_SHADES)[number];

export const INK_LIGHT: Record<InkShade, Vec3> = {
	'500': [107, 114, 128],
	'600': [75, 85, 99],
	'700': [55, 65, 81],
	'800': [31, 41, 55],
	'900': [17, 24, 39],
	DEFAULT: [10, 10, 10],
};
export const INK_DARK: Record<InkShade, Vec3> = {
	'500': [115, 115, 115],
	'600': [163, 163, 163],
	'700': [212, 212, 212],
	'800': [229, 229, 229],
	'900': [245, 245, 245],
	DEFAULT: [255, 255, 255],
};
export const getInk = (isDark: boolean) => (isDark ? INK_DARK : INK_LIGHT);

export const PAPER_LIGHT: Record<PaperShade, Vec3> = {
	DEFAULT: [249, 250, 251],
	raised: [255, 255, 255],
};
export const PAPER_DARK: Record<PaperShade, Vec3> = {
	DEFAULT: [18, 18, 18],
	raised: [23, 23, 23],
};
export const getPaper = (isDark: boolean) => (isDark ? PAPER_DARK : PAPER_LIGHT);
