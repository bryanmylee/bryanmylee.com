export interface FishProps {
	initX: number;
	initY: number;
	gridWidth?: number;
	gridHeight?: number;
}

export class Fish {
	private static instanceId = 0;

	id: number;
	x: number;
	y: number;
	gridWidth: number;
	gridHeight: number;

	constructor({ initX, initY, gridWidth = 1280, gridHeight = 720 }: FishProps) {
		this.id = Fish.instanceId++;
		this.x = initX;
		this.y = initY;
		this.gridWidth = gridWidth;
		this.gridHeight = gridHeight;
	}

	move(deltaTimeMs: number) {
		this.x = (this.x + deltaTimeMs * 0.001) % this.gridWidth;
		this.y = (this.y + deltaTimeMs * 0.001) % this.gridHeight;
	}
}
