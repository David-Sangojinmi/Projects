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

        this.position = {
            x: 0,
            y: 500
        };
    }

    draw(ctx) {
        ctx.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fillStyle = "rgb(84, 38, 193)";
        ctx.fillRect(this.position.x + 400, this.position.y - 40, 20, 40);
        
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
