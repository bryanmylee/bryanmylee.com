import type { Writable } from 'svelte/store';

export const visible = (node: HTMLElement, isVisible: Writable<boolean>) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			isVisible.set(entry.isIntersecting);
		});
	});
	observer.observe(node);
	return {
		destroy() {
			observer.unobserve(node);
		},
	};
};
