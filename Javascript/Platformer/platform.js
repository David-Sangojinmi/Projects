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
            height: 120
        };
        this.testPlatform = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2]
        ];

        this.position = {
            x: 0,
            y: 500
        };
    }

    draw(ctx) {
        // ctx.fillStyle = "rgb("+this.r+","+this.g+","+this.b+")";
        ctx.fillStyle = "rgb(8, 67, 100)";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fillStyle = "rgb(84, 38, 193)";
        ctx.fillRect(this.position.x + 400, this.position.y - 40, 20, 40);
    }

    drawTP(ctx) {
        for (var i = 0; i < this.testPlatform.length; i++) {
            var innertestPlatform = this.testPlatform[i];
            for (var j = 0; innertestPlatform.length; j++) {
                if (this.testPlatform[i][j] == 2) {
                    ctx.fillStyle = "#5c2b00";
                    ctx.fillRect(
                        0, //  + this.tpBlock.width * j
                        0, //  + this.tpBlock.height * i
                        50,
                        120
                    );
                }
                if (this.testPlatform[i][j] == 1) {
                    ctx.fillStyle = "#005c06";
                    ctx.fillRect(100, 100, 50, 120);
                }
                if (this.testPlatform[i][j] == 0) {
                    ctx.fillStyle = "#ffffff";
                    ctx.fillRect(100, 200, 50, 120);
                }
                // switch (this.testPlatform[i][j]) {
                //     case 2: // Terrain
                //         ctx.fillStyle = "#5c2b00";
                //         ctx.fillRect(
                //             0 + this.tpBlock.width * j,
                //             0 + this.tpBlock.height * i,
                //             this.tpBlock.width,
                //             this.tpBlock.height
                //         );
                //         break;
                //     case 1: // Grass
                //         ctx.fillStyle = "#005c06";
                //         ctx.fillRect(
                //             0 + this.tpBlock.width * j,
                //             0 + this.tpBlock.height * i,
                //             this.tpBlock.width,
                //             this.tpBlock.height
                //         );
                //         break;
                //     case 0: // Air/Invisible
                //         ctx.fillStyle = "rgba(0, 0, 0, 0)";
                //         ctx.fillRect(
                //             0 + this.tpBlock.width * j,
                //             0 + this.tpBlock.height * i,
                //             this.tpBlock.width,
                //             this.tpBlock.height
                //         );
                //         break;
                // }
            }
        }
    }

    scrollLeft(ctx) {
        this.position.x += this.scrollSpeed;
    }

    scrollRight(ctx) {
        this.position.x -= this.scrollSpeed;
    }

    update(deltaTime) {
        if (!deltaTime) return;
    }
}
