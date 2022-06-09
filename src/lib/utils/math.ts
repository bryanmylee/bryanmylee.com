export const clamp = (current: number, low = 0, high = 1) => {
	return Math.min(high, Math.max(low, current));
};

export const lerp = (from: number, to: number, alpha: number) => {
	const delta = to - from;
	return from + delta * alpha;
};
