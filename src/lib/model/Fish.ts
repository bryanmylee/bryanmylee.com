export interface FishProps {
	initX: number;
	initY: number;
	speedPerMs: number;
	maxX: number;
	maxY: number;
}

export class Fish {
	private static instanceId = 0;

	id: number;
	x: number;
	y: number;
	speedPerMs: number;
	maxX: number;
	maxY: number;

	constructor({ initX, initY, speedPerMs, maxX, maxY }: FishProps) {
		this.id = Fish.instanceId++;
		this.x = initX;
		this.y = initY;
		this.speedPerMs = speedPerMs;
		this.maxX = maxX;
		this.maxY = maxY;
	}

	move(deltaTimeMs: number) {
		this.x = (this.x + deltaTimeMs * this.speedPerMs) % this.maxX;
		this.y = (this.y + deltaTimeMs * this.speedPerMs) % this.maxY;
	}
}
