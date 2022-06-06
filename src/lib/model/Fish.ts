export interface FishProps {
	initX: number;
	initY: number;
	speedPerMs: number;
	gridWidth?: number;
	gridHeight?: number;
}

export class Fish {
	private static instanceId = 0;

	id: number;
	x: number;
	y: number;
	speedPerMs: number;
	gridWidth: number;
	gridHeight: number;

	constructor({ initX, initY, speedPerMs, gridWidth = 1280, gridHeight = 720 }: FishProps) {
		this.id = Fish.instanceId++;
		this.x = initX;
		this.y = initY;
		this.speedPerMs = speedPerMs;
		this.gridWidth = gridWidth;
		this.gridHeight = gridHeight;
	}

	move(deltaTimeMs: number) {
		this.x = (this.x + deltaTimeMs * this.speedPerMs) % this.gridWidth;
		this.y = (this.y + deltaTimeMs * this.speedPerMs) % this.gridHeight;
	}
}
