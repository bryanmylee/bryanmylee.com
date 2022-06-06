import { tweened, type Tweened } from 'svelte/motion';
import type { Position } from '$lib/utils/pointer';

export interface FishProps {
	initX: number;
	initY: number;
	maxX: number;
	maxY: number;
	speedPerMs: number;
}

const AVOID_RADIUS = 32;
const PUSH_SCALE = 6;
const MOVE_DURATION = 600;

export class Fish {
	private static instanceId = 0;

	id: number;
	curr: Tweened<Position>;
	target: Position;
	max: Position;
	speedPerMs: number;

	constructor({ initX, initY, maxX, maxY, speedPerMs }: FishProps) {
		this.id = Fish.instanceId++;
		this.curr = tweened({ x: initX, y: initY }, { duration: MOVE_DURATION });
		this.target = { x: initX, y: initY };
		this.max = { x: maxX, y: maxY };
		this.speedPerMs = speedPerMs;
	}

	move(deltaTimeMs: number, avoidPoint: Position) {
		const deltaDistance = deltaTimeMs * this.speedPerMs;

		this.target = getSum(this.target, { x: deltaDistance, y: deltaDistance });
		const beforeMod = this.target;
		this.target = getMod(this.target, this.max);
		const hasWrapped = beforeMod.x !== this.target.x || beforeMod.y !== this.target.y;

		const pushedTarget = getPushedTarget(this.target, avoidPoint);

		this.curr.set(pushedTarget, { duration: hasWrapped ? 0 : MOVE_DURATION });
	}
}

const getPushedTarget = (target: Position, avoid: Position): Position => {
	const sqDistance = getSqDistance(target, avoid);
	if (sqDistance > AVOID_RADIUS) {
		return target;
	}
	const diffVec = getDiff(target, avoid);
	const scaledDiffVec = getScaled(diffVec, PUSH_SCALE / Math.sqrt(sqDistance));
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
