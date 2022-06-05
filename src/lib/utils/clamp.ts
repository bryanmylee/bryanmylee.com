export const clamp = (current: number, low: number, high: number) => {
	return Math.min(high, Math.max(low, current));
};
