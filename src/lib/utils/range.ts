export const range = (start: number, end?: number): number[] => {
	if (end === undefined) return range(0, start);
	return Array.from(Array(end - start)).map((_, i) => i);
};
