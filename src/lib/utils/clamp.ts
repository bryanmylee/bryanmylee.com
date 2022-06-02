export const clamp = (low: number, current: number, high: number) => {
	return Math.min(high, Math.max(low, current));
};
