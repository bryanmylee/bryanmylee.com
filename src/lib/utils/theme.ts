export type Theme = 'light' | 'dark' | 'auto';

export const parseTheme = (rawTheme: string | undefined): Theme => {
	if (rawTheme === 'light') return 'light';
	if (rawTheme === 'dark') return 'dark';
	return 'auto';
};
