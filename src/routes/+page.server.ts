import { parseTheme } from '$lib/utils/theme';
import type { Actions } from './$types';

export const actions: Actions = {
	setTheme: async ({ cookies, request }) => {
		const data = await request.formData();
		const themeData = data.get('theme');
		const theme = parseTheme(themeData?.toString());
		cookies.set('theme', theme, { path: '/' });
		return { success: true };
	},
};
