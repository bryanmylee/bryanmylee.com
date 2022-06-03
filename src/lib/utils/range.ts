export const range = (start: number, end?: number, step = 1): number[] => {
	if (end === undefined) return range(0, start);
	return Array.from(Array(Math.floor((end - start) / step))).map((_, i) => i * step);
};
