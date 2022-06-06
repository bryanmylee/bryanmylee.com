import { spring } from 'svelte/motion';
import type { Writable } from 'svelte/store';
import type { Position } from '$lib/utils/mouse';

export interface FishProps {
	initX: number;
	initY: number;
	maxX: number;
	maxY: number;
	speedPerMs: number;
}

const AVOID_RADIUS = 24;

export class Fish {
	private static instanceId = 0;

	id: number;
	curr: Writable<Position>;
	target: Position;
	max: Position;
	speedPerMs: number;

	constructor({ initX, initY, maxX, maxY, speedPerMs }: FishProps) {
		this.id = Fish.instanceId++;
		this.curr = spring({
			x: initX,
			y: initY,
		});
		this.target = {
			x: initX,
			y: initY,
		};
		this.max = {
			x: maxX,
			y: maxY,
		};
		this.speedPerMs = speedPerMs;
	}

	move(deltaTimeMs: number, avoidPoint: Position) {
		const deltaDistance = deltaTimeMs * this.speedPerMs;

		this.target = getSum(this.target, { x: deltaDistance, y: deltaDistance });
		this.target = getMod(this.target, this.max);

		const pushedTarget = getPushedTarget(this.target, avoidPoint);

		this.curr.set(pushedTarget);
	}
}

const getPushedTarget = (target: Position, avoid: Position): Position => {
	const sqDistance = getSqDistance(target, avoid);
	if (sqDistance > AVOID_RADIUS) {
		return target;
	}
	const diffVec = getDiff(target, avoid);
	const scaledDiffVec = getScaled(diffVec, 5 / Math.sqrt(sqDistance));
	return getSum(avoid, scaledDiffVec);
};

const getSqDistance = (a: Position, b: Position): number => {
	return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
};

const getSum = (a: Position, b: Position): Position => {
	return {
		x: a.x + b.x,
		y: a.y + b.y,
	};
};

const getDiff = (a: Position, b: Position): Position => {
	return {
		x: a.x - b.x,
		y: a.y - b.y,
	};
};

const getMod = (a: Position, b: Position): Position => {
	return {
		x: a.x % b.x,
		y: a.y % b.y,
	};
};

const getScaled = (a: Position, scale: number): Position => {
	return {
		x: a.x * scale,
		y: a.y * scale,
	};
};
