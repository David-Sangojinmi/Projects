export default class gameStats {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.healthBar = new Image();
        this.pause = new Image();
        this.healthBar.src = "images/healthbar.png";
        this.pause.src = "images/pause.png";
    }

    display(ctx) {
        // Health bar
        ctx.drawImage(this.healthBar, 594, 17);
        ctx.drawImage(this.pause, 13, 13);

        // Points

        // Game pause button
        // ctx.strokeStyle = "#498699";
        // ctx.lineWidth = 4;
        // ctx.strokeRect(15, 15, 30, 30);
        // ctx.fillStyle = "#8cc1d1";
        // ctx.fillRect(17, 17, 26, 26);
        // ctx.fillStyle = "#498699";
        // ctx.fillRect(22, 21, 5, 18);
        // ctx.fillRect(33, 21, 5, 18);

        // Maybe inventory

    }

    update(deltaTime) {
        if (!deltaTime) return;
    }
}
