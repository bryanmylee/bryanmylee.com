import { cubicInOut } from 'svelte/easing';
import type { EasingFunction, TransitionConfig } from 'svelte/transition';

export interface TossParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	opacity?: number;
	x?: string;
	y?: string;
	rotate?: string;
}

/**
 * Create a toss style that animates with a `--progress` CSS variable.
 */
export const tossStyle = ({ x, y, rotate }: TossParams) =>
	// prettier-ignore
	`
		transform:
			translate(calc((1 - var(--progress)) * ${x}), calc((1 - var(--progress)) * ${y}))
			rotate(calc((1 - var(--progress)) * ${rotate}));
		opacity: var(--progress);
	`;
