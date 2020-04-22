export default class Sprite {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.dX = 5;
        this.dY = 70;
        this.gravity = 3;

        this.width = 20;
        this.height = 50;
        this.position = {
            x: 250,
            y: 300,
        };
    }

    moveLeft(ctx) {
        this.position.x -= this.dX;
    }

    moveRight(ctx) {
        this.position.x += this.dX;
    }

    jump(ctx) {
        this.position.y -= this.dY;
    }

    display(ctx) {
        ctx.fillStyle = "purple";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        // ctx.drawImage(img, this.position.x, this.position.y);
        this.position.y += this.gravity;
        if (this.position.y >= 450) {
            this.position.y = 450;
        }
    }

    update(deltaTime) {
        if (!deltaTime) return;
    }
}
