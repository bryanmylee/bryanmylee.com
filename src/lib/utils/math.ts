export type Vec3 = [number, number, number];

export const clamp = (current: number, low = 0, high = 1) => {
	return Math.min(high, Math.max(low, current));
};

export const lerp = (from: number, to: number, alpha: number) => {
	const delta = to - from;
	return from + delta * alpha;
};

export const interpolate = (from: number[], to: number[], alpha: number) => {
	const fromEndIdx = from.findIndex((f) => f >= alpha);
	const fromEnd = from[fromEndIdx];
	const fromStart = from[fromEndIdx - 1];
	const toEnd = to[fromEndIdx];
	const toStart = to[fromEndIdx - 1];
	const progress = (alpha - fromStart) / (fromEnd - fromStart);
	return progress * (toEnd - toStart) + toStart;
};
