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

export const toss = (
	node: Element,
	{
		delay = 0,
		duration = 400,
		easing = cubicInOut,
		opacity = 0,
		x = '0px',
		y = '0px',
		rotate = '0deg',
	}: TossParams,
): TransitionConfig => {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;
	const delta_opacity = target_opacity * (1 - opacity);

	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
      transform: ${transform} translate(calc(${u} * ${x}), calc(${u} * ${y})) rotate(calc(${u} * ${rotate}));
      opacity: ${target_opacity - delta_opacity * u};`,
	};
};
