export const preloadImage = (src: string): Promise<HTMLImageElement> =>
	new Promise((resolve, reject) => {
		const image = new Image();
		image.src = src;
		image.onload = () => resolve(image);
		image.onerror = () => reject();
	});
