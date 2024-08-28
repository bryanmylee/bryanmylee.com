import { parseTheme } from '$lib/utils/theme';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const query = request.url.slice(request.url.indexOf('?') + 1);
		const params = new URLSearchParams(query);
		const theme = parseTheme(params.get('theme'));
		cookies.set('theme', theme, { path: '/', httpOnly: false });

		const currentUrl = params.get('current-url') ?? '/';
		redirect(303, currentUrl);
	},
};
