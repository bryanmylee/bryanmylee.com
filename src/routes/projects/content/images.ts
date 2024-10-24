export const PROJECT_CONTENT_IMAGES = import.meta.glob(
	'./**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
	{
		eager: true,
		query: { enhanced: true },
	},
) satisfies Record<string, ImageModule>;

export type ImageModule = {
	default: {
		sources: {
			avif: string;
			webp: string;
			png: string;
		};
		img: {
			src: string;
			w: number;
			h: number;
		};
	};
};
