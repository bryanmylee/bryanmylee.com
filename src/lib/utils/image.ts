import { onMount } from 'svelte';
import { readable, type Readable } from 'svelte/store';
import { range } from './range';

export const preloadImage = (src: string): Promise<HTMLImageElement> =>
	new Promise((resolve, reject) => {
		const image = new Image();
		image.src = src;
		image.onload = () => resolve(image);
		image.onerror = () => reject();
	});

export const progressivePreloadSequence = (srcs: string[]): Readable<HTMLImageElement[]> => {
	return readable<HTMLImageElement[]>([], (set) => {
		const setObj = (obj: Record<number, HTMLImageElement>) => {
			set(
				Object.entries(obj)
					.sort(([aIdx], [bIdx]) => parseInt(aIdx) - parseInt(bIdx))
					.map(([, image]) => image),
			);
		};

		const images: Record<number, HTMLImageElement> = {};

		onMount(async () => {
			const firstImage = await preloadImage(srcs[0]);
			images[0] = firstImage;
			setObj(images);

			let step = Math.round(srcs.length / 2);
			step = Math.round(step / 2);
			while (Object.keys(images).length < srcs.length) {
				const imagesToLoad = range(0, srcs.length, step)
					.filter((i) => images[i] === undefined)
					.map((i) => [i, srcs[i]] as const)
					.map(([i, src]) => preloadImage(src).then((image) => [i, image] as const));
				const loadedImages = await Promise.all(imagesToLoad);
				loadedImages.forEach(([idx, image]) => {
					images[idx] = image;
				});
				setObj(images);
				step = Math.round(step / 2);
			}
		});
	});
};
