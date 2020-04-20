export default class Sprite {
    constructor() {
        this.dX = 0;
        this.dY = 0;
        this.gravity = 5;
        this.health = 50;

        this.position = {
            x: 100,
            y: 300
        };
    }

    display(img, ctx) {
        ctx.drawImage(img, this.position.x, this.position.y);
        if (this.position.y + img.height >= 500) {
            this.position.y = 500 - img.height;
        } else {
            this.position.y += this.gravity;
        }
    }

    jump() {
        this.position.y -= 15;
    }

    update(deltaTime) {
        if (!deltaTime) return;
    }
}