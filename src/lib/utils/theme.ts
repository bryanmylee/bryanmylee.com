export type Theme = 'light' | 'dark' | 'auto';

export const parseTheme = (rawTheme: string | null | undefined): Theme => {
	if (rawTheme === 'light') return 'light';
	if (rawTheme === 'dark') return 'dark';
	return 'auto';
};

export const NEXT_THEME: Record<Theme, Theme> = {
	light: 'dark',
	dark: 'auto',
	auto: 'light',
};
