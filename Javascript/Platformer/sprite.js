export default class Sprite {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.dX = 5;
        this.dY = 0;
        this.gravity = 5;
        this.health = 50;

        this.position = {
            x: 100,
            y: 300,
        };
    }

    display(ctx) {
        //ctx.drawImage(img, this.position.x, this.position.y);
        this.position.y += this.gravity;
        if (this.position.y >= 450) {
            this.position.y = 450;
        }
        ctx.fillStyle = "purple";
        ctx.fillRect(this.position.x, this.position.y, 20, 50);
    }

    moveLeft(ctx, deltaTime) {
        this.position.x -= 1 / deltaTime;
    }

    moveRight(ctx, deltaTime) {
        this.position.x += 1 / deltaTime;
    }

    jump(ctx, deltaTime) {
        this.position.y -= 1 / deltaTime;
    }

    update(deltaTime) {
        if (!deltaTime) return;
    }
}
