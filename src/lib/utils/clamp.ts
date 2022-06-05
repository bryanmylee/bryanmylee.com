export const clamp = (current: number, low = 0, high = 1) => {
	return Math.min(high, Math.max(low, current));
};
