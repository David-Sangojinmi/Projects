export default class Platform {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 800;
        this.height = 100;

        this.position = {
            x: 0,
            y: 500
        };
    }

    draw(ctx) {
        ctx.fillStyle = "#151321";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return;
    }
}
