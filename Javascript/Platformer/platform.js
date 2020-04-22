export default class Platform {
    constructor(gameWidth, gameHeight, r, g, b) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.r = this.r;
        this.g = this.g;
        this.b = this.b;
        this.width = 800;
        this.height = 100;
        this.scrollSpeed = 5;
        this.tpBlock = {
            width: 50,
            height: 50
        };
        this.testPlatform = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2],
        ];

        this.basePosition = {
            x: 0,
            y: 0
        };
    }

    drawTerrain(ctx) {
        for (var i = 0; i < this.testPlatform.length; i++) {

            for (var j = 0; j < this.testPlatform[i].length; j++) {
                switch (this.testPlatform[i][j]) {
                    case 3: // Clouds
                        ctx.fillStyle = "rgba(68, 246, 252, 0.5)";
                        ctx.fillRect(
                            this.basePosition.x + this.tpBlock.width * j,
                            this.basePosition.y + this.tpBlock.height * i,
                            this.tpBlock.width,
                            this.tpBlock.height
                        );
                        break;
                    case 2: // Terrain
                        ctx.fillStyle = "#5c2b00";
                        ctx.fillRect(
                            this.basePosition.x + this.tpBlock.width * j,
                            this.basePosition.y + this.tpBlock.height * i,
                            this.tpBlock.width,
                            this.tpBlock.height
                        );
                        break;
                    case 1: // Grass
                        ctx.fillStyle = "#005c06";
                        ctx.fillRect(
                            this.basePosition.x + this.tpBlock.width * j,
                            this.basePosition.y + this.tpBlock.height * i,
                            this.tpBlock.width,
                            this.tpBlock.height
                        );
                        break;
                    case 0: // Air/Invisible
                        ctx.fillStyle = "rgba(0, 0, 0, 0)";
                        ctx.fillRect(
                            this.basePosition.x + this.tpBlock.width * j,
                            this.basePosition.y + this.tpBlock.height * i,
                            this.tpBlock.width,
                            this.tpBlock.height
                        );
                        break;
                }
            }
        }
    }

    scrollLeft(ctx) {
        this.basePosition.x += this.scrollSpeed;
    }

    scrollRight(ctx) {
        this.basePosition.x -= this.scrollSpeed;
    }

    update(deltaTime) {
        if (!deltaTime) return;
    }
}
