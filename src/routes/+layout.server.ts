import { parseTheme } from '$lib/utils/theme';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const initialTheme = parseTheme(cookies.get('theme'));
	return { initialTheme };
};
