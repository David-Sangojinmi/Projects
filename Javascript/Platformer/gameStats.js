export default class gameStats {
    constructor(gameWidth, gameHeight) {
        // Variables
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.hp = 140;
        this.points = 0;

        // Loading images
        this.healthBar = new Image();
        this.pause = new Image();
        this.coin = new Image();
        this.healthBar.src = "images/healthbar.png";
        this.pause.src = "images/pause.png";
        this.coin.src = "images/coin.png";
    }

    display(ctx) {
        // Health bar
        ctx.fillStyle = "#29de00";
        ctx.fillRect(628, 25, this.hp, 19);
        ctx.drawImage(this.healthBar, 600, 17);
        if (this.hp <= 0) {
            this.hp = 0;
        }

        // Points
        ctx.drawImage(this.coin, 600, 61);
        ctx.font = "30px candara";
        ctx.fillStyle = "white";
        ctx.fillText("x " + this.points, 640, 85);

        // Game pause button
        ctx.drawImage(this.pause, 17, 17);

        // Maybe inventory

    }

    update(deltaTime) {
        if (!deltaTime) return;
    }
}
