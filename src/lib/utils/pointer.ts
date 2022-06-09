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

export const svgPointer = (svg: SVGSVGElement, pointer: Writable<Position>) => {
	const point = new DOMPoint(0, 0);
	const handleMove = (event: MouseEvent | TouchEvent) => {
		if (event instanceof MouseEvent) {
			point.x = event.clientX;
			point.y = event.clientY;
		} else if (event instanceof TouchEvent) {
			point.x = event.touches[0].clientX;
			point.y = event.touches[0].clientY;
		}
		const cursorPoint = point.matrixTransform(svg.getScreenCTM()?.inverse());
		pointer.set({
			x: cursorPoint.x,
			y: cursorPoint.y,
		});
	};
	window.addEventListener('mousemove', handleMove);
	window.addEventListener('touchstart', handleMove);
	window.addEventListener('touchmove', handleMove);
	return {
		destroy() {
			window.removeEventListener('mousemove', handleMove);
			window.removeEventListener('touchstart', handleMove);
			window.removeEventListener('touchmove', handleMove);
		},
	};
};
