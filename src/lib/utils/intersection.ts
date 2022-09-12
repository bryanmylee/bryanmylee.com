import type { Writable } from 'svelte/store';

export const intersection = (node: HTMLElement, visible: Writable<boolean>) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			visible.set(entry.isIntersecting);
		});
	});
	observer.observe(node);
	return {
		destroy() {
			observer.unobserve(node);
		},
	};
};
