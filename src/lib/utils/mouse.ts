import { onMount } from 'svelte';
import { readable, type Writable } from 'svelte/store';

export interface Position {
	x: number;
	y: number;
}

export const useMousePosition = () => {
	return readable<Position>({ x: 0, y: 0 }, (set) => {
		const handleMousemove = (event: MouseEvent) => {
			set({
				x: event.clientX,
				y: event.clientY,
			});
		};
		onMount(() => {
			window.addEventListener('mousemove', handleMousemove);
			return () => {
				window.removeEventListener('mousemove', handleMousemove);
			};
		});
	});
};

export const svgMousePoint = (svg: SVGSVGElement, position: Writable<Position>) => {
	const point = new DOMPoint(0, 0);
	const handleMousemove = (event: MouseEvent) => {
		point.x = event.clientX;
		point.y = event.clientY;
		const cursorPoint = point.matrixTransform(svg.getScreenCTM()?.inverse());
		position.set({
			x: cursorPoint.x,
			y: cursorPoint.y,
		});
	};
	window.addEventListener('mousemove', handleMousemove);
	return {
		destroy() {
			window.removeEventListener('mousemove', handleMousemove);
		},
	};
};
